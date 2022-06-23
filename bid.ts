import {User} from '../model/user';
import {Item} from '../model/item';

export class Bid {
idBid: number;
amount: number;
time: Date;
idUser: User;
idItem: Item;
}
