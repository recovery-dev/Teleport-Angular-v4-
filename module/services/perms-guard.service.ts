
import { Injectable, Inject } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    Router,
} from "@angular/router";

import { IUserPermissions } from "../models/interfaces";
import { AccountService }   from "./account.service";
import { validate }         from "../utils/Permissions";


interface IRouteData {
    perms: string[];
    withSome?: boolean;
}

@Injectable()
export class PermsGuardCanActivate implements CanActivateChild {

    constructor (
        @Inject(AccountService) private account: AccountService,
        @Inject(Router)         private router: Router,
    ) {}

    public canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return new Promise(resolve => {

            this.account.Observable
                .first(d => !!d)
                .subscribe(dev => {

                    const routeData = route.data as IRouteData;

                    if (routeData.perms && ! validate(dev.permissions, routeData.perms.reduce((p: IUserPermissions, c: string) => (p[c] = true) && p, {}))) {

                        this.router.navigate(["/dashboard/access-denied"], { queryParams: { perms: routeData.perms.join("|") } });
                        return resolve(false);
                    }

                    return resolve(true);
                });
        });
    }
}