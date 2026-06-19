/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SpaCategory = Object.freeze({
  TECH_REMEDIES: "Tech-Remedies",
  ALTERNATIVE_MEDICINE: "Alternative Medicine",
  MASSAGES: "Custom Massages",
  BIOMETRIC_TESTING: "Biometric Testing",
  CLASSES: "Wellness Classes"
});

export class Specialist {
  constructor(
    id,
    name,
    image,
    rating,
    category,
    specialtyTag,
    degrees,
    experience,
    availableDays,
    bio
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.rating = rating;
    this.category = category;
    this.specialtyTag = specialtyTag;
    this.degrees = degrees;
    this.experience = experience;
    this.availableDays = availableDays;
    this.bio = bio;
  }

  isAvailableOn(dayName) {
    return this.availableDays.includes(dayName);
  }
}

export class SpaService {
  constructor(
    id,
    name,
    description,
    category,
    durationMinutes,
    price,
    rating,
    ratingCount,
    image,
    isFeatured = false
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.durationMinutes = durationMinutes;
    this.price = price;
    this.rating = rating;
    this.ratingCount = ratingCount;
    this.image = image;
    this.isFeatured = isFeatured;
  }
}

export class Booking {
  constructor(
    id,
    customerName,
    customerEmail,
    customerPhone,
    serviceId,
    specialistId,
    date,
    timeSlot,
    notes = "",
    status = "confirmed",
    createdAt = new Date().toISOString()
  ) {
    this.id = id;
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.customerPhone = customerPhone;
    this.serviceId = serviceId;
    this.specialistId = specialistId;
    this.date = date;
    this.timeSlot = timeSlot;
    this.notes = notes;
    this.status = status;
    this.createdAt = createdAt;
  }

  isUpcoming() {
    if (this.status === "cancelled") return false;
    const bookingDate = new Date(`${this.date}T${this.timeSlot}`);
    return bookingDate.getTime() > Date.now();
  }

  validate() {
    if (!this.customerName.trim()) return "Customer name is required.";
    if (!this.customerEmail.includes("@")) return "A valid email address is required.";
    if (!this.customerPhone.trim()) return "Phone number is required.";
    if (!this.date) return "Appointment date is required.";
    if (!this.timeSlot) return "Time slot is required.";
    return null;
  }

  static fromJSON(data) {
    return new Booking(
      data.id,
      data.customerName,
      data.customerEmail,
      data.customerPhone,
      data.serviceId,
      data.specialistId,
      data.date,
      data.timeSlot,
      data.notes || "",
      data.status || "confirmed",
      data.createdAt || new Date().toISOString()
    );
  }
}
