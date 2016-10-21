import { Resolve } from '@angular/router';
import { TaskService } from './task.service';
import { Task } from "./task.model";

export class TaskListResolve implements Resolve<Array<Task>> {
    constructor(private _taskService: TaskService) { }
    resolve() { return this._taskService.get(); }
}