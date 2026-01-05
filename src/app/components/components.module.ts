import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Navigation } from './navigation/navigation.component'
import { Footer } from './footer/footer.component'

@NgModule({
  declarations: [Navigation, Footer],
  imports: [CommonModule, RouterModule],
  exports: [Navigation, Footer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
