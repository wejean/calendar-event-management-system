import { Event } from '../types';

// Assuming you have a type definition for your events
interface ApiResponse {
  data: Event[];
  message?: string;
}

// Fetch all events
export const fetchEvents = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch('/api/events');
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return { data: [], message: 'Failed to fetch events' };
  }
};

// Fetch a single event by ID
export const fetchEventById = async (id: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`/api/events/${id}`);
    const data = await response.json();
    return { data: [data] };
  } catch (error) {
    console.error(`Failed to fetch event with id ${id}:`, error);
    return { data: [], message: `Failed to fetch event with id ${id}` };
  }
};

// Create a new event
export const createEvent = async (event: Event): Promise<ApiResponse> => {
  try {
    const response = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    const data = await response.json();
    return { data: [data] };
  } catch (error) {
    console.error('Failed to create event:', error);
    return { data: [], message: 'Failed to create event' };
  }
};

// Update an existing event
export const updateEvent = async (id: string, event: Event): Promise<ApiResponse> => {
  try {
    const response = await fetch(`/api/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    const data = await response.json();
    return { data: [data] };
  } catch (error) {
    console.error(`Failed to update event with id ${id}:`, error);
    return { data: [], message: `Failed to update event with id ${id}` };
  }
};

// Delete an event
export const deleteEvent = async (id: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return { data: [data] };
  } catch (error) {
    console.error(`Failed to delete event with id ${id}:`, error);
    return { data: [], message: `Failed to delete event with id ${id}` };
  }
};
