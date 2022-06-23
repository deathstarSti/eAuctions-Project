import { Component, OnInit, Input } from '@angular/core';
import { RestItemService } from '../rest-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import{ Item} from 'src/app/model/item';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  @Input() itemData: Item; 
    userId : number;
  constructor(public rest:RestItemService, private route: ActivatedRoute, private router: Router) { }

   ngOnInit() {
       this.userId = this.route.snapshot.params['idUser'];
    this.rest.getItem(this.route.snapshot.params['idItem']).subscribe((data: Item) => {
      //console.log(data);
      this.itemData = data;
    });
  }


  updateItem() {
      var id = this.route.snapshot.params['idItem'];
    this.rest.updateItem(this.route.snapshot.params['idItem'], this.itemData).subscribe((result) => {
        this.router.navigate(['/item-details/', this.userId, id]);
    }, (err) => {
      console.log(err);
    });
  }

}