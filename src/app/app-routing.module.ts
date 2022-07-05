import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsComponent } from './insights/insights.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

const routes: Routes = [
  {
    path: 'landing-page', component: LandingPageComponent
  },
  {
    path: 'ticket-details', component: TicketDetailsComponent
  },
  {
    path: 'insights', component: InsightsComponent
  },
  {
    path: '**', component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
