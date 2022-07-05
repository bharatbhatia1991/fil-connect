import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, RowDoubleClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { StateService } from '../state.service';
import { LandingPageService } from './landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public rowData$!: Observable<any[]>;
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  columnDefs: ColDef[] = [
    { field: 'ticket', headerName: 'Ticket' },
    { field: 'client', headerName: 'Client' },
    { field: 'subject', headerName: 'Subject' },
    { field: 'date', headerName: 'Date' },
    { field: 'status', headerName: 'Status' }
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  constructor(private service: LandingPageService,
    private stateService: StateService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.service.getAllTickets();
  }

  rowDoubleClicked(params: RowDoubleClickedEvent) {
    this.stateService.selectedTicket.next(params.node.data);
    this.router.navigateByUrl('ticket-details');
  }
}
