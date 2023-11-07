import { Roboto } from "next/font/google";
import Header from "./components/Header";
import "./globals.scss";

export const metadata = {
  title: "Gaurav Solanki - Portfolio",
  description: "Gaurav Solanki - Portfolio",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header /> {children}
      </body>
    </html>
  );
}
