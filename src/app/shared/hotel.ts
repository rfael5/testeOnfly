import { Address } from "./address";
import { Amenity } from "./amenity";

export interface Hotel {
    id:number,
    favorite:boolean,
    name:string,
    description: string,
    stars: string,
    thumb: string,
    amenities:Array<Amenity>,
    hasBreakFast:boolean,
    hasRefundableRoom:boolean,
    hasAgreement:boolean,
    nonRefundable:any,
    address:Address,
    images:Array<string>,
    deals:any,
    roomsQuantity:number

}
