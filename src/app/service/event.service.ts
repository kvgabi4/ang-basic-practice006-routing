import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  event: Event[] = [
    {
      name: 'koncert',
      date: '2021.02.10.',
      time: '20:30',
      location: {
        address: 'Petőfi u. 10.',
        city: 'Miskolc',
        country: 'Magyarország',
      }
    },
    {
      name: 'kiállítás',
      date: '2021.01.15.',
      time: '10:30',
      location: {
        address: 'Kossuth u. 12.',
        city: 'Békéscsaba',
        country: 'Magyarország',
      }
    },
    {
      name: 'vásár',
      date: '2021.02.04.',
      time: '05:30',
      location: {
        address: 'Búza u. 1.',
        city: 'Ónod',
        country: 'Magyarország',
      }
    },
  ]

  constructor() { }

  getAll(): any {
    return this.event;
  }
}
