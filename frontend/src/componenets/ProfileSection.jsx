import React from "react";

function ProfileSection() {
  return (
    <div className="max-w-sm mx-auto bg-white  rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">My Profile</h2>
        <p className="text-gray-700 text-base">
          <strong>Name:</strong> Dhruv Chaturvedi
        </p>
        <p className="text-gray-700 text-base">
          <strong>Bio:</strong> A passionate learner interested in mathematics
          and science.
        </p>
      </div>
    </div>
  );
}

export default ProfileSection;
