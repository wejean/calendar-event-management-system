// create-user-cron.module.ts
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron.service';
import { EventModule } from 'src/event';

@Module({
  imports: [ScheduleModule.forRoot(),
    EventModule,
],
  providers: [
    CronService,
],
})
export class CronModule {}
