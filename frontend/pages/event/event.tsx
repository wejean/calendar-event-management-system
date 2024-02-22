"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getEventById, deleteEvent } from '../../utils/api';
import Link from 'next/link';
import styles from '../../styles/EventDetails.module.css'; // Adjust the import path as needed

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  invitees: string[];
}

export default function EventDetail() {
  const router = useRouter();
  const { eventId } = router.query;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    async function fetchEvent() {
      if (typeof eventId === 'string') {
        const eventData = await getEventById(eventId);
        if (eventData) {
          setEvent(eventData);
        }
      }
    }
    fetchEvent();
  }, [eventId]);

  const handleDelete = async () => {
    if (event) {
      await deleteEvent(event.id);
      router.push('/');
    }
  };

  if (!event) {
    return <div className={`container mx-auto px-4 py-8 ${styles.container}`}>Loading...</div>;
  }

  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h1 className={`text-3xl font-bold mb-4 ${styles.title}`}>{event.name}</h1>
      <p className={`mb-4 ${styles.description}`}>{event.description}</p>
      <p className={styles.date}>Date: {event.date}</p>
      <p className={styles.time}>Time: {event.time}</p>
      <p className={styles.invitees}>Invitees: {event.invitees}</p>
      <div className="mt-4">
        <Link href={`/event/update/?eventId=${event.id}`} passHref>
        <span className={styles.editLink}>Edit</span>
        </Link>
        <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
      </div>
      <Link href="/" passHref>
        <button className={styles.homeButton}>Go to Home</button>
      </Link>
    </div>
  );
}
