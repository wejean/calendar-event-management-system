import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { ConfigsModule } from './configs';
import { EventModule } from './event';
import { CronModule } from './cronjob/cron.module';
import { BaseModule } from './base';

@Module({
  imports: [
    EventModule,
    DatabaseModule,
    ConfigsModule,
    BaseModule,
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
