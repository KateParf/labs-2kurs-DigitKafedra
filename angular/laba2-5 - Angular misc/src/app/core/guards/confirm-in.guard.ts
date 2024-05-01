import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const confirmInGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return confirm('Хотите перейти?');
}