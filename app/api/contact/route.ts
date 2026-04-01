import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL!

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, treatment, message } = await req.json()

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 })
    }

    const treatmentLabels: Record<string, string> = {
      efecto_rapado: 'Efecto Rapado',
      densificacion: 'Densificación',
      post_injerto: 'Post Cirugía / Injerto',
      consulta: 'Consulta general',
    }
    const treatmentLabel = treatmentLabels[treatment] ?? treatment ?? 'No especificado'

    // Email de aviso a la clínica
    await resend.emails.send({
      from: `Web Microcapilar Montero <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      subject: `Nueva solicitud de cita — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#333">
          <div style="background:#1a1a1a;padding:24px 32px;border-radius:8px 8px 0 0">
            <p style="color:#c6a667;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 4px">Microcapilar Montero</p>
            <h1 style="color:#fff;font-size:20px;font-weight:300;margin:0">Nueva solicitud de cita</h1>
          </div>
          <div style="background:#f9f7f4;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e8e0d6;border-top:none">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#888;font-size:13px;width:130px">Nombre</td><td style="padding:8px 0;font-size:14px;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Email</td><td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#c6a667">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Teléfono</td><td style="padding:8px 0;font-size:14px"><a href="tel:${phone}" style="color:#c6a667">${phone}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Tratamiento</td><td style="padding:8px 0;font-size:14px">${treatmentLabel}</td></tr>
              ${message ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top">Mensaje</td><td style="padding:8px 0;font-size:14px">${message}</td></tr>` : ''}
            </table>
          </div>
        </div>
      `,
    })

    // Email de confirmación al cliente
    await resend.emails.send({
      from: `Microcapilar Montero <${CONTACT_EMAIL}>`,
      to: email,
      subject: 'Hemos recibido tu solicitud — Microcapilar Montero',
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#333">
          <div style="background:#1a1a1a;padding:24px 32px;border-radius:8px 8px 0 0">
            <p style="color:#c6a667;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 4px">Microcapilar Montero</p>
            <h1 style="color:#fff;font-size:20px;font-weight:300;margin:0">Gracias por contactarnos, ${name.split(' ')[0]}</h1>
          </div>
          <div style="background:#f9f7f4;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e8e0d6;border-top:none">
            <p style="font-size:15px;line-height:1.7;margin:0 0 16px">
              Hemos recibido tu solicitud de valoración gratuita. Nos pondremos en contacto contigo en un plazo de <strong>24&nbsp;horas</strong> para confirmar tu cita.
            </p>
            <div style="background:#fff;border-left:3px solid #c6a667;padding:16px 20px;border-radius:4px;margin:24px 0">
              <p style="margin:0;font-size:13px;color:#888">Tratamiento solicitado</p>
              <p style="margin:4px 0 0;font-size:15px;font-weight:600">${treatmentLabel}</p>
            </div>
            <p style="font-size:13px;color:#888;margin:24px 0 0">
              Si tienes cualquier duda puedes escribirnos a
              <a href="mailto:${CONTACT_EMAIL}" style="color:#c6a667">${CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] error:', err)
    return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 })
  }
}
