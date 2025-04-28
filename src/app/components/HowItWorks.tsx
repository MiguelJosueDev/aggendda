"use client";

import { useInView } from "react-intersection-observer";
import { Search, CreditCard, Bell, User, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      title: "Buscar y Filtrar Dentistas",
      description:
        "Los pacientes encuentran el dentista ideal según especialidad, ubicación y disponibilidad.",
      icon: Search,
      color: "text-[#5C9DF1]",
      bgColor: "bg-[#5C9DF1]/10",
    },
    {
      title: "Reservar con Depósito Seguro",
      description:
        "Se realiza un pequeño depósito que garantiza la asistencia a la cita.",
      icon: CreditCard,
      color: "text-[#6DD3A7]",
      bgColor: "bg-[#6DD3A7]/10",
    },
    {
      title: "Recordatorio Inteligente",
      description:
        "Sistema automatizado de recordatorios por email y SMS para evitar olvidos.",
      icon: Bell,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
    {
      title: "Asistir o No-show Management",
      description:
        "Gestión automática de asistencias y ausencias con políticas claras.",
      icon: User,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      title: "Cobro y Liquidación",
      description:
        "Proceso transparente de cobros y devoluciones según la política establecida.",
      icon: CheckCircle,
      color: "text-emerald-500",
      bgColor: "bg-emerald-100",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-gray-600">
            Un proceso simple y efectivo para gestionar citas dentales
          </p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-10 left-16 right-16 h-0.5 bg-slate-200 z-0 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center transition-all duration-1000 delay-${index * 100} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div
                  className={`w-20 h-20 rounded-full ${step.bgColor} flex items-center justify-center mb-4 z-10`}
                >
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
