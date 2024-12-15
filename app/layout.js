import { Rubik } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiki Travel Agency ",
  description:
    "Lets Explore Someplace New Tiki Travel Agency creates customized vacation itineraries for travel to Hawaii and Asia. Tiki Travel Agency believes that travel should be more than just a vacation; it should be an immersive adventure. ",
  metadataBase: new URL("https://tikitravelagency.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          <div className="overflow-x-hidden text-black bg-white">
            <MainNavbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
