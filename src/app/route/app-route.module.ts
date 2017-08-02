import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StrummingComponent } from './../strumming/strumming.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/strumming', pathMatch: 'full' },
    { path: 'strumming', component: StrummingComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        PageNotFoundComponent,
        StrummingComponent
    ]
})
export class AppRoutingModule { }
