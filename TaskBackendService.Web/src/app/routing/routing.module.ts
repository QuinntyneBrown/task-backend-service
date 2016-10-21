import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren:"./modules/landing/landing.module#LandingModule"
    },
    {
        path: 'app',
        loadChildren: "./modules/app/app.module#AppModule"
    },
    {
        path: 'task',
        loadChildren: "./modules/task/task.module#TaskModule"
    },
    {
        path: 'user',
        loadChildren: "./modules/user/user.module#UserModule"
    }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);


