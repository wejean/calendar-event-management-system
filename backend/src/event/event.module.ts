import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventRepository } from './event.repository';
import { EventController } from './event.controller';



@Module({
  controllers: [EventController],
  providers: [
    EventService,
    EventRepository,

  ],
  exports: [EventService, EventRepository],
})
export class EventModule {}
