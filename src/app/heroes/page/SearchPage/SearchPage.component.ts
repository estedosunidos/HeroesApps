import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interface/heroes.interfaces';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
  selector: 'app-SearchPage',
  templateUrl: './SearchPage.component.html',
  styleUrls: ['./SearchPage.component.css']
})
export class SearchPageComponent implements OnInit {
  public seachInput = new FormControl('')
  public heroes:Hero[] = []
  public selestedHero?:Hero

  constructor(private hero:HeroesService) { }

  ngOnInit() {
  }
  searchHero(){
    const value:string =this.seachInput.value ||''
     this.hero.getsugegstion(value).subscribe(heroes=>this.heroes=heroes);
  }
  onSelectedOption(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.selestedHero=undefined
      return
    }
    const hero:Hero=event.option.value
    this.seachInput.setValue(hero.superhero)
    this.selestedHero=hero
  }

  }


