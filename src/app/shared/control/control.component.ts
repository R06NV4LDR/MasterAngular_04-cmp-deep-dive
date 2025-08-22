import {
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  // This approach is to be prefered over the @HostBinding Decorator (see below in Control Component)
  host: {
    class: "control",
    "(click)": "onClick()",
  },
})
export class ControlComponent {
  // @HostBinding("class") className = "control";
  // @HostListener('click')  onClick() {
  //   console.log("Clicked!");
  // }

  label = input.required<string>();
  private el = inject(ElementRef);

/*   @ContentChild("input") private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >; */

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log("Clicked!");
    console.log(this.el);
    console.log(this.control());
  }
}
