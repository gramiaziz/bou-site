import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'carte-boissons',
  templateUrl: 'carte-boissons.component.html',
  styleUrls: ['carte-boissons.component.css'],
})
export class CarteBoissons {
  rawaatd: string = ' '
  rawsyae: string = ' '
  raw919y: string = ' '
  rawk9ey: string = ' '
  rawtez7: string = ' '
  rawm8ia: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('BOU. SidiBou')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'BOU. SidiBou',
      },
    ])
  }
}
