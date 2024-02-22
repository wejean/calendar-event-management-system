import { JSONSchema } from 'objection';
import { DatabaseSchema } from '../../database.schema';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { IEvent } from './event.interface';
import { EventValidation } from './event.validation';

export class EventModel extends BaseModel implements IEvent {
  public id: IEvent['id'];
  public name: IEvent['name'];
  public description: IEvent['description'];
  public date: IEvent['date'];
  public time: IEvent['time'];
  public invitees: IEvent['invitees'];
  public created_at: IEvent['created_at'];
  public updated_at: IEvent['updated_at'];

  static get tableName() {
    return `${DatabaseSchema.eventService}.${DatabaseTable.events}`;
  }

  static get jsonSchema(): JSONSchema {
    return EventValidation;
  }
}
