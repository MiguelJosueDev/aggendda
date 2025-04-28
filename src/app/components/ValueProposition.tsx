"use client"

import { useInView } from "react-intersection-observer"
import { Calendar, AlertCircle, CreditCard } from "lucide-react"

export function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const items = [
    {
      title: "Problema",
      description: "Las ausencias y cancelaciones de última hora generan pérdidas económicas y desorganización.",
      icon: AlertCircle,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      title: "Solución",
      description: "Sistema de depósito previo que garantiza el compromiso del paciente con la cita.",
      icon: CreditCard,
      color: "text-[#5C9DF1]",
      bgColor: "bg-[#5C9DF1]/10",
    },
    {
      title: "Beneficio",
      description: "Reduce drásticamente los no-shows y optimiza la rentabilidad de tu clínica dental.",
      icon: Calendar,
      color: "text-[#6DD3A7]",
      bgColor: "bg-[#6DD3A7]/10",
    },
  ]

  return (
    <section id="value-proposition" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Propuesta de Valor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra plataforma resuelve el principal problema de las clínicas dentales
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 transition-all duration-1000 delay-${index * 200} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center mb-4`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
