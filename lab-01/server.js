/**
 * ============================================================================
 * Lab 1: Node.js and Express Server
 * Course: Backend Development Fundamentals
 * University: Aurora University
 * Student Name: A.VENKATA SAI
 * Registration Number: 252U1R5010
 * Section: CSE AI&DE 2A
 * 
 * File: server.js
 * Description: Production-ready Express.js server with REST endpoints & 404 handling
 * ============================================================================
 */

// Step 1: Import the Express framework
const express = require('express');

// Step 2: Initialize the Express application
const app = express();

// Step 3: Configure the Port
// Uses deployment environment's PORT variable (for Render/Heroku) or defaults to 3000
const PORT = process.env.PORT || 3000;

// Optional Middleware: Built-in middleware to parse JSON bodies
app.use(express.json());

// ============================================================================
// API ENDPOINTS (Routes)
// ============================================================================

/**
 * Route: GET /
 * Description: Root endpoint providing a welcoming greeting
 * HTTP Status: 200 OK
 */
app.get('/', (req, res) => {
  res.status(200).send('Welcome to My Node.js and Express Server!');
});

/**
 * Route: GET /about
 * Description: Returns student and course details in JSON format
 * HTTP Status: 200 OK
 */
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'AREPALLI VENKATASAI',
    section: 'CSE AI&DE 2A',
    course: 'Backend Development Fundamentals',
    lab: 'Lab 1: Node.js and Express Server'
  });
});

/**
 * Route: GET /time
 * Description: Returns current date and time generated with new Date()
 * HTTP Status: 200 OK
 */
app.get('/time', (req, res) => {
  const currentDate = new Date();
  res.status(200).json({
    currentTime: currentDate
  });
});

// ============================================================================
// 404 NOT FOUND HANDLER (Must be registered after all valid routes)
// ============================================================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '404 - Route Not Found'
  });
});

// ============================================================================
// START SERVER
// ============================================================================
// Listening on host '0.0.0.0' allows proper binding in containerized/cloud platforms like Render
app.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(` Express.js Server successfully started!`);
  console.log(` Running on Port: ${PORT}`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(` - Root:    http://localhost:${PORT}/`);
  console.log(` - About:   http://localhost:${PORT}/about`);
  console.log(` - Time:    http://localhost:${PORT}/time`);
  console.log(` Press Ctrl + C to stop the server.`);
  console.log(`=======================================================`);
});
