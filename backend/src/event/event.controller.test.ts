import { Test, TestingModule } from '@nestjs/testing';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { BaseService } from '../base';
import { HttpStatus } from '@nestjs/common';
import { EventRepository } from './event.repository';

describe('EventController', () => {
  let eventController: EventController;
  let eventService: EventService;
  let baseService: BaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
      providers: [EventService, BaseService, EventRepository],
    }).compile();

    eventController = module.get<EventController>(EventController);
    eventService = module.get<EventService>(EventService);
    baseService = module.get<BaseService>(BaseService);
  });

  it('should create an event', async () => {
    const eventData = { 
        name: 'Test Event',
        description: 'Test Description',
        date: '2022-12-12',
        time: '12:00',
        invitees: ['Test Invitee'],
     };
    const createdEvent = { 
        id: '1', 
        name: 'Test Event',
        description: 'Test Description',
        date: '2022-12-12',
        time: '12:00',
        invitees: ['Test Invitee'],
    };

    jest.spyOn(eventService, 'create').mockResolvedValue(createdEvent);
    jest.spyOn(baseService, 'transformResponse').mockReturnValue({ message: 'Event created successfully', data: createdEvent, status: HttpStatus.CREATED.toString() });

    const result = await eventController.create(eventData);

    expect(result).toEqual({ message: 'Event created successfully', data: createdEvent, status: HttpStatus.CREATED.toString() });
  });

  it('should get all events', async () => {
    const events = [{ 
        id: '1', 
        name: 'Event 1',
        description: 'Event 1 Description',
        date: '2022-12-12',
        time: '12:00',
        invitees: ['Invitee 1'],
    }, 
    { 
        id: '2', 
        name: 'Event 2',
        description: 'Event 2 Description',
        date: '2022-12-12',
        time: '12:00',
        invitees: ['Invitee 2'],
    }];
    jest.spyOn(eventService, 'getAll').mockResolvedValue(events);
    jest.spyOn(baseService, 'transformResponse').mockReturnValue({ message: 'Events retrieved successfully', data: events, status: '200' });

    const result = await eventController.getAll();

    expect(result).toEqual({ message: 'Events retrieved successfully', data: events, status: HttpStatus.OK.toString() });
  });

  it('should get an event by id', async () => {
    const eventId = '1';
    const event = { 
        id: '1', 
        name: 'Test Event',
        description: 'Test Description',
        date: '2022-12-12',
        time: '12:00',
        invitees: ['Test Invitee'],
    };

    jest.spyOn(eventService, 'findById').mockResolvedValue(event);
    jest.spyOn(baseService, 'transformResponse').mockReturnValue({ message: 'Event retrieved successfully', data: event, status: '200' });

    const result = await eventController.getById(eventId);

    expect(result).toEqual({ message: 'Event retrieved successfully', data: event, status: HttpStatus.OK.toString() });
  });

  it('should update an event', async () => {
    const eventId = '1';
    const eventData = { name: 'Updated Event' };
    const updatedEvent = { id: '1', name: 'Updated Event' };
    jest.spyOn(eventService, 'update').mockResolvedValue(updatedEvent);
    jest.spyOn(baseService, 'transformResponse').mockReturnValue({ message: 'Event updated successfully', data: updatedEvent, status: HttpStatus.OK.toString() });

    const result = await eventController.update(eventId, eventData);

    expect(result).toEqual({ message: 'Event updated successfully', data: updatedEvent, status: HttpStatus.OK.toString() });
  });

  it('should delete an event', async () => {
    const eventId = '1';

    jest.spyOn(eventService, 'delete').mockResolvedValue(1);
    jest.spyOn(baseService, 'transformResponse').mockReturnValue({ message: 'Event deleted successfully', data: {}, status: HttpStatus.OK.toString() });

    const result = await eventController.delete(eventId);
    expect(result).toEqual({ message: 'Event deleted successfully', data: {}, status: HttpStatus.OK.toString() });
  });
});
