"use client";

import { useInView } from "react-intersection-observer";
import { Calendar, AlertCircle, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/app/ui/Card";

export function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const items = [
    {
      title: "Problema",
      description:
        "Una sola consulta vacía puede costar de US $150 a $300 dependiendo del tratamiento. Con una ausencia diaria, esto escala a US $20 000 – 70 000 al año.",
      icon: AlertCircle,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      title: "Solución",
      description:
        "Cargo por no-show: Nuestra implementacion de política de cancelación de 24 h cobramos un 50 % del servicio si se avisa con menos de un día, y el 100 % si el cliente simplemente no acude.",
      icon: CreditCard,
      color: "text-black",
      bgColor: "bg-[#5C9DF1]/10",
    },
    {
      title: "Beneficio",
      description:
        "Reduce drásticamente los no-shows y optimiza la rentabilidad de tu clínica dental.",
      icon: Calendar,
      color: "text-black",
      bgColor: "bg-[#6DD3A7]/10",
    },
  ];

  return (
    <section id="value-proposition" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Propuesta de Valor
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nuestra plataforma resuelve el principal problema de las clínicas
            dentales
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center"
        >
          {items.map((item, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} w-full max-w-sm h-[300px]`}
            >
              <CardContent className="flex flex-col h-full">
                <div
                  className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center mb-4`}
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
