import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


/* Módulos */
import { SharedModule } from '../shared/shared.module';

/* Componentes */
import { PagesComponent } from './pages.component';



@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    exports:[
    ]
  })
  export class PagesModule { 
    
  }
  