// Needed for Vertu security bollocks
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

import type { Metadata } from 'next'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Merge Alerts',
  description: 'Get notified when a merge to main happens',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-theme="sunset"
    >
      <body>
        <Providers>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  )
}

