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
Dear {{to_name}},

Thank you for joining Prabhu Karunakaran's golden jubilee milestone!

Your RSVP Details:
- Name: {{to_name}}
- Email: {{to_email}}
- Phone: {{phone}}
- Number of Guests: {{guest_count}}
- Special Notes: {{notes}}

Event Details:
Date: {{event_date}}
Location: {{event_location}}

We can't wait to celebrate with you!

Best regards,
PK-50 Celebration Team
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