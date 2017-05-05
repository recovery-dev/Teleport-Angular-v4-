import { Component, Inject, OnInit, OnDestroy } from "@angular/core";
import { Router }                               from "@angular/router";

import { Subscription } from "rxjs/Subscription";

import { AccountService } from "../../../services/account.service";
import { UserService }    from "../../../services/user.service";
import { MessageService } from "../../../services/message.service";
import { Modal }          from "../../../services/modal.service";

import { IUser }          from "../../../models/interfaces";
import { Developer }      from "../../../models/Developer";

import { EmailValidator } from "../../../utils/EmailValidator";


@Component({
    moduleId   : String(module.id),
    selector   : "teleport-dev-portal-user-profile",
    templateUrl: "profile.user.html",
    styleUrls  : [ "../../../css/bootswatch.css", "../../../css/main.min.css" ],
})
export class TeleportDevPortalUserProfileComponent implements OnInit, OnDestroy {

    public User: IUser;

    public isBusy = false;
    public isEditProfile = false;
    public isChangePassword = false;

    private _user: IUser;
    private _subscription: Subscription;

    constructor (
        @Inject(Router)         private router: Router,
        @Inject(AccountService) private account: AccountService,
        @Inject(UserService)    private users: UserService,
        @Inject(Modal.Service)  private modal: Modal.Service,
        @Inject(MessageService) private messages: MessageService,
    ) {}

    public ngOnInit () {

        this._subscription = this.account.Observable
            .filter(d => !! d)
            .subscribe(dev => {
                const user = new Developer(dev).toJSON().portalUser;
                if (user === undefined) {
                    throw new ReferenceError("The PortalUser was undefined on the Developer object.");
                }
                this._user = user;
                if (! this.isEditProfile) {
                    this.User = Object.assign({}, this._user);
                    console.log(this.User);
                }
            });
    }
    
    public ngOnDestroy () {
        // console.log("UIUserProfile Destroy");
        if (this._subscription) { this._subscription.unsubscribe(); }
        delete this.User;
        delete this._user;
    }


    public onStartEditMode () {
        this.isEditProfile = true;
        this.User = Object.assign({}, this._user);
    }

    public closePasswordForm () {
        this.isChangePassword = false;
    }

    public isEmailValid (email: string): boolean {
        return EmailValidator.isValid(email);
    }

    public onSubmit () {

        this.isBusy = true;

        this.users.update(this.User)
            .then(() => {
                this.messages.info("User Account Updated", "The changes to your user account were successfully saved.");
                this.isBusy = false;
                this.isEditProfile = false;
            })
            .catch(err => {
                this.messages.error("User Account Update Failure", err.message, err);
                this.isBusy = false;
            });
    }

    public onDelete () {

        this.modal.show("Delete My User Account", `<p>Clicking OK will delete your user account. This will not affect the main account or its applications.</p><p>Are you sure?</p>`, { type: "confirm" })
            .then(result => {
                if (result) {
                    this.users.remove(this._user)
                        .then(() => {
                            this.messages.warning("User Account Deleted", "Your user account has been deleted.");
                            return this.router.navigateByUrl("/logout");
                        })
                        .catch(err => {
                            this.isBusy = false;
                            this.messages.error("Delete Account Failure", err.message, err);
                        });
                }
            });
    }

    public onCancel () {
        this.isBusy = false;
        this.isEditProfile = false;
        this.User = Object.assign({}, this._user);
    }
}
