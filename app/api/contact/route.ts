import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
  }

  // TODO: wire up an email service (e.g. Resend, Nodemailer, SendGrid)
  console.log('[Contact] New message:', { name, email, message });

  return NextResponse.json({ success: true });
}
