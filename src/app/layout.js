import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Brand OPT - Skyrocket Your Business With Us",
  description: "Discover your brand's true essence with BrandOPT personalized touch. We craft unique brand stories and define your brand personality, creating an identity that resonates with your audience.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="flex justify-center overflow-x-hidden">
      <body className={`${inter.className} max-w-[1400px] px-[1.5em] overflow-x-hidden`}>{children}</body>
    </html>
  )
}
