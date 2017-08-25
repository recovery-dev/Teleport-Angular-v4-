import { OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/first";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Store } from "@ngrx/store";
import { TeleportCoreState } from "teleport-module-services/services/ngrx/index";
import { APIv1State } from "teleport-module-services/services/v1/ngrx/index";
import { IApplication } from "teleport-module-services/services/v1/models/Application";
import { IntegrationsWatsonService } from "../../../../services/integrations.watson.service";
import { IWatson } from "../../../../models/interfaces";
import { ModalService } from "../../../../services/modal.service";
import { MessageService } from "../../../../services/message.service";
import { TeleportLoaderService } from "teleport-module-loader";
export declare class TeleportDevPortalAppIntegrationWatsonComponent implements OnDestroy {
    private route;
    private watson;
    private modal;
    private message;
    private store$;
    private loader;
    isEditing: boolean;
    username: string;
    password: string;
    private _application;
    private _watson;
    constructor(route: ActivatedRoute, watson: IntegrationsWatsonService, modal: ModalService, message: MessageService, store$: Store<TeleportCoreState & APIv1State>, loader: TeleportLoaderService);
    ngOnDestroy(): void;
    readonly App: IApplication;
    readonly Watson: IWatson;
    edit(): void;
    clear(): void;
    save(): void;
    cancel(): void;
}
