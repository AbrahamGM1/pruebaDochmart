import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  calendarService = inject(CalendarService)

  isDisabled =signal(this.calendarService.hourNotAvailable())

  constructor(private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.isDisabled())

    setTimeout(() => {
      console.log(this.isDisabled())
    }, 2000);
  }

  makeReservation() {
    this.router.navigate(['/summary']);
  }
}
