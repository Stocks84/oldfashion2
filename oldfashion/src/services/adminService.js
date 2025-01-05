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

// Create a new game
export const createGame = async (data) => {
    // Mock data for testing
    console.log('Creating Game:', data);
    return Promise.resolve({ id: Math.random(), ...data });
  };
  
  // Update an existing game
  export const updateGame = async (gameId, data) => {
    console.log('Updating Game:', gameId, data);
    return Promise.resolve({ id: gameId, ...data });
  };
  
  // Delete a game
  export const deleteGame = async (gameId) => {
    console.log('Deleting Game:', gameId);
    return Promise.resolve({ success: true });
  };
  
  // Create a new user
  export const createUser = async (data) => {
    console.log('Creating User:', data);
    return Promise.resolve({ id: Math.random(), ...data });
  };
  
  // Update an existing user
  export const updateUser = async (userId, data) => {
    console.log('Updating User:', userId, data);
    return Promise.resolve({ id: userId, ...data });
  };
  
  // Delete a user
  export const deleteUser = async (userId) => {
    console.log('Deleting User:', userId);
    return Promise.resolve({ success: true });
  };
  
