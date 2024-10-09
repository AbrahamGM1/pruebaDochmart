import { Calendardate } from "./calendardate";
import { Schedule } from "./schedule";
import { IUser } from "./user";

export interface Booking {
    bookingdate:Calendardate,
    bookingschedule:Schedule,
    user:IUser;
}
