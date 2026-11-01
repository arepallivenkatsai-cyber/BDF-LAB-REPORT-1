# Render Cloud Deployment Guide

This guide walks you through deploying **Lab 1: Node.js and Express Server** to **Render** (free cloud web service hosting) and verifying your endpoints.

---

## 1. Prerequisites for Deployment

1. A **GitHub** account with your code pushed to a public repository (e.g., `AREPALLI VENKATASAI`).
2. A free account on [Render.com](https://render.com/).

---

## 2. Step-by-Step Deployment Instructions on Render

### Step 1: Sign In to Render
1. Visit [https://dashboard.render.com/](https://dashboard.render.com/).
2. Sign in using your **GitHub** account (recommended, as it automatically links your repositories).

### Step 2: Create a New Web Service
1. On the Render Dashboard, click the blue **"New +"** button at the top right.
2. Select **"Web Service"**.
3. Choose **"Build and deploy from a Git repository"** and click **Next**.

### Step 3: Connect Your GitHub Repository
1. In the repository list, find your repository: `BDF-LAB-REPORT-1` (or `arepallivenkatsai-cyber/BDF-LAB-REPORT-1`).
2. Click **Connect**.
   *(If your repository is not showing, click "Configure access" on GitHub and grant Render permissions to view your repository).*

### Step 4: Configure Web Service Settings
Fill in the configuration fields with the following exact values:

| Configuration Field | Setting Value | Explanation |
| :--- | :--- | :--- |
| **Name** | `BDF-LAB-REPORT-1` | Your Render service name |
| **Region** | `Ohio (US East)` | Deployment cloud server region |
| **Branch** | `main` | Production branch to deploy from |
| **Root Directory** | `lab-01` | **CRITICAL:** Tells Render that `package.json` and code are inside `lab-01` |
| **Runtime** | `Node` | Runtime environment |
| **Build Command** | `npm install` | Installs Express.js in cloud container |
| **Start Command** | `npm start` | Runs `node server.js` |
| **Instance Type** | `Free` | Select Free tier ($0/month) |

### Step 5: Deploy the Web Service
1. Scroll to the bottom and click **"Create Web Service"**.
2. Render will allocate a container, run `npm install`, and execute `npm start`.
3. Watch the build logs in the Render dashboard until you see:
   ```text
   ==> Express.js Server successfully started!
   ==> Your service is live at: https://your-service-name.onrender.com
   ```

---

## 3. Post-Deployment Verification

Once your service is live, copy your public URL (e.g., `https://venkata-sai-lab-01.onrender.com`) and test each endpoint in your browser:

1. **Root Endpoint:**
   - URL: `https://your-service-name.onrender.com/`
   - Expected Output: `Welcome to My Node.js and Express Server!` (Status: 200)

2. **About Endpoint:**
   - URL: `https://your-service-name.onrender.com/about`
   - Expected Output: JSON with your name, section, and course (Status: 200)

3. **Time Endpoint:**
   - URL: `https://your-service-name.onrender.com/time`
   - Expected Output: JSON with dynamic `currentTime` timestamp (Status: 200)

4. **404 Route Not Found:**
   - URL: `https://your-service-name.onrender.com/invalid`
   - Expected Output: `{"success":false,"message":"404 - Route Not Found"}` (Status: 404)

---

## 4. Updating Documentation With Your Live URL

After your deployment is verified:
1. Open `lab-01/README.md` and `lab-01/LAB_REPORT.md`.
2. Replace `https://your-render-service-url.onrender.com` at the top with your actual deployed URL.
3. Commit and push the updated documentation to GitHub:
   ```bash
   git add lab-01/README.md lab-01/LAB_REPORT.md
   git commit -m "Update live deployment URL in documentation"
   git push origin main
   ```

---

## 5. Alternative Procedure (If Cloud Deployment Cannot Be Completed)

If you experience account creation issues, credit card verification prompts, or regional network restrictions on cloud hosting:
1. **Document the reason** in your lab submission (e.g., *"Cloud deployment pending verification / Render platform quota reached"*).
2. Open **Postman** (or your web browser).
3. Test all four local endpoints on `http://localhost:3000`:
   - `GET http://localhost:3000/`
   - `GET http://localhost:3000/about`
   - `GET http://localhost:3000/time`
   - `GET http://localhost:3000/invalid`
4. Capture clear screenshots showing the request URL, response body, and HTTP status code in Postman.
5. Save those screenshots in `lab-01/screenshots/` and attach them to your university report.
