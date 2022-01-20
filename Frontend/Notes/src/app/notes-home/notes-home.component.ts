import { Component, OnInit } from '@angular/core';
import { NotesHomeService } from '../services/notes-home.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie';



@Component({
  selector: 'app-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.css'],
  providers: [NotesHomeService]
})
export class NotesHomeComponent implements OnInit{
  
  // constructor( ) { }
  // ngOnInit(): void {
      
  // }

  constructor( private notesHomeService: NotesHomeService, private router: Router) { }
  
  notes : any
  showAllNotes = true

  ngOnInit() : void {
    this.notesHomeService.getAllNotes("userId").subscribe((data)=>{
      console.log(data)
      this.notes = data
     })
  }
  
  showAll(){
    console.log("potato")
    this.notesHomeService.getAllNotes("userId").subscribe((data)=>{
      console.log(data)
      this.notes = data
    })
  }

  showRecentNotes(){
    this.notesHomeService.getRecentNotes().subscribe((data)=>{
      this.notes = data
    })
  }

  // showImportantNotes(){
  //   this.notesHomeService.getImpNotes().subscribe((data)=>{
  //     this.notes = data
  //   })
  // } 
}
