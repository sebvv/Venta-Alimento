import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2'
import { iProducto } from 'src/app/models/producto.model';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {

  nueva!: boolean;
  subscripcion$ = new Subscription;
  form!: FormGroup;
  
  constructor(private formBuilder : FormBuilder
    , private _productosService: ProductoService
    , private dialogRef: MatDialogRef<ProductoAddComponent>) { 

      if (!this.nueva) {
        this.subscripcion$ = this._productosService.getProducto$().subscribe(data => {
        });
      } 
    }

    public from = this.form = this.formBuilder.group({
      codigo : 0,
      titulo : ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      img : null,
      descripcion : [null,  [Validators.required, Validators.minLength(3)]],
      detalleProducto : [null,  [Validators.required, Validators.minLength(3)]],
      cantidad : 0,
      valor : 0,
      tipoArticulo : 0
      
    });

  ngOnInit(): void {
  }

  addProducto(){
    if (this.form.valid) {
      let productos: iProducto = this.form.value;

      var dataAEnviar = {
        codigo : productos.codigo,
        titulo : productos.titulo,
        img :null,
        descripcion : productos.descripcion,
        detalleProducto: productos.detalleProducto,
        cantidad: productos.cantidad,
        valor : productos.valor,
        tipoArticulo: productos.tipoArticulo,
      }

      try{
        let result = this._productosService.AddProducto2(dataAEnviar);
      
        Promise.all([result]).then(res =>{
          let datos = res[0];
          console.log('llego aqui');
          console.log('datos',datos);

          if (datos) {
            Swal.fire({position: 'top-end',icon: 'success',title: 'Datos ingresados',showConfirmButton: false,timer: 2500})
            this.close();
          }else{
            Swal.fire({position: 'top-end',icon: 'error',title: 'El ingreso presenta error, tal vez ya este en base datos',showConfirmButton: false,timer: 2500})
            this.close();
          }
        });
      }catch(error){
        console.log(error);
      }
    } else {
      console.log(this.form.value);
    }
  }

  close(){
    console.log('Cerrando Dialog!');
    this.dialogRef.close();
  }
}
