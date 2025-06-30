// import axios from 'axios';

// const API_BASE_URL = 'https://your-api-endpoint.com/api'; // Replace with your actual API URL

// export const searchTemples = async (query) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/temples/search`, {
//       params: { query }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Search error:", error);
//     throw error;
//   }
// };

// // For local development before API is ready
// export const mockSearchTemples = (query) => {
//   const mockData = [
//     { id: 1, name: "Tirupati Balaji", location: "Andhra Pradesh", deity: "Venkateswara" },
//     { id: 2, name: "Kashi Vishwanath", location: "Varanasi", deity: "Shiva" },
//     { id: 3, name: "Golden Temple", location: "Amritsar", deity: "N/A" },
//     { id: 4, name: "Jagannath Temple", location: "Puri", deity: "Jagannath" },
//     { id: 5, name: "Meenakshi Temple", location: "Madurai", deity: "Meenakshi" },
//   ];
  
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const results = mockData.filter(temple =>
//         temple.name.toLowerCase().includes(query.toLowerCase()) ||
//         temple.location.toLowerCase().includes(query.toLowerCase()) ||
//         temple.deity.toLowerCase().includes(query.toLowerCase())
//       );
//       resolve(results);
//     }, 300); // Simulate network delay
//   });
// };