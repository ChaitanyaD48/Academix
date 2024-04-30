import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignmentsList = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch assignments from server when the component mounts
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      // Make a GET request to fetch assignments from the server
      const response = await axios.get("http://localhost:3000/assignments");
      setAssignments(response.data);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Assignments List
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden border-4 border-black transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {assignment.topic}
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Assignment Text:</span>{" "}
                  {assignment.assignmentText}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Deadline:</span>{" "}
                  {assignment.deadline}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Submission Type:</span>{" "}
                  {assignment.submissionType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentsList;

