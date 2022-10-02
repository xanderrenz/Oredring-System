import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

const ADMIN_TYPE = 'ADMIN';
const USER_TYPE = 'USER';

interface User {
    username: string;
    password: string;
    type: typeof ADMIN_TYPE | typeof USER_TYPE;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private users: User[] = [];
    public authenticated: boolean = false;
    public userType: string = ''
  
    constructor(private router: Router) {
        this.users.push({username: 'user', password: 'user', type: 'USER'})
        this.users.push({username: 'admin', password: 'admin', type: 'ADMIN'})
    }

    login(username: string, password: string): User | undefined {
        const user = this.users.find(user => user.username == username && user.password == password)

        if (user) {
            this.authenticated = true;
            this.userType = user.type
        }

        return user;
    }

    logout() {
        this.router.navigate(['']);
        this.authenticated = false
        this.userType = ''
    }
}