"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getEvents } from '../utils/api'; // Import the new functions
import styles from '../styles/Home.module.css';

interface Event {
  id: number;
  name: string;
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const eventsData = await getEvents();
    setEvents(eventsData);
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      <ul className={styles.eventList}>
        {events?.map(event => (
          <li key={event?.id} className={styles.eventItem}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link href={`/event/event/?eventId=${event?.id}`} passHref>
                <span className={styles.eventLink}>{event?.name}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Link href='/event/create' passHref>
        <span className={styles.createButton}>Create Event</span>
      </Link>
    </div>
  );
}
