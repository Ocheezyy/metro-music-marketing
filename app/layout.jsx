import localFont from "next/font/local";
import "./globals.css";
import Header from "./home-components/header";
import Footer from "@/app/home-components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Metro Media",
  description: "Make your voice heard!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
            <Header />
            {children}
            <Footer />
        </div>
    </body>
    </html>
);
}
