import React from 'react';
import './LiveDarshan.css'; // Optional: if you want to style it separately

const LiveDarshan = () => {
  return (
    <div className="live-darshan-page">
      <h1>Live Darshan</h1>
      <p>Experience spiritual bliss with real-time darshan from famous temples across India.</p>

      <div className="darshan-videos">
        <div className="video-card">
          <h3>Tirupati Balaji Live</h3>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="Tirupati Live"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-card">
          <h3>Golden Temple Live</h3>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="Golden Temple Live"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LiveDarshan;
