// src/components/ContactUs.jsx
import React, { useState } from "react";
import Navbar from "../componenets/navbar";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Clear the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <div className="mx-auto p-6 h-screen bg-gradient-to-b from-blue-100 to-blue-300">
        <h1 className="text-3xl font-bold mb-6 text-gray-700  ">Contact Us</h1>
        <p className="mb-4 text-gray-700">
          We would love to hear from you! Whether you have questions, feedback,
          or suggestions, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2">
              <strong>Email:</strong> support@example.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="mb-4">
              <strong>Address:</strong> 123 Main St, Education City, ED 12345
            </p>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
