import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [{path: '', component: EtudiantComponent}];
@NgModule({
    imports: [RouterModule.forRoot(routes),BrowserModule,FormsModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }