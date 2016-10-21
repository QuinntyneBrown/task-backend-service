import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { App } from "./app.model";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
    constructor(private _http: Http) { }

    public add(entity: App) {
        return this._http
            .post(`${this._baseUrl}/api/app/add`, entity)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get() {
        return this._http
            .get(`${this._baseUrl}/api/app/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public getById(options: { id: number }) {
        return this._http
            .get(`${this._baseUrl}/api/app/getById?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public remove(options: { id: number }) {
        return this._http
            .delete(`${this._baseUrl}/api/app/remove?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    private get _baseUrl() { return ""; }

}
