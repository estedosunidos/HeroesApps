import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interface/heroes.interfaces';

@Component({
  selector: 'app-HeroePage',
  templateUrl: './HeroePage.component.html',
  styleUrls: ['./HeroePage.component.css']
})
export class HeroePageComponent implements OnInit {
 public hero?:Hero
  constructor(private Hero:HeroesService,private activatedRoute:ActivatedRoute, private router:Router ) { }

  ngOnInit():void {
    this.activatedRoute.params.pipe(
      switchMap(({id})=>this.Hero.getHeroById(id))
    ).subscribe(hero=>{
       if(!hero) return this.router.navigate(['/heroes.list'])
       this.hero=hero
      return
    })
  }
  goback(){
    this.router.navigate(['heroes/List'])
  }

}
