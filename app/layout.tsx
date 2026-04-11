import type { Metadata } from "next";
import "./globals.css"; // Keep your existing CSS import
import { LanguageProvider } from "./LanguageContext"; // <-- Import the provider

export const metadata: Metadata = {
  title: "S-UPER | Secure Drive",
  description: "Premium ride-sharing services for your comfort and security.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Note: The 'lang' and 'dir' attributes will be automatically managed 
    // by the LanguageContext on the client side.
    <html lang="en">
      <body>
        {/* Wrap the children with the LanguageProvider */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}