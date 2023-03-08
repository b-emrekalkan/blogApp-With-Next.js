import styles from "./styles.module.css";
import "../app/styles/globals.css";
import { Inter } from 'next/font/google';

import Header from "../components/Header"
import Footer from "../components/Footer"
import BlogCard from "@/components/BlogCard";

const interFont = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <body className={styles.container}>
        <Header />
        <BlogCard/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
