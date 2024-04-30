import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notice1 from "./Component/Notice1";
import RetriveNotice from "./Component/RetriveNotice";
import Assignment from "./Component/Assignment";
import AssignmentsList from "./Component/AssignmentsList";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-lg font-semibold mr-4">
            Home
          </Link>
          <Link to="/assignment" className="text-white text-lg font-semibold mr-4">
            Assignment
          </Link>
          <Link to="/assignments" className="text-white text-lg font-semibold mr-4">
            Assignments List
          </Link>
          <Link to="/submit-notice" className="text-white text-lg font-semibold mr-4">
            Submit Notice
          </Link>
          <Link to="/notices" className="text-white text-lg font-semibold">
            Notices
          </Link>
        </div>
      </div>
    </nav>
  );
}


function HomePage() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-purple-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
         
        </h1>
        <p className="text-lg text-white">
         
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/assignments" element={<AssignmentsList />} />
        <Route path="/submit-notice" element={<Notice1 />} />
        <Route path="/notices" element={<RetriveNotice />} />
      </Routes>
    </Router>
  );
}

export default App;
