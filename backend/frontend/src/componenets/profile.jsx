import React from 'react';

function Profile() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen flex flex-col items-center font-sans">
      {/* Header */}
      <header className="text-white font-bold text-3xl mt-5">DISQUS</header>
      
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mt-8 text-center">
        {/* Profile Image */}
        <div className="relative w-24 h-24 mx-auto -mt-16 rounded-full border-4 border-white overflow-hidden">
          <img
            src="https://via.placeholder.com/150" // Replace with an actual image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Username */}
        <h2 className="text-2xl font-semibold mt-4">James Slocum</h2>
        <p className="text-gray-500">@jamesslocum</p>
        
        {/* Stats */}
        <div className="flex justify-center space-x-8 mt-4">
          <div>
            <span className="text-lg font-bold">15</span>
            <p className="text-gray-500 text-sm">Comments</p>
          </div>
          <div>
            <span className="text-lg font-bold">1</span>
            <p className="text-gray-500 text-sm">Upvote</p>
          </div>
          <div>
            <span className="text-lg font-bold">1</span>
            <p className="text-gray-500 text-sm">Follower</p>
          </div>
        </div>
        
        {/* Follow Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-5 px-6 py-2 rounded-full">
          Follow
        </button>
        
        {/* Frequented Communities */}
        <div className="mt-8 p-4 border-t border-gray-200">
          <h3 className="text-gray-600 font-semibold">Frequented Communities</h3>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <p className="text-gray-500">@jamesslocum</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-500">
        <p>Join Disqus to get your own profile like this.</p>
        <div className="flex gap-4 justify-center mt-2">
          <button className="bg-blue-700 text-white py-1 px-4 rounded">Facebook</button>
          <button className="bg-blue-500 text-white py-1 px-4 rounded">X (Twitter)</button>
          <button className="bg-gray-700 text-white py-1 px-4 rounded">Email</button>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
