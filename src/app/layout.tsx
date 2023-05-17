import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as Baijamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = Baijamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
