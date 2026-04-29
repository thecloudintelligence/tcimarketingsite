import type { Metadata } from 'next'
import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata: Metadata = {
  title: 'The Cloud Intelligence Inc.',
  description: 'The power of technology to drive meaningful change',
  keywords: 'IoT Asset Tracking, Asset Management System, Real-time Location Tracking',
  openGraph: {
    title: 'The Cloud Intelligence Inc.',
    description: 'The power of technology to drive meaningful change',
    images: ['/img/why-health-cost.jpg'],
    url: 'https://www.thecloudintelligence.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/img/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
