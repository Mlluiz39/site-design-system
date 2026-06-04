import type { Metadata } from "next"
import { Suspense } from "react"
import { ContatoForm } from "./form"

export const metadata: Metadata = {
  title: "Contato | mlluizdevtech",
  description:
    "Entre em contato com a mlluizdevtech. Solicite um orçamento personalizado para seu projeto de software.",
}

export default function ContatoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--canvas)]" />}>
      <ContatoForm />
    </Suspense>
  )
}
