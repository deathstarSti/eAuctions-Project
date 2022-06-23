/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Item} from '../model/item';
export class User {
idUser: number;
userName: string;
password: string;
firstName: string;
lastName: string;
email: string;
phoneNumber: string;
afm: string;
address: string;
location: string;
country: string;
sellerRating: number;
bidderRating: number;
itemCollection : Item[];
accepted : number;
}
