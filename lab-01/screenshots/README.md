# Screenshot Capture Guide

This directory is designated for your assignment demonstration screenshots.

> **CRITICAL ACADEMIC INTEGRITY NOTE:**
> Per university submission guidelines, do **NOT** use mock or placeholder images.
> Capture genuine screenshots from your own computer while the application is running.

---

## Required Screenshots Checklist

| Filename | Description | How to Capture |
| :--- | :--- | :--- |
| `01-home-endpoint.png` | Browser displaying `http://localhost:3000/` | Open browser to `http://localhost:3000/` showing text: `Welcome to My Node.js and Express Server!` |
| `02-about-endpoint.png` | Browser displaying `http://localhost:3000/about` | Open browser to `http://localhost:3000/about` showing student details JSON |
| `03-time-endpoint.png` | Browser displaying `http://localhost:3000/time` | Open browser to `http://localhost:3000/time` showing `new Date()` JSON |
| `04-404-endpoint.png` | Browser displaying `http://localhost:3000/invalid` | Open browser to `http://localhost:3000/invalid` showing 404 Route Not Found JSON |
| `05-server-running.png` | VS Code terminal showing server running | Terminal window running `npm start` with start banners |

---

## How to Capture and Save on Windows

1. Run the server in VS Code terminal:
   ```bash
   cd lab-01
   npm start
   ```
2. Open your web browser (Chrome / Edge / Firefox).
3. Navigate to each URL listed above.
4. Press `Windows Key + Shift + S` to open the Windows Snipping Tool.
5. Snip the window showing the browser URL address bar and response.
6. Save the captured screenshot directly into this folder (`lab-01/screenshots/`) using the exact filenames listed above.
