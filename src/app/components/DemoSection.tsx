"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function DemoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slides = [
    {
      title: "Reserva tu cita",
      description: "Selecciona fecha, hora y realiza un depósito seguro",
      image: "/dental-booking-app.png",
    },
    {
      title: "Confirma tu pago",
      description: "Proceso de pago seguro y transparente",
      image: "/dental-payment-confirmed.png",
    },
    {
      title: "Recibe recordatorios",
      description: "Notificaciones automáticas para no olvidar tu cita",
      image: "/smartphone-appointment-alert.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Demo Interactiva
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-black">
            Mira cómo funciona nuestra plataforma en la práctica
          </p>
        </div>

        <div
          ref={ref}
          className={`relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {slides[currentSlide].title}
              </h3>
              <p className="text-white/80">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/20 hover:bg-white/40 text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/20 hover:bg-white/40 text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
