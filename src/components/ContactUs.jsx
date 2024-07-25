import React, { useState } from 'react';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
    alert("Message Sent!");
  };

  return (
    <section id="contact" className="container mx-auto mt-10 md:mt-0">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>Please fill this form for any query.</p>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md" 
            placeholder="Enter your name" 
            value={formData.name} 
            required
            onChange={handleChange} 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md" 
            placeholder="Enter your email" 
            value={formData.email} 
            required
            onChange={handleChange} 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea 
            id="message" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md" 
            rows="3" 
            value={formData.message} 
            onChange={handleChange} 
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    </section>
  );
};

export default ContactUs;
