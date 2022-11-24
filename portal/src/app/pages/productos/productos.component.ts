import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import  Swal from 'sweetalert2'
import { TipoArticuloService } from '../../services/tipo-articulo.service';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import { iProducto } from '../../models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  loaded!: boolean;
  private subscription!: Subscription;
  @Input() rows = [];

  displayedColumns: string[] = ['codigo','titulo','img', 'descripcion','detalleProducto','cantidad','valor','tipoArticuloCodigo'];
  dataSource = new MatTableDataSource<iProducto>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _entryServices:ProductoService,
    private dialog:MatDialog,
    private _router: Router,
    public dialogadd : MatDialog
    ) { 
      this.loaded = true;
  }


  ngOnInit(): void {
    this.listar();
  }

  openDialogAdd() {
    const sub =  this.dialogadd.open(ProductoAddComponent, {
      width: '40%'
    });
    sub.afterClosed().subscribe(() => {
      this.listar();
    });
  }

  listar(){
    this._entryServices.getEntries().subscribe(
      response => {
        console.log('response:',response);
        if(response){
          this.dataSource.data = response;
          this._entryServices.Refresh$.next();
        }
      }
     );

    
  }

}
