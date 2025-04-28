"use client";
import Image from "next/image";
import { Button } from "@/app/ui/Button";
import { ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("value-proposition");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`space-y-6 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block bg-[#5C9DF1]/10 text-[#5C9DF1] px-4 py-1.5 rounded-full text-sm font-medium">
              Nuevo en México
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Evita cancelaciones y optimiza tu agenda de citas dentales
            </h1>
            <p className="text-xl text-slate-600">
              Depósito de reserva, recordatorios automáticos y marketplace para
              atraer nuevos pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#5C9DF1] hover:bg-[#5C9DF1]/90">
                Recibe una prueba gratis
              </Button>
              <Button
                className="text-gray-600 bg-[#5C9DF1] hover:bg-[#5C9DF1]/90"
                variant="outline"
                size="lg"
                onClick={scrollToNextSection}
              >
                Saber Más
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative h-[400px] md:h-[450px]">
              <Image
                src="/dentist.png"
                alt="Dentista con paciente"
                fill
                className="object-contain"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}
