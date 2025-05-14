import { Rubik } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.tikitravelagency.com"),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          <div className="overflow-x-hidden text-secondary bg-white">
            <MainNavbar />
            {/* <StickyNavbar /> */}
            {children}
            <Footer />
            <ScrollToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
