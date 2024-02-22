// pages/create.tsx
import { useState } from 'react';
import { createEvent } from '../../utils/api'; 
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/EditEvent.module.css'; // Adjust imports based on your actual API utility paths

  export default function CreateEvent() {
    interface FormData {
      name: string;
      description: string;
      date: string;
      time: string;
      invitees: string;
    }
    interface FormErrors {
      name?: string;
      description?: string;
      date?: string;
      time?: string;
      invitees?: string;
    }
    const [formData, setFormData] = useState<FormData>({
      name: '',
      description: '',
      date: '',
      time: '',
      invitees: '',
    });
    const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});
  

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (!formData.name.trim()) {
      errors = { ...errors, name: "Event name is required." };
      formIsValid = false;
    }
    if (!formData.description.trim()) {
      errors = { ...errors, description: "Description is required." };
      formIsValid = false;
    }
    if (!formData.date.trim()) {
      errors = { ...errors, date: "Date is required." };
      formIsValid = false;
    }
    if (!formData.time.trim()) {
      errors = { ...errors, time: "Time is required." };
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop the form submission if validation fails
    }
    await createEvent({
        ...formData, invitees: formData.invitees.split(','),
        id: 0
    });
    // Redirect to home page or show success message
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create Event</h1>
      <Link href="/" passHref>
        <button className={styles.homeButton}>Go to Home</button>
      </Link>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Event Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Event Name</label>
          <input type="text" name="name" id="name" placeholder="Enter event name" value={formData.name} onChange={handleChange} className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full`} />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea name="description" id="description" placeholder="Enter event description" value={formData.description} onChange={handleChange} className={`border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full h-32 resize-none`}></textarea>
          {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
        </div>
        {/* Date */}
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
            <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className={`border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full`} />
            {errors.date && <p className="text-red-500 text-xs italic">{errors.date}</p>}
          </div>
          {/* Time */}
          <div className="w-1/2 pl-2">
            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Time</label>
            <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} className={`border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full`} />
            {errors.time && <p className="text-red-500 text-xs italic">{errors.time}</p>}
          </div>
        </div>
        {/* Invitees */}
        <div className="mb-4">
          <label htmlFor="invitees" className="block text-gray-700 font-bold mb-2">Invitees</label>
          <input type="text" name="invitees" id="invitees" placeholder="Enter invitees separated by commas" value={formData.invitees} onChange={handleChange} className={`border ${errors.invitees ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full`} />
          {errors.invitees && <p className="text-red-500 text-xs italic">{errors.invitees}</p>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Event</button>
      </form>
    </div>
  );
}
