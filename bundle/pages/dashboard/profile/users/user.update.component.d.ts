import { OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { TeleportCoreState } from "teleport-module-services/services/ngrx/index";
import { IUser } from "teleport-module-services/services/v1/models/User";
import { UserService } from "../../../../services/user.service";
import { MessageService } from "../../../../services/message.service";
import { ModalService } from "../../../../services/modal.service";
export declare class TeleportDevPortalUserUpdateComponent implements OnInit, OnDestroy {
    private router;
    private route;
    private users;
    private messages;
    private modal;
    private store$;
    isBusy: boolean;
    isEditing: boolean;
    private _developer;
    private _origUser;
    private _user;
    constructor(router: Router, route: ActivatedRoute, users: UserService, messages: MessageService, modal: ModalService, store$: Store<TeleportCoreState>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    readonly User: IUser;
    editUser(): void;
    deleteUser(): void;
    isEmailValid(): boolean;
    isUserValid(): boolean;
    saveChanges(): void;
    cancelChanges(): void;
}
