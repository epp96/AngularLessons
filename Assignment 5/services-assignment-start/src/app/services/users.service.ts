import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor (private counterService: CounterService){

  }
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.toInactiveCounter++;
    this.counterService.inactiveUpdated.emit(this.counterService.toInactiveCounter);
    console.log('inactive counter = ' + this.counterService.toInactiveCounter);

  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.toActiveCounter++;
    this.counterService.activeUpdated.emit(this.counterService.toActiveCounter)
    console.log('active counter = ' + this.counterService.toActiveCounter);
  }
}
