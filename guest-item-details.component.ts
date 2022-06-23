import { Component, OnInit } from '@angular/core';
import {Item} from '../model/item';
import {RestItemService} from '../rest-item.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-guest-item-details',
  templateUrl: './guest-item-details.component.html',
  styleUrls: ['./guest-item-details.component.css']
})
export class GuestItemDetailsComponent implements OnInit {
item:Item;

  
    
  constructor(public rest:RestItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      
      
    this.rest.getItem(this.route.snapshot.params['idItem']).subscribe((data: Item) => {
      //console.log(data);
      this.item = data;
       
    });
    
   
  }

}
