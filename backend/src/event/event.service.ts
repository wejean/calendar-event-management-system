import {
  Inject,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { CreateEventDto } from './dto';
import { EventRepository } from './event.repository';
import { EnvironmentService } from '../configs';
const env = EnvironmentService.getAll();



@Injectable()
export class EventService {
  constructor(eventRepo: EventRepository) {
    this.eventRepo = eventRepo;
  }
  @Inject(EventRepository)
  private readonly eventRepo: EventRepository;
  public async create(data: CreateEventDto) {
    try{
    return await this.eventRepo.create(data);
    }catch (error){
        throw new BadRequestException(error.message);
        }
   }


  // get all posts
  public async getAll() {
    try{
    return await this.eventRepo.findAll();
    } catch (error){
        throw new BadRequestException(error.message);
        }
    }

  // update event
  public async update(id: string, data: CreateEventDto) {
    try{
    const event = await this.eventRepo.update(id, data);
    return event;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
    }

    // get post by id
    public async findById(id: string) {
        try{
        return await this.eventRepo.findById(id);
        } catch (error){
            throw new BadRequestException(error.message);
            }
        }

        // delete post
        public async delete(id: string) {
            try{
           return await this.eventRepo.delete(id);
            } catch (error){
                throw new BadRequestException(error.message);
                }
            }

        // get by date
        public async findByDate(date: string) {
            try{
            return await this.eventRepo.findByDate(date);
            } catch (error){
                throw new BadRequestException(error.message);
                }
            }

    }