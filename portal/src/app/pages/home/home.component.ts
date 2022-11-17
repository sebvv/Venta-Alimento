import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { TipoArticuloService } from 'src/app/services/tipo-articulo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home implements OnInit{
  constructor(private title: Title, private meta: Meta
    ,private _entryServices: TipoArticuloService) {
    this.title.setTitle('BBPETS')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'BBPETS',
      },
    ])
  }
  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this._entryServices.getEntries().subscribe(
      response => {
        console.log('response:',response);
      }
     );
  }

}
