import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0064e0 0%, #0457cb 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: "bold",
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
            }}
          >
            m
          </div>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
            }}
          >
            mlluizdevtech
          </span>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Software House com IA e Automação
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "Inter, sans-serif",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          MVP em até 30 dias · Sistemas web · Apps mobile · Automações
        </div>
      </div>
    ),
    { ...size }
  )
}
