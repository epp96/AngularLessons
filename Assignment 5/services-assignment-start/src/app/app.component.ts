import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  active = 0;
  inactive = 0;
  constructor(private counterService: CounterService) {
    this.counterService.inactiveUpdated.subscribe(
      (inactiveCount: number) => this.inactive = inactiveCount;
    );
    this.counterService.activeUpdated.subscribe(
      (activeCount: number) => this.active = activeCount;
    );
  }
  ngOnInit() {
    this.active = this.counterService.toActiveCounter;
    this.inactive = this.counterService.toInactiveCounter;
  }
}
