
import {Component, OnInit} from '@angular/core';
import {RestItemService} from '../rest-item.service';
import {ActivatedRoute, Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {Item} from 'src/app/model/item';

@Component({
  selector: 'app-guest-items',
  templateUrl: './guest-items.component.html',
  styleUrls: ['./guest-items.component.css']
})
export class GuestItemsComponent implements OnInit {

  
    items: Item[];
    item: Item;
    userItems: Item[];
    constructor(public rest: RestItemService, private route: ActivatedRoute, private router: Router,private datePipe: DatePipe) {}

    ngOnInit() {
      
        
         
        this.items = [];
        this.userItems = [];
        this.rest.getItems().subscribe((data: Item[]) => {
            //console.log(data);
            this.items = data;
        
            var currItem: Item;
            for (var currItem of this.items) {
              
                    if (moment().isAfter(currItem.started) && moment().isBefore(currItem.ends)) {
                        this.userItems.push(currItem);
                       
                    }

                
             }
            console.log(this.userItems);

        });

    }

   
   
    
   
}
