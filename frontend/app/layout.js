import "./globals.css";

export const metadata = {
  title: "Halima Illustrations",
  description: "Beautiful hand-drawn illustrations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
