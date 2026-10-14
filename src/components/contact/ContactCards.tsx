import { CONTACT, HOURS } from "@/lib/site";

const items = [
  {
    title: "Visit Us",
    icon: (
      <path
        d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    content: (
      <>
        {CONTACT.addressLine1}
        <br />
        {CONTACT.addressLine2}
      </>
    ),
    href: undefined,
  },
  {
    title: "Call Us",
    icon: (
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    content: (
      <>
        {CONTACT.phone}
        <br />
        <span className="text-ivory/40">Tap to call</span>
      </>
    ),
    href: CONTACT.phoneHref,
    external: undefined,
  },
  {
    title: "Email Us",
    icon: (
      <path
        d="M4 6h16v12H4zM4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    content: CONTACT.email,
    href: CONTACT.emailHref,
    external: undefined,
  },
  {
    title: "Working Hours",
    icon: (
      <path
        d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    content: (
      <ul>
        {HOURS.map((row) => (
          <li key={row.day} className="flex justify-between gap-4 py-1">
            <span>{row.day}</span>
            <span className="text-gold">{row.time}</span>
          </li>
        ))}
      </ul>
    ),
    href: undefined,
  },
];

export function ContactCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item) => {
        const inner = (
          <>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                {item.icon}
              </svg>
            </span>
            <div className="mt-5">
              <h2 className="font-serif text-lg text-ivory">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">
                {item.content}
              </p>
            </div>
          </>
        );

        const cardClass =
          "group block h-full rounded-2xl border border-gold/15 bg-surface/60 p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-gold";

        return item.href ? (
          <a key={item.title} href={item.href} className={cardClass}>
            {inner}
          </a>
        ) : (
          <div key={item.title} className={cardClass}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}