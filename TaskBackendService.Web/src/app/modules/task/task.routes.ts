import {RouterModule, Routes } from '@angular/router';

import { TaskListPageComponent } from "./task-list-page.component";
import { TaskEditPageComponent } from "./task-edit-page.component";

import { TaskListResolve } from "./task-list-resolve";
import { TaskResolve } from "./task-resolve";


const TASK_ROUTES: Routes = [
    {
        path: '',
        component: TaskListPageComponent,
        resolve: {
            contact: TaskListResolve
        }
    },
    {
        path: 'edit',
        component: TaskEditPageComponent,
    },
    {
        path: 'edit/:id',
        component: TaskEditPageComponent,
        resolve: {
            contact: TaskResolve
        }
    }
];


export const TaskRouterModule = RouterModule.forChild(TASK_ROUTES);
