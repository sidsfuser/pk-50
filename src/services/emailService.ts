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
const EMAILJS_SERVICE_ID = 'service_9wdizvp';
const EMAILJS_TEMPLATE_ID = 'YMcbsXuTzKiqzXWaeh1T';
const EMAILJS_PUBLIC_KEY = '6DGKw3xclRqTiK1Nm';

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

// Note: Mailto fallback removed to prevent dialog popup
// If EmailJS is not configured, the form will show success message without sending email
// To enable email sending, configure EmailJS credentials above
export const sendRSVPEmail = (_data: RSVPData): void => {
  // No-op: EmailJS is required for email sending
  console.log('EmailJS not configured. Email not sent.');
};
