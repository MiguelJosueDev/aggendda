"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { toast } from "../../hooks/use-toast"

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "patient",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, userType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast.success({
        title: "¡Pre-registro exitoso!",
        description: "Te contactaremos pronto con más información."
      })
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        userType: "patient",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <div className="space-y-2">
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

        <div className="space-y-2">
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
          <RadioGroup value={formData.userType} onValueChange={handleRadioChange} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="patient" id="patient" />
              <Label htmlFor="patient">Paciente</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="clinic" id="clinic" />
              <Label htmlFor="clinic">Clínica</Label>
            </div>
          </RadioGroup>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#5C9DF1] hover:bg-[#5C9DF1]/90 mt-2"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Procesando..." : "Quiero Pre-registrarme"}
        </Button>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Al registrarte, aceptas nuestros términos y condiciones y política de privacidad.
        </p>
      </div>
    </form>
  )
}
