import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*TODO: Remove SharedModule, ChordComponent and StrummingComponent after moving them to a module*/
import { SharedModule } from './../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChordComponent } from './../chord/chord.component';
import { StrummingComponent } from './../strumming/strumming.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/chords', pathMatch: 'full' },
    { path: 'chords', component: ChordComponent },
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
        ChordComponent,
        StrummingComponent
    ]
})
export class AppRoutingModule { }
