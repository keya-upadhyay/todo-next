import { Inter } from "next/font/google";
import Header from "../Components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Explore new things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="py-16">{children}</div>
      </body>
    </html>
  );
}
