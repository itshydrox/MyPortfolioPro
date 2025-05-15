# Setting Up EmailJS for the Contact Form

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account.
2. After signing in, you'll be taken to the dashboard.

## Step 2: Create an Email Service

1. In the dashboard, go to the "Email Services" tab.
2. Click "Add New Service".
3. Choose your email provider (Gmail, Outlook, etc.).
4. Follow the instructions to connect your email account.
5. Once connected, note down the "Service ID" as you'll need it later.

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab.
2. Click "Create New Template".
3. Design your email template. Here's a suggested structure:

```
Subject: New Message from {{subject}}

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Make sure the template variables match the input names in your contact form:
   - `name`
   - `email`
   - `subject`
   - `message`
5. Save the template and note down the "Template ID".

## Step 4: Get Your Public Key

1. Go to the "Account" tab.
2. Look for "API Keys" section.
3. Copy your "Public Key".

## Step 5: Update Your Code

Open the `src/components/sections/Contact.tsx` file and update the following lines with your actual IDs and keys:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
```

## Testing

After completing the setup:

1. Go to your portfolio website
2. Fill out the contact form
3. Submit it
4. You should receive the email at the address connected to your EmailJS service

## Troubleshooting

If emails are not being received:

1. Check the browser console for any errors
2. Verify that your EmailJS service is active
3. Ensure all IDs and keys are correctly copied
4. Make sure your email quota hasn't been exceeded (free accounts have limited emails per month)

## Security Note

The EmailJS public key is safe to use in client-side code, but be aware that someone could potentially use it to send emails through your service. EmailJS has rate limiting to prevent abuse, but it's good to be aware of this limitation. 