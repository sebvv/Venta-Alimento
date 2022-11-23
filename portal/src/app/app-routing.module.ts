import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* module */
import { PagesRoutingModule } from './pages/pages.routing';

/* Component */
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
    { path:'login', component: LoginComponent, data: { breadcrumb:'Login' } },
    { path:'home', redirectTo: '/home', pathMatch: 'full' },
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    /* page not found */
    { path:'404', component: NopageFoundComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
