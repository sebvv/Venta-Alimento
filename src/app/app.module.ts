import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AppRoutingModule } from './app-routing.module';


const routes = [
  
]

@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    RouterModule.forRoot(routes),
    ComponentsModule, 
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
