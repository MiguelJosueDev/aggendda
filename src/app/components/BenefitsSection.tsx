"use client"

import { useInView } from "react-intersection-observer"
import { Clock, Shield, Search, CheckCircle } from "lucide-react"

export function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      title: "Menos cancelaciones",
      description: "Reduce drásticamente las ausencias y cancelaciones de última hora.",
      icon: Clock,
      color: "text-[#5C9DF1]",
      bgColor: "bg-[#5C9DF1]/10",
    },
    {
      title: "Agenda optimizada",
      description: "Maximiza la ocupación de tu agenda y mejora la rentabilidad.",
      icon: CheckCircle,
      color: "text-[#6DD3A7]",
      bgColor: "bg-[#6DD3A7]/10",
    },
    {
      title: "Visibilidad online",
      description: "Aumenta tu presencia digital y atrae nuevos pacientes.",
      icon: Search,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
    {
      title: "Cobro garantizado",
      description: "Asegura tus ingresos incluso en caso de no-show.",
      icon: Shield,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <section id="beneficios" className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Beneficios para Clínicas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Optimiza tu práctica dental y mejora tu rentabilidad
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 transition-all duration-1000 delay-${index * 100} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className={`w-12 h-12 rounded-full ${benefit.bgColor} flex items-center justify-center mb-4`}>
                <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
