import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulos */
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from "../../components/components.module";

import { ProductosComponent } from './productos.component';

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class ProductosModule { }
