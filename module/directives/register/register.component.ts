import {Component, Inject, OnInit, OnDestroy} from "@angular/core";

import {LoginService}    from "../../services/login.service";
import {MessageService}  from "../../services/message.service";

import PasswordUtil from "../../utils/PasswordUtil";
import {EmailValidator} from "../../utils/EmailValidator";

import {Observable} from "rxjs/Observable";
import {Observer}   from "rxjs/Observer";

@Component({
    selector   : "ui-register",
    templateUrl: DOC_BASE_HREF + "/directives/register/register.html",
})
export class UIRegister implements OnInit, OnDestroy {

    public form = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordVerify: "",
        phoneNo: "",
        company: "",
        interests: {},
        "g-recaptcha-response": "",
    };

    public isSubmitted = false;
    public isSuccess = false;
    public isCaptchaOk = false;

    private _resetCaptchaObservable: Observable<boolean>;
    private _resetCaptchaObserver: Observer<boolean>;


    constructor (
        @Inject(LoginService)   private logins: LoginService,
        @Inject(MessageService) private messages: MessageService,
    ) {}

    public ngOnInit () {
        this._resetCaptchaObservable = Observable.create((observer: Observer<boolean>) => this._resetCaptchaObserver = observer);
    }

    public ngOnDestroy () {
        if (this._resetCaptchaObserver) {
            this._resetCaptchaObserver.complete();
        }
    }

    public isPasswordValid (pw: string): boolean {
        return PasswordUtil.satisfies(pw);
    }
    
    public isEmailValid (email: string): boolean {
        return EmailValidator.isValid(email);
    }

    public passwordsMatch () {
        return this.form.password.length > 0 && this.form.password === this.form.passwordVerify;
    }

    public onCaptcha (token: string, val: boolean) {
        this.form["g-recaptcha-response"] = token;
        this.isCaptchaOk = val;
    }

    public resetCaptchaObservable (): Observable<boolean> {
        return this._resetCaptchaObservable;
    }

    public onSubmit () {

        // Validate form submission.
        if (! this.form.password || ! this.form.passwordVerify) {
            this.messages.warning("Invalid Passwords", "You must enter your new password twice.");
            return;
        }

        if (this.form.password !== this.form.passwordVerify) {
            this.messages.warning("Invalid Passwords", "The passwords do not match.");
            return;
        }

        if (! PasswordUtil.satisfies(this.form.password)) {
            this.messages.warning("Invalid Password", "Your password must be at least 8 characters and contain caps, lowercase, numbers and special characters.");
            return;
        }

        this.isSubmitted = true;

        this.logins.register(this.form)
            .then(dev => {
                console.log("Registration Success", dev);
                this.isSuccess = true;
                this.isSubmitted = false;
            })
            .catch(err => {
                console.error("Registration failure.", err);
                this.isSuccess = false;
                this.isSubmitted = false;
                this._resetCaptchaObserver.next(true);
                this.messages.error("Registration Failed", err.message);
            });
    }
}
