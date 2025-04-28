import Link from "next/link";
import { Calendar } from "lucide-react";

export default function TerminosYCondiciones() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#5C9DF1]">
            <Calendar className="h-6 w-6" />
            <span>DentiAgenda</span>
          </Link>
        </div>
      </header>

      <main className="container mt-24 mb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#5C9DF1] mb-8">Términos y Condiciones</h1>
        
        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Identificación del Proveedor</h2>
          <p>
            Conforme al artículo 76 Bis de la Ley Federal de Protección al Consumidor (LFPC), toda tienda o servicio en línea debe revelar estos datos: razón social, domicilio físico, RFC, correo y teléfonos de contacto.
          </p>
          <blockquote className="border-l-4 border-[#5C9DF1] pl-4 italic">
            <p><strong>DentiAgenda</strong>, RFC <strong>XAXX010101000</strong>, con domicilio en <strong>Av. Revolución 1234, Col. Centro, Monterrey, 64000, Nuevo León, México</strong>, teléfono <strong>+52 81 3224 3445</strong> y correo <strong>josuecruz1224@outlook.com</strong> (en adelante «el Proveedor»).</p>
          </blockquote>

          <h2 className="text-xl font-semibold mt-6 mb-3">2. Aceptación de los T&C</h2>
          <p>
            Al navegar o contratar nuestros servicios el usuario («Cliente») acepta estos términos y nuestra Política de Privacidad.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. Objeto del Servicio</h2>
          <p>
            Plataforma para <strong>agendar citas dentales</strong>, cobrar un depósito de <strong>30%</strong> y transferir el saldo al profesional de salud cuando se presta el servicio.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">4. Registro de usuario</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>El Cliente debe proporcionar datos veraces.</li>
            <li>El Cliente es responsable de custodiar sus credenciales de acceso.</li>
            <li>Queda prohibida la suplantación de identidad o uso fraudulento.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">5. Precios, pagos y facturación</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Todos los importes se muestran en pesos mexicanos, incluyen IVA salvo que se indique lo contrario (art. 7 LFPC).</li>
            <li>El depósito se carga al momento de confirmar la cita.</li>
            <li>El recibo fiscal (CFDI) se emite dentro de las 24 h siguientes al pago y se envía al correo registrado.</li>
            <li>Pasarelas de pago: <strong>Stripe/Mercado Pago</strong>; sus procesos de cifrado cumplen NOM-151-SCFI-2016 para conservación de mensajes de datos.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">6. Cancelaciones y reembolsos</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cancelar <strong>≥ 24 h</strong> antes → reembolso íntegro.</li>
            <li>Cancelar con menos antelación o no presentarse («no-show») → pérdida total del depósito (art. 56 Código de Comercio).</li>
            <li>Para reagendar sin costo, el Cliente debe solicitarlo al menos <strong>12 horas</strong> antes.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">7. Propiedad intelectual</h2>
          <p>
            El software, marcas y logotipos son de titularidad del Proveedor o con licencia. Queda prohibido copiar, modificar o distribuir sin permiso.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">8. Protección de datos personales</h2>
          <p>
            El tratamiento de datos se rige por la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y su Reglamento. Se informa al usuario mediante un Aviso de Privacidad integral publicado en <strong>www.dentiagenda.mx/privacidad</strong> y elaborado conforme a las guías del INAI.
          </p>
          <p>
            Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) pueden ejercerse enviando un correo a <strong>josuecruz1224@outlook.com</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">9. Responsabilidad y garantías</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>El Proveedor solo intermedia la cita; el profesional de salud es responsable del acto médico.</li>
            <li>El sitio se ofrece «tal cual»; no garantizamos disponibilidad ininterrumpida.</li>
            <li>El Proveedor no responde por daños indirectos, lucro cesante o pérdida de datos.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">10. Enlaces externos</h2>
          <p>
            Podemos mostrar enlaces a terceros; el Proveedor no controla su contenido ni sugiere respaldo.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">11. Ley aplicable y jurisdicción</h2>
          <p>
            Estos T&C se rigen por las leyes federales de los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a los tribunales competentes de <strong>Monterrey, Nuevo León</strong>, renunciando a otro fuero que pudiera corresponderles.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">12. Modificaciones</h2>
          <p>
            Podremos actualizar estos T&C previo aviso de <strong>15</strong> días naturales mediante publicación en el sitio o correo electrónico. El uso continuado implica aceptación.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">13. Contacto</h2>
          <p>Para dudas o reclamaciones:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Correo: <strong>josuecruz1224@outlook.com</strong></li>
            <li>Teléfono: <strong>+52 81 3224 3445</strong> (horario <strong>L-V 9-18 h</strong>)</li>
            <li>Domicilio: <strong>Av. Revolución 1234, Col. Centro, Monterrey, 64000, Nuevo León, México</strong></li>
          </ul>
        </div>
      </main>

      <footer className="border-t py-8 bg-slate-900 text-white mt-auto">
        <div className="container">
          <div className="mt-8 pt-4 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} Miguel Josué Cruz. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 