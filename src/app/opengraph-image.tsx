import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dermolyxa — Advanced Regenerative and Aesthetic Science";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.35), transparent 62%)",
          color: "#F7F3EA",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 150,
            height: 150,
            borderRadius: 9999,
            border: "2px solid #D4AF37",
            fontSize: 84,
            color: "#D4AF37",
            letterSpacing: "0.02em",
          }}
        >
          D
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            letterSpacing: "0.14em",
            marginTop: 28,
          }}
        >
          DERMOLYXA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#D4AF37",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            marginTop: 16,
          }}
        >
          Regenerative &amp; Aesthetic Science
        </div>
      </div>
    ),
    { ...size },
  );
}
