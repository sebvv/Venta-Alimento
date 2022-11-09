import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
