import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

interface ContactPayload {
	name: string;
	email: string;
	message: string;
}

interface SendEmailResult {
	success: boolean;
	error?: string;
}

export const sendContactEmail = createServerFn({ method: "POST" })
	.inputValidator((data: ContactPayload) => data)
	.handler(async ({ data }): Promise<SendEmailResult> => {
		const key = process.env.RESEND_KEY;

		if (!key) {
			console.error("RESEND_KEY is not set");
			return { success: false, error: "Server misconfiguration." };
		}

		const resend = new Resend(key);

		const { error } = await resend.emails.send({
			from: "contact@henriquesf.me",
			to: "henriquesardofernandes@gmail.com",
			replyTo: data.email,
			subject: `New message from ${data.name} via henriquesf.me`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #d0ff94; border-bottom: 1px solid #333; padding-bottom: 12px;">
						New contact form submission
					</h2>
					<table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
						<tr>
							<td style="padding: 8px 0; color: #888; width: 80px; vertical-align: top;">From</td>
							<td style="padding: 8px 0; color: #fff;">${data.name}</td>
						</tr>
						<tr>
							<td style="padding: 8px 0; color: #888; vertical-align: top;">Email</td>
							<td style="padding: 8px 0;">
								<a href="mailto:${data.email}" style="color: #d0ff94;">${data.email}</a>
							</td>
						</tr>
					</table>
					<div style="background: #1a1a1a; border-left: 3px solid #d0ff94; padding: 16px; border-radius: 4px;">
						<p style="color: #888; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
						<p style="color: #fff; margin: 0; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
					</div>
					<p style="color: #555; font-size: 12px; margin-top: 24px;">
						Reply directly to this email to respond to ${data.name}.
					</p>
				</div>
			`,
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				success: false,
				error: "Failed to send message. Please try again.",
			};
		}

		return { success: true };
	});
