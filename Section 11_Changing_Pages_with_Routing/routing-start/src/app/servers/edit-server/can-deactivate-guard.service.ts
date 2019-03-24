import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

}
