import { LOCALE_ID, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
/* Componentes */
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AppComponent } from './app.component';

/* Module */
import { ComponentsModule } from './components/components.module'
import { MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module'
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    MaterialModule,
    MatListModule,
    BrowserAnimationsModule,
    SharedModule,
    PagesModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
