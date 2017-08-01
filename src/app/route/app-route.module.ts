import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StrummingComponent } from './../strumming/strumming.component';

const appRoutes: Routes = [
    { path: 'strumming', component: StrummingComponent },
    { path: '', redirectTo: '/strumming', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [PageNotFoundComponent]
})
export class AppRoutingModule { }
