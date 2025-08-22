import { Component, input, signal } from "@angular/core";

import { ControlComponent } from "../../../shared/control/control.component";
import { Ticket } from "../ticket.model";

@Component({
  selector: "app-ticket",
  standalone: true,
  imports: [],
  templateUrl: "./ticket.component.html",
  styleUrl: "./ticket.component.css",
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails() {
    //(this.detailsVisible.set(!this.detailsVisible());
    // turns to the opposite of the default value

    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
}
