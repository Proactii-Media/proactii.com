import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

type RecaptchaVerifyResponse = {
    success: boolean;
    challenge_ts?: string;
    hostname?: string;
    "error-codes"?: string[];
};

// V2 Verification Logic (No score/action check)
async function verifyRecaptchaToken(token: string): Promise<boolean> {
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    if (!secret) {
        throw new Error("RECAPTCHA_SECRET_KEY is not configured.");
    }

    const body = new URLSearchParams();
    body.append("secret", secret);
    body.append("response", token);

    const response = await fetch(RECAPTCHA_VERIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`reCAPTCHA verify HTTP ${response.status}`);
    }

    const data = (await response.json()) as RecaptchaVerifyResponse;

    if (!data.success) {
        if (data["error-codes"]) {
            console.warn("reCAPTCHA error-codes:", data["error-codes"]);
        }
        return false;
    }

    // For v2, success is enough.
    return true;
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const experience = String(formData.get("experience") || "").trim();
        const jobTitle = String(formData.get("jobTitle") || "").trim();
        const recaptchaToken = String(formData.get("recaptchaToken") || "").trim();
        const resume = formData.get("resume");

        if (!name || !email || !phone || !experience || !jobTitle) {
            return NextResponse.json(
                { message: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { message: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            return NextResponse.json(
                { message: "Please enter a valid 10-digit mobile number." },
                { status: 400 }
            );
        }

        if (!(resume instanceof File) || resume.size === 0) {
            return NextResponse.json(
                { message: "Please upload your resume." },
                { status: 400 }
            );
        }

        if (resume.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                { message: "Resume must be 5 MB or smaller." },
                { status: 400 }
            );
        }

        const allowedTypes: Record<string, string> = {
            "application/pdf": ".pdf",
            "application/msword": ".doc",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                ".docx",
        };

        const extension = resume.name
            .slice(resume.name.lastIndexOf("."))
            .toLowerCase();

        if (
            !allowedTypes[resume.type] ||
            allowedTypes[resume.type] !== extension
        ) {
            return NextResponse.json(
                { message: "Only PDF, DOC, and DOCX resumes are allowed." },
                { status: 400 }
            );
        }

        if (!recaptchaToken) {
            return NextResponse.json(
                { message: "Security verification failed. Please try again." },
                { status: 400 }
            );
        }

        let isRecaptchaVerified: boolean;
        try {
            // V2 call (No action argument needed)
            isRecaptchaVerified = await verifyRecaptchaToken(recaptchaToken);
        } catch (verifyError) {
            console.error(
                "Career API reCAPTCHA verification error:",
                verifyError instanceof Error ? verifyError.message : verifyError
            );
            return NextResponse.json(
                { message: "Security verification is unavailable. Please try again later." },
                { status: 500 }
            );
        }

        if (!isRecaptchaVerified) {
            return NextResponse.json(
                { message: "Security verification failed. Please try again." },
                { status: 400 }
            );
        }

        const gmailUser = process.env.GMAIL_USER;
        const gmailPassword = process.env.GMAIL_APP_PASSWORD;
        const receiverEmail = process.env.CAREER_RECEIVER_EMAIL;

        if (!gmailUser || !gmailPassword || !receiverEmail) {
            console.error("Career email environment variables are missing.");

            return NextResponse.json(
                { message: "Email service is not configured. Please try again later." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: gmailUser,
                pass: gmailPassword,
            },
        });

        const resumeBuffer = Buffer.from(await resume.arrayBuffer());

        await transporter.sendMail({
            from: `"Proactii Careers" <${gmailUser}>`,
            to: receiverEmail,
            replyTo: email,
            subject: `New Job Application: ${jobTitle}`,
            text: `
New Job Application - Proactii Media LLP

Job Position: ${jobTitle}
Applicant Name: ${name}
Email Address: ${email}
Phone Number: ${phone}
Experience: ${experience}

The applicant's resume is attached.
    `,

            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Job Application - Proactii Media LLP</title>
</head>
<body style="margin:0;padding:0;background-color:#f2f2f2;font-family:Arial,Helvetica,sans-serif;color:#16A34A;">

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
        style="background-color:#f2f2f2;padding:25px 10px;">
        <tr>
            <td align="center">

                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
                    style="width:100%;max-width:600px;background:#ffffff;border-collapse:collapse;">

                    <!-- Logo Header -->
                    <tr>
                        <td align="center"
                            style="background:#008000;padding:22px 20px;">

                            <img
                                src="https://proactii.com/assets/images/logo/Proactii-Footer-260x79.png"
                                alt="Proactii Media LLP Logo"
                                width="230"
                                style="display:block;width:100%;max-width:230px;height:auto;border:0;"
                            />

                        </td>
                    </tr>

                    <!-- Gradient Border -->
                    <tr>
                        <td style="padding:0;height:4px;line-height:4px;font-size:0;
                            background:linear-gradient(90deg,#e80028,#ffc928,#28a745,#0098c6);">
                            &nbsp;
                        </td>
                    </tr>

                    <!-- Title -->
                    <tr>
                        <td style="padding:30px 28px 10px;">

                            <p style="margin:0 0 8px;color:#0098C6;font-size:12px;font-weight:bold;letter-spacing:2px;">
                                PROACTII MEDIA LLP
                            </p>

                            <h2 style="margin:0 0 15px;color:#222222;font-size:24px;line-height:1.4;">
                                New Job Application Received
                            </h2>

                        </td>
                    </tr>

                    <!-- Applicant Details -->
                    <tr>
                        <td style="padding:0 28px 25px;">

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="width:100%;border-collapse:collapse;border:1px solid #eeeeee;">

                                <tr>
                                    <td colspan="2"
                                        style="padding:14px;background:#0098C6;color:#ffffff;font-size:16px;font-weight:bold;">
                                        Applicant Details
                                    </td>
                                </tr>

                                <tr>
                                    <td width="35%" style="padding:12px;border-bottom:1px solid #eeeeee;background:#f8f9fa;font-size:14px;font-weight:bold;color:#555555;">
                                        Job Position
                                    </td>
                                    <td style="padding:12px;border-bottom:1px solid #eeeeee;font-size:14px;color:#222222;">
                                        ${jobTitle}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;border-bottom:1px solid #eeeeee;background:#f8f9fa;font-size:14px;font-weight:bold;color:#555555;">
                                        Applicant Name
                                    </td>
                                    <td style="padding:12px;border-bottom:1px solid #eeeeee;font-size:14px;color:#222222;">
                                        ${name}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;border-bottom:1px solid #eeeeee;background:#f8f9fa;font-size:14px;font-weight:bold;color:#555555;">
                                        Email Address
                                    </td>
                                    <td style="padding:12px;border-bottom:1px solid #eeeeee;font-size:14px;word-break:break-word;">
                                        <a href="mailto:${email}" style="color:#0098C6;text-decoration:none;">
                                            ${email}
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;border-bottom:1px solid #eeeeee;background:#f8f9fa;font-size:14px;font-weight:bold;color:#555555;">
                                        Phone Number
                                    </td>
                                    <td style="padding:12px;border-bottom:1px solid #eeeeee;font-size:14px;color:#222222;">
                                        ${phone}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;background:#f8f9fa;font-size:14px;font-weight:bold;color:#555555;">
                                        Experience
                                    </td>
                                    <td style="padding:12px;font-size:14px;color:#222222;">
                                        ${experience}
                                    </td>
                                </tr>

                            </table>

                            <!-- Resume Notice -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="margin-top:22px;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:16px;background:#f5f0f6;border-left:4px solid #8C3084;">
                                        <p style="margin:0;font-size:14px;line-height:1.7;color:#444444;">
                                            <strong style="color:#8C3084;">Resume Attached</strong><br>
                                            The candidate's resume is attached to this email for review.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <tr>
                        <td style="padding:0;height:4px;line-height:4px;font-size:0;background:linear-gradient(90deg,#e80028,#ffc928,#28a745,#0098c6);">
                            &nbsp;
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center"
                            style="padding:24px 20px;background:#171717;border-top:4px ">

                            <a href="https://proactii.com"
                                style="font-size:13px;color:#0098C6;text-decoration:none;">
                                www.proactii.com
                            </a>

                            <p style="margin:15px 0 0;font-size:11px;color:#999999;">
                                &copy; 2026 Proactii Media LLP. All rights reserved.
                            </p>

                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>
    `, 
            attachments: [
                {
                    filename: resume.name,
                    content: resumeBuffer,
                    contentType: resume.type,
                },
            ],
        });

        return NextResponse.json({
            message: "Your application has been submitted successfully!",
        });
    } catch (error) {
        console.error("Career application email error:", error);

        return NextResponse.json(
            { message: "Unable to submit your application. Please try again." },
            { status: 500 }
        );
    }
}