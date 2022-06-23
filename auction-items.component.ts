import {Component, OnInit} from '@angular/core';
import {RestItemService} from '../rest-item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import * as js2xml from 'js2xmlparser';
import {XMLElement, XMLAttribute, XMLChild, xml} from 'xml-decorators';
import {saveAs} from 'file-saver';
import {Item} from 'src/app/model/item';

@Component({
    selector: 'app-auction-items',
    templateUrl: './auction-items.component.html',
    styleUrls: ['./auction-items.component.css']
})
export class AuctionItemsComponent implements OnInit {
    items: Item[];
    item: Item;
    userId: number;
    userItems: Item[];
    constructor(public rest: RestItemService, private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) {}

    ngOnInit() {


        this.userId = this.route.snapshot.params['id'];
        this.items = [];
        this.userItems = [];
        this.rest.getItems().subscribe((data: Item[]) => {
            //console.log(data);
            this.items = data;
            var userId = this.route.snapshot.params['id'];
            var currItem: Item;
            for (var currItem of this.items) {
                if (currItem.idUser.idUser != userId) {
                    if (moment().isAfter(currItem.ends)) {
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

    exportXML(itemId: any) {
        // this.router.navigate(['/auction-export/',itemId]);
        this.rest.getItem(itemId).subscribe((data: Item) => {
            // console.log(data);
            this.item = data;

            var xmlStr = '<Item ItemID="' + this.item.idItem + '">\n';
            xmlStr += '\t<Name>' + this.item.name + '</Name>\n';
            xmlStr += '\t<FirstBid>' + this.item.firstBid + '</FirstBid>\n';
            xmlStr += '\t<Bids>\n';
            for (var bid of this.item.bidCollection) {

                xmlStr += '\t\t<Bid>\n';
                xmlStr += '\t\t\t<Bidder Rating="' + bid.idUser.bidderRating
                    + '" UserID="' + bid.idUser.userName + '">\n';
                xmlStr += '\t\t\t\t<Location>' + bid.idUser.location + '</Location>\n';
                xmlStr += '\t\t\t\t<Country>' + bid.idUser.country + '</Country>\n';
                xmlStr += '\t\t\t</Bidder>\n';
                xmlStr += '\t\t\t<Time>' + bid.time + '</Time>\n';
                xmlStr += '\t\t\t<Amount>' + bid.amount + '</Amount>\n';
                xmlStr += '\t\t</Bid>\n';
            }
            xmlStr += '\t</Bids>\n';
            xmlStr += '\t<Location>' + this.item.idUser.location + '</Location>\n';
            xmlStr += '\t<Country>' + this.item.idUser.country + '</Country>\n';
            xmlStr += '\t<Started>' + this.item.started + '</Started>\n';
            xmlStr += '\t<Ends>' + this.item.ends + '</Ends>\n';
            xmlStr += '\t<Seller Rating="' + this.item.idUser.sellerRating
                + '" UserID="' + this.item.idUser.userName + '"/>\n';
            xmlStr += '\t<Description>' + this.item.description + '</Description>\n';
            xmlStr += '</Item>\n';
            
            const filename = "auctions_"+this.item.idItem+".xml";
            const blob = new Blob([xmlStr], {type: 'text/plain'});
            saveAs(blob, filename);

        });

    }


    exportJSON(itemId: any) {
        // this.router.navigate(['/auction-export/',itemId]);
        this.rest.getItem(itemId).subscribe((data: Item) => {
            // console.log(data);
            this.item = data;
      
            var jsonData = JSON.stringify(this.item);
        
            const filename = "auctions_"+this.item.idItem+".json";
            const blob = new Blob([jsonData], {type: 'text/plain'});
            saveAs(blob, filename);




        });

    }
}
