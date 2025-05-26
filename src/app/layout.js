import './globals.css'

export const metadata = {
  title: "Rahul's Dashboard",
  description: "A personal portfolio dashboard built with Next.js App Router.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
