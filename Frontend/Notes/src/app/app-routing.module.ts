import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesHomeComponent } from './notes-home/notes-home.component';

const routes: Routes = [
  { path: '', component: NotesHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
