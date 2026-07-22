import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import { pageTransition } from "@/src/components/FadeIn";
import type { Booking, Service, Specialist } from "@/src/common/types";

interface BookingsPageProps {
  bookingsList: Booking[];
  onOpenBooking: (
    service?: Service | null,
    specialist?: Specialist | null,
    plan?: string | null,
  ) => void;
  onCancelBooking: (bookingId: string) => void;
  getServiceName: (id: string) => string;
  getSpecialistName: (id: string) => string;
}

export default function BookingsPage({
  bookingsList,
  onOpenBooking,
  onCancelBooking,
  getServiceName,
  getSpecialistName,
}: BookingsPageProps) {
  return (
    <motion.div
      key="bookings"
      {...pageTransition}
      className="pt-20 md:pt-24 py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-left"
    >
      <div className="space-y-6 sm:space-y-8">
        <div className="border-b border-black/5 pb-6">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-900 font-extrabold tracking-wide uppercase leading-tight">
            My Reservations
          </h1>
          <p className="text-slate-600 text-xs md:text-sm mt-2 font-display font-semibold">
            Review, manage, or cancel your upcoming premium wellness
            bookings. All details are saved locally in your browser.
          </p>
        </div>

        {bookingsList.length === 0 ? (
          <div className="text-center py-12 sm:py-16 card-leaf-bg border border-[#DECBA5]/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-5 shadow-lg shadow-[#022A24]/20">
            <AlertCircle className="w-12 h-12 text-[#DECBA5] mx-auto" />
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
                No Reservations Found
              </h3>
              <p className="text-[#FAF8F5]/70 text-xs font-display font-medium max-w-md mx-auto">
                You do not currently have any active session bookings.
                Click below to schedule a contrast thermal cycle or
                custom herbal massage.
              </p>
            </div>
            <button
              onClick={() => onOpenBooking(null, null)}
              className="px-6 py-3 bg-[#DECBA5] hover:bg-[#E9E4DB] text-[#1E3E34] text-xs uppercase tracking-widest font-extrabold transition-all cursor-pointer rounded-xl"
            >
              Book A Session
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {bookingsList.map((book) => (
              <div
                key={book.id}
                className="card-leaf-bg border border-[#DECBA5]/30 p-4 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-[#DECBA5]/50 transition-colors shadow-lg shadow-[#022A24]/20"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#1E3E34] bg-[#DECBA5] border border-[#DECBA5]/40 px-2.5 py-1 rounded shrink-0">
                      Confirmed Session
                    </span>
                    <span className="text-[10px] font-mono text-[#FAF8F5]/45 font-bold break-all text-right min-w-0">
                      ID: {book.id}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base text-[#FAF8F5] font-extrabold">
                      {getServiceName(book.serviceId)}
                    </h3>
                    <p className="text-xs text-[#FAF8F5]/70 font-display font-semibold">
                      Practitioner:{" "}
                      {getSpecialistName(book.specialistId)}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#FAF8F5]/85 bg-black/25 rounded-xl p-3 border border-[#DECBA5]/20">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[#DECBA5]/70 font-bold uppercase">
                        DATE
                      </span>
                      <span className="font-bold text-[#FAF8F5]">
                        {book.date}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[#DECBA5]/70 font-bold uppercase">
                        TIME SLOT
                      </span>
                      <span className="font-bold text-[#FAF8F5]">
                        {book.timeSlot}
                      </span>
                    </div>
                  </div>

                  {book.notes && (
                    <p className="text-xs text-[#FAF8F5]/70 italic bg-black/20 p-2 rounded-lg border border-[#DECBA5]/20 line-clamp-2">
                      &ldquo;{book.notes}&rdquo;
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[#DECBA5]/20 flex flex-wrap gap-3">
                  <button
                    onClick={() => onCancelBooking(book.id)}
                    className="px-4 py-2 text-xs uppercase tracking-widest font-bold text-red-300 hover:bg-red-500/15 border border-transparent rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
