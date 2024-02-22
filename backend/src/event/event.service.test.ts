import { EventService } from './event.service';
import { EventRepository } from './event.repository';
import { BadRequestException } from '@nestjs/common';

jest.mock('./event.repository');

describe('EventService', () => {
  let eventService: EventService;
  let eventRepository: EventRepository;

  beforeEach(() => {
    eventRepository = new EventRepository() as jest.Mocked<EventRepository>;
    eventService = new EventService(eventRepository);
    jest.spyOn(eventRepository, 'create').mockImplementation(async (eventData) => {
      return { name: 'Test Event', date: '2022-12-31', time: '18:00', invitees: ['Alice', 'Bob'], description: 'Test Description' }; // Mock return value
    });
  jest.spyOn(eventRepository, 'findAll').mockImplementation(async () => {
    return [{ name: 'Test Event 1', date: '2022-12-31', time: '18:00', invitees: ['Alice', 'Bob'], description: 'Test Description 1' }, { name: 'Test Event 2', date: '2022-12-31', time: '19:00', invitees: ['Alice', 'Bob', 'Charlie'], description: 'Test Description 2' }];
  });
})
 
  describe(
    'create', () => {
    it('should create a new event', async () => {
      const eventData = { name: 'Test Event', date: '2022-12-31', time: '18:00', invitees: ['Alice', 'Bob'], description: 'Test Description' };
      const createdEvent = await eventService.create(eventData);
      expect(createdEvent.name).toBe('Test Event');
    });

    it('should throw BadRequestException if creation fails', async () => {
      const eventData = { name: 'Test Event', date: '2022-12-31', time: '18:00', invitees: ['Alice', 'Bob'], description: 'Test Description' };
      jest.spyOn(eventRepository, 'create').mockRejectedValue(new Error('Failed to create event'));
      await expect(eventService.create(eventData)).rejects.toThrow(BadRequestException);
    });
  });

  describe('findAll', () => {
    it('should get all events', async () => {
      const allEvents = await eventService.getAll();
      expect(Array.isArray(allEvents)).toBe(true);
    });

    it('should throw BadRequestException if retrieval fails', async () => {
      jest.spyOn(eventRepository, 'findAll').mockRejectedValue(new Error('Failed to retrieve events'));
      await expect(eventService.getAll()).rejects.toThrow(BadRequestException);
    });
  });
  describe('update', () => {
    it('should update an existing event', async () => {
      const eventId = "1"
      const eventData = { name: 'Updated Event', date: '2022-12-31', time: '18:00', invitees: ['Alice', 'Bob'], description: 'Updated Description' };
      jest.spyOn(eventRepository, 'update').mockImplementation(async (id, data) => {
        return { name: 'Updated Event', date: '2022-12-31', time: '18:00', invitees: ['Alice', 'Bob'], description: 'Updated Description' }; // Mock return value
      });
      const updatedEvent = await eventService.update(eventId, eventData);   
      expect(updatedEvent.name).toBe('Updated Event');
    });

    it('should throw BadRequestException if update fails', async () => {
      const eventId = "1"
      const eventData = { id: '1', name: 'Updated Event', date: '2022-12-31', time: '18:00', invitees: ['Alice', 'Bob'], description: 'Updated Description' };
      jest.spyOn(eventRepository, 'update').mockRejectedValue(new Error('Failed to update event'));
      await expect(eventService.update(eventId, eventData)).rejects.toThrow(BadRequestException);
    });
  });

  describe('delete', () => {
    it('should delete an existing event', async () => {
      const eventId = '1';
      jest.spyOn(eventRepository, 'delete').mockImplementation(async (id) => {
        return 1; // Mock return value
      });
      const deletedEvent = await eventService.delete(eventId);
      expect(deletedEvent).toBe(1);
    });
  });
  })
