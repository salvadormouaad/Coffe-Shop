import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to an API or email
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="relative pt-100 max-sm:pt-50 pb-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#C37841] focus:border-[#C37841] text-gray-800"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#C37841] focus:border-[#C37841] text-gray-800"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#C37841] focus:border-[#C37841] text-gray-800"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#C37841] text-white font-semibold py-3 rounded-md hover:bg-[#2D1801] focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">Or you can reach us via:</p>
          <p className="mt-2 text-md text-gray-600">Email: <a href="mailto:contact@yourdomain.com" className="text-[#C37841]">contact@yourdomain.com</a></p>
          <p className="mt-1 text-md text-gray-600">Phone: <span className="text-[#C37841]">+123 456 7890</span></p>
        </div>
      </div>
    </div>
  );
}
