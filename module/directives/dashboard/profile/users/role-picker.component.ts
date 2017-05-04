import {
    Component, OnInit, OnDestroy, Input, EventEmitter, Output, Inject,
} from "@angular/core";

import {
    IUser, IDeveloper, IUserRole, IUserPermissionsTree,
} from "../../../../models/interfaces";

import { AccountService } from "../../../../services/account.service";
import { Modal }          from "../../../../services/modal.service";

import * as Permissions from "../../../../utils/Permissions";


@Component({
    selector   : "role-picker",
    templateUrl: DOC_BASE_HREF + "/directives/dashboard/profile/users/role-picker.html",
})
export class RolePickerWidget implements OnInit, OnDestroy {

    @Input("user")  public user: IUser;

    public isRolesSelectorOpen = false;
    public role: IUserRole;

    public Roles: IUserRole[] = [];
    public Template = Permissions.Template;
    public Tree = Permissions.Tree.subTree;

    private _developer: IDeveloper;


    constructor (
        @Inject(AccountService) private account: AccountService,
    ) {}


    public ngOnInit() {

        this.account.Observable
            .first(d => !! d)
            .subscribe(d => {

                this._developer = d;

                this.Roles = Permissions.Roles.filter(r => {
                    return Permissions.validate(this._developer.permissions, r.permissions.reduce((p: any, c: string) => (p[c] = true) && p, {}));
                });

                this.role = Permissions.Roles.find(r => this.isRoleEvery(r));
            });
    }


    public ngOnDestroy() {

        this._developer = undefined;
        this.user = undefined;
    }

    public get Developer () {
        return this._developer;
    }

    /**
     * Checks if a user has the permissions to mark a role as active.
     * @param {IUserRole} role - the role to evaluate.
     * @returns {boolean}
     */
    public isRoleEvery (role: IUserRole): boolean {

        return role.permissions.length === Object.keys(this.user.permissions).length && role.permissions.every(p => this.user.permissions[p]);
    }

    public onRolesSelector () {
        this.isRolesSelectorOpen = true;
    }

    public onRolesClick (role: IUserRole) {

        if (role) {
            Object.keys(this.user.permissions).forEach(p => delete this.user.permissions[p]);
            role.permissions.forEach(p => this.user.permissions[p] = true);
        }
        this.isRolesSelectorOpen = false;
        this.role = role;
    }
}


@Component({
    selector : "role-picker-row",
    template : `
        <ul>
            <li *ngFor="let node of Nodes" [ngClass]="{ collapsed: isCollapsed(node) }">
                <a *ngIf="hasChildren(node)" (click)="toggleOpen(node)"><span class="glyphicon glyphicon-triangle-right"></span></a>
                <b *ngIf="! hasChildren(node)"><span class="glyphicon glyphicon-option-horizontal"></span></b>
                {{ node[0].toUpperCase() + node.slice(1) }}
                <span>
                    <span *ngFor="let a of ['create','read','update','delete']" class="glyphicon"
                        (click)="onPermClick(node, a)"
                        [ngClass]="{ 'glyphicon-unchecked': ! hasPerm(node, a) && isPermAvailable(node, a), 'glyphicon-ok-sign': hasPerm(node, a), 'glyphicon-minus disabled': ! isPermAvailable(node, a), exact: hasExactPerm(node, a) }"
                    ></span>
                </span>
                <role-picker-row [dev]="dev" [user]="user" [tree]="tree[node].subTree" [readOnly]="isReadOnly"></role-picker-row>
            </li>
        </ul>
    `,
})
export class RolePickerRow implements OnInit {

    @Input("dev")  public dev: IDeveloper;
    @Input("user") public user: IUser;
    @Input("tree") public tree: { [key: string]: IUserPermissionsTree };
    @Input("readOnly") public isReadOnly: boolean;

    private _isCollapsed: { [key: string]: boolean };

    private _nodes: string[] = [];

    constructor (
        @Inject(Modal.Service) private modal: Modal.Service,
    ) {}

    public ngOnInit () {

        this._nodes = Object.keys(this.tree);
        this._isCollapsed = this._nodes.reduce((p: any, c: string) => (p[c] = true) && p, {});
    }

    public get Nodes () {
        return this._nodes;
    }

    public isCollapsed (node: string) {
        return this._isCollapsed[node];
    }

    public hasChildren (node: string) {
        return Object.keys(this.tree[node].subTree).length > 0;
    }

    public toggleOpen (node: string) {
        this._isCollapsed[node] = ! this._isCollapsed[node];
    }

    public isPermAvailable (node: string, action: string) {
        return this.tree[node].actions.some(a => a.endsWith(action));
    }


    public hasPerm (node: string, action: string) {

        if (! this.user || ! this.tree) { return false; }

        const perm = this.tree[node].actions.find(a => a.endsWith(action));
        if (! perm) { return false; }
        return Permissions.validate(this.user.permissions, { [perm]: true });
    }


    public hasExactPerm (node: string, action: string) {

        return this.user.permissions[this.tree[node].actions.find(a => a.endsWith(action))];
    }


    public onPermClick (node: string, action: string) {

        if (this.isReadOnly) {
            this.modal.show(
                "Permissions Locked",
                `<p>If you would like to set custom permissions for this user, change the <strong>User Role</strong> to <strong>"Custom Permissions..."</strong>.</p>`,
                { type: "alert" },
            );
            return;
        }

        if (! this.dev || ! this.user || ! this.tree) { return false; }

        const perm = this.tree[node].actions.find(a => a.endsWith(action));
        if (! perm) { return; }

        if (! Permissions.validate(this.dev.permissions, { [perm]: true })) {
            return;
        }

        if (this.hasExactPerm(node, action)) {
            delete this.user.permissions[perm];
        } else {
            this.user.permissions[perm] = true;
        }
    }
}