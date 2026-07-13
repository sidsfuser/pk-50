// Email service for RSVP submissions using EmailJS
// Setup instructions in README-EMAIL-SETUP.md

export interface RSVPData {
  name: string;
  email: string;
  phone: string;
  guests: string;
  notes: string;
}

// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const submitRSVP = async (data: RSVPData): Promise<boolean> => {
  try {
    // Import EmailJS dynamically to avoid SSR issues
    const emailjs = (await import('@emailjs/browser')).default;

    // Send thank you email to the person who RSVP'd
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_name: data.name,
        to_email: data.email, // Send to the person who filled the form
        from_name: 'Prabhu Karunakaran - PK-50 Celebration',
        reply_to: 'sid.sfuser@gmail.com',
        guest_count: data.guests,
        phone: data.phone,
        notes: data.notes || 'No special requests',
        event_date: 'April 3, 2027',
        event_location: 'Dallas, Texas',
      },
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      console.log('Thank you email sent successfully');
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Fallback: Using mailto link (opens user's email client)
export const sendRSVPEmail = (data: RSVPData): void => {
  const subject = encodeURIComponent('PK-50 Celebration - Thank You for RSVP!');
  const body = encodeURIComponent(
    `Dear ${data.name},\n\n` +
    `Thank you for joining Prabhu Karunakaran's golden jubilee milestone!\n\n` +
    `Your RSVP Details:\n` +
    `- Name: ${data.name}\n` +
    `- Email: ${data.email}\n` +
    `- Phone: ${data.phone}\n` +
    `- Number of Guests: ${data.guests}\n` +
    `- Notes: ${data.notes || 'None'}\n\n` +
    `Event Details:\n` +
    `Date: April 3, 2027\n` +
    `Location: Dallas, Texas\n\n` +
    `We can't wait to celebrate with you!\n\n` +
    `Best regards,\n` +
    `PK-50 Celebration Team`
  );

  // Open default email client with pre-filled message
  window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
};
