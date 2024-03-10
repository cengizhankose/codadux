import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/light-toggle";
import WalletProvider from "@/components/wallet-provider";
import { Sidebar } from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codadux",
  description: "The most thrilling blockchain challenge platform yet!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
              <Sidebar />
              <div className="flex flex-col">
                <Navbar />
                <div className="p-6">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
