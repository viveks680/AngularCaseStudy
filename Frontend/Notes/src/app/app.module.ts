import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesHomeComponent } from './notes-home/notes-home.component';

import { HighlighterDirective } from './directives/highlighter.directive';

import { NotesHomeService } from './services/notes-home.service';
import { NoteComponent } from './note/note.component';

import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'notesHome', pathMatch:'full'},
  {path: 'notesHome', component:NotesHomeComponent, children:[
    {path: 'note', component:NoteComponent}
  ]}
]


@NgModule({
  declarations: [
    AppComponent,
    NotesHomeComponent,
    HighlighterDirective,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CookieModule.forRoot()
  ],
  providers: [NotesHomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
