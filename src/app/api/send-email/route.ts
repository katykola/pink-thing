import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/send-mail';

export async function POST(request: NextRequest) {
  const { email, sendTo, subject, text, html } = await request.json();

  try {
    const info = await sendMail({ email, sendTo, subject, text, html });
    if (info?.messageId) {
      return NextResponse.json({ success: true, messageId: info.messageId });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error sending email' });
  }
}