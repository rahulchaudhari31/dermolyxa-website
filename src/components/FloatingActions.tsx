import { CONTACT, WHATSAPP_HREF } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dermolyxa on WhatsApp"
        className="fixed bottom-[5.5rem] right-4 z-40 inline-flex h-13 w-13 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 md:bottom-8 md:right-8"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.2.4 2.5.6 3.8.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm6.1 17.1c-.3.8-1.5 1.5-2.1 1.6-.5.1-1.2.1-2-.4-.5-.3-1.1-.7-1.9-1.3-1.6-1.3-2.7-2.9-2.8-3-.1-.1-2.3-3.1-2.3-5.9 0-2.8 1.5-4.2 2-4.7.5-.6 1.1-.7 1.5-.7h1.1c.3 0 .7 0 1 .8.4.9 1.2 3.1 1.3 3.3.1.2.2.5 0 .8l-.6 1c-.3.3-.6.6-.3 1.1.3.6 1.4 2.3 3 3.2 2.1 1.2 2.1.8 2.5.8.4 0 1.5-.6 1.8-1.2.3-.6.3-1.1.2-1.2-.1-.1-.3-.2-.7-.4z" />
        </svg>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="grid grid-cols-2 gap-px border-t border-gold/20 bg-surface/95 backdrop-blur">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-ivory transition-colors hover:text-gold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Call
          </a>
          <a
            href="/contact#booking"
            className="flex items-center justify-center gap-2 bg-gold-gradient py-4 text-sm font-medium text-bg hover:brightness-105"
          >
            Book
          </a>
        </div>
      </div>
    </>
  );
}