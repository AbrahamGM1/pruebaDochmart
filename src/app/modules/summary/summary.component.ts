import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  calendarService = inject(CalendarService)

  name = this.calendarService.bookingCreated().user.username
  email = this.calendarService.bookingCreated().user.useremail
  phonenumber = this.calendarService.bookingCreated().user.userphone
  bookingdate = this.calendarService.bookingCreated().bookingdate
  bookinghour = this.calendarService.bookingCreated().bookingschedule

  constructor(private router: Router) { }

  goToCalendar() {
    this.router.navigate(['']);
  }

  goToList() {
    this.router.navigate(['/list/'+ this.email +'/'+ this.calendarService.bookingCreated()]);
  }
}
