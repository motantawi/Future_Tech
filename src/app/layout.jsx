import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/ThemeProvider";
import { LanguageProvider } from "@/context/language_themeProvider";
import NavBar from "@/components/Landing/NavBar";
import Footer from "@/components/Landing/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Future Tech",
  description:
    "Future Tech is a leading software company that has been operating in the market for 4 years. It specializes in web development, mobile application development, and desktop software programming, alongside web hosting services and web design. The company stands out for its innovative software solutions, delivering sophisticated websites and applications that precisely meet the needs of its clients with high precision and quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 overflow-x-hidden`}
      >
        <Provider>
          <LanguageProvider>
            <NavBar />
            {children}
            <Footer />
          </LanguageProvider>
        </Provider>
      </body>
    </html>
  );
}
