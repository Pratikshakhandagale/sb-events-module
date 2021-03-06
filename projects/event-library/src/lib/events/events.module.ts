import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventFilterComponent } from './components/event-filter/event-filter.component';


import { FormsModule } from '@angular/forms';
import { CommonFormElementsModule } from 'common-form-elements';
import { EventLibraryRoutingModule } from './event-routing.module';

//services
import { EventDetailService } from './services/event-detail/event-detail.service';
import { EventCreateService } from './services/event-create/event-create.service';

@NgModule({
  declarations: [EventDetailComponent, EventListComponent, EventCreateComponent, EventFilterComponent],
  imports: [
    CommonModule,
    CommonFormElementsModule,
    FormsModule,
    EventLibraryRoutingModule
  ],
  exports: [
    EventDetailComponent,
    EventListComponent,
    EventCreateComponent,
    EventFilterComponent
  ],
  providers: [
    EventDetailService,
    EventCreateService
  ]
})
export class EventsModule { }
