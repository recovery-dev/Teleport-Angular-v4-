
import {Component, Inject, Input, AfterViewInit, OnDestroy} from "@angular/core";

import { IUserBasicAuth } from "../../../models/interfaces";

import { AccountService }            from "../../../services/account.service";
import { AccountCredentialsService } from "../../../services/account.credentials.service";
import { MessageService }            from "../../../services/message.service";
import { Modal }                     from "../../../services/modal.service";


@Component({
    selector   : "ui-dashboard-profile-basic-auth",
    templateUrl: DOC_BASE_HREF + "/directives/dashboard/profile/profile.basic-auth.html",
})
export class UIProfileBasicAuth implements AfterViewInit, OnDestroy {

    public isBusy = false;
    public Credentials: IUserBasicAuth[] = [];

    private _userId: string;

    constructor (
        @Inject(AccountService)            private account: AccountService,
        @Inject(AccountCredentialsService) private creds: AccountCredentialsService,
        @Inject(Modal.Service)             private modal: Modal.Service,
        @Inject(MessageService)            private messages: MessageService
    ) {
        console.log("new UIProfileBasicAuth ()", this._userId);
        this.isBusy = true;
    }

    public ngAfterViewInit(): void {

        this.isBusy = true;

        this.account.Observable
            .first(acct => !! acct)
            .subscribe(dev => {

                this._userId = dev.portalUser ? dev.portalUser.developerId : dev.id;

                this.creds.list(this._userId)
                    .then(auths => {
                        this.Credentials = auths.map(a => ({
                            userName: a.userName,
                            password: a.password,
                            authorization: `Basic ${btoa(a.userName + ":" + a.password)}`,
                        }));
                        this.isBusy = false;
                    })
                    .catch(err => {
                        console.error(err.stack);
                        this.messages.error("Credentials Not Found", "Your Basic Auth credentials were not loaded.");
                        this.isBusy = false;
                    });

            });
    }

    public ngOnDestroy () {
        this.Credentials = [];
        this._userId = undefined;
    }


    public create () {

        this.isBusy = true;

        this.creds.create(this._userId)
            .then(auths => {
                this.Credentials = auths.map(a => ({
                    userName: a.userName,
                    password: a.password,
                    authorization: `Basic ${btoa(a.userName + ":" + a.password)}`,
                }));
                this.isBusy = false;
            })
            .catch(err => {
                console.error(err.stack);
                this.messages.error("Create Credentials Failure", "Your new Basic Auth credentials were not created.");
                this.isBusy = false;
            });
    }


    public remove (cred: IUserBasicAuth) {

        this.modal.show("Delete Credential", `<p>Clicking OK will delete the Basic Auth credential.</p><p>Are you sure?</p>`, { type: "confirm" })
            .then(result => {

                if (result) {

                    this.isBusy = true;

                    this.creds.remove(this._userId, cred.password)
                        .then(auths => {
                            this.Credentials = auths.map(a => ({
                                userName: a.userName,
                                password: a.password,
                                authorization: `Basic ${btoa(a.userName + ":" + a.password)}`,
                            }));
                            this.isBusy = false;
                        })
                        .catch(err => {
                            console.error(err.stack);
                            this.messages.error("Remove Credentials Failure", "Your Basic Auth credentials were not removed.");
                            this.isBusy = false;
                        });
                }
            });
    }

    public apiKeyInputFocus (event: FocusEvent) {
        (<HTMLInputElement> event.target).type = "text";
        (<HTMLInputElement> event.target).select();
    }

    public apiKeyInputBlur (event: FocusEvent) {
        (<HTMLInputElement> event.target).type = "password";
    }
}