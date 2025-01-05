import axios from 'axios';

const API_BASE_URL = 'https://your-backend-url.com/api'; // Replace with your actual backend URL

// Fetch all games
export const fetchAllGames = async () => {
  // Mock data
  return Promise.resolve([
    { id: 1, name: 'Beer Pong', description: 'A classic drinking game.' },
    { id: 2, name: 'Kings Cup', description: 'A card-based drinking game.' },
    { id: 3, name: 'Flip Cup', description: 'A fun team-based game.' },
  ]);
};

// Fetch all users
export const fetchAllUsers = async () => {
  // Mock data
  return Promise.resolve([
    { id: 1, username: 'admin', email: 'admin@example.com' },
    { id: 2, username: 'john_doe', email: 'john@example.com' },
    { id: 3, username: 'jane_smith', email: 'jane@example.com' },
  ]);
};
