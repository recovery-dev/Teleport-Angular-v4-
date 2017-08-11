import { NgModule } from "@angular/core";
import { MessageService } from "./message.service";
import { ModalService } from "./modal.service";
import { AccountCredentialsService } from "./account.credentials.service";
import { AlertsService } from "./alerts.service";
import { BillingService } from "./billing.service";
import { IntegrationsAWSService } from "./integrations.aws.service";
import { IntegrationsWatsonService } from "./integrations.watson.service";
import { LogsService } from "./logs.service";
import { PermsGuardCanActivate } from "./perms-guard.service";
import { TopUpService } from "./top-up.service";
import { UsageService } from "./usage.service";
import { UserService } from "./user.service";
var DevPortalServicesModule = (function () {
    function DevPortalServicesModule() {
    }
    DevPortalServicesModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        AccountCredentialsService,
                        AlertsService,
                        BillingService,
                        IntegrationsAWSService,
                        IntegrationsWatsonService,
                        LogsService,
                        MessageService,
                        ModalService,
                        PermsGuardCanActivate,
                        TopUpService,
                        UsageService,
                        UserService,
                    ],
                },] },
    ];
    DevPortalServicesModule.ctorParameters = function () { return []; };
    return DevPortalServicesModule;
}());
export { DevPortalServicesModule };
//# sourceMappingURL=services.module.js.map