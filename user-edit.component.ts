import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() userData:any = { 
    userName:'', 
    password: '', 
    firstName: '', 
    lastName: '', 
    email:'', 
    phoneNumber:'', 
    afm:'',
    address:'',
    location:'',
    country:''
    };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getUser(this.route.snapshot.params['id']).subscribe((data: {}) => {
        console.log(JSON.stringify(data));
      this.userData = data;
    });
  }

  updateUser() {
      var id = this.route.snapshot.params['id'];
    this.rest.updateUser(this.route.snapshot.params['id'], this.userData).subscribe((result) => {
      this.router.navigate(['/user-details/'+id]);
    }, (err) => {
      console.log(err);
    });
  }

}