import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const base = "https://tutoringapp-production.up.railway.app";
function CurrentSlots() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchsessions = async () => {
      try {
        const response = await axios.get(base + "/api/sessions/session", {
          user: `${localStorage.getItem("user_id")}`,
        });

        setSessions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };
    fetchsessions();
  }, []);
  // className="flex justify-between items-center mt-2 border-t border-gray-300  transform   hover:border-blue-500 "
  return (
    <>
    <div>
      {sessions.length > 0 &&
        sessions?.map((session) => (
          <div
            key={session.id}
            className="flex justify-between items-center mt-2 border-t border-gray-300  transform   hover:border-blue-500 "
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                {session.title}
              </h3>
              <p className="text-sm text-gray-500">{session.description}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{session.date}</p>
              <p className="text-sm text-gray-500">
                {session.startime} - {session.end_time}
              </p>
              <p className="text-sm text-gray-500">
                Max Students: {session.max_students}
              </p>
              <p className="text-sm text-gray-500">
                Students Enrolled: {session.available_spots}
              </p>
            </div>
          </div>
        ))}
    </div>
    </>
  );
}

export default CurrentSlots;
