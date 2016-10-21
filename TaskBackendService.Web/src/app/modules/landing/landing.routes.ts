import {RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from "./landing-page.component";


const LANDING_ROUTES: Routes = [
    {
        path: '',
        component: LandingPageComponent
    }
];


export const LandingRouterModule = RouterModule.forChild(LANDING_ROUTES);
