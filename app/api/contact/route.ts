import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const name = body.dzName;
        const email = body.dzEmail;
        const phone = body.dzOther?.Phone;
        const subject = body.dzOther?.Subject;
        const message = body.dzMessage;

        // ===============================
        // REQUIRED FIELD VALIDATION
        // ===============================

        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill all required fields.",
                },
                { status: 400 }
            );
        }

        // ===============================
        // PHONE VALIDATION
        // Exactly 10 digits
        // ===============================

        if (!/^\d{10}$/.test(phone)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Phone number must contain exactly 10 digits.",
                },
                { status: 400 }
            );
        }

        // ===============================
        // GMAIL TRANSPORTER
        // ===============================

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // ===============================
        // SEND EMAIL
        // ===============================

        await transporter.sendMail({
            from: process.env.GMAIL_USER,

            to: [
                "pm7244875@gmail.com",
                "mukeshproactii@gmail.com",
                "hello@proactii.com",
            ],

            replyTo: email,

            subject: subject,

            html: `
                <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="background:#f5f5f5; font-family:Arial, Helvetica, sans-serif; color:#333333;"
                >
                    <tr>
                        <td align="center" style="padding:30px 15px;">

                            <table
                                width="650"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="max-width:650px; width:100%; background:#ffffff; border-radius:10px; overflow:hidden; border:1px solid #e5e5e5;"
                            >

                                <!-- HEADER -->
                                <tr>
                                    <td
                                        style="background:#d71920; padding:20px 30px; text-align:center;"
                                    >
                                        <h1
                                            style="margin:0; color:#ffffff; font-size:24px; font-weight:700;"
                                        >
                                            New Contact Enquiry
                                        </h1>

                                        <p
                                            style="margin:6px 0 0; color:#ffffff; font-size:14px;"
                                        >
                                            New enquiry received from your website
                                        </p>
                                    </td>
                                </tr>

                                <!-- CONTENT -->
                                <tr>
                                    <td style="padding:30px;">

                                        <h2
                                            style="
                                                margin:0 0 20px;
                                                font-size:18px;
                                                color:#222222;
                                                border-left:4px solid #d71920;
                                                padding-left:12px;
                                            "
                                        >
                                            Enquiry Details
                                        </h2>

                                        <!-- NAME -->
                                        <div
                                            style="padding:14px 16px; margin-bottom:10px; background:#fafafa; border-left:4px solid #d71920; border-radius:4px;"
                                        >
                                            <strong style="color:#d71920;">
                                                Name
                                            </strong>

                                            <div
                                                style="margin-top:5px; font-size:15px; color:#333;"
                                            >
                                                ${name}
                                            </div>
                                        </div>

                                        <!-- EMAIL -->
                                        <div
                                            style="padding:14px 16px; margin-bottom:10px; background:#fafafa; border-left:4px solid #d71920; border-radius:4px;"
                                        >
                                            <strong style="color:#d71920;">
                                                Email
                                            </strong>

                                            <div
                                                style="margin-top:5px; font-size:15px; color:#333;"
                                            >
                                                ${email}
                                            </div>
                                        </div>

                                        <!-- PHONE -->
                                        <div
                                            style="padding:14px 16px; margin-bottom:10px; background:#fafafa; border-left:4px solid #d71920; border-radius:4px;"
                                        >
                                            <strong style="color:#d71920;">
                                                Phone
                                            </strong>

                                            <div
                                                style="margin-top:5px; font-size:15px; color:#333;"
                                            >
                                                ${phone}
                                            </div>
                                        </div>

                                        <!-- SUBJECT -->
                                        <div
                                            style="padding:14px 16px; margin-bottom:10px; background:#fafafa; border-left:4px solid #d71920; border-radius:4px;"
                                        >
                                            <strong style="color:#d71920;">
                                                Subject
                                            </strong>

                                            <div
                                                style="margin-top:5px; font-size:15px; color:#333;"
                                            >
                                                ${subject}
                                            </div>
                                        </div>

                                        <!-- MESSAGE -->
                                        <div
                                            style="padding:18px; margin-top:20px; background:#fff5f5; border:1px solid #f1c1c1; border-radius:6px;"
                                        >
                                            <div
                                                style="color:#d71920; font-weight:700; margin-bottom:10px;"
                                            >
                                                Message
                                            </div>

                                            <div
                                                style="font-size:15px; line-height:1.7; color:#444444; white-space:pre-line;"
                                            >
                                                ${message}
                                            </div>
                                        </div>

                                    </td>
                                </tr>

                                <!-- FOOTER -->
                                <tr>
                                    <td
                                        style="background:#222222; padding:18px 25px; text-align:center;"
                                    >
                                        <p
                                            style="margin:0; color:#ffffff; font-size:13px;"
                                        >
                                            This enquiry was submitted from your company website.
                                        </p>

                                        <p
                                            style="margin:7px 0 0; color:#d71920; font-size:13px; font-weight:600;"
                                        >
                                            Subham Moulds & Engineering
                                        </p>
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>
                </table>
            `,
        });

        console.log("EMAIL SENT SUCCESSFULLY");

        return NextResponse.json({
            success: true,
            message: "Your form submitted successfully.",
        });
    } catch (error) {
        console.error("MAIL ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Mail failed. Please try again.",
            },
            { status: 500 }
        );
    }
}