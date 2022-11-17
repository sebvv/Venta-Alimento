import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home.component';



const routes: Routes = [
    
    {
        path: 'home',
        component: Home,
        //canActivate: [AuthGuard], /* implementar guards para proteger las rutas */
        children: [
            { path: '', component: Home, data: { breadcrumb: 'home' } }
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