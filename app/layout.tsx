import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "firmaszajowski.pl",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
