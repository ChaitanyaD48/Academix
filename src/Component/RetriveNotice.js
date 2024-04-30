import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RetrieveNotice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching notices...');
    axios.get('http://localhost:3000/api/aptices')
      .then(response => {
        console.log('Notices fetched:', response.data);
        setNotices(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching notices:', error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-black">Notices</h1>
        {notices.map(notice => (
          <div key={notice._id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg text-black mb-2">{notice.noticeText}</p>
            <p className="text-sm text-gray-500">Date: {new Date(notice.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetrieveNotice;
