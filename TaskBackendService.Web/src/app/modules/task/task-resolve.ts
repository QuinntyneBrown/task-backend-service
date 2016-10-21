import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TaskService } from './task.service';
import { Task } from "./task.model";

export class TaskResolve implements Resolve<Task> {

    constructor(private _taskService: TaskService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this._taskService.getById({ id: route.params['id'] });
    }
}