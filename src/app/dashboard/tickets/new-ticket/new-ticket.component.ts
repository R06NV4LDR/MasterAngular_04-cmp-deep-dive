import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // ViewChild
  @ViewChild("form") private form?: ElementRef<HTMLFormElement>;

  // Different Approach
  // private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  add = output<{ title: string; text: string }>();

  ngOnInit() {
    console.log("ONINIT");
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log("AFTER VIEW INIT");
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    this.form?.nativeElement.reset();
    //console.log(title);
    //console.log(ticketText);
  }
}
