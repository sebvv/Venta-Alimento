import { Component, Input } from '@angular/core'

@Component({
  selector: 'section-heading',
  templateUrl: 'section-heading.component.html',
  styleUrls: ['section-heading.component.css'],
})
export class SectionHeading {
  @Input()
  heading: string = 'ARTÍCULOS DE TENDENCIA'
  @Input()
  subtitle: string =
    'Explore nuestros productos más populares del mes, artículos nuevos y las mejores ofertas de BB PETS que puede comprar'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
