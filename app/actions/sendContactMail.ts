"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

function assertEnv() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing SMTP env vars: ${missing.join(",")}`);
  }
}

function transporter() {
  assertEnv();
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true";

  console.log(`Creating transporter: host=${process.env.SMTP_HOST}, port=${port}, secure=${secure}, user=${process.env.SMTP_USER}`);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      // Shared hosts often have certificate issues or mismatching hostnames
      rejectUnauthorized: false,
      servername: process.env.SMTP_HOST,
    },
    // If using 587 (secure=false), we should upgrade the connection to TLS
    requireTLS: port === 587,
    // Sometimes IPv6 causes connection delays/timeouts on shared hosting
    family: 4,
    debug: true,
    logger: true,
    // Adjust timeouts - keep them high for slow shared hosting
    connectionTimeout: 60000, 
    greetingTimeout: 60000,
    socketTimeout: 60000,
  });
}

export async function sendContactMail(formData: FormData) {
  const redirectTo = formData.get("redirect")?.toString() || "/contact?sent=1";
  const name = formData.get("name")?.toString().trim() || "Website visitor";
  const company = formData.get("company")?.toString().trim() || "Not provided";
  const email = formData.get("email")?.toString().trim() || "Not provided";
  const phone = formData.get("phone")?.toString().trim() || "Not provided";
  const message = formData.get("message")?.toString().trim() || "Not provided";
  const source = formData.get("source")?.toString().trim() || "Unknown page";

  try {
    const tx = transporter();
    const to = process.env.CONTACT_TO || "contact@optimumlogisticsplc.com";
    const ccEnv = process.env.CONTACT_CC?.trim();
    const cc = ccEnv && ccEnv.length > 0 ? ccEnv : undefined;

    await tx.sendMail({
      from: process.env.SMTP_USER,
      to,
      cc,
      replyTo: email !== "Not provided" ? email : undefined,
      subject: `New website inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Source: ${source}`,
        "",`Message:\n${message}`,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (err) {
    if (err instanceof Error && err.message === 'NEXT_REDIRECT') {
      throw err;
    }
    console.error("sendContactMail error", err);
    redirect(`${redirectTo}${redirectTo.includes("?") ? "&" : "?"}error=1`);
  }

  redirect(`${redirectTo}${redirectTo.includes("?") ? "&" : "?"}sent=1`);
}
