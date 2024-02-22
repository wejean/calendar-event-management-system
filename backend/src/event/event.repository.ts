import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base';
import { EventModel } from '../database';

@Injectable()
export class EventRepository extends BaseRepository {
  constructor() {
    super(EventModel);
  }
}
