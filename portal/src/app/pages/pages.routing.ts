import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* componentes */
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';



const routes: Routes = [
    
    {
        path: 'home',
        component: PagesComponent,
        //canActivate: [AuthGuard], /* implementar guards para proteger las rutas */
        children: [
            { path: '', component: HomeComponent, data: { breadcrumb: 'home' } }
        ]
    },
    {
        path: 'productos',
        component: PagesComponent,
        //canActivate: [AuthGuard], /* implementar guards para proteger las rutas */
        children: [
            { path: '', component: ProductosComponent, data: { breadcrumb: 'Productos' } }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class PagesRoutingModule {}