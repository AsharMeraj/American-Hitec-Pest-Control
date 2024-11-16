import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./HomeComponents/Navbar";
import Footer from "./HomeComponents/Footer";
import NextTopLoader from "nextjs-toploader";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from "react-toastify";

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

export const metadata: Metadata = {
  title: "American Hitec Pest Control",
  description: "American Hitec Pest Control offers professional and reliable pest management solutions for residential and commercial spaces. Our team is dedicated to safe and effective pest control, using industry-leading techniques to protect your property from pests. From inspection to treatment, we ensure thorough and lasting results to give you peace of mind. Trust American Hitec for exceptional service and a pest-free environment.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <NextTopLoader color="var(--Primary)" showSpinner={false} speed={600} shadow={false}/>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
            transition={Bounce}
          />
        </main>
      </body>
    </html>
  );
}
