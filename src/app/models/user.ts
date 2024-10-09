import { Booking } from "./booking";

export interface IUser {
    username:string,
    useremail:string,
    userphone:string,
    bookinglist:Booking[]
}
