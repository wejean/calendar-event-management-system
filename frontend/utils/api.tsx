// utils/api.ts

import axios from 'axios';

interface Event {
    id: number;
    name: string;
    description: string;
    date: string;
    time: string;
    invitees: string[];
  }

  interface EditEvent {
    name?: string;
    description?: string;
    date?: string;
    time?: string;
    invitees?: string[];
  }

  const API_URL = "http://127.0.0.1:3003";

  export async function getEvents(): Promise<Event[]> {
    // use axios
  const response = await axios.get(`${API_URL}/events`);
  return response.data.data;
  }
  
  export async function getEventById(id: string): Promise<Event> {
  const response = await axios.get(`${API_URL}/events/${id}`);
  return response.data.data;
  }
  
  export async function createEvent(data: Event): Promise<void> {
    const response = await axios.post(`${API_URL}/events`, data);
    return response.data.data;
  }
  
  export async function updateEvent(updatedEvent: EditEvent, eventId:string): Promise<void> {
  const response = await axios.put(`${API_URL}/events/${eventId}`, updatedEvent);
  return response.data.data;
  }
  
  export async function deleteEvent(id: number): Promise<void> {
    const response = await axios.delete(`${API_URL}/events/${id}`);
    return response.data.data;
  }
  