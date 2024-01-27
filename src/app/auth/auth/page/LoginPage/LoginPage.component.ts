import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-LoginPage',
  templateUrl: './LoginPage.component.html',
  styleUrls: ['./LoginPage.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private AuthService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(): void {

    this.AuthService.login('fernando@gmail.com','123456')
      .subscribe( user => {

        this.router.navigate(['/']);

      });

  }


}
