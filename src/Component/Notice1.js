import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const NoticeComponent = () => {
  const [noticeText, setNoticeText] = useState('');

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    overflow: 'hidden', // Prevents scrolling
    background: 'linear-gradient(to bottom, #292D59, #6B388A)', // Gradient of blue and purple
  };

  const contentStyle = {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', // Box shadow for depth
    maxWidth: '90%',
    width: '400px', // Adjust the width of the content box
    maxHeight: '80vh', // Adjust the height of the content box
    overflowY: 'auto', // Enable vertical scrolling if content overflows
  };

  const textareaStyle = {
    width: '100%',
    height: '200px', // Adjust the height of the text box
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
    resize: 'none', // Prevent resizing of textarea
  };

  const buttonStyle = {
    backgroundColor: '#FFD700', // Yellow color for send button
    color: '#000000', // Black color for text
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s', // Smooth color transition on hover
  };

  const sendButtonHoverStyle = {
    backgroundColor: '#FFE400', // Brighter yellow on hover
  };

  const handleSendNotice = async () => {
    try {
      // Send noticeText to the server using Axios
      const response = await axios.post('http://localhost:3000/api/aptices', { noticeText });
      if (response.status === 200) {
        alert('Notice sent successfully!');
        setNoticeText('');
      } else {
        throw new Error('Failed to send notice');
      }
    } catch (error) {
      console.error('Error sending notice:', error);
      alert('Failed to send notice');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={{ color: '#000000', marginBottom: '20px' }}>NOTICE</h1>
        <textarea
          style={textareaStyle}
          placeholder="Write your notice here..."
          value={noticeText}
          onChange={(e) => setNoticeText(e.target.value)}
        ></textarea>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#FFE400'; // Change button color on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#FFD700'; // Revert button color on mouse leave
          }}
          onClick={handleSendNotice} // Call handleSendNotice function onClick
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default NoticeComponent;

