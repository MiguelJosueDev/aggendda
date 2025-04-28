import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, userType } = data;

    // Email a admin (josuecruz1224@outlook.com)
    const adminEmailSent = await sendEmail({
      to: 'josuecruz1224@outlook.com',
      subject: `Nuevo registro en DentiAgenda: ${name}`,
      body: `
        Se ha registrado un nuevo usuario en DentiAgenda:
        
        Nombre: ${name}
        Email: ${email}
        Tipo: ${userType === 'patient' ? 'Paciente' : 'Clínica'}
        
        Fecha: ${new Date().toLocaleString()}
      `
    });

    // Email de confirmación al usuario
    const userEmailSent = await sendEmail({
      to: email,
      subject: 'Gracias por registrarte en DentiAgenda',
      body: `
        Hola ${name},
        
        Gracias por tu interés en DentiAgenda. Hemos recibido tu solicitud de información.
        
        Pronto nos pondremos en contacto contigo para brindarte más detalles sobre nuestros servicios.
        
        Saludos,
        Equipo DentiAgenda
      `
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Registro exitoso",
      adminEmailSent,
      userEmailSent
    });
  } catch (error) {
    console.error("Error en registro:", error);
    return NextResponse.json(
      { success: false, message: "Error al procesar el registro" },
      { status: 500 }
    );
  }
} 