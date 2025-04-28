"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/app/ui/Button";
import { Input } from "@/app/ui/Input";
import { Label } from "@/app/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/app/ui/RadioGroup";
import { toast } from "@/hooks/use-toast";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "patient",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, userType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          adminEmail: 'josuecruz1224@outlook.com'
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "¡Pre-registro exitoso!",
          description: "Te contactaremos pronto con más información.",
        });
        setFormData({
          name: "",
          email: "",
          userType: "patient",
        });
      } else {
        throw new Error(result.message || 'Error al procesar el registro');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error al registrarse",
        description: "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <div className="space-y-2 text-gray-600">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            placeholder="Tu nombre completo"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2 text-gray-600">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label>Soy:</Label>
          <RadioGroup
            value={formData.userType}
            onValueChange={handleRadioChange}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="patient" id="patient" />
              <Label className="text-[#5C9DF1]" htmlFor="patient">
                Paciente
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="clinic" id="clinic" />
              <Label className="text-[#5C9DF1]" htmlFor="clinic">
                Clínica
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#5C9DF1] hover:bg-[#5C9DF1]/90 mt-2"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Procesando..." : "Quiero saber más"}
        </Button>

        <p className="text-xs text-center text-muted-foreground mt-4 text-gray-600">
          Al registrarte, aceptas nuestros términos y condiciones y política de
          privacidad.
        </p>
      </div>
    </form>
  );
}
