import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TaskEditPageComponent } from './task-edit-page.component';
import { TaskListPageComponent } from "./task-list-page.component";
import { TaskListResolve } from "./task-list-resolve";
import { TaskResolve } from "./task-resolve";
import { TaskService } from "./task.service";

import { TaskRouterModule } from "./task.routes";

const declarables = [
    TaskEditPageComponent,
    TaskListPageComponent
];

const providers = [
    TaskListResolve,
    TaskResolve,
    TaskService
];

@NgModule({
    imports: [CommonModule, TaskRouterModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class TaskModule { }
