/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {User} from '../model/user';
import {Bid} from './bid';
import {Category} from './category';


export class Item {

idItem: number;
name: string;
firstBid: number;
categories : Category[];
bidCollection : Bid[];
buyPrice: number;
started: Date;
ends: Date;
country: string;
lat: number;
lon: number;
location: string;
description: string;
idUser: User;
photo: Blob;
}



