import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OofOne Test",
  description: "Frontend tech test for OofOne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <Link href="http://localhost:3000/">Main</Link>
            <Link href="http://localhost:3000/questionnaire">Forms</Link>
            <Link href="http://localhost:3000/form/create">Create a form</Link>
            <Link href="http://localhost:3000/feedback">View form answers</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
