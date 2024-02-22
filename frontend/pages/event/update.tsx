// pages/event/edit/[eventId].tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getEventById, updateEvent } from '../../utils/api';
import styles from '../../styles/EditEvent.module.css'; // Adjust imports based on your actual API utility paths
import Link from 'next/link';

const EditEventPage = () => {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    invitees: '',
  });
  const router = useRouter();
  const { eventId } = router.query;

  useEffect(() => {
    const fetchEventData = async () => {
      if (typeof eventId === 'string') {
        const eventData = await getEventById(eventId);
        if (eventData) {
          // Assuming your event data fits directly into the state structure
          // Adjust as necessary for your data format
          setEvent({
            name: eventData.name,
            description: eventData.description,
            date: eventData.date,
            time: eventData.time,
            invitees: eventData?.invitees?.join(', '), // Assuming invitees is an array
          });
        }
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedEvent = {
      ...event,
      invitees: event?.invitees?.split(',').map(invitee => invitee.trim()), // Convert back to array and trim whitespace
    };
    await updateEvent(updatedEvent, eventId as string); 
    router.push(`/event/event/?eventId=${eventId}`); // Redirect to the event detail page
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Edit Event</h1>
      <Link href="/" passHref>
        <button className={styles.homeButton}>Go to Home</button>
      </Link>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input type="text" name="name" value={event.name} onChange={handleChange} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Description:</label>
          <textarea name="description" value={event.description} onChange={(e) => handleChange(e as unknown as React.FormEvent<HTMLInputElement>)} className={styles.textarea}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Date:</label>
          <input type="date" name="date" value={event.date} onChange={handleChange} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Time:</label>
          <input type="time" name="time" value={event.time} onChange={handleChange} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Invitees:</label>
          <input type="text" name="invitees" value={event.invitees} onChange={handleChange} className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Update Event</button>
      </form>
    </div>
  )
};

export default EditEventPage;
