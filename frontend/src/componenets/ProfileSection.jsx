import React from "react";
function ProfileSection(props) {
  const { username, phone, first_name, last_name, address, city, state, bio, subjectInterested, role } = props;
  console.log(username);
  return (
    <div className="max-w-sm mx-auto  bg-white rounded-lg overflow-hidden">
      <div className="px-8 pt-6 pb-4 ">
        <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
        <div className="mb-6 text-center">
          <img
            src={props.url} // Replace with actual photo URL
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-700 text-base">
            <strong>Username:</strong> {username}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="text-gray-700 text-base">
            <strong>First Name:</strong> {first_name}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Last Name:</strong> {last_name}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Address:</strong> {address}
          </p>
          <p className="text-gray-700 text-base">
            <strong>City:</strong> {city}
          </p>
          <p className="text-gray-700 text-base">
            <strong>State:</strong> {state}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Bio:</strong> {bio}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Subject Interested:</strong> {subjectInterested}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Role:</strong> {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
