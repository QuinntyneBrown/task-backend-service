import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AppService } from './app.service';
import { App } from "./app.model";

export class AppListResolve implements Resolve<Array<App>> {
    constructor(private _appService: AppService) { }
    resolve() { return this._appService.get(); }
}