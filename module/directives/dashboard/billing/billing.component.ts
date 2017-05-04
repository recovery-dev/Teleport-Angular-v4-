import { Component, Inject, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs/Subscription";

import { IPayment }                        from "../../../models/interfaces";
import { BillingService, IBillingPayload } from "../../../services/billing.service";


@Component({
    selector   : "ui-billing",
    templateUrl: DOC_BASE_HREF + "/directives/dashboard/billing/billing.html",
})
export class UIBilling implements OnInit, OnDestroy {

    public view = {
        historyFrom: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
        historyTo: new Date(),
        isBusy: false,
        isPaymentFormOpen: false,
    };
    
    private _subscription: Subscription;

    private _balance: number;
    private _payments: IPayment[] = null;

    constructor (
        @Inject(BillingService) private billing: BillingService,
    ) {}

    public ngOnInit () {

        this._subscription = this.billing.Observable
            .subscribe((b: IBillingPayload) => {
                this.view.isBusy = false;
                this._balance = b.balance !== undefined ? b.balance : this._balance;
                this._payments = b.payments || this._payments;
                if (b.dateRange) {
                    this.view.historyFrom = b.dateRange.from;
                    this.view.historyTo = b.dateRange.to;
                }
            });
    }

    public ngOnDestroy () {
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = undefined;
        }
        this._balance = undefined;
        this._payments = null;
    }

    public get historyTo (): string {
        return this.view.historyTo.toISOString().substr(0, 10);
    }
    public set historyTo (v: string) {
        this.view.historyTo = new Date(v);
    }

    public get historyFrom (): string {
        return this.view.historyFrom.toISOString().substr(0, 10);
    }
    public set historyFrom (v: string) {
        this.view.historyFrom = new Date(v);
    }

    public get balance (): number {
        return this._balance;
    }

    public get Payments (): IPayment[] {
        return this._payments;
    }

    public async reloadPaymentHistory () {
        this.view.isBusy = true;
        await this.billing.refreshPayments(this.view.historyFrom.getTime(), this.view.historyTo.getTime());
        this.view.isBusy = false;
            // .then(() => this.view.isBusy = false, () => this.view.isBusy = false);
    }
}
