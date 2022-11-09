import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home implements OnInit{
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('BBPETS')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'BBPETS',
      },
    ])
  }
  ngOnInit(): void {
  }
}
