// Esta es una implementación básica para simular el envío de correos
// En producción, deberías usar un servicio como SendGrid, AWS SES, Nodemailer, etc.

type EmailData = {
  to: string;
  subject: string;
  body: string;
};

export async function sendEmail({ to, subject, body }: EmailData): Promise<boolean> {
  try {
    // En un entorno real, aquí implementarías la lógica de envío
    // usando servicios como SendGrid, Mailgun, AWS SES, etc.
    console.log('----------- EMAIL ENVIADO -----------');
    console.log(`A: ${to}`);
    console.log(`Asunto: ${subject}`);
    console.log(`Contenido: ${body}`);
    console.log('-------------------------------------');
    
    // Para implementación real, descomenta y configura según el servicio que uses
    /*
    // Ejemplo con SendGrid
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to,
      from: 'tu-email@dominio.com',
      subject,
      text: body,
      html: body.replace(/\n/g, '<br>'),
    };
    
    await sgMail.send(msg);
    */
    
    return true;
  } catch (error) {
    console.error('Error al enviar email:', error);
    return false;
  }
} 