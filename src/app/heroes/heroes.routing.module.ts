import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router'
import { LayoutPageComponent } from './page/LayoutPage/LayoutPage.component';
import { NewPageComponent } from './page/newPage/newPage.component';
import { SearchPageComponent } from './page/SearchPage/SearchPage.component';
import { ListPageComponent } from './page/ListPage/ListPage.component';
import { HeroePageComponent } from './page/HeroePage/HeroePage.component';
const routes:Routes=[
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'new-hero',component:NewPageComponent},
      {path:'search',component:SearchPageComponent},
      {path:'edit/:id',component:NewPageComponent},
      {path:'List',component:ListPageComponent},
      {path:':id',component:HeroePageComponent},
      {path:'**',redirectTo:'List'},
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HeroesRoutingModule { }
