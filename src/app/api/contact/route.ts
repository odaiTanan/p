import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, message }: EmailRequestBody = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "odeartanan@gmail.com",
        pass: "",
      },
    });

    // Compose email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "odeartanan@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
