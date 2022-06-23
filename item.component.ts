import {Component, OnInit} from '@angular/core';
import {RestItemService} from '../rest-item.service';
import {ActivatedRoute, Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {Item} from 'src/app/model/item';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
     //&& (currTime.getTime() > currItem.started.getTime()) && (currTime.getTime() < currItem.ends.getTime())
    items: Item[];
    item: Item;
    userId : number;
    userItems: Item[];
    constructor(public rest: RestItemService, private route: ActivatedRoute, private router: Router,private datePipe: DatePipe) {}

    ngOnInit() {
        this.getItems();
        
         this.userId = this.route.snapshot.params['id'];
        this.items = [];
        this.userItems = [];
        this.rest.getItems().subscribe((data: Item[]) => {
            //console.log(data);
            this.items = data;
            var userId = this.route.snapshot.params['id'];
            var currItem: Item;
            for (var currItem of this.items) {
                if (currItem.idUser.idUser != userId)  {
                    if (moment().isAfter(currItem.started) && moment().isBefore(currItem.ends)) {
                        this.userItems.push(currItem);
                        console.log("Item Found = " + currItem.name);
                        console.log("Date Started = " + currItem.started);
                        console.log("Date Ends = " + currItem.ends);
                    }

                }
            }
            console.log(this.userItems);

        });

    }

    dateformat(myDate:Date):String{
        
        return 
    }
    getItems() {
        this.items = [];
        this.rest.getItems().subscribe((data: Item[]) => {
            console.log(data);
            this.items = data;
        });
    }

//    add() {
//        this.router.navigate(['/item-add/2']);
//    }
//   

    
    getActiveItems() {
        var currTime: Date = new Date("YYYY-MM-DD");
        
        
        console.log("Date = " + currTime);
        this.items = [];
        this.userItems = [];
        this.rest.getItems().subscribe((data: Item[]) => {
            //console.log(data);
            this.items = data;
            var userId = this.route.snapshot.params['id'];
            var currItem: Item;
            for (var currItem of this.items) {
                if ((currItem.idUser.idUser != userId) && (currTime.getTime() > currItem.started.getTime()) && (currTime.getTime() < currItem.ends.getTime())) {
                    this.userItems.push(currItem);

                }
            }
            console.log(this.userItems);

        });
    }

    delete(id) {


        this.rest.getItem(id).subscribe((data: Item) => {
            console.log(data);
            this.item = data;
        });
        //console.log(this.item.itemName);
        var message = "Do you really want to delete item with ID " + id;
        if (confirm(message)) {
            this.rest.deleteItem(id)
                .subscribe(res => {
                    this.getItems();
                }, (err) => {
                    console.log(err);
                }
                );
        }
    }
    
    placeBid(itemId:any){
        var userId = this.route.snapshot.params['id'];
         console.log("Route to Bid from User");
          this.router.navigate(['/bid/',userId, itemId]);
    }

}
