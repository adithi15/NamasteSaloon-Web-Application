import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import WhatsAppFloat from "@/src/components/WhatsAppFloat";
import HomePage from "@/src/pages/Home";
import ServicesPage from "@/src/pages/Services";
import WhySpaPage from "@/src/pages/WhySpa";
import MembershipsPage from "@/src/pages/Memberships";
import BlogPage from "@/src/pages/Blog";
import ContactPage from "@/src/pages/Contact";
import BookingsPage from "@/src/pages/Bookings";
import { SERVICES, SPECIALISTS } from "@/src/common/data";
import { getWhatsAppUrl } from "@/src/common/utils/whatsapp";
import type {
  Booking,
  PackageType,
  Service,
  Specialist,
  ViewName,
} from "@/src/common/types";

export default function App() {
  const [activeView, setActiveView] = useState<ViewName>("home");
  const [bookingsList, setBookingsList] = useState<Booking[]>([]);
  const [serviceCategory, setServiceCategory] = useState<
    "All" | import("@/src/common/types").SpaCategoryValue
  >("All");
  const [membershipCategory, setMembershipCategory] = useState<
    PackageType | "all"
  >("all");

  const openServices = (
    category: "All" | import("@/src/common/types").SpaCategoryValue = "All",
  ) => {
    setServiceCategory(category);
    setActiveView("services");
  };

  const openMemberships = (category: PackageType | "all" = "all") => {
    setMembershipCategory(category);
    setActiveView("memberships");
  };

  // Load bookings from localStorage on mount
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

  // Helper to resolve service and specialist names
  const getServiceName = (id: string) =>
    SERVICES.find((s) => s.id === id)?.name || "Somatic Therapy";
  const getSpecialistName = (id: string) => {
    if (id === "any") return "First Available Practitioner";
    return (
      SPECIALISTS.find((sp) => sp.id === id)?.name || "Somatic Practitioner"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#EFECE5] to-[#E9E4DB] text-slate-800 relative overflow-x-hidden selection:bg-emerald-100 selection:text-slate-950 font-sans flex flex-col justify-between">
      {/* Background ambient glowing spheres for sophisticated medical look */}
      <div className="absolute top-12 right-12 w-[450px] h-[450px] bg-white/50 rounded-full blur-[90px] opacity-75 ambient-glow-1 pointer-events-none" />
      <div className="absolute top-[40%] left-[-80px] w-[500px] h-[500px] bg-[#2D5446]/5 rounded-full blur-[110px] opacity-60 ambient-glow-2 pointer-events-none" />

      <Header
        onNavigate={(view) => {
          if (view === "services") {
            openServices("All");
            return;
          }
          if (view === "memberships") {
            openMemberships("all");
            return;
          }
          setActiveView(view);
        }}
        onOpenServicesCategory={openServices}
        onOpenMembershipCategory={openMemberships}
        onOpenBooking={openWhatsAppGeneral}
        activeView={activeView}
      />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeView === "home" && (
            <HomePage
              onOpenBooking={handleOpenBooking}
              openWhatsAppGeneral={openWhatsAppGeneral}
              onNavigate={(view) => {
                if (view === "memberships") {
                  openMemberships("all");
                  return;
                }
                setActiveView(view);
              }}
            />
          )}

          {activeView === "services" && (
            <ServicesPage
              initialCategory={serviceCategory}
              onSelectService={(s) => handleOpenBooking(s, null)}
            />
          )}

          {activeView === "why-spa" && (
            <WhySpaPage
              onSelectSpecialist={(sp) => handleOpenBooking(null, sp)}
            />
          )}

          {activeView === "memberships" && (
            <MembershipsPage
              initialCategory={membershipCategory}
              onSelectPlan={(plan) => handleOpenBooking(null, null, plan)}
            />
          )}

          {activeView === "blog" && <BlogPage />}

          {activeView === "contact" && <ContactPage />}

          {activeView === "bookings" && (
            <BookingsPage
              bookingsList={bookingsList}
              onOpenBooking={handleOpenBooking}
              onCancelBooking={handleCancelBooking}
              getServiceName={getServiceName}
              getSpecialistName={getSpecialistName}
            />
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <WhatsAppFloat onClick={openWhatsAppGeneral} />
    </div>
  );
}
