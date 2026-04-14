import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Basic rate limiting implementation for Next.js API Routes using a Map
const rateLimitMap = new Map();

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
    // Very Basic Rate Limiting (max 3 requests per 10 minutes per IP)
    const currentTime = Date.now();
    const limitWindow = 10 * 60 * 1000;
    
    if (rateLimitMap.has(ip)) {
      const data = rateLimitMap.get(ip);
      if (currentTime - data.timestamp < limitWindow) {
        if (data.count >= 3) {
          return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
        }
        data.count++;
      } else {
        rateLimitMap.set(ip, { timestamp: currentTime, count: 1 });
      }
    } else {
      rateLimitMap.set(ip, { timestamp: currentTime, count: 1 });
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure the transport using environment variables
    // In production, these should be set in .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-gmail@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // If you reply, it replies to the client
      subject: `New Portfolio Contact from ${name}`,
      text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
