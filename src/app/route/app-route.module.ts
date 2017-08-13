import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*TODO: Remove SharedModule and StrummingComponent after moving them to a module*/
import { SharedModule } from './../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StrummingComponent } from './../strumming/strumming.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/strumming', pathMatch: 'full' },
    { path: 'strumming', component: StrummingComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        SharedModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        PageNotFoundComponent,
        StrummingComponent
    ]
})
export class AppRoutingModule {}
