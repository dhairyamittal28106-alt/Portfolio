import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased transition-colors">
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "Dhairya Mittal | Software Developer",
  description: "Backend, AI & Full Stack Developer Portfolio",
};

