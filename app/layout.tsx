import type { Metadata } from "next"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

// TODO CMS
export const metadata: Metadata = {
  title: "Firma Szajowski",
  description: "",
  alternates: {
    canonical: "https://www.firmaszajowski.pl/",
  },
  openGraph: {
    title: "Firma Szajowski",
    description: "",
    url: "puntmruczenia.pl",
    siteName: "Firma Szajowski",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  )
}
