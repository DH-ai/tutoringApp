import React from 'react';

function Footer() {
  return (
    <footer className=" bg-white  text-gray-600 pt-4 w-full ">
      <div className="container my-4 px-6 md:flex md:justify-between ">
        
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-semibold">Tutorite</h1>
          <p className="mt-2 text-gray-400">Enhancing learning with a collaborative platform for teachers and students.</p>
        </div>
        
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="/home" className="hover:text-blue-400">Home</a></li>
            <li><a href="/student-dashboard" className="hover:text-blue-400">Student Dashboard</a></li>
            <li><a href="/teacher-dashboard" className="hover:text-blue-400">Teacher Dashboard</a></li>
            <li><a href="/assignments" className="hover:text-blue-400">Assignments</a></li>
            <li><a href="/support" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Email: support@eduapp.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Office: 123 Education St., Knowledge City</li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <div className="flex mt-2 space-x-4">
            <a href="https://facebook.com" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-facebook-f"></i> {/* Add actual icons */}
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-blue-300 hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="text-pink-400 hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className=" border-t border-gray-200 py-2 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} EduApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
