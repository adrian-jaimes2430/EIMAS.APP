import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"EIMAS — Market Intelligence",description:"Turn market signals into your next opportunity."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}