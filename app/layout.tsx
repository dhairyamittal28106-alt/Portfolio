import "./globals.css";
import { AuroraBackground } from "@/components/AuroraBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased selection:bg-cyan-500/30">
        <AuroraBackground>
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
export const metadata = {
  title: "Dhairya Mittal | Software Developer",
  description: "Backend, AI & Full Stack Developer Portfolio",
};

