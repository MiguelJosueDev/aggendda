"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Shield, Lock, CheckCircle } from "lucide-react";

export function SecuritySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5C9DF1]/10 mb-6">
            <Shield className="h-8 w-8 text-[#5C9DF1]" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-black">
            Seguridad y Cumplimiento
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-gray-600">
            Datos protegidos. Dentistas verificados. Cumplimos con todas las
            normativas.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 relative mb-2">
                <Image
                  src="/data-privacy-shield.png"
                  alt="GDPR Compliance"
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-sm font-medium text-[#5C9DF1]">GDPR</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 relative mb-2">
                <Image
                  src="/generic-security-badge.png"
                  alt="PCI-DSS Compliance"
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-sm font-medium text-[#5C9DF1]">
                PCI-DSS
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 relative mb-2">
                <Image
                  src="/kyc-verification-logo.png"
                  alt="KYC Verification"
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-sm font-medium text-[#5C9DF1]">KYC</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-start">
              <Lock className="h-5 w-5 text-[#5C9DF1] mr-2 shrink-0" />
              <div>
                <h3 className="font-medium text-black">Datos Encriptados</h3>
                <p className="text-sm text-muted-foreground text-gray-600">
                  Toda la información sensible está protegida
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-5 w-5 text-[#5C9DF1] mr-2 shrink-0" />
              <div>
                <h3 className="font-medium text-black">Pagos Seguros</h3>
                <p className="text-sm text-muted-foreground text-gray-600">
                  Transacciones protegidas y verificadas
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#5C9DF1] mr-2 shrink-0" />
              <div>
                <h3 className="font-medium text-black">
                  Dentistas Verificados
                </h3>
                <p className="text-sm text-muted-foreground text-gray-600">
                  Todos los profesionales son validados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
