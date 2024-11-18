const axios = require('axios');

// Replace with your actual API endpoint
const API_URL = 'https://car-management-application-olt8.onrender.com';

// Ping function to make request to your API
async function pingAPI() {
    try {
        const response = await axios.get(API_URL);
        console.log(`Ping successful at ${new Date().toISOString()}`);
        console.log('Response:', response.data);
    } catch (error) {
        console.error(`Ping failed at ${new Date().toISOString()}:`, error.message);
    }
}

// Run ping immediately and then every 5 minutes
pingAPI(); // Initial ping
const intervalId = setInterval(pingAPI, 2 * 60 * 1000); // 5 minutes in milliseconds

// Optional: Handle process termination
process.on('SIGINT', () => {
    clearInterval(intervalId);
    console.log('API pinger stopped');
    process.exit();
});
