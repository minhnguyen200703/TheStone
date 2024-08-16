const nodemailer = require('nodemailer');

// Render contact page
exports.getContactPage = (req, res) => {
    res.render('contact', { title: 'Contact Us', message: null }); // Ensure message is always defined
};

// Handle form submission
exports.submitContactForm = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a transporter object with your email service settings
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'minhnguyen200703@gmail.com', // Replace with your email
            pass: 'isisluqoytjjhgqb'     // Replace with your email password or app-specific password
        }
    });

    // Email options
    let mailOptions = {
        from: email, // Sender's email address
        to: 'thangcubitp1134@gmail.com', // Your email address
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new message from the contact form on your website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
        `
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.render('contact', { title: 'Contact Us', message: 'Thank you for your message. We will get back to you soon!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.render('contact', { title: 'Contact Us', message: 'There was an error sending your message. Please try again later.' });
    }
};
