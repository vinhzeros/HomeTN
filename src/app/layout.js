import { Inter } from "next/font/google";
import './globals.css'
import Providers from '../redux/Provider';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Environment } from "./environment";
import Footer from "./components/Footer";
import Header from "./components/Header";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Electronic Store",
  description: "Shop bans do dien tu",
};
const clientID = Environment.GG_CLIENT_ID;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     
      </head>
      <body className={inter.className}>
        <GoogleOAuthProvider clientId={clientID}>
          <Providers>
            <Header />
            
            {children}
            <Footer />
          </Providers>
        </GoogleOAuthProvider>
      
      </body>
    </html>
  );
}
