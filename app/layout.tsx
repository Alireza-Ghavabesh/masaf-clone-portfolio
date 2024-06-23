import "./globals.css";
import type { Metadata } from "next";
import Footer from "../components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/header/header";
import SessionWrapper from "@/components/SessionWrapper";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "موسسه مصاف ایرانیان",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className="bg-[#F8F8F6] flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow py-4">{children}</div>
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  );
}
