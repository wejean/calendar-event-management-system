import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Inject,
  Get,
  Param,
  Put,
  UseGuards,
  Delete,
  Req,
  Query,
} from '@nestjs/common';
import { BaseService } from '../base';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  @Inject(EventService)
  private readonly eventService: EventService;
  @Inject(BaseService)
  private readonly baseService: BaseService;


  // create 
  @Post('')
  public async create(@Body() data: any) {
    const newEvent = await this.eventService.create(data);

    return this.baseService.transformResponse(
      'Event created successfully',
      newEvent,
      HttpStatus.CREATED,
    );
  }

  // get all
  @Get('')
  public async getAll() {
    const events = await this.eventService.getAll();
    return this.baseService.transformResponse(
      'Events retrieved successfully',
      events,
      HttpStatus.OK,
    );
  }

  // get event by id
  @Get('/:id')
  public async getById(@Param('id') id: string) {
    const event = await this.eventService.findById(id);
    return this.baseService.transformResponse(
      'Event retrieved successfully',
      event,
      HttpStatus.OK,
    );
  }

  // update event
  @Put('/:id')
  public async update(@Param('id') id: string, @Body() data: any) {
    const updatedEvent = await this.eventService.update(id, data);
    return this.baseService.transformResponse(
      'Event updated successfully',
      updatedEvent,
      HttpStatus.OK,
    );
  }

  // delete event
  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    await this.eventService.delete(id);
    return this.baseService.transformResponse(
      'Event deleted successfully',
      {},
      HttpStatus.OK,
    );
  }
}
