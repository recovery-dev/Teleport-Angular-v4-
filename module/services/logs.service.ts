
import { Injectable, Inject }    from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";

import { Observable }      from "rxjs/Observable";
import { Observer }        from "rxjs/Observer";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ILog, IDeveloper } from "../models/interfaces";
import { AccountService }   from "./account.service";


export interface ILogsRequest {
    beginDate?: Date | string;
    endDate?: Date | string;
    appId?: string;
    direction?: "inbound" | "outbound" | "both";
    connectTime?: number;
}

export interface ILogsResponse {
    isTruncated: boolean;
    updatedOn: Date;
    beginDate: Date;
    endDate: Date;
    logs: ILog[];
}

@Injectable()
export class LogsService {

    private _developer: IDeveloper = null;

    private _observable: Observable<ILogsResponse>;
    private _observer: Observer<ILogsResponse>;

    private _logs: ILogsResponse;
    private _searchParams: URLSearchParams;

    private _lastRefresh = 0;

    constructor(
        @Inject(Http)           private http: Http,
        @Inject(AccountService) private account: AccountService,
    ) {
        account.Observable
            .first(d => !! d)
            .subscribe (d => this._developer = d);
    }

    public destroy () {
        if (this._observer) { this._observer.complete(); }
        this._logs = undefined;
    }

    public get Observable (): Observable<ILogsResponse> {

        if (! this._observable) {

            this._observable = Observable
                .create((observer: Observer<ILogsResponse>) => this._observer = observer)
                .do((logs: ILogsResponse) => this._logs = logs)
                .multicast(new BehaviorSubject(this._logs))
                .refCount();
        }

        return this._observable;
    }

    /**
     * Refresh with the current filters.
     * @returns {Promise<ILogsResponse>}
     */
    public refresh (): Promise<ILogsResponse> {

        if (this._lastRefresh > Date.now() - 1000) { return Promise.resolve(this._logs); }
        this._lastRefresh = Date.now();

        let url = [
            API_BASE_URL,
            "developers",
            encodeURIComponent(this._developer.id),
            "data",
            "logs",
        ].join("/");

        return this.http.get(url, { search: this._searchParams, withCredentials: true })
            .catch(err  => Observable.throw(new Error(err.json().user_message)))
            .map  (resp => resp.json().data)
            .map  ((data: any) => ({
                isTruncated: data.is_truncated,
                updatedOn: new Date(),
                beginDate: new Date(data.begin_date),
                endDate: new Date(data.end_date),
                logs: data.logs.map((l: ILog) => Object.assign({}, l, { start_time: new Date(l.start_time as string), end_time: new Date(l.end_time as string) })),
            }))
            .do   ((logs: ILogsResponse)  => { if (this._observer) { this._observer.next(logs); }})
            .toPromise();
    }

    /**
     * Load a new list of logs with given filters.
     * @param {Date} [logs.beginDate] Defaults to 24 hours ago.
     * @param {Date} [logs.endDate] Defaults to now
     * @param {string} [logs.appId] Defaults to all
     * @param {string} [logs.direction] Defaults to all
     * @param {number} [logs.connectTime] Defaults to all
     * @returns {Promise<ILogsResponse>}
     */
    public loadLogs (logs: ILogsRequest): Promise<ILogsResponse> {

        this._searchParams = new URLSearchParams();
        if (logs.beginDate) {
            this._searchParams.set("begin_date", (logs.beginDate as Date).toISOString());
        }
        if (logs.endDate) {
            this._searchParams.set("end_date", (logs.endDate as Date).toISOString());
        }
        if (logs.appId) {
            this._searchParams.set("app_id", logs.appId);
        }
        if (logs.direction !== "both") {
            this._searchParams.set("direction", logs.direction);
        }
        if (logs.connectTime) {
            this._searchParams.set("connect_time", String(logs.connectTime));
        }

        return this.refresh();
    }
}