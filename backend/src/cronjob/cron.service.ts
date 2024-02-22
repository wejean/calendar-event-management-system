import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EventService } from '../event';
import { EnvironmentService } from 'src/configs';

const env = EnvironmentService.getAll();

@Injectable()
export class CronService {
    constructor(
        private readonly eventService: EventService,
    ) { }

    
    @Cron('*/1 * * * *')
    async handleCron() {
       // get events that date is today
       const today = new Date().toISOString().split('T')[0];
        const events = await this.eventService.findByDate(today);
           for (let i=0;i<events.length;i++)
              {
                if (today === events[i].date){
                    // check if event time is 30   minutes from now
                    const eventTime = events[i].time;
                    const eventDate = events[i].date;
                    const eventDateTime = eventDate + ' ' + eventTime;
                    const eventDateTimeObj = new Date(eventDateTime);
                    const now = new Date();
                    const diff = eventDateTimeObj.getTime() - now.getTime();
                    const diffMinutes = Math.ceil(diff / 60000);
                    console.log(diffMinutes)
                    if (diffMinutes === 30){
                        // send email to all users
                        const users = events[i].invitees;
                        for (let j=0;j<users.length;j++){
                            const message = {
                                to: users[j],
                                from: '',
                                subject: 'Event Reminder',
                                text: 'You have an event in 30 minutes.'
                            }
                            console.log(message)
                        }
                    }
                }
                
              }
    }
}
