import { IBase } from '../base';

export interface IEvent extends IBase {
  name: string;
  description: string;
  date: string;
  time: string;
  invitees: string[];
}
