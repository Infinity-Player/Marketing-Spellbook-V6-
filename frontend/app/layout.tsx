import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "Marketing Spellbook",
  description: "Your AI-powered marketing dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
