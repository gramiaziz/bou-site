import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { CarteBoissons } from './carte-boissons.component'

const routes = [
  {
    path: '',
    component: CarteBoissons,
  },
]

@NgModule({
  declarations: [CarteBoissons],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CarteBoissons],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarteBoissonsModule {}
