// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgComponentOutlet } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { EtudiantComponent } from "./etudiant/etudiant.component";
import { BrowserModule } from '@angular/platform-browser';
//import { TodoService } from './todo.service.ts';
//import { TodoItem } from './todo-item.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [NgClass, NgComponentOutlet, RouterLink, RouterOutlet, EtudiantComponent,
      FormsModule,CommonModule,RouterModule],
      template : '<RouterOutlet></RouterOutlet>',
})
export class AppComponent {
  
  title = 'Student Management Application';
}
