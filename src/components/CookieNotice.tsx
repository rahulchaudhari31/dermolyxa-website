"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "dermolyxa-cookie-consent";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setVisible(localStorage.getItem(STORAGE_KEY) !== "accepted");
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // storage unavailable — still hide for the session
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-label="Cookie notice"
          className={cn(
            "fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-md rounded-2xl border border-gold/20 bg-surface/95 p-5 shadow-soft backdrop-blur",
            "md:left-auto md:right-6 md:bottom-6",
          )}
        >
          <p className="text-sm leading-relaxed text-ivory/70">
            We use cookies to improve your experience and analyse site traffic.
            See our{" "}
            <Link
              href="/privacy"
              className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="rounded-full border border-white/15 px-4 py-2 text-xs text-ivory/60 transition-colors hover:border-white/30 hover:text-ivory"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-full bg-gold-gradient px-5 py-2 text-xs font-medium text-bg transition-opacity hover:opacity-90"
            >
              Accept
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}