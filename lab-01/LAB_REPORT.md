# AURORA UNIVERSITY
### Department of Computer Science & Engineering (AI & DE)
### Academic Year: 2026-2027

---

# LABORATORY RECORD / PRACTICAL REPORT

| **Course Name** | Backend Development Fundamentals |
| :--- | :--- |
| **Lab Number** | Lab 1 |
| **Lab Title** | Node.js and Express Server |
| **Student Name** | A.VENKATA SAI |
| **Registration Number** | 252U1R5010 |
| **Branch & Section** | B.Tech CSE (AI & DE), 2nd Year, Section 2A |
| **Semester** | IV Semester |
| **Date of Performance** | 01-11-2026 |
| **Faculty In-Charge** | [Faculty Name / Evaluator] |

---

## Evaluation Grid (For Faculty Use Only)

| Criteria | Maximum Marks | Marks Awarded | Remarks |
| :--- | :---: | :---: | :--- |
| Pre-Lab Preparation & Theory Understanding | 10 | | |
| Implementation & Program Execution | 20 | | |
| Output Verification & Error Handling | 10 | | |
| Viva Voce Performance | 10 | | |
| **Total Marks** | **50** | | |

**Signature of Faculty In-Charge:** ________________________  
**Date of Evaluation:** ________________________

---

## 1. Aim

To study the architecture of Node.js and the Express.js framework, initialize a backend project using Node Package Manager (`npm`), construct an HTTP web server using Node’s built-in `http` module, implement a modular RESTful web server using Express.js with custom endpoints and 404 error handling, test endpoints using status codes, and prepare the project for version control and cloud deployment.

---

## 2. Learning Objectives

By the completion of this laboratory session, the student will be able to:
1. Explain the role of Node.js as a server-side JavaScript runtime environment.
2. Initialize and configure a Node.js project using `package.json`.
3. Understand the distinction between project manifests (`package.json`) and installed binaries (`node_modules`).
4. Construct a native HTTP server utilizing the built-in `http` module without third-party frameworks.
5. Create and structure a production-grade web application using Express.js.
6. Design and implement `GET` API endpoints serving plain text and structured JSON payloads.
7. Implement custom middleware for handling unmapped routes (HTTP 404 Not Found).
8. Verify HTTP status codes (`200 OK`, `404 Not Found`) via web browsers and terminal command tools (`curl`).
9. Configure environment-aware port listening (`process.env.PORT`) for cloud platforms such as Render.
10. Manage source code repositories using Git and GitHub while excluding sensitive and auto-generated files using `.gitignore`.

---

## 3. Software and Tools Required

| Software / Tool | Specification / Version | Purpose |
| :--- | :--- | :--- |
| **Operating System** | Windows 10 / 11 | Host operating system |
| **Node.js** | v18.x or v20.x+ (Tested on v24.14.0) | JavaScript server runtime environment |
| **npm** | v10.x+ (Tested on v11.9.0) | Node package and dependency manager |
| **Code Editor** | Visual Studio Code (VS Code) | Source code editing, debugging, terminal access |
| **Version Control** | Git & GitHub | Distributed version control and remote code hosting |
| **Testing Tools** | Web Browser (Chrome/Edge), `curl` | API endpoint testing and status code inspection |
| **Cloud Hosting** | Render (Web Service) | Public cloud application hosting |

---

## 4. Theoretical Background

### 4.1 What is Node.js?
Node.js is an open-source, cross-platform, single-threaded runtime environment that executes JavaScript code outside a web browser. Built on Google Chrome's V8 JavaScript engine, Node.js uses an event-driven, non-blocking asynchronous I/O model. This makes it efficient and lightweight for data-intensive, distributed backend applications.

### 4.2 The Built-in `http` Module
Node.js includes a native module named `http` that provides functions and classes to transfer data over the Hypertext Transfer Protocol (HTTP). Calling `http.createServer()` instantiates an HTTP server object capable of listening on specified ports and responding to client requests via low-level stream methods like `res.writeHead()` and `res.end()`.

### 4.3 Why Express.js?
While the native `http` module is functional, building large-scale web services directly on it requires manually parsing URLs, querying strings, routing HTTP verbs, parsing request bodies, and setting content headers. Express.js is a minimalist, flexible web application framework that abstracts these low-level operations, providing:
- Declarative route handling (`app.get`, `app.post`, etc.).
- Robust middleware architecture.
- Built-in utilities for JSON serialization (`res.json()`).
- Error handling pipelines.

### 4.4 Request and Response Cycle
In client-server architecture:
- **Request (`req`)**: An object encapsulating the client's HTTP request, including headers, URL route, HTTP verb, parameters, query strings, and body.
- **Response (`res`)**: An object providing server methods to transmit data back to the client, along with HTTP status codes and content headers.

### 4.5 HTTP Status Codes
HTTP status codes are standardized three-digit integers returned by the server:
- **2xx (Success)**: `200 OK` indicates that the client's request was received, understood, and successfully processed.
- **4xx (Client Error)**: `404 Not Found` indicates that the server cannot locate the requested URI route.

---

## 5. Step-by-Step Procedure

### Step 1: Workspace and Directory Setup
1. Create a dedicated project directory structure for the coursework:
   ```bash
   mkdir -p "AREPALLI VENKATASAI/lab-01/screenshots"
   cd "AREPALLI VENKATASAI/lab-01"
   ```

### Step 2: Initialize Node.js Project
1. Initialize the project with default settings:
   ```bash
   npm init -y
   ```
2. This creates `package.json`, which tracks project metadata, scripts, and dependencies.

### Step 3: Install Express.js Dependency
1. Install Express.js from the npm registry:
   ```bash
   npm install express
   ```
2. Verify that `express` is added under the `dependencies` key in `package.json` and `package-lock.json` is generated.

### Step 4: Implement Low-Level HTTP Server
1. Create a file named `http-server.js`.
2. Import the built-in `http` module.
3. Call `http.createServer()` to return a plain-text message `"Hello"`.
4. Bind the server to port 3000 using `server.listen()`.

### Step 5: Implement Modular Express Server
1. Create a file named `server.js`.
2. Initialize Express using `const app = express()`.
3. Set the port dynamically: `const PORT = process.env.PORT || 3000`.
4. Register the required endpoints:
   - `GET /` -> Returns greeting text.
   - `GET /about` -> Returns student and course JSON data.
   - `GET /time` -> Returns current timestamp using `new Date()`.
5. Register a 404 middleware at the bottom of the route stack to intercept unmapped routes.
6. Bind the server using `app.listen(PORT, '0.0.0.0', ...)`.

### Step 6: Configure Execution Scripts and `.gitignore`
1. Update `package.json` with standard lifecycle scripts:
   - `"start": "node server.js"`
   - `"dev": "node --watch server.js"`
   - `"http": "node http-server.js"`
2. Create `.gitignore` to prevent committing `node_modules/` and environment files.

### Step 7: Local Testing and Verification
1. Test `http-server.js`:
   ```bash
   npm run http
   ```
2. Test `server.js`:
   ```bash
   npm start
   ```
3. In a separate terminal or web browser, verify all four test cases: `/`, `/about`, `/time`, and `/invalid`.

---

## 6. Source Code

### 6.1 `http-server.js` (Built-in HTTP Module Server)
```javascript
// ============================================================================
// Lab 1: Node.js Built-in HTTP Server
// Student: A.VENKATA SAI | Reg: 252U1R5010 | Section: CSE AI&DE 2A
// ============================================================================

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello');
});

server.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(` Node.js HTTP Server is running!`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(` Press Ctrl + C to stop the server.`);
  console.log(`=========================================`);
});
```

---

### 6.2 `server.js` (Express.js Production Server)
```javascript
// ============================================================================
// Lab 1: Express.js Web Server with REST Endpoints and 404 Handler
// Student: A.VENKATA SAI | Reg: 252U1R5010 | Section: CSE AI&DE 2A
// ============================================================================

const express = require('express');
const app = express();

// Configure dynamic port for cloud hosting or local fallback
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Endpoint 1: Root Welcome Route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to My Node.js and Express Server!');
});

// Endpoint 2: About Student & Course Route
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'AREPALLI VENKATASAI',
    section: 'CSE AI&DE 2A',
    course: 'Backend Development Fundamentals',
    lab: 'Lab 1: Node.js and Express Server'
  });
});

// Endpoint 3: Current Time Route
app.get('/time', (req, res) => {
  const currentDate = new Date();
  res.status(200).json({
    currentTime: currentDate
  });
});

// Endpoint 4: 404 Route Not Found Catch-All Middleware
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '404 - Route Not Found'
  });
});

// Bind server to port
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
```

---

### 6.3 `package.json`
```json
{
  "name": "lab-01",
  "version": "1.0.0",
  "description": "Backend Development Fundamentals Lab 1 - Node.js and Express Server",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js",
    "http": "node http-server.js"
  },
  "keywords": [
    "nodejs",
    "express",
    "backend",
    "aurora-university",
    "lab-01"
  ],
  "author": "A.VENKATA SAI (252U1R5010)",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "express": "^5.3.0"
  }
}
```

---

## 7. Execution Results & Testing Table

The endpoints were evaluated through automated test requests. The results are summarized below:

| Test Case # | Request URL | HTTP Method | Expected Status | Actual Status | Response Payload Received | Result |
| :---: | :--- | :---: | :---: | :---: | :--- | :---: |
| 1 | `http://localhost:3000/` | GET | `200 OK` | `200 OK` | `Welcome to My Node.js and Express Server!` | **PASS** |
| 2 | `http://localhost:3000/about` | GET | `200 OK` | `200 OK` | `{"name":"AREPALLI VENKATASAI","section":"CSE AI&DE 2A","course":"Backend Development Fundamentals","lab":"Lab 1: Node.js and Express Server"}` | **PASS** |
| 3 | `http://localhost:3000/time` | GET | `200 OK` | `200 OK` | `{"currentTime":"2026-11-01T13:15:45.558Z"}` | **PASS** |
| 4 | `http://localhost:3000/invalid` | GET | `404 Not Found` | `404 Not Found` | `{"success":false,"message":"404 - Route Not Found"}` | **PASS** |

---

## 8. Screenshot Verification Evidence

> *Instructions: Genuine screenshots must be captured from the running application on your local machine using the Windows Snipping Tool (`Win + Shift + S`) and saved into `lab-01/screenshots/`.*

### Figure 1: Root Greeting Endpoint (`GET /`)
*(Showing HTTP 200 and greeting text displayed in browser)*  
File: `screenshots/01-home-endpoint.png`

### Figure 2: About Endpoint (`GET /about`)
*(Showing HTTP 200 and JSON containing Student Name, Section, Course, and Lab)*  
File: `screenshots/02-about-endpoint.png`

### Figure 3: Time Endpoint (`GET /time`)
*(Showing HTTP 200 and ISO formatted current timestamp JSON)*  
File: `screenshots/03-time-endpoint.png`

### Figure 4: 404 Route Not Found Endpoint (`GET /invalid`)
*(Showing HTTP 404 and error response JSON)*  
File: `screenshots/04-404-endpoint.png`

### Figure 5: Server Startup in VS Code Terminal
*(Showing execution of `npm start` and terminal banner message)*  
File: `screenshots/05-server-running.png`

---

## 9. Viva Voce Questions & Answers

### Q1: What is Node.js?
**Answer:** Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine that allows developers to run JavaScript on the server side. It uses an event-driven, non-blocking asynchronous I/O architecture.

### Q2: What is Express.js?
**Answer:** Express.js is a minimalist, flexible web application framework for Node.js. It simplifies server-side web development by providing powerful routing, middleware support, template engines, and simplified HTTP request/response handling.

### Q3: What is package.json?
**Answer:** `package.json` is the configuration and manifest file of a Node.js project. It records essential project metadata (name, version, author), defines lifecycle scripts (start, dev, test), and lists the external packages (dependencies and devDependencies) required by the application.

### Q4: What is node_modules?
**Answer:** `node_modules` is a local directory created by npm during `npm install`. It contains the actual source code and binaries of all third-party libraries and their transitive dependencies needed by the project.

### Q5: What is the difference between Node.js and Express.js?
**Answer:** 
- **Node.js** is a runtime environment that executes JavaScript outside the browser.
- **Express.js** is a web framework that runs *on top of* Node.js to streamline HTTP server creation, route management, and middleware integration.

### Q6: What does http.createServer() do?
**Answer:** `http.createServer()` is a method from Node's built-in `http` module. It instantiates an instance of `http.Server` and takes a callback function with `(req, res)` parameters that executes whenever an HTTP request reaches the server.

### Q7: What does app.listen() do?
**Answer:** In Express, `app.listen()` binds the application to a specified networking port and IP address, launching the underlying HTTP server so it can listen for incoming TCP connections.

### Q8: What are request and response objects?
**Answer:**
- **Request (`req`)**: Represents the incoming HTTP request from the client, holding query strings, parameters, body data, headers, and HTTP methods.
- **Response (`res`)**: Represents the outgoing HTTP response generated by the server, allowing developers to set headers, status codes, and send body data back to the client.

### Q9: What is an API endpoint?
**Answer:** An API endpoint is a specific digital location (composed of a URL path combined with an HTTP method such as GET, POST, PUT, DELETE) where a client can access a particular resource or service on the server.

### Q10: What is an HTTP status code?
**Answer:** An HTTP status code is a three-digit standard numeric response from a server indicating the status of the requested operation (e.g., 2xx for success, 3xx for redirection, 4xx for client error, 5xx for server error).

### Q11: What is the difference between status codes 200 and 404?
**Answer:**
- **`200 OK`**: Indicates the request succeeded and the server returned the requested resource.
- **`404 Not Found`**: Indicates the server cannot find the requested route or resource.

### Q12: Why do we use process.env.PORT?
**Answer:** Cloud hosting providers (e.g., Render, Heroku) dynamically assign an available port to web applications at runtime through environment variables. Using `process.env.PORT || 3000` allows the server to adopt the cloud provider's port in production while falling back to port 3000 in local development.

### Q13: What is middleware?
**Answer:** Middleware functions in Express are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. They can execute code, modify `req` and `res`, end the request-response cycle, or call `next()` to pass control to the next handler.

### Q14: Why do we use .gitignore?
**Answer:** `.gitignore` specifies untracked files and folders that Git should intentionally ignore. It prevents committing heavy, generated folders like `node_modules/` or sensitive environment files (`.env`), keeping the repository lightweight, secure, and clean.

---

## 10. Public Project Links

- **GitHub Repository URL:** `https://github.com/AREPALLI-VENKATASAI/AREPALLI-VENKATASAI` *(Replace with your actual public repository URL)*
- **Public Cloud Deployment URL (Render):** `https://your-render-service.onrender.com` *(Replace with your live Render URL)*

---

## 11. Conclusion

In this laboratory practical, the foundational principles of server-side programming with Node.js and Express.js were successfully explored and implemented. Starting from initializing an npm project and creating a low-level native HTTP server, the transition to Express.js demonstrated clear advantages in code clarity, routing expressiveness, and middleware management. 

All assigned endpoints (`/`, `/about`, `/time`) and the custom 404 handler were implemented, executed, and verified to return accurate payloads and proper HTTP status codes. The project has been structured according to industry best practices, with deterministic dependency locking, Git version control safeguards, and cloud deployment compatibility.
