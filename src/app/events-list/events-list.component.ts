import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: Event[] = this.eList.getAll();

  dataTypes: string[] = ['Event', 'Date', 'Time', 'Address']

  constructor(
    private eList: EventService,
  ) {
    console.log(this.eventList)
   }

  ngOnInit(): void {
  }

}
