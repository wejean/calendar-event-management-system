import { Module } from '@nestjs/common';
import { EventModel } from './event.service';

@Module({
  providers: [EventModel],
  exports: [EventModel],
})
export class DbEventModule {}
