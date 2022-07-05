import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  selectedTicket = new BehaviorSubject<any>(false);
  constructor() { }
}
