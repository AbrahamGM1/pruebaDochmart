import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  user = signal('')

  constructor(private router: Router,private route: ActivatedRoute, ) { }

  reservations = [1,2,3]


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const username = params['useremail']
      this.user.set(username);
      const list =params['bookinglist']
      this.reservations.push(list)
    })
  }

  goToCalendar() {
    this.router.navigate(['']);
  }

}
