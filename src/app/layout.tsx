import { Metadata } from "next"
import "styles/globals.css"
import Product from "@medusajs/product"

import '@styles/front.module.css'
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
config.autoAddCss = false; 

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>

        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
