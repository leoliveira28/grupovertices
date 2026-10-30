import { ImageResponse } from "next/og";

export const alt =
  "Grupo Vertices · Consultoria tributária: recuperação de créditos com teses pacificadas no STF e no STJ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#0d0c08",
          padding: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "2px solid #e0be66",
            padding: 56,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 30, height: 30, background: "#e0be66" }} />
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              Grupo Vértices
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                fontSize: 86,
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: -2,
                color: "#ffffff",
                maxWidth: 960,
              }}
            >
              Tributo pago indevidamente volta para o caixa da empresa.
            </div>
            <div style={{ fontSize: 36, color: "#c9b78a" }}>
              Recuperação de créditos com teses pacificadas · STF e STJ
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 28,
              color: "#c9b78a",
              borderTop: "2px solid #e0be66",
              paddingTop: 24,
            }}
          >
            <div>grupovertices.com.br</div>
            <div style={{ color: "#e0be66", fontWeight: 700 }}>
              5 anos · art. 168 do CTN
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
