/// <reference path="app.model.ts" />
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AppService } from './app.service';
import { App } from "./app.model";

export class AppResolve implements Resolve<App> {

    constructor(private _AppService: AppService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this._AppService.getById({ id: route.params['id'] });
    }
}