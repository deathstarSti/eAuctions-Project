import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user';

@Component({
    selector: 'app-admin-user-details',
    templateUrl: './admin-user-details.component.html',
    styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {

    user: User;

    constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.rest.getUser(this.route.snapshot.params['id']).subscribe((data: User) => {
            //console.log(data);
            this.user = data;
        });
    }

    accept(id) {

        this.user.accepted = 1;
        this.rest.updateUser(id, this.user).subscribe(res => {
                this.router.navigate(['/admin-users']);
            }, (err) => {
                console.log(err);
            });
               
  
}

delete (id) {

    var message = "Do you really want to delete this user? ";
    if (confirm(message)) {
        this.rest.deleteUser(id)
            .subscribe(res => {
                this.router.navigate(['/admin-users']);
            }, (err) => {
                console.log(err);
            }
            );
    }
}
 

}
