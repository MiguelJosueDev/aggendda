"use client"

import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"
import { Button } from "./ui/button"

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const plans = [
    {
      name: "Plan Básico",
      description: "Ideal para clínicas que empiezan",
      price: "Gratis para pacientes",
      fee: "Comisión 2% por cita confirmada",
      features: [
        "Perfil público básico",
        "Gestión de citas",
        "Recordatorios automáticos",
        "Depósito de reserva",
        "Soporte por email",
      ],
    },
    {
      name: "Plan Premium",
      description: "Para clínicas que buscan crecer",
      price: "Gratis para pacientes",
      fee: "Comisión 1% por cita confirmada",
      features: [
        "Todo lo del Plan Básico",
        "Perfil destacado",
        "Widgets personalizados",
        "Integraciones con ERP dental",
        "Estadísticas avanzadas",
        "Soporte prioritario",
      ],
      highlighted: true,
    },
  ]

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planes y Costos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gratis para pacientes. Fee por cita confirmada para clínicas.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl ${plan.highlighted ? "border-2 border-[#5C9DF1]" : "border"} p-6 transition-all duration-1000 delay-${index * 200} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {plan.highlighted && (
                <div className="bg-[#5C9DF1] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4">
                  Recomendado
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-4">
                <div className="text-lg font-medium">{plan.price}</div>
                <div className="text-sm text-muted-foreground">{plan.fee}</div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#6DD3A7] mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.highlighted ? "bg-[#5C9DF1] hover:bg-[#5C9DF1]/90" : ""}`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                Seleccionar Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

