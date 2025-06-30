import React from 'react';
import './Festivals.css'; // optional CSS file for styling

const festivalList = [
  {
    name: "Makar Sankranti",
    date: "January 14, 2025",
    description: "Celebrated to mark the sun's transition into Capricorn. Known for kite flying and special sweets."
  },
  {
    name: "Maha Shivratri",
    date: "March 8, 2025",
    description: "Dedicated to Lord Shiva with night-long worship and fasting."
  },
  {
    name: "Rama Navami",
    date: "April 6, 2025",
    description: "Celebrates the birth of Lord Rama. Devotees read Ramayana and visit temples."
  },
  {
    name: "Janmashtami",
    date: "August 16, 2025",
    description: "Marks the birth of Lord Krishna with devotional songs and midnight celebrations."
  },
  {
    name: "Diwali",
    date: "October 20, 2025",
    description: "Festival of Lights, celebrating the return of Lord Rama to Ayodhya. Homes are decorated with lamps and rangoli."
  }
];

const Festivals = () => {
  return (
    <div className="festivals-page">
      <h1>Upcoming Festivals</h1>
      <div className="festival-list">
        {festivalList.map((festival, index) => (
          <div className="festival-card" key={index}>
            <h2>{festival.name}</h2>
            <p className="festival-date">{festival.date}</p>
            <p className="festival-description">{festival.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Festivals;
