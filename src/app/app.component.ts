import { Component } from '@angular/core';

import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DashboardItemComponent, HeaderComponent, TrafficComponent, TicketsComponent, ServerStatusComponent, TicketsComponent],
})
export class AppComponent {

}
