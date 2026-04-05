import "./globals.css";

export const metadata = {
  title: "Raihan Project",
  description: "Jasa desain, editing, dan kebutuhan visual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}