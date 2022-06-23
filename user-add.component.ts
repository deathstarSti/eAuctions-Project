import {Component, OnInit, Input} from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

    @Input() userData: any = {
        userName: '',
        password: '',
        confirm_password: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        afm: '',
        address: '',
        location: '',
        country: ''
    };

    constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
    }

    addUser() {


        if (this.userData.password == this.userData.confirm_password) {
            this.rest.addUser(this.userData).subscribe((result) => {
                this.router.navigate(['/user']);
            }, (err) => {
                console.log(err);
            }
            );
        }
        else{
            window.alert('Password and Confirm Password do not match');
        }

    }

}
