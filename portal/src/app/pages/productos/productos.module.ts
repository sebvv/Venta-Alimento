import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulos */
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from "../../components/components.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductosComponent } from './productos.component';
import { ProductoAddComponent } from './producto-add/producto-add.component';

@NgModule({
  declarations: [
    ProductosComponent,
    ProductoAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ProductosModule { }
