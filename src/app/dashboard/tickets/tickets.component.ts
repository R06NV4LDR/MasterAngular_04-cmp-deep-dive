import * as uuid from 'uuid';

import { Component } from "@angular/core";

import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from "./ticket.model";
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: "app-tickets",
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: uuid.v4(),
      status: "open",
    };
    this.tickets.push(ticket);
  }
}
