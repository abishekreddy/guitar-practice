import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*TODO: Remove SharedModule, ChordComponent, NoteComponent and StrummingComponent after moving them to a module*/
import { SharedModule } from './../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChordComponent } from './../chord/chord.component';
import { NoteComponent } from './../note/note.component';
import { StrummingComponent } from './../strumming/strumming.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/notes', pathMatch: 'full', data: { name: 'Home' } },
    { path: 'chords', component: ChordComponent, data: { name: 'Chords' } },
    { path: 'notes', component: NoteComponent, data: { name: 'Notes' } },
    { path: 'strumming', component: StrummingComponent, data: { name: 'Strumming' } },
    { path: '**', component: PageNotFoundComponent, data: { name: 'Page not found' } }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        SharedModule
    ],
    exports: [
        RouterModule,
        SharedModule
    ],
    declarations: [
        PageNotFoundComponent,
        ChordComponent,
        NoteComponent,
        StrummingComponent
    ]
})
export class AppRoutingModule { }
