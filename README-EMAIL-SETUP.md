# RSVP Email Setup Guide

This guide explains how to set up automaticthank you emails for RSVP submissions.

## Setup with EmailJS (Recommended)

EmailJS allows you to send emails directly from the client-side without a backend server.

### Step 1: Install EmailJS Package

```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 3: Add Gmail Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** as the service type
4. Connect your Gmail account: `sid.sfuser@gmail.com`
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 4: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Template Name:** RSVP Thank You Email

**Subject:** Thank You for RSVP - PK-50 Celebration

**Content:**
```
<div style="font-family: system-ui, sans-serif, Arial; font-size: 16px; background-color: #fff8f1">
  <div style="max-width: 600px; margin: auto; padding: 16px">
    <a style="text-decoration: none; outline: none" href="https://pk-50.onrender.com" target="_blank">
      <img
        style="height: 32px; vertical-align: middle"
        height="32px"
        src="https://pk-50.onrender.com/assets/logo.png"
        alt="PK-50 Logo"
      />
    </a>
    <p>Welcome to the PK-50 Celebration family! We're excited to have you join us.</p>
    <p>
      Your RSVP has been successfully received, and you're now registered for Prabhu Karunakaran's golden jubilee milestone.
    </p>
    <p><strong>Your RSVP Details:</strong><br>
    Name: {{to_name}}<br>
    Email: {{to_email}}<br>
    Phone: {{phone}}<br>
    Number of Guests: {{guest_count}}<br>
    Special Notes: {{notes}}
    </p>
    <p><strong>Event Details:</strong><br>
    Date: {{event_date}}<br>
    Location: {{event_location}}
    </p>
    <p>
      <a
        style="
          display: inline-block;
          text-decoration: none;
          outline: none;
          color: #fff;
          background-color: #b81d24;
          padding: 12px 24px;
          border-radius: 4px;
        "
        href="https://pk-50.onrender.com"
        target="_blank"
      >
        Visit PK-50 Website
      </a>
    </p>
    <p>
      If you have any questions or need help, our support team is just an email away at
      <a href="mailto:sid.sfuser@gmail.com" style="text-decoration: none; outline: none; color: #b81d24"
        >sid.sfuser@gmail.com</a
      >. We're here to assist you every step of the way!
    </p>
    <p>Best regards,<br />The PK-50 Celebration Team</p>
  </div>
</div>
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### Step 5: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `abc123def456`)

### Step 6: Update Configuration

Open `src/services/emailService.ts` and replace the placeholder values:

```typescript
const EMAILJS_SERVICE_ID = 'service_abc123'; // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Your Template ID
const EMAILJS_PUBLIC_KEY = 'abc123def456'; // Your Public Key
```

### Step 7: Install Dependency

```bash
npm install @emailjs/browser
```

### Step 8: Test

1. Run your site locally: `npm run dev`
2. Fill out the RSVP form
3. Check the browser console for success/error messages
4. Verify the email was sent to the person who submitted the RSVP

---

## Alternative: Using Mailto (No Setup Required)

If you don't want to use EmailJS, the form will automatically open the user's email client with a pre-filled message.

**How it works:**
- When someone submits the RSVP form, their default email app opens
- The email is pre-addressed to them with a thank you message
- They just need to click "Send"

**To use this method:**
- No configuration needed!
- Just deploy the site as-is
- The email functionality works immediately

**Limitations:**
- Requires the user to have an email client configured
- User must manually click "Send" to send the email

---

## Deployment Notes

When deploying to Render or any static hosting:

1. Make sure all files are committed to Git
2. The `src/services/emailService.ts` file works on the client-side
3. No backend or server-side configuration is needed
4. EmailJS API calls work directly from the browser

For production, update the EmailJS credentials in the deployed version.

---

## Troubleshooting

**Email not sending?**
- Check browser console for errors
- Verify EmailJS credentials are correct
- Ensure Gmail service is connected in EmailJS dashboard
- Check that the template exists and is published

**Mailto not working?**
- User needs to have a default email client configured
- Some browsers may block automatic mailto links
- User may need to allow pop-ups

---

## Security Note

- EmailJS Public Key is meant to be used in client-side code
- Never expose your EmailJS Private Key or Gmail app password
- The current setup only sends emails, no sensitive data is stored
- All RSVP data is sent directly to the person who filled the form