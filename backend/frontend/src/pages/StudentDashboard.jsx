import React, { useState } from 'react';
import ProfileSection from '../componenets/ProfileSection';
import SessionsSection from '../componenets/SessionsSection';
import MessagesSection from '../componenets/MessageSection';
import AccountSettings from '../componenets/AccountSettings';
import Navbar from '../componenets/navbar';

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  

  return (
    <div>
        {/* Navbar */}
        <Navbar />

      
      {/* Navigation Tabs */}
      <div className='px-56   bg-blue-700'>

        <div className='flex justify-start items-center w-full'>
  
        <button className = "text-stone-100 text-l font-sans font-semibold p-2"onClick={() => setActiveTab('dashboard')}>Dashboard</button>
        <button className = "text-stone-100 text-l font-sans font-semibold p-2"onClick={() => setActiveTab('messages')}>My Messages</button>
        <button className = "text-stone-100 text-l font-sans font-semibold p-2"onClick={() => setActiveTab('account')}>My Account</button>
      </div>
      </div>
      
      {/* Content Based on Active Tab */}
      <div>
        {activeTab === 'dashboard' && (
          <>
            <ProfileSection />
            <SessionsSection />
          </>
        )}
        {activeTab === 'messages' && <MessagesSection />}
        {activeTab === 'account' && <AccountSettings />}
      </div>
    </div>
  );
} 

export default StudentDashboard;
