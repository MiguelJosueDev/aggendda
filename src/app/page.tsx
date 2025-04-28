import Link from "next/link"
import { Button } from "./components/ui/button"
import { Calendar } from "lucide-react"
import { HeroSection } from "./components/HeroSection"
import { ValueProposition } from "./components/ValueProposition"
import { HowItWorks } from "./components/HowItWorks"
import { DemoSection } from "./components/DemoSection"
import { BenefitsSection } from "./components/BenefitsSection"
import { PricingSection } from "./components/PricingSection"
import { SecuritySection } from "./components/SecuritySection"
import { RegistrationForm } from "./components/RegistrationForm"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Calendar className="h-6 w-6" />
            <span>DentiAgenda</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:text-primary">
              Cómo Funciona
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-primary">
              Beneficios
            </Link>
            <Link href="#planes" className="text-sm font-medium hover:text-primary">
              Planes
            </Link>
            <Link href="#registro" className="text-sm font-medium hover:text-primary">
              Registro
            </Link>
          </nav>
          <div>
            <Button size="sm">Iniciar Sesión</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <DemoSection />
        <BenefitsSection />
        <PricingSection />
        <SecuritySection />
        <section id="registro" className="py-16 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¡Únete a la revolución de las agendas dentales!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sé de los primeros en acceder a nuestra plataforma y optimiza tu agenda dental.
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
              <p className="text-sm text-slate-300">La plataforma que revoluciona la gestión de citas dentales.</p>
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
                  <Link href="#" className="hover:text-white">
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
                <li>info@dentiagenda.com</li>
                <li>+34 900 123 456</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} DentiAgenda. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
