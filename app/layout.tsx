import "./globals.css";
import "./portfolio.css";
import BootIntro from "@/components/BootIntro";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased"><BootIntro />{children}</body>
    </html>
  );
}
export const metadata = {
  title: "Dhairya Mittal — Developer & Builder",
  description: "Portfolio of Dhairya Mittal, a computer science undergraduate building backend systems, cloud applications, and useful AI products.",
};

