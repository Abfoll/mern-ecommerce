const nodemailer = require("nodemailer");

exports.sendMail = async (receiverEmail, subject, body) => {
    // 1. Clean the email: Removes "www." and accidental spaces
    const cleanEmail = receiverEmail.replace(/^www\./, "").trim();

    // 2. Transporter configuration for Brevo
    const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false, // TLS
        auth: {
            user: process.env.EMAIL, // Your Brevo Login (9f259a001@smtp-brevo.com)
            pass: process.env.PASSWORD, // Your Brevo SMTP Key (Tdw3OSZL7UDNWHaq)
        },
    });

    try {
        await transporter.sendMail({
            from: `"MERN Store" <9f259a001@smtp-brevo.com>`, 
            to: cleanEmail,
            subject: subject,
            html: body
        });
        console.log(`✅ SUCCESS: OTP sent to ${cleanEmail}`);
    } catch (error) {
        console.error("❌ Brevo SMTP Error:", error);
        throw error; 
    }
};