import React from "react";
import Navbar from "../componenets/navbar";

function ServicesOffered() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Services Offered</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">One-on-One Tutoring</h3>
          <p className="mt-2">
            Personalized, one-on-one tutoring sessions tailored to each
            student's needs, focusing on their strengths and weaknesses. Our
            tutors work closely with students to ensure they grasp difficult
            concepts and excel in their studies.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Group Classes</h3>
          <p className="mt-2">
            Interactive group classes where students can learn together, discuss
            ideas, and gain different perspectives. These classes foster a
            collaborative learning environment and help students develop
            teamwork skills.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Exam Preparation</h3>
          <p className="mt-2">
            Targeted exam preparation sessions, covering past papers, test
            strategies, and essential concepts for success. Our tutors provide
            tips and techniques to help students perform their best on exam day.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Homework Help</h3>
          <p className="mt-2">
            Assistance with homework assignments to help students understand the
            material and complete their work effectively. Our tutors guide
            students through challenging problems and ensure they stay on track
            with their coursework.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Online Classes</h3>
          <p className="mt-2">
            Convenient online classes available for remote learning, allowing
            students to learn from anywhere. Our online platform provides a
            flexible and accessible way for students to receive high-quality
            education.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesOffered;
