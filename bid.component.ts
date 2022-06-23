import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from 'src/app/model/item';
import {User} from 'src/app/model/user';
import {Bid} from 'src/app/model/bid';
import {RestService} from '../rest.service';
import {DatePipe} from '@angular/common';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-bid',
    templateUrl: './bid.component.html',
    styleUrls: ['./bid.component.css'],
    providers: [DatePipe]
})

export class BidComponent implements OnInit {

    @Input() bidData: Bid;
    user: User;
    item: Item;
    myDate = new Date();

    constructor(private datePipe: DatePipe, public rest: RestService, private route: ActivatedRoute, private router: Router) {
        this.myDate = new Date();
    }

    ngOnInit() {
        this.bidData = new Bid;

        this.rest.getUser(this.route.snapshot.params['userid']).subscribe((dataUser: User) => {
            console.log(dataUser.userName);
            this.user = dataUser;
        });

        this.rest.getItem(this.route.snapshot.params['itemid']).subscribe((dataItem: Item) => {
            console.log(dataItem.name);
            this.item = dataItem;
        });


    }

    addBid() {

        this.bidData.idUser = this.user;
        this.bidData.idItem = this.item;



        this.rest.addBid(this.bidData).subscribe((result) => {

            this.router.navigate(['/item/' + this.user.idUser]);
        }, (err) => {
            console.log(err);
        });


    }

}


