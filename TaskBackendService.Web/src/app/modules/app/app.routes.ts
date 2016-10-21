import {RouterModule, Routes } from '@angular/router';

import { AppListPageComponent } from "./app-list-page.component";
import { AppEditPageComponent } from "./app-edit-page.component";

import { AppListResolve } from "./app-list-resolve";
import { AppResolve } from "./app-resolve";


const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppListPageComponent,
        resolve: {
            appList: AppListResolve
        }
    },
    {
        path: 'edit',
        component: AppEditPageComponent,
    },
    {
        path: 'edit/:id',
        component: AppEditPageComponent,
        resolve: {
            app: AppResolve
        }
    }
];


export const AppRouterModule = RouterModule.forChild(APP_ROUTES);
