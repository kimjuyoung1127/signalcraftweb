import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('RESEND_API_KEY is not defined');
            return NextResponse.json({ error: 'Mail service configuration missing' }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const { firstName, lastName, email, reason, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'SignalCraft <contact@signalcraft.kr>',
            to: ['sndercer@gmail.com'], // User's email
            subject: `[Contact] New Inquiry from ${firstName} ${lastName}`,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Reason:</strong> ${reason}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
            replyTo: email,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
