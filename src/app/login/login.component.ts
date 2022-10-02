import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: string = ''

  constructor(private userService : UserService, private router: Router) { 
    
    
  }

  ngOnInit(): void {
  }

  login(): void {

    const user = this.userService.login(this.username, this.password);

    if (user?.username) {
      if (user.type === 'USER')
        this.router.navigate(['user']);
      else if (user.type === 'ADMIN')
        this.router.navigate(['admin']);
    } else {
      alert('wrong username or password')
    }
  }

}
