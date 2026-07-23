import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import WhatsAppFloat from "@/src/components/WhatsAppFloat";
import ScrollToTop from "@/src/app/ScrollToTop";
import HomePage from "@/src/pages/Home";
import ServicesPage from "@/src/pages/Services";
import WhySpaPage from "@/src/pages/WhySpa";
import MembershipsPage from "@/src/pages/Memberships";
import BlogPage from "@/src/pages/Blog";
import ContactPage from "@/src/pages/Contact";
import BookingsPage from "@/src/pages/Bookings";
import { SERVICES, SPECIALISTS } from "@/src/common/data";
import { getWhatsAppUrl } from "@/src/common/utils/whatsapp";
import {
  categoryPath,
  membershipPath,
  pathToView,
  resolveServicesSlug,
  servicePath,
  VIEW_PATHS,
} from "@/src/common/utils/routes";
import type {
  Booking,
  PackageType,
  Service,
  Specialist,
  SpaCategoryValue,
  ViewName,
} from "@/src/common/types";

function ServicesRoute({
  onSelectService,
}: {
  onSelectService: (s: Service) => void;
}) {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const { category, serviceId } = resolveServicesSlug(slug);

  return (
    <ServicesPage
      initialCategory={category}
      highlightServiceId={serviceId}
      onSelectService={onSelectService}
      onCategoryChange={(next) => navigate(categoryPath(next))}
    />
  );
}

function MembershipsRoute({
  onSelectPlan,
}: {
  onSelectPlan: (plan: string) => void;
}) {
  const { type } = useParams<{ type?: string }>();
  const allowed: PackageType[] = [
    "membership",
    "package",
    "couple-spa",
    "couple-celebration",
  ];
  const initial =
    type && (allowed as string[]).includes(type)
      ? (type as PackageType)
      : "all";

  return (
    <MembershipsPage initialCategory={initial} onSelectPlan={onSelectPlan} />
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeView = pathToView(location.pathname);

  const [bookingsList, setBookingsList] = useState<Booking[]>([]);

  useEffect(() => {
    const existing = localStorage.getItem("namastey_bookings");
    if (existing) {
      setBookingsList(JSON.parse(existing));
    }
  }, []);

  const handleOpenBooking = (
    service: Service | null = null,
    specialist: Specialist | null = null,
    plan: string | null = null,
  ) => {
    const lines = ["Hi Namastey Wellness Spa! I'd like to book a session."];

    if (service) lines.push(`*Service:* ${service.name}`);
    if (specialist) lines.push(`*Practitioner:* ${specialist.name}`);
    if (plan) lines.push(`*Plan:* ${plan}`);

    window.open(
      getWhatsAppUrl(lines.join("\n")),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleCancelBooking = (bookingId: string) => {
    const existing = localStorage.getItem("namastey_bookings");
    if (existing) {
      const currentList: Booking[] = JSON.parse(existing);
      const updatedList = currentList.filter((b) => b.id !== bookingId);
      localStorage.setItem("namastey_bookings", JSON.stringify(updatedList));
      setBookingsList(updatedList);
    }
  };

  const openWhatsAppGeneral = () => {
    window.open(
      getWhatsAppUrl(
        "Hi Namastey Wellness Spa! I'd like to ask about your services and memberships.",
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const getServiceName = (id: string) =>
    SERVICES.find((s) => s.id === id)?.name || "Somatic Therapy";
  const getSpecialistName = (id: string) => {
    if (id === "any") return "First Available Practitioner";
    return (
      SPECIALISTS.find((sp) => sp.id === id)?.name || "Somatic Practitioner"
    );
  };

  const openServices = (category: SpaCategoryValue | "All" = "All") => {
    navigate(categoryPath(category));
  };

  const openMemberships = (category: PackageType | "all" = "all") => {
    navigate(membershipPath(category));
  };

  const goToView = (view: ViewName) => {
    if (view === "services") {
      openServices("All");
      return;
    }
    if (view === "memberships") {
      openMemberships("all");
      return;
    }
    navigate(VIEW_PATHS[view]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#EFECE5] to-[#E9E4DB] text-slate-800 relative overflow-x-hidden selection:bg-emerald-100 selection:text-slate-950 font-sans flex flex-col justify-between">
      <ScrollToTop />

      <div className="absolute top-12 right-12 w-[min(450px,70vw)] h-[min(450px,70vw)] bg-white/50 rounded-full blur-[90px] opacity-75 ambient-glow-1 pointer-events-none" />
      <div className="absolute top-[40%] left-[-80px] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-[#2D5446]/5 rounded-full blur-[110px] opacity-60 ambient-glow-2 pointer-events-none" />

      <Header
        onNavigate={goToView}
        onOpenServicesCategory={openServices}
        onOpenMembershipCategory={openMemberships}
        onOpenBooking={openWhatsAppGeneral}
        activeView={activeView}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname.split("/")[1] || "home"}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  openWhatsAppGeneral={openWhatsAppGeneral}
                  onOpenServicesCategory={openServices}
                  onOpenMembershipCategory={openMemberships}
                  onOpenServiceDetail={(service) =>
                    navigate(servicePath(service.name))
                  }
                  onNavigate={goToView}
                />
              }
            />
            <Route
              path="/services/:slug?"
              element={
                <ServicesRoute
                  onSelectService={(s) => handleOpenBooking(s, null)}
                />
              }
            />
            <Route
              path="/memberships/:type?"
              element={
                <MembershipsRoute
                  onSelectPlan={(plan) => handleOpenBooking(null, null, plan)}
                />
              }
            />
            <Route
              path="/why-spa"
              element={
                <WhySpaPage
                  onSelectSpecialist={(sp) => handleOpenBooking(null, sp)}
                />
              }
            />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/bookings"
              element={
                <BookingsPage
                  bookingsList={bookingsList}
                  onOpenBooking={handleOpenBooking}
                  onCancelBooking={handleCancelBooking}
                  getServiceName={getServiceName}
                  getSpecialistName={getSpecialistName}
                />
              }
            />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      <WhatsAppFloat onClick={openWhatsAppGeneral} />
    </div>
  );
}
