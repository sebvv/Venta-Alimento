import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


/* Módulos */
import { SharedModule } from '../shared/shared.module';
import { ProductosModule } from './productos/productos.module';

/* Componentes */
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        ProductosModule,
        ComponentsModule
    ]
})
export class PagesModule { }
