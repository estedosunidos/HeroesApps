import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interface/heroes.interfaces';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()
  public heros!:Hero
  ngOnInit() {
    if(!this.heros)throw Error('Hero Propery is required')
  }


}
