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
      className="pt-20 md:pt-24 py-16 md:py-24 px-4 max-w-4xl mx-auto text-left"
    >
      <div className="space-y-8">
        <div className="border-b border-black/5 pb-6">
          <h1 className="font-serif text-3xl md:text-4xl text-slate-900 font-extrabold tracking-wide uppercase">
            My Reservations
          </h1>
          <p className="text-slate-600 text-xs md:text-sm mt-1 font-display font-semibold">
            Review, manage, or cancel your upcoming premium wellness
            bookings. All details are saved locally in your browser.
          </p>
        </div>

        {bookingsList.length === 0 ? (
          <div className="text-center py-16 bg-white/40 backdrop-blur-sm border border-[#DECBA5]/30 p-8 rounded-3xl space-y-5">
            <AlertCircle className="w-12 h-12 text-[#2D5446]/60 mx-auto" />
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                No Reservations Found
              </h3>
              <p className="text-slate-600 text-xs font-display font-medium max-w-md mx-auto">
                You do not currently have any active session bookings.
                Click below to schedule a contrast thermal cycle or
                custom herbal massage.
              </p>
            </div>
            <button
              onClick={() => onOpenBooking(null, null)}
              className="px-6 py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-[#FAF8F5] text-xs uppercase tracking-widest font-extrabold transition-all cursor-pointer rounded-xl"
            >
              Book A Session
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookingsList.map((book) => (
              <div
                key={book.id}
                className="bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 p-6 rounded-2xl flex flex-col justify-between hover:border-[#DECBA5]/50 transition-colors shadow-sm"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#DECBA5] bg-[#DECBA5]/10 border border-[#DECBA5]/20 px-2.5 py-1 rounded">
                      Confirmed Session
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      ID: {book.id}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base text-slate-900 font-extrabold">
                      {getServiceName(book.serviceId)}
                    </h3>
                    <p className="text-xs text-slate-600 font-display font-semibold">
                      Practitioner:{" "}
                      {getSpecialistName(book.specialistId)}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-700 bg-slate-50/60 rounded-xl p-3 border border-black/5">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-400 font-bold uppercase">
                        DATE
                      </span>
                      <span className="font-bold text-slate-800">
                        {book.date}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-400 font-bold uppercase">
                        TIME SLOT
                      </span>
                      <span className="font-bold text-slate-800">
                        {book.timeSlot}
                      </span>
                    </div>
                  </div>

                  {book.notes && (
                    <p className="text-xs text-slate-600 italic bg-white/40 p-2 rounded-lg border border-[#DECBA5]/20 line-clamp-2">
                      &ldquo;{book.notes}&rdquo;
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-black/5 flex gap-4">
                  <button
                    onClick={() => onCancelBooking(book.id)}
                    className="px-4 py-2 text-xs uppercase tracking-widest font-bold text-red-600 hover:bg-red-50 border border-transparent rounded-lg transition-colors cursor-pointer"
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
