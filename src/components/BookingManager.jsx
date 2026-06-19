

import React, { useState } from "react";
import { Search, Calendar, Clock, Edit3, Trash2, SlidersHorizontal, Sparkles, RefreshCcw, Smile, Plus, User, FileText } from "lucide-react";
import { SERVICES, SPECIALISTS } from "../data.js";

export default function BookingManager({
  bookings,
  onEditBooking,
  onCancelBooking,
  onOpenNewBooking,
}) {
  // Filters & State
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("date-asc");

  // Reset Filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    setStatusFilter("All");
    setSortOption("date-asc");
  };

  // Helper resolvers
  const getService = (id) => SERVICES.find((s) => s.id === id);
  const getSpecialist = (id) => SPECIALISTS.find((s) => s.id === id);

  // Apply filters, search, and sort logic
  const filteredBookings = bookings
    .filter((booking) => {
      const service = getService(booking.serviceId);
      const specialist = getSpecialist(booking.specialistId);
      
      const searchMatch =
        booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (service?.name.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        (specialist?.name.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        booking.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());

      const categoryMatch =
        categoryFilter === "All" || (service?.category === categoryFilter);

      const statusMatch =
        statusFilter === "All" ||
        (statusFilter === "upcoming" && booking.isUpcoming()) ||
        (statusFilter === "cancelled" && booking.status === "cancelled") ||
        (statusFilter === "completed" && booking.status === "completed") ||
        (statusFilter === "rescheduled" && booking.status === "rescheduled");

      return searchMatch && categoryMatch && statusMatch;
    })
    .sort((a, b) => {
      const serviceA = getService(a.serviceId);
      const serviceB = getService(b.serviceId);
      const specA = getSpecialist(a.specialistId);
      const specB = getSpecialist(b.specialistId);

      const dateA = new Date(`${a.date}T${a.timeSlot}`).getTime();
      const dateB = new Date(`${b.date}T${b.timeSlot}`).getTime();

      switch (sortOption) {
        case "date-asc":
          return dateA - dateB;
        case "date-desc":
          return dateB - dateA;
        case "price-desc":
          return (serviceB?.price || 0) - (serviceA?.price || 0);
        case "price-asc":
          return (serviceA?.price || 0) - (serviceB?.price || 0);
        case "rating-desc":
          return (specB?.rating || 0) - (specA?.rating || 0);
        default:
          return 0;
      }
    });

  // Calculate stats for interactive user analytics
  const activeBookingsCount = bookings.filter((b) => b.status !== "cancelled").length;
  const totalSpend = bookings
    .filter((b) => b.status !== "cancelled")
    .reduce((sum, b) => sum + (getService(b.serviceId)?.price || 0), 0);
  const cancelledCount = bookings.filter((b) => b.status === "cancelled").length;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="bookings-manager-root">
      
      {/* Intro Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#2D5446]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#1C3D2F] font-black">CLIENT GUEST HUB</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-extrabold">
            Your Somatic Reservations
          </h2>
          <p className="mt-1.5 text-xs text-slate-600 font-display font-semibold">
            Revise, plan, or reschedule active sessions inside the Namastey Wellness Network.
          </p>
        </div>

        <button
          onClick={onOpenNewBooking}
          className="self-start md:self-auto px-6 py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
          id="btn-add-booking"
        >
          <Plus className="w-4 h-4 text-white stroke-[2.5]" />
          <span>Book New Session</span>
        </button>
      </div>

      {/* Analytics Bento Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {/* Stat 1 */}
        <div className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-3xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-slate-500 uppercase text-[9px] font-mono tracking-wider font-bold">Active Bookings</span>
            <div className="text-2xl md:text-3xl text-slate-900 font-extrabold font-display mt-1">{activeBookingsCount}</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#2D5446]/10 text-[#1E3E34] flex items-center justify-center text-sm font-mono border border-[#2D5446]/20 font-bold">
            {activeBookingsCount}
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-3xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-slate-500 uppercase text-[9px] font-mono tracking-wider font-bold">Sanctuary Value</span>
            <div className="text-2xl md:text-3xl text-[#1E3E34] font-black font-mono mt-1">${totalSpend}</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#2D5446]/10 text-[#2D5446] flex items-center justify-center text-sm font-bold border border-[#2D5446]/20">
            $
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-3xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-slate-500 uppercase text-[9px] font-mono tracking-wider font-bold">Cancelled sessions</span>
            <div className="text-2xl md:text-3xl text-slate-500 font-bold font-display mt-1">{cancelledCount}</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold border border-red-200">
            {cancelledCount}
          </div>
        </div>
      </div>

      {/* Control Workspace: Search, Filter, Sort Block */}
      <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-6 mb-8 shadow-sm" id="search-filter-controls">
        <div className="flex items-center gap-2 mb-4 border-b border-black/5 pb-2">
          <SlidersHorizontal className="w-4 h-4 text-slate-700" />
          <span className="text-xs uppercase tracking-wider text-slate-900 font-extrabold font-display">Workspace Filters</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* SEARCH FIELD */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search name, treatment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/60 text-slate-900 text-xs border border-white rounded-xl pl-10 pr-4 py-3 placeholder:text-slate-400 focus:outline-none focus:bg-white"
              id="search-input"
            />
          </div>

          {/* SERVICE CATEGORY FILTER */}
          <div className="flex items-center gap-2">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full bg-white/60 text-slate-900 text-xs border border-white rounded-xl p-3 focus:outline-none focus:bg-white font-semibold"
              id="filter-category"
              aria-label="Filter by Service Category"
            >
              <option value="All">All Categories</option>
              <option value="Tech-Remedies">Tech-Remedies</option>
              <option value="Alternative Medicine">Alternative Medicine</option>
              <option value="Custom Massages">Custom Massages</option>
              <option value="Biometric Testing">Biometric Testing</option>
              <option value="Wellness Classes">Wellness Classes</option>
            </select>
          </div>

          {/* STATUS FILTER */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-white/60 text-slate-900 text-xs border border-white rounded-xl p-3 focus:outline-none focus:bg-white font-semibold"
              id="filter-status"
              aria-label="Filter by Booking Status"
            >
              <option value="All">All Booking Statuses</option>
              <option value="upcoming">Active & Upcoming</option>
              <option value="rescheduled">Rescheduled</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* SORT BUTTONS */}
          <div className="flex gap-2">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full bg-white/60 text-slate-900 text-xs border border-white rounded-xl p-3 focus:outline-none focus:bg-white font-semibold"
              id="sort-select"
              aria-label="Sort options"
            >
              <option value="date-asc">Date: Upcoming First</option>
              <option value="date-desc">Date: Furthest First</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="rating-desc">Therapist Rating: High to Low</option>
            </select>

            <button
              onClick={handleResetFilters}
              title="Reset Filters"
              className="px-3 bg-white/50 hover:bg-slate-900 hover:text-white border border-white text-slate-850 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
            >
              <RefreshCcw className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* READ SECTION: List elements */}
      {filteredBookings.length === 0 ? (
        <div className="text-center py-20 bg-white/40 backdrop-blur-sm border border-white/60 rounded-3xl p-6 shadow-sm">
          <Smile className="w-12 h-12 text-[#2D5446] mx-auto mb-4" />
          <h3 className="font-serif text-xl font-extrabold text-slate-900">No Reservations Found</h3>
          <p className="text-slate-600 text-xs mt-2 max-w-sm mx-auto font-display font-semibold">
            We couldn't locate any active sessions matching the filters. Try resetting variables or schedule a fresh sanctuary session.
          </p>
          <button
            onClick={onOpenNewBooking}
            className="mt-6 px-6 py-2.5 bg-[#1E3E34] text-white rounded-xl text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
          >
            Create First Reservation
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="bookings-list-container">
          {filteredBookings.map((booking) => {
            const service = getService(booking.serviceId);
            const specialist = getSpecialist(booking.specialistId);

            const isUpcoming = booking.isUpcoming();

            return (
              <div
                key={booking.id}
                className="bg-white/45 backdrop-blur-sm border border-white/60 hover:border-white rounded-3xl p-5 shadow-sm flex flex-col justify-between transition-all duration-300 group relative"
                id={`booking-panel-${booking.id}`}
              >
                
                {/* Upper row */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-mono uppercase bg-emerald-50 text-[#1E3E34] px-2 py-0.5 rounded border border-[#2D5446]/20 font-bold">
                      {service?.category || "TREATMENT"}
                    </span>

                    {/* Highly visible STATUS label */}
                    <span
                      className={`text-[9px] uppercase tracking-wider font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        booking.status === "cancelled"
                          ? "bg-red-100 text-red-700 border border-red-200"
                          : booking.status === "rescheduled"
                          ? "bg-amber-100 text-amber-800 border border-amber-200"
                          : isUpcoming
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-250"
                          : "bg-blue-100 text-blue-800 border border-blue-200"
                      }`}
                    >
                      {booking.status === "cancelled"
                        ? "Cancelled"
                        : booking.status === "rescheduled"
                        ? "Rescheduled"
                        : isUpcoming
                        ? "Upcoming"
                        : "Completed"}
                    </span>
                  </div>

                  {/* Booking Service Title */}
                  <h3 className="font-serif text-slate-900 font-extrabold text-lg leading-snug group-hover:text-[#2D5446] transition-colors">
                    {service?.name || "Premium Wellness Ritual"}
                  </h3>

                  {/* Scheduled Date Time block */}
                  <div className="flex items-center gap-4 mt-3 bg-white/60 p-2.5 rounded-xl border border-white/70 text-xs font-mono text-slate-700 font-bold">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#2D5446]" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 border-l border-black/5 pl-4">
                      <Clock className="w-3.5 h-3.5 text-[#2D5446]" />
                      <span>{booking.timeSlot}</span>
                    </div>
                  </div>

                  {/* Practitioner display */}
                  {specialist && (
                    <div className="flex items-center gap-2.5 my-4">
                      <img
                        src={specialist.image}
                        alt={specialist.name}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-full border border-black/5 object-cover"
                      />
                      <div className="leading-tight">
                        <span className="text-[9px] font-mono text-slate-400 block leading-none font-bold">PRACTITIONER</span>
                        <span className="text-slate-800 text-xs font-extrabold">{specialist.name}</span>
                      </div>
                    </div>
                  )}

                  {/* Client Info block */}
                  <div className="space-y-1 py-3 border-t border-black/5 text-xs text-slate-600 font-display font-semibold">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="font-extrabold text-slate-800">{booking.customerName}</span>
                    </div>
                    <div>Email: <span className="text-slate-700 font-mono text-[11px] font-bold">{booking.customerEmail}</span></div>
                    <div>Phone: <span className="text-slate-700 font-mono text-[11px] font-bold">{booking.customerPhone}</span></div>
                    {booking.notes && (
                      <div className="mt-1.5 p-2 bg-[#E6EFEA]/80 rounded-lg text-[10px] text-slate-600 border border-[#2D5446]/10 flex gap-1 leading-snug font-medium">
                        <FileText className="w-3.5 h-3.5 text-[#2D5446] shrink-0" />
                        <span className="italic">"{booking.notes}"</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action controls at footer */}
                <div className="mt-4 pt-3.5 border-t border-black/5 flex items-center justify-between gap-3 shrink-0">
                  <div className="text-sm font-mono font-bold text-[#1C3D2F]">
                    ${service?.price || 0}
                  </div>

                  {booking.status !== "cancelled" && (
                    <div className="flex items-center gap-2 select-none">
                      {/* UPDATE booking action */}
                      <button
                        onClick={() => onEditBooking(booking)}
                        className="p-2 bg-white/60 hover:bg-[#E6EFEA] hover:text-[#1E3E34] text-slate-700 border border-white rounded-lg text-xs transition-all cursor-pointer flex items-center gap-1 font-bold"
                        title="Reschedule Booking"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#2D5446]" />
                        <span>Reschedule</span>
                      </button>

                      {/* DELETE booking action */}
                      <button
                        onClick={() => onCancelBooking(booking.id)}
                        className="p-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-101 rounded-lg text-xs transition-all cursor-pointer flex items-center gap-1 font-bold"
                        title="Cancel Appointment"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-red-500" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}

                  {booking.status === "cancelled" && (
                    <span className="text-[10px] font-mono text-red-500/60 uppercase select-none font-bold">Void Reservation</span>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
