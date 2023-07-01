import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quantum your coding AI",
  description:
    "Quantum is an advanced AI chatbot designed to provide intelligent and dynamic conversational experiences. It offers personalized assistance across a wide range of topics, continuously learns and improves, and aims to create a friendly and engaging conversation environment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
