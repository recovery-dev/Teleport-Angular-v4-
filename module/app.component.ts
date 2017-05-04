import { Component, Inject } from "@angular/core";
import { Router }            from "@angular/router";

import { SessionService } from "./services/session.service";


@Component({
    selector   : "dev-portal",
    templateUrl: DOC_BASE_HREF + "/app.html",
})
export class AppComponent {
    
    constructor (
        @Inject(Router)         private router: Router,
        @Inject(SessionService) private session: SessionService
    ) {

        session.Observable
            .skipWhile(s => s === undefined)
            .distinctUntilChanged((a, b) => !!a === !!b)
            .subscribe(s => {

                // If valid session...
                if (!! s) {
                    // And has "on_login_redir"...
                    if (window.location.search.startsWith(`?on_login_redir=`)) {

                        router.navigateByUrl(decodeURIComponent(window.location.search.substr(16)));

                    // And not within dashboard, redirect to default login page.
                    } else if (! window.location.pathname.startsWith(`/dashboard`)) {

                        router.navigateByUrl("/dashboard");
                    }

                // Else no session...
                } else {
                    // But URL within dashboard, preserve URL for redirect after login.
                    if (window.location.pathname.startsWith(`/dashboard/logout`)) {
                        // This ensures that old data is destroyed.
                        window.location.href = "/login";
                    } else if (window.location.pathname.startsWith(`/dashboard`)) {
                        window.location.href = "/login?on_login_redir=" + encodeURIComponent(window.location.pathname);
                    }
                }
            });
    }
}