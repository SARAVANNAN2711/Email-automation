Automated Gmail Login and Email Sending using Puppeteer
Overview
This script automates the login process to Gmail and sends an email using Puppeteer, a Node.js library for browser automation.

Prerequisites
Ensure you have the following installed:

Node.js (latest stable version)
npm or yarn (for package management)
Installation
Clone the repository or place the script in your desired directory.
Install dependencies by running:
sh
Copy
Edit
npm install puppeteer
(Additional dependencies like MySQL and Nodemailer are commented out in the script but can be included if needed.)
Usage
Modify the script:
Replace helpme21b019@gmail.com with your email.
Replace dummypassword with your Gmail password (not recommended; consider using environment variables for security).
Modify recipient email (input.agP), subject (subjectbox), and message body (Message Body).
Run the script:
sh
Copy
Edit
node sss.js
The script will launch a Chrome browser, log in to Gmail, compose an email, and send it.
Features
Launches a non-headless Chrome browser to visually track automation.
Uses Puppeteer for browser control.
Handles Gmail login with email and password entry.
Composes and sends an email to a specified recipient.
Takes screenshots at different stages of execution for debugging.
Security Considerations
Do NOT hardcode credentials in the script. Instead, use environment variables.
Enable less secure app access or use an app password for Gmail authentication.
Consider headless mode (headless: true) for silent execution.
Limitations
May not work if Google detects automation and requests additional verification (e.g., CAPTCHA).
Not intended for bulk emailing; for that, consider using the Gmail API instead.
