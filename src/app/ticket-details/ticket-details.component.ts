import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  selectedTicket: any;
  constructor(private stateService: StateService, private router: Router) { }

  ngOnInit(): void {
    this.selectedTicket = this.stateService.selectedTicket.getValue();
    if (!this.selectedTicket) {
      this.router.navigateByUrl('');
    }
  }

}
