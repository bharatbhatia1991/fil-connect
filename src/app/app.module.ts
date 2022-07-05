import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { InsightsComponent } from './insights/insights.component';   
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TicketDetailsComponent,
    InsightsComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
