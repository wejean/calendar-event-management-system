import { JSONSchema } from 'objection';

export const EventValidation: JSONSchema = {
  type: 'object',
  title: 'Event Schema Validation',
  required: [
    'name',
    'description',
    'date',
    'time',
   ],
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    date: { type: 'string' },
    time: { type: 'string' },
    invitees: { type: 'array' },
  },
};
