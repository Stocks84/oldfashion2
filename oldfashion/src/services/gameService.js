import axios from 'axios';

const API_BASE_URL = 'https://backend-url.com/api'; // Replace with actual backend URL

export const fetchGameDetails = async (gameId) => {
  // Mock Data for Testing
  if (!gameId) {
    return Promise.reject('Invalid game ID');
  }
  return Promise.resolve({
    id: gameId,
    name: 'Beer Pong',
    description: 'A fun drinking game involving ping-pong balls and cups.',
    rules: [
      'Set up 10 cups on each side of a table.',
      'Fill the cups with a beverage of choice.',
      'Take turns attempting to throw ping-pong balls into the opposing team’s cups.',
      'Drink from a cup when a ball lands in it.',
    ],
    createdBy: 'JohnDoe',
    likes: 123,
  });
};
