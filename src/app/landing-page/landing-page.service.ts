import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor() { }

  getAllTickets() {
    return of([
      {
        ticket: '#54632421',
        client: 'James Bond',
        subject: 'Add Nominee',
        date: '10/11/2022',
        status: 'Pending'
      },
      {
        ticket: '#54632421',
        client: 'James Bond',
        subject: 'Address Change',
        date: '10/11/2022',
        status: 'Pending'
      },
      {
        ticket: '#54632421',
        client: 'James Bond',
        subject: 'Post Retirement FAQ',
        date: '10/11/2022',
        status: 'Pending'
      },
      {
        ticket: '#54632421',
        client: 'James Bond',
        subject: 'Sell Stocks',
        date: '10/11/2022',
        status: 'Pending'
      },
      {
        ticket: '#54632421',
        client: 'James Bond',
        subject: 'Sell Stocks',
        date: '10/11/2022',
        status: 'Pending'
      }
    ])
  }
}
