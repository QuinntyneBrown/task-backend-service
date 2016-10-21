import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Task } from "./task.model";
import { Observable } from "rxjs";

@Injectable()
export class TaskService {
    constructor(private _http: Http) { }

    public add(entity: Task) {
        return this._http
            .post(`${this._baseUrl}/api/task/add`, entity)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get() {
        return this._http
            .get(`${this._baseUrl}/api/task/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public getById(options: { id: number }) {
        return this._http
            .get(`${this._baseUrl}/api/task/getById?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public remove(options: { id: number }) {
        return this._http
            .delete(`${this._baseUrl}/api/task/remove?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    private get _baseUrl() { return ""; }

}
