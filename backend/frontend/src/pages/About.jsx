// src/components/AboutUs.jsx
import React from 'react';
import Navbar from '../componenets/navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className=" bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-6 text-gray-700">
          Welcome to our Teacher-Student app, a platform designed to facilitate effective communication and collaboration between teachers and students. Our mission is to enhance the learning experience through seamless interaction and access to resources.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Real-time chat for instant communication</li>
          <li>Student dashboard for tracking progress and assignments</li>
          <li>Teacher dashboard for managing classes and resources</li>
          <li>Easy access to educational materials and resources</li>
          <li>User-friendly interface with a responsive design</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="p-4 border rounded-lg shadow-lg bg-white">
              <h3 className="font-bold text-xl">Tony Start</h3>
              <p className="text-gray-600">Lead Developer</p>
              <p className="mt-2">Passionate about education and technology.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="p-4 border rounded-lg shadow-lg bg-white">
              <h3 className="font-bold text-xl">Thor Odin Son</h3>
              <p className="text-gray-600">Project Manager</p>
              <p className="mt-2">Dedicated to improving student engagement.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="p-4 border rounded-lg shadow-lg bg-white">
              <h3 className="font-bold text-xl">Captain America</h3>
              <p className="text-gray-600">UX/UI Designer</p>
              <p className="mt-2">Focused on creating intuitive user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default AboutUs;
