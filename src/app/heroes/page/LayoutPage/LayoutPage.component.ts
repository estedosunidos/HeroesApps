import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth/service/auth.service';
import { User } from 'src/app/auth/auth/interface/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-LayoutPage',
  templateUrl: './LayoutPage.component.html',
  styleUrls: ['./LayoutPage.component.css']
})
export class LayoutPageComponent implements OnInit {
  public sidebarItems=[
    {
      label:'listado',
      icon:'label',
      url:'./List'
    },
    {
      label:'Añadir',
      icon:'add',
      url:'./new-hero'
    },
    {
      label:'Buscar',
      icon:'search',
      url:'./search'
    }
  ]

  constructor(private AuthService:AuthService,private router:Router) { }
  get user():User| undefined {
    return this.AuthService.currectUser
  }
  ngOnInit() {
  }
  onLogout():void{
    this.AuthService.logout()
    this.router.navigate(['/auth/login']);
  }

}
