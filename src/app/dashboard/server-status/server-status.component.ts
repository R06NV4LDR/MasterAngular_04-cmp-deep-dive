import { Component, DestroyRef, inject, OnInit } from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent implements OnInit {
  currentStatus: "online" | "offline" | "unknown" = "offline";
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    console.log("ON INIT");

    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.999999999999999

      if (rnd < 0.5) {
        this.currentStatus = "online";
      } else if (rnd < 0.9) {
        this.currentStatus = "offline";
      } else {
        this.currentStatus = "unknown";
      }
    }, 5000);
// This is thee modern approach for clearing the interval
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log("AFTER VIEW INIT");
  }

// This is the old approach to clear the interval. It should be used if the new approach above triggers an error message

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
