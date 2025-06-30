import { useParams } from 'react-router-dom';
import './TemplePage.css';

const TemplePage = () => {
  const { templeId } = useParams();

  // Mock data - replace with API calls later
  const templeData = {
    1: {
      name: "Tirupati Balaji",
      location: "Tirumala, Andhra Pradesh",
      description: "One of the richest and most visited temples in the world, dedicated to Lord Venkateswara.",
      images: [
        "https://via.placeholder.com/800x400?text=Tirupati+Main",
        "https://via.placeholder.com/400x300?text=Tirupati+View",
        "https://via.placeholder.com/400x300?text=Tirupati+Architecture"
      ],
      timings: {
        morning: "3:00 AM - 12:00 PM",
        evening: "5:00 PM - 9:00 PM",
        specialDarshan: "7:00 AM - 8:00 AM (Suprabatham)"
      },
      events: [
        { name: "Brahmotsavam", date: "September 26 - October 5, 2024" },
        { name: "Vaikunta Ekadasi", date: "December 12, 2024" }
      ],
      attractions: [
        { name: "Sri Vari Museum", distance: "0.5 km" },
        { name: "Silathoranam", distance: "1 km" },
        { name: "Akasa Ganga", distance: "2 km" }
      ]
    },
    // Add more temples as needed
    2: {
      name: "Kashi Vishwanath",
      location: "Varanasi, Uttar Pradesh",
      description: "One of the most famous Hindu temples dedicated to Lord Shiva.",
      images: [
        "https://via.placeholder.com/800x400?text=Kashi+Vishwanath+Main",
        "https://via.placeholder.com/400x300?text=Kashi+View",
        "https://via.placeholder.com/400x300?text=Kashi+Architecture"
      ],
      timings: {
        morning: "2:30 AM - 11:00 AM",
        evening: "12:00 PM - 11:00 PM",
        specialDarshan: "Mangala Aarti at 3:00 AM"
      },
      events: [
        { name: "Shivratri", date: "March 8, 2024" },
        { name: "Dev Deepawali", date: "November 15, 2024" }
      ],
      attractions: [
        { name: "Ganga Aarti", distance: "0.2 km" },
        { name: "Sarnath", distance: "10 km" },
        { name: "Dashashwamedh Ghat", distance: "0.5 km" }
      ]
    }
  };

  const temple = templeData[templeId] || templeData[1]; // Default to first temple if not found

  return (
    <div className="temple-page">
      <div className="temple-header">
        <h1>{temple.name}</h1>
        <p className="location">{temple.location}</p>
      </div>

      <div className="temple-gallery">
        <div className="main-image">
          <img src={temple.images[0]} alt={`Main view of ${temple.name}`} />
        </div>
        <div className="thumbnail-container">
          {temple.images.slice(1).map((img, index) => (
            <img key={index} src={img} alt={`View ${index + 1} of ${temple.name}`} className="thumbnail" />
          ))}
        </div>
      </div>

      <div className="temple-description">
        <h2>About the Temple</h2>
        <p>{temple.description}</p>
      </div>

      <div className="temple-details">
        <div className="detail-section">
          <h2>Darshan Timings</h2>
          <div className="timings-grid">
            <div>
              <h3>Morning</h3>
              <p>{temple.timings.morning}</p>
            </div>
            <div>
              <h3>Evening</h3>
              <p>{temple.timings.evening}</p>
            </div>
            <div>
              <h3>Special Darshan</h3>
              <p>{temple.timings.specialDarshan}</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Special Events</h2>
          <ul className="events-list">
            {temple.events.map((event, index) => (
              <li key={index}>
                <strong>{event.name}:</strong> {event.date}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Nearby Attractions</h2>
          <ul className="attractions-list">
            {temple.attractions.map((attraction, index) => (
              <li key={index}>
                <strong>{attraction.name}</strong> ({attraction.distance} away)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TemplePage;