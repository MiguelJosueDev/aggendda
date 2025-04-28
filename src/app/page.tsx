import Link from "next/link";
import { Button, Popover } from "@/app/ui";
import { Calendar, Linkedin, Github, Instagram, MessageCircle, User } from "lucide-react";
import {
  HeroSection,
  ValueProposition,
  BenefitsSection,
  DemoSection,
  PricingSection,
  RegistrationForm,
  HowItWorks,
} from "@/app/components";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <header className="fixed top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-[#5C9DF1]">
            <Calendar className="h-6 w-6" />
            <span>DentiAgenda</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-black hover:text-[#5C9DF1]"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#beneficios"
              className="text-sm font-medium text-black hover:text-[#5C9DF1]"
            >
              Beneficios
            </Link>
            <Link
              href="#planes"
              className="text-sm font-medium text-black hover:text-[#5C9DF1]"
            >
              Planes
            </Link>
            <Link
              href="#registro"
              className="text-sm font-medium text-black hover:text-[#5C9DF1]"
            >
              Registro
            </Link>
          </nav>
          <div>
            <Popover 
              trigger={<Button size="sm">Iniciar Sesión <User className="ml-1 h-4 w-4" /></Button>}
              align="end"
            >
              <div className="space-y-3">
                <h3 className="font-medium text-sm">Iniciar sesión como</h3>
                <div className="space-y-2 pt-1">
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <User className="h-4 w-4 mr-2" /> Médico
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <User className="h-4 w-4 mr-2" /> Paciente
                  </Button>
                </div>
                <p className="text-xs text-gray-500 pt-1">Portal en construcción</p>
              </div>
            </Popover>
          </div>
        </div>
      </header>

      <main className="mt-16">
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <BenefitsSection />
        <DemoSection />
        <PricingSection />
        <section id="registro" className="py-16 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#5C9DF1]">
                ¡Únete a la revolución de las agendas dentales!
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sé de los primeros en acceder a nuestra plataforma y optimiza tu
                agenda dental.
              </p>
              <RegistrationForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-slate-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Calendar className="h-6 w-6" />
                <span>DentiAgenda</span>
              </div>
              <p className="text-sm text-slate-300">
                La plataforma que revoluciona la gestión de citas dentales.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Plataforma</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Cómo Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Planes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/terminos-y-condiciones" className="hover:text-white">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>josuecruz1224@outlook.com</li>
                <li>+52 81 3224 3445</li>
                <li className="flex items-center gap-4 pt-2">
                  <a href="https://www.linkedin.com/in/miguelcruzesc/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/MiguelJosueDev" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/mikesecruz?igsh=ZjBkMTM4Njh3am03" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://wa.me/527351249747" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} © 2025 Miguel Josué Cruz. Todos los derechos reservados.

            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
