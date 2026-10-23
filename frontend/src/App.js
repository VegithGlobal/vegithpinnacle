import "@/App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";

// Inner pages are code-split so the homepage only downloads its own code.
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const LeadershipPage = lazy(() => import("@/pages/LeadershipPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const CompliancePage = lazy(() => import("@/pages/CompliancePage"));
const IndustriesPages = lazy(() => import("@/pages/IndustriesPages"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const page = (Component) => (
  <Suspense fallback={<div className="min-h-screen" />}>
    <Component />
  </Suspense>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={page(AboutPage)} />
          <Route path="/leadership" element={page(LeadershipPage)} />
          <Route path="/services" element={page(ServicesPage)} />
          <Route path="/compliance" element={page(CompliancePage)} />
          <Route path="/industries" element={page(IndustriesPages)} />
          <Route path="/contact" element={page(ContactPage)} />
          <Route path="*" element={page(NotFoundPage)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
