import { Component, inject, signal } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Schedule } from '../../models/schedule';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../models/user';
import { Booking } from '../../models/booking';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  calendarService = inject(CalendarService);
  databaseService = inject(DatabaseService);

  completeschedule = this.calendarService.daySelected()?.completeschedule
  users = this.databaseService.users
  bookingForm: FormGroup;
  hourselected:any;


  constructor(private router: Router, private fb:FormBuilder) { 
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required]
    });

  }
  
  isDisabled =signal(this.calendarService.hourNotAvailable())


  ngOnInit(): void {

    this.completeschedule = this.calendarService.getStoredDaySelected()?.completeschedule
    const calendardate = this.calendarService.getStoredDaySelected();
    
    //Esto de aqui es para evitar sobreescribir el horario de un dia que ya fue usado
    //debido a que su valor permanecera guardado dentro del localstorage hasta que se 
    //seleccione otro dia
    if(calendardate?.isUsed===undefined || calendardate.isUsed===true){
      alert('Este dia ya fue usado')
      this.router.navigate(['']);
    }
  }

  selectHour(schedule:Schedule){
    if (schedule.isUsed) {
      alert('Seleccione una hora disponible por favor.')
    } else{
      //cambiar la variable en el servicio para que la obtenga el formulario
      this.calendarService.setHourSelected(schedule)
      this.isDisabled.set(schedule.isUsed)
      console.log(this.calendarService.daySelected())
    }
  }

  makeReservation() {
    if(this.bookingForm.valid && this.calendarService.daySelected!=undefined){
      const formData = this.bookingForm.value;
      this.hourselected = this.calendarService.hourSelected;
      console.log(formData);
      const newuser:IUser={username:formData.name, useremail:formData.email, userphone:formData.number, bookinglist:[]};
      const booking:Booking = {bookingdate:this.calendarService.daySelected(), bookingschedule:this.hourselected, user:newuser}

      //comprueba si existe el usuario en la base de datos
      //si no existe lo creas, si no, agarra al usuario de la bd
      //y hazle push a su bookinglist
      const users = this.users.find(user => user.useremail === newuser.useremail)
      if(users===undefined){
        newuser.bookinglist.push(booking);
        this.databaseService.users.push(newuser);
        this.calendarService.bookingCreated.set(booking)
        this.calendarService.daySelected().isUsed = true;
        this.router.navigate(['/summary/'+newuser.username+'/'+newuser.useremail+'/'+newuser.userphone+'/'+newuser.bookinglist]);
      } else {
        users.bookinglist.push(booking);
        this.calendarService.bookingCreated.set(booking)
        this.router.navigate(['/summary/'+users.username+'/'+users.useremail+'/'+users.userphone+'/'+users.bookinglist]);

      }
    }
  }
}
