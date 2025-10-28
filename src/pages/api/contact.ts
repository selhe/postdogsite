import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.GMAIL_USER,
        pass: import.meta.env.GMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
        from: `"${name}" <${import.meta.env.GMAIL_USER}>`, 
        to: import.meta.env.CONTACT_EMAIL,               
        replyTo: email,                                   
        subject: `New message from ${name}`,
        html: `
            <div style="font-family: Georgia, serif; padding: 10px;">
            <h2 style="color: #dd2266;">New message from your website</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b><br>${message}</p>
            </div>
        `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
};
