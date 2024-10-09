import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { Router } from '@angular/router';
import { ScheduleComponent } from '../schedule/schedule.component';
import { DatabaseService } from '../../services/database.service';
import { Calendardate } from '../../models/calendardate';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, ScheduleComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  calendar = inject(CalendarService);

  days = this.calendar.days;


  constructor(private router: Router) { }
  
  
  goToSchedule(day:Calendardate){
    if(day.isUsed==true){
      alert('Seleccione un día que no se encuentre ocupado por favor.')
    } else{
    this.calendar.selectDay(day)
    this.router.navigate(['/schedule']);
  }
  }


}
