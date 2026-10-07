import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajay Mishra — Founder, AI & Software Engineer",
  description:
    "Portfolio of Ajay Mishra, Founder of Proposify AI and builder of AI, automation, and real-world software systems.",
  keywords: [
    "Ajay Mishra",
    "Proposify AI",
    "Vishwakarma AI",
    "Landslide Early Warning System",
    "AI",
    "software engineer",
    "automation",
    "FastAPI",
    "React",
    "Python",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
