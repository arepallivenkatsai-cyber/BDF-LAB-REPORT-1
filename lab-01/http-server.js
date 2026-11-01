/**
 * ============================================================================
 * Lab 1: Node.js and Express Server
 * Course: Backend Development Fundamentals
 * University: Aurora University
 * Student Name: A.VENKATA SAI
 * Registration Number: 252U1R5010
 * Section: CSE AI&DE 2A
 * 
 * File: http-server.js
 * Description: Basic HTTP server using Node.js built-in 'http' module
 * ============================================================================
 */

// Step 1: Import the built-in 'http' module from Node.js
const http = require('http');

// Define the port number where the server will listen
const PORT = 3000;

// Step 2: Create an HTTP server using http.createServer()
// The callback function receives:
// - req: IncomingMessage object (details about client request)
// - res: ServerResponse object (used to send data back to client)
const server = http.createServer((req, res) => {
  // Set the response HTTP status code to 200 (OK)
  // and set the Content-Type header to text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello" and end the response
  res.end('Hello');
});

// Step 3: Start the server and listen on port 3000
server.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(` Node.js HTTP Server is running!`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(` Press Ctrl + C to stop the server.`);
  console.log(`=========================================`);
});
