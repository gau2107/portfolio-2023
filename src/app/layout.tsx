import Header from "./components/Header";
import "./globals.scss";

export const metadata = {
  title: "Gaurav Solanki - Portfolio",
  description: "Gaurav Solanki - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> {children}
      </body>
    </html>
  );
}
