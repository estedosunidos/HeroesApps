import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes.routing.module';
import { ListPageComponent } from './page/ListPage/ListPage.component';
import { LayoutPageComponent } from './page/LayoutPage/LayoutPage.component';
import { NewPageComponent } from './page/newPage/newPage.component';
import { SearchPageComponent } from './page/SearchPage/SearchPage.component';
import { HeroePageComponent } from './page/HeroePage/HeroePage.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/HeroImage.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [HeroesRoutingModule],
  declarations: [HeroePageComponent, ListPageComponent, LayoutPageComponent, NewPageComponent, SearchPageComponent, CardComponent, HeroImagePipe]
})
export class HeroesModule { }
