import { Component, OnInit } from '@angular/core';
import { RestItemService } from '../rest-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import{ Item} from 'src/app/model/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {

  item:Item;
   userId : number;
  enabled : Boolean;
    
  constructor(public rest:RestItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.enabled = false;
      this.userId = this.route.snapshot.params['idUser'];
    this.rest.getItem(this.route.snapshot.params['idItem']).subscribe((data: Item) => {
      //console.log(data);
      this.item = data;
        if (this.item.idUser.idUser == this.userId)
            this.enabled = true;
    });
    
   
  }
  
  goBack(){
      window.history.back();
  }

}
