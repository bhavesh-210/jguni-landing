import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JG University — Knowledge Beyond Books',
  description: 'A New Age Tech-Driven University in Ahmedabad, Gujarat. UGC approved university offering MBA, BBA, MCA, BCA, B.Tech and more programmes. Industry-relevant curriculum since 1965.',
  keywords: 'JG University, Ahmedabad, Gujarat, MBA, BCA, MCA, B.Tech, UGC approved, university',
  openGraph: {
    title: 'JG University — Knowledge Beyond Books',
    description: 'A New Age Tech-Driven University empowering students with future-proof skills.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
