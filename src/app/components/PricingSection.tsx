"use client";

import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { Button } from "@/app/ui/Button";
import { Card, CardContent } from "@/app/ui/Card";

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
  ];

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Planes y Costos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Gratis para pacientes. Fee por cita confirmada para clínicas.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-[#5C9DF1] ring-2 ring-[#5C9DF1] ring-opacity-20"
                  : ""
              }`}
            >
              <CardContent>
                {plan.highlighted && (
                  <div className="bg-[#5C9DF1] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4">
                    Recomendado
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-4 text-black">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <div className="text-lg font-medium text-black">
                    {plan.price}
                  </div>
                  <div className="text-sm text-slate-500 text-black">
                    {plan.fee}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-black">
                      <Check className="h-5 w-5 text-[#6DD3A7] mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full text-black ${plan.highlighted ? "bg-[#5C9DF1] hover:bg-[#5C9DF1]/90" : ""}`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Seleccionar Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
