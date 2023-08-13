import './globals.css'
import Provider from './provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ width: '100%', height: '100vh' }}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
