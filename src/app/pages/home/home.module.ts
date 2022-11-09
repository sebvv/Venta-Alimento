import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module';
import { Home } from './home.component'
import { SharedModule } from '../../shared/shared.module';



const routes = [
  {
    path: '',
    component: Home,
  },
]

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule, 
    ComponentsModule, 
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [Home],
})
export class HomeModule {}
