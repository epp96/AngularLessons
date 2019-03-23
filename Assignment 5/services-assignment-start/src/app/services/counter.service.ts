import { EventEmitter } from '@angular/core';


export class CounterService {
  public toActiveCounter: number = 0;
  public toInactiveCounter: number = 0;
  inactiveUpdated: EventEmiter = new EventEmitter<number>()
  activeUpdated: EventEmiter = new EventEmitter<number>()
}
