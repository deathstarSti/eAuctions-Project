import { Component, OnInit, Input } from '@angular/core';
import { RestItemService } from '../rest-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Item} from 'src/app/model/item';
import {User} from 'src/app/model/user';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})

export class ItemAddComponent implements OnInit {

  @Input() itemData: Item;
  user: User;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
       this.itemData=new Item;
       
       this.rest.getUser(this.route.snapshot.params['id']).subscribe((data: User) => {
      //console.log(data);
      this.user = data;
    });
  }

  addItem() {
      this.itemData.idUser = this.user;
      
      
        
   this.rest.addItem(this.itemData).subscribe((result) => {
      //this.router.navigate(['/item-detail/'+result.idItem]);
       var now =  new Date('August 19, 1975 23:15:30 UTC');
      
      this.itemData.started = now;
       this.itemData.ends = now;
       this.router.navigate(['/user-items/' + this.user.idUser]);
    }, (err) => {
      console.log(err);
    });
    
    
  }

}

