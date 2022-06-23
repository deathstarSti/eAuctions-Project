import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
    users: User[];
    user: User;
    constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.users = []; 
        let currUser: User;
        this.rest.getUsers().subscribe((data: User[]) => {           
     // console.log(data);

           
            for (var currUser of data) {
                if (currUser.accepted == 0) {
                    this.users.push(currUser);

                }
            }

        });
     
        console.log(this.users);
    }

}
