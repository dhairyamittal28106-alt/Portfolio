import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors">

        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "Dhairya Mittal | Software Developer",
  description: "Backend, AI & Full Stack Developer Portfolio",
};

