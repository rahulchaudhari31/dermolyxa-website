"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { treatments } from "@/data/treatments";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z.string().trim().min(7, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address"),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().optional(),
  message: z
    .string()
    .max(1000, "Keep your message under 1,000 characters")
    .optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const baseField =
  "w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 transition-colors focus:outline-none";
const validField = "border-white/10 focus:border-gold/50";
const invalidField = "border-red-400/60 focus:border-red-400";

export function BookingForm() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      treatment: "",
      date: "",
      message: "",
    },
  });

  const onPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      setPhoto(null);
      setPhotoError(null);
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setPhoto(null);
      setPhotoError("Photo must be under 5MB");
      e.target.value = "";
      return;
    }
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setPhoto(null);
      setPhotoError("Use a JPG, PNG or WebP image");
      e.target.value = "";
      return;
    }
    setPhoto(file);
    setPhotoError(null);
  };

  const onSubmit = async (values: BookingValues) => {
    setStatus("idle");
    try {
      const formData = new FormData();
      (Object.keys(values) as (keyof BookingValues)[]).forEach((key) => {
        const value = values[key];
        if (value) formData.append(key, value);
      });
      if (photo) formData.append("photo", photo);

      const res = await fetch("/api/booking", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Booking request failed");

      setStatus("success");
      reset();
      setPhoto(null);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12.5l4.5 4.5L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-6 font-serif text-2xl text-ivory">
          Request received
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ivory/60">
          Thank you for reaching out. Our concierge team will contact you
          within one business day to arrange your free consultation.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-full border border-gold/40 px-6 py-2.5 text-sm text-gold transition-colors hover:bg-gold/10"
        >
          Book another consultation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className={cn(baseField, errors.name ? invalidField : validField)}
            {...register("name")}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 212 555 0147"
            className={cn(baseField, errors.phone ? invalidField : validField)}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@email.com"
          className={cn(baseField, errors.email ? invalidField : validField)}
          {...register("email")}
        />
      </Field>

      <Field label="Treatment" htmlFor="treatment" error={errors.treatment?.message}>
        <div className="relative">
          <select
            id="treatment"
            className={cn(
              baseField,
              "appearance-none pr-10",
              errors.treatment ? invalidField : validField,
            )}
            {...register("treatment")}
          >
            <option value="" disabled>
              Select a treatment
            </option>
            {treatments.map((treatment) => (
              <option key={treatment.slug} value={treatment.title}>
                {treatment.title}
              </option>
            ))}
            <option value="Other">Other / Not sure yet</option>
          </select>
          <svg
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gold"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred date" htmlFor="date">
          <input
            id="date"
            type="date"
            className={cn(baseField, validField)}
            {...register("date")}
          />
        </Field>
        <Field label="Message (optional)" htmlFor="message">
          <input
            id="message"
            type="text"
            placeholder="Anything we should know?"
            className={cn(baseField, validField)}
            {...register("message")}
          />
        </Field>
      </div>

      <div>
        <label htmlFor="photo" className="mb-2 block text-xs uppercase tracking-luxe text-gold/80">
          Photo upload <span className="text-ivory/30">(optional, for free assessment)</span>
        </label>
        {photo ? (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-gold/30 bg-gold/5 px-4 py-3">
            <span className="truncate text-sm text-ivory/70">{photo.name}</span>
            <button
              type="button"
              onClick={() => setPhoto(null)}
              className="shrink-0 text-xs text-gold underline underline-offset-4 hover:text-gold-light"
            >
              Remove
            </button>
          </div>
        ) : (
          <label
            htmlFor="photo"
            className={cn(
              "flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed px-4 py-5 text-sm transition-colors",
              photoError ? "border-red-400/60 text-red-300/70" : "border-white/20 text-ivory/50 hover:border-gold/50 hover:text-gold",
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            Tap to attach a photo (JPG, PNG, WebP &middot; max 5MB)
            <input
              id="photo"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="sr-only"
              onChange={onPhotoChange}
            />
          </label>
        )}
        {photoError ? (
          <p role="alert" className="mt-2 text-xs text-red-300/80">
            {photoError}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          Something went wrong. Please try again or call us directly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-gradient font-sans text-sm font-medium text-bg shadow-[0_10px_30px_-12px_rgba(212,175,55,0.7)] transition-all duration-300 hover:shadow-gold-glow hover:brightness-105 disabled:pointer-events-none disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Request Free Consultation"}
      </button>

      <p className="text-center text-[0.65rem] uppercase tracking-luxe text-ivory/30">
        No obligation &middot; Completely private
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs uppercase tracking-luxe text-gold/80"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-xs text-red-300/80">
          {error}
        </p>
      ) : null}
    </div>
  );
}