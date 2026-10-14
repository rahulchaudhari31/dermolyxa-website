import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT, FOOTER_LINKS, SOCIALS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-gold/15 bg-surface/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-64 bg-gold-radial"
      />
      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Logo height={56} />
            <p className="mt-6 max-w-xs font-serif text-xl font-light italic leading-snug text-gold/90">
              Advanced Regenerative &amp; Aesthetic Science
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/50">
              Where regenerative medicine meets artistry, delivering naturally
              refined results with uncompromising care.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-medium uppercase tracking-luxe text-gold">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/60 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-medium uppercase tracking-luxe text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ivory/60">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="max-w-[16rem] leading-relaxed">{CONTACT.address}</li>
            </ul>

            <Button href="/#contact" size="sm" className="mt-6">
              Book Consultation
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/40">
            &copy; {year} Dermolyxa. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-xs font-medium uppercase tracking-wide text-gold/80 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold-light"
              >
                {social.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
