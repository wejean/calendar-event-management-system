import {
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateEventDto {
  
  @IsString()
  name: string;

  @IsString()
  description: string; 

  @IsString()
  date: string;

  @IsString()
  time: string;

  @IsString()
  invitees: string[];
}
