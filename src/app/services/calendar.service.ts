import { Injectable, signal } from '@angular/core';
import { Calendardate } from '../models/calendardate';
import { DatabaseService } from './database.service';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private database: DatabaseService) { }
  
  days = this.database.days
  daySelected = signal<any>(undefined);
  hourSelected: Schedule | undefined;
  hourNotAvailable = signal<boolean>(true);

  bookingCreated = signal<any>(undefined);

  /**
   * Este método se llama cada que se seleccione un dia del calendario
   * @param daySelected El dia que fue seleccionado en el calendario
   */
  selectDay(daySelected:Calendardate){
    this.daySelected.set(daySelected) 
    this.storeDaySelected(daySelected); 
  }

  /**
   * Almacena el día seleccionado en localStorage (para evitar que se pierda el valor si se recarga)
   * @param daySelected El día que fue seleccionado
   */
    private storeDaySelected(daySelected: Calendardate) {
      localStorage.setItem('daySelected', JSON.stringify(daySelected));
    }
  
    /**
     * Recupera el día seleccionado de localStorage
     * @returns Calendardate
     */
    getStoredDaySelected(): Calendardate {
      const storedDay = localStorage.getItem('daySelected');
      return storedDay ? JSON.parse(storedDay) : undefined;
    }

    setHourSelected(hourSelected:Schedule){
      this.hourSelected = hourSelected;
      this.hourNotAvailable.set(hourSelected.isUsed)
      console.log(this.hourNotAvailable())
    }

    


    
}
