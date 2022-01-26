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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'notesHome', component:NotesHomeComponent, children:[
  {path: 'note', component:NoteComponent}
    
  ]}
]


@NgModule({
  declarations: [
    AppComponent,
    NotesHomeComponent,
    HighlighterDirective,
    NoteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
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
