import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, model, city, date, notes } = body

    if (!name || !phone || !model || !city) {
      return NextResponse.json({ error: 'Please fill in Name, Phone, Model and City.' }, { status: 400 })
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({
        error: 'Email service not configured. Please call us at 0336-9999884 to book your test drive.',
        manual: true,
      }, { status: 503 })
    }

    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Chery KP Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'info@cherykp.com',
      replyTo: email || undefined,
      subject: `Test Drive — ${model} in ${city} | ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9;border-radius:12px">
          <div style="background:#111;padding:24px;border-radius:8px;margin-bottom:20px">
            <h2 style="color:white;margin:0;font-weight:300;font-size:22px">Test Drive Request</h2>
            <p style="color:#888;margin:6px 0 0;font-size:13px">Chery KP Website</p>
          </div>
          <table style="width:100%;border-collapse:collapse">
            ${[['Name', name], ['Phone', phone], ['Email', email || 'N/A'], ['Model', model], ['City', city], ['Date', date || 'Not specified']]
              .map(([k, v]) => `<tr><td style="padding:11px 16px;background:#fff;border-bottom:1px solid #eee;font-size:12px;color:#888;width:30%;font-weight:600;text-transform:uppercase">${k}</td><td style="padding:11px 16px;background:#fff;border-bottom:1px solid #eee;font-size:14px;color:#111">${v}</td></tr>`).join('')}
          </table>
          ${notes ? `<div style="background:#fff;padding:16px;margin-top:2px;border-radius:0 0 8px 8px"><p style="font-size:12px;color:#888;font-weight:600;text-transform:uppercase;margin:0 0 8px">Notes</p><p style="font-size:14px;color:#111;line-height:1.7;margin:0">${notes}</p></div>` : ''}
          <p style="text-align:center;font-size:11px;color:#bbb;margin-top:20px">Chery KP · info@cherykp.com · 0336-9999884</p>
        </div>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Test drive error:', err)
    return NextResponse.json({ error: 'Failed to send. Please call 0336-9999884 to book your test drive.' }, { status: 500 })
  }
}
