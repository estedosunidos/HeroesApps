import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/heroes.interfaces';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-ListPage',
  templateUrl: './ListPage.component.html',
  styleUrls: ['./ListPage.component.css']
})
export class ListPageComponent implements OnInit {
  public heroes:Hero[]=[]


  constructor(  private hero:HeroesService) { }

  ngOnInit() {
    this.hero.getHeroes().subscribe(heroes =>this.heroes=heroes)
  }

}
