import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./modules/calendar/calendar.component').then((c) => c.CalendarComponent)
    },
    {
        path:'schedule',
        loadComponent: () => import('./modules/schedule/schedule.component').then((c) => c.ScheduleComponent)
    },
    {
        path:'summary/:username/:useremail/:userphone/:bookinglist',
        loadComponent: () => import('./modules/summary/summary.component').then((c) => c.SummaryComponent)
    },
    {
        path:'list/:useremail/:bookinglist',
        loadComponent: () => import('./modules/list/list.component').then((c) => c.ListComponent)
    }
];
