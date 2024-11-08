import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Music",
  description: "As melhores músicas (de acordo comigo mesma)",
  charset: 'UTF-8',
  author: 'Beatriz Alexandra',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
