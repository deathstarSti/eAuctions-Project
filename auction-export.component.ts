import {Component, OnInit} from '@angular/core';
import * as js2xml from 'js2xmlparser';

import {Item} from '../model/item';
import {RestItemService} from '../rest-item.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-auction-export',
    templateUrl: './auction-export.component.html',
    styleUrls: ['./auction-export.component.css']
})
export class AuctionExportComponent implements OnInit {
    item: Item;
    itemId: number;
    xmlData: String;
    constructor(public rest: RestItemService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
         this.itemId = this.route.snapshot.params['id'];
        this.rest.getItem(this.itemId).subscribe((data: Item) => {
            // console.log(data);
            this.item = data;
            
            var jsonData = JSON.stringify(this.item);
            
                      
            console.log(jsonData);
           
var obj = {
    "firstName": "John",
    "lastName": "Smith",
    "dateOfBirth": new Date(1964, 7, 26),
    "address": {
        "@": {
            "type": "home"
        },
        "streetAddress": "3212 22nd St",
        "city": "Chicago",
        "state": "Illinois",
        "zip": 10000
    },
    "phone": [
        {
            "@": {
                "type": "home"
            },
            "#": "123-555-4567"
        },
        {
            "@": {
                "type": "cell"
            },
            "#": "890-555-1234"
        },
        {
            "@": {
                "type": "work"
            },
            "#": "567-555-8901"
        }
    ],
    "email": "john@smith.com"
};
 
            console.log(js2xml.parse("Item", this.item));
           this.xmlData = js2xml.parse("Item", this.item);
            

        });

       

    }

}
