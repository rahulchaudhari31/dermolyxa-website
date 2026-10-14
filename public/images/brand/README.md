# Image slot — `brand/`

**What goes here:** Logo and social-share assets.

**Files:**

| File | Size / notes |
| --- | --- |
| `logo.png` | Full lockup (emblem + wordmark), transparent background, `800 × 533` |
| `logo.svg` | Legacy vector placeholder (unused by the app) |
| `favicon.ico` | `48 × 48` browser tab icon (logo on black) |
| `og-image.jpg` | `1200 × 630` social share preview (Open Graph / Twitter) |
| `og-image.png` | Optional PNG alternative to `og-image.jpg` |

**Replace:** drop files here. The header/footer read `src/data/images.ts` →
`brand.logo`. The app favicons are `src/app/icon.png` (`512 × 512`) and
`src/app/apple-icon.png` (`180 × 180`), generated from the same lockup on a black
background. The dynamic OG image at `src/app/opengraph-image.tsx` renders the
brand mark automatically; `og-image.jpg` is the static fallback referenced from
`images.ts`.
