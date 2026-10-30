import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request data." },
        { status: 400 }
      );
    }

    const getString = (value: unknown) =>
      typeof value === "string" ? value.trim() : "";

    const name = getString(body.name);
    const email = getString(body.email);
    const phone = getString(body.phone);
    const subject = getString(body.subject);
    const message = getString(body.message);

    // Required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all five required fields.",
        },
        { status: 400 }
      );
    }

    // Field length validation
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name must contain between 2 and 100 characters.",
        },
        { status: 400 }
      );
    }

    if (
      email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields exceed the allowed length.",
        },
        { status: 400 }
      );
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Exactly 10 digits
    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number must contain exactly 10 digits.",
        },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      console.error("Contact API: Gmail environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured. Please try again later.",
        },
        { status: 500 }
      );
    }

    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };

        return entities[character];
      });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Proactii Website Contact" <${gmailUser}>`,
      to: [
        "pm7244875@gmail.com",
        "mukeshproactii@gmail.com",
        "hello@proactii.com",
      ],
      replyTo: email,
      subject: `Website Contact: ${subject}`,
      text: [
        "New contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),


      html: `
<div style="margin:0;padding:20px 10px;background:#f3f5f8;font-family:Arial,Helvetica,sans-serif;color:#263445;">

  <div style="max-width:580px;margin:0 auto;background:#ffffff;border:1px solid #e5e9ef;border-radius:8px;overflow:hidden;">

    <!-- Brand Colors -->
    <div style="height:4px;background:linear-gradient(90deg,#E80028 25%,#FFC928 25%,#FFC928 50%,#28A745 50%,#28A745 75%,#0098C6 75%);"></div>

     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style ="background:008000 ">
        <tr  style="background:#008000;">
          <td style="vertical-align:middle; padding:22px 20px; ">
            <img
              src="https://proactii.com/assets/images/logo/Proactii-Footer-260x79.png"
              alt="Proactii Media LLP"
              width="135"
              style="display:block;width:135px;max-width:100%;height:auto;"
            />
          </td>
          <td style="text-align:right;vertical-align:middle;padding:22px 20px;">
            <span style="display:inline-block;padding:6px 9px;background:#eaf7fc;border-radius:4px;color:#007da5;font-size:10px;font-weight:bold;letter-spacing:0.5px;">
              NEW ENQUIRY
            </span>
          </td>
        </tr>
      </table>
    <!-- Header -->
    <div style="padding:20px 24px;border-bottom:1px solid #edf0f4;">
     

      <h2 style="margin:20px 0 5px;font-size:21px;line-height:1.4;color:#172b3a;font-weight:700;">
        New Contact Message
      </h2>
      <p style="margin:0;color:#788694;font-size:13px;line-height:1.6;">
        A new enquiry has been received through your website.
      </p>
    </div>

    <!-- Contact Details -->
    <div style="padding:22px 24px;">

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:13px;">
        <tr>
          <td width="105" style="padding:11px 0;border-bottom:1px solid #edf0f4;color:#7b8794;">Name</td>
          <td style="padding:11px 0;border-bottom:1px solid #edf0f4;color:#263445;font-weight:bold;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #edf0f4;color:#7b8794;">Email</td>
          <td style="padding:11px 0;border-bottom:1px solid #edf0f4;overflow-wrap:anywhere;">
            <a href="mailto:${safeEmail}" style="color:#0086ad;text-decoration:none;">${safeEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #edf0f4;color:#7b8794;">Phone</td>
          <td style="padding:11px 0;border-bottom:1px solid #edf0f4;">
            <a href="tel:${safePhone}" style="color:#0086ad;text-decoration:none;">${safePhone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 0;color:#7b8794;">Subject</td>
          <td style="padding:11px 0;color:#263445;font-weight:bold;">${safeSubject}</td>
        </tr>
      </table>

      <!-- Message -->
      <div style="margin-top:20px;padding:16px;background:#f3f9fc;border-left:3px solid #0098C6;border-radius:4px;">
        <div style="margin-bottom:9px;color:#007da5;font-size:12px;font-weight:bold;">
          MESSAGE
        </div>
        <div style="font-size:13px;line-height:1.8;color:#394b59;white-space:pre-wrap;overflow-wrap:anywhere;">${safeMessage}</div>
      </div>

      <!-- Reply -->
      <div style="margin-top:20px;">
        <a href="mailto:${safeEmail}" style="display:inline-block;padding:10px 18px;background:#0098C6;border-radius:4px;color:#ffffff;font-size:12px;font-weight:bold;text-decoration:none;">
          Reply to Enquiry
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="padding:16px 24px;background:#000;border-top:1px solid #fff;">
      <p style="margin:0 0 5px;color:#fff;font-size:12px;font-weight:bold;">
        Proactii Media LLP
      </p>
      <p style="margin:0;color:#fff;font-size:11px;line-height:1.7;">
        Digital Solutions &nbsp;|&nbsp;
        <a href="https://proactii.com" style="color:#fff;text-decoration:none;">proactii.com</a>
      </p>
    </div>

    <div style="height:3px;background:linear-gradient(90deg,#E80028,#FFC928,#28A745,#0098C6);"></div>

  </div>
</div>
`,

    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact form email error:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your message right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
