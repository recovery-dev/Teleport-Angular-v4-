import { OnInit, OnDestroy } from "@angular/core";
import { ApplicationService } from "../../../services/application.service";
import { IApplication, IDeveloper } from "../../../models/interfaces";
import { SessionService } from "../../../services/session.service";
export declare class TeleportDevPortalAppsComponent implements OnInit, OnDestroy {
    private session;
    private applications;
    Developer: IDeveloper;
    sortBy: ((a: IApplication, b: IApplication) => number)[];
    filterOn: string;
    showNum: number;
    private _applications;
    private _subscription;
    private _isBusy;
    constructor(session: SessionService, applications: ApplicationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    readonly isBusy: boolean;
    readonly totalApps: number;
    readonly Applications: IApplication[];
    requestAppsRefresh(): void;
    hasSort(funcName: string): boolean;
    toggleSort(param: string): void;
    private sortByNameAsc(a, b);
    private sortByNameDesc(a, b);
    private sortByNotesAsc(a, b);
    private sortByNotesDesc(a, b);
    private sortByCreatedOnAsc(a, b);
    private sortByCreatedOnDesc(a, b);
}
