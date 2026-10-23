import { Outlet } from "react-router-dom";
import GridBackground from "@/components/GridBackground";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Toaster } from "sonner";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Layout() {
  return (
    <div className="App overflow-x-clip" data-testid="site-root">
      <GridBackground />
      <ScrollProgress />
      <ScrollToTop />
      <Seo />
      <Header />
      <main className="relative z-10 min-h-[70vh]">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
        style: {
          background: "#0b1d3a",
          border: "1px solid rgba(212,168,67,0.4)",
          color: "#ffffff",
          },
        }}
      />
    </div>
  );
}
