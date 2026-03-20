"use client";

import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const agencies = [
  // ── Áncash ──────────────────────────────────────────────────
  {
    id: 1,
    city: "Chimbote",
    region: "Áncash",
    regionColor: "#d42b2b",
    address: "Terminal El Chimbador — Stand Q-7",
    phones: ["952 689 115"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre+Chimbote/@-9.1045559,-78.5580393,18.5z",
    dot: "#e53e3e",
    img: "/chimbador_terminal.png",
    whatsapp: "51952689115",
  },
  // ── La Libertad ─────────────────────────────────────────────
  {
    id: 2,
    city: "Chao",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Au. Panamericana N 13, Chao 13631 — al lado de Botica Medina",
    phones: ["968 499 740", "987 455 023"],
    maps: "https://www.google.com/maps/@-8.5387296,-78.6773439,3a",
    dot: "#1a8c3c",
    img: "/chao_terminal.png",
    whatsapp: "51987455023",
  },
  {
    id: 3,
    city: "Virú",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Av. Panamericana 396 — Puente Virú",
    phones: ["968 499 740"],
    maps: "https://www.google.com/maps/place/Panamericana+Nte.+396",
    dot: "#1a8c3c",
    img: "/viru_puente.png",
    whatsapp: "51968499740",
  },
  {
    id: 4,
    city: "Paiján",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Carretera Panamericana 1319 — Sector Manco Cápac",
    phones: ["923 747 857"],
    maps: "https://www.google.com/maps/@-7.7332027,-79.3018744",
    dot: "#e8a820",
    img: "/paijan_terminal.png",
    whatsapp: "51923747857",
  },
  {
    id: 5,
    city: "Pacasmayo",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address:
      "1ra cdra. de Leoncio Prado — Terminal Terrestre Pacasmayo Stand 3 y 13",
    phones: ["981 911 766", "980 947 832"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre+Pacasmayo",
    dot: "#1a8c3c",
    img: "/pacasmayo_terminal.png",
    whatsapp: "51981911766",
  },
  {
    id: 6,
    city: "Ciudad de Dios",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Panamericana Norte — Ciudad de Dios Kiosko N°4",
    phones: ["959 998 794"],
    maps: "https://www.google.com/maps/place/Au.+Panamericana+N",
    dot: "#22a849",
    img: "/ciudaddedios.png",
    whatsapp: "51959998794",
  },
  {
    id: 7,
    city: "Guadalupe",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Jr. Zoila Bay 181 — Cafetal II, costado del Parque San Isidro",
    phones: ["942 873 849"],
    maps: "https://www.google.com/maps/@-7.2492965,-79.4685065",
    dot: "#1a8c3c",
    img: "/guadalupe.png",
    whatsapp: "51942873849",
  },
  {
    id: 8,
    city: "Chepén",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Au. Panamericana N 709, Chepén 13871",
    phones: ["999 7157 93", "952 510 976"],
    maps: "https://www.google.com/maps/place/Au.+Panamericana+N+709",
    dot: "#1a8c3c",
    img: "/chepen_panamericana.png",
    whatsapp: "51999157937",
  },
  {
    id: 9,
    city: "Pacanguilla",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address:
      "Calle Bolívar 290 — Pacanguilla, a una esquina del paradero de autos Chepén",
    phones: ["939 797 326"],
    maps: "https://www.google.com/maps/place/Calle+Bolivar,+Pacanguilla",
    dot: "#22a849",
    img: "/pacanguilla.png",
    whatsapp: "51939797326",
  },
  // ── Lambayeque ──────────────────────────────────────────────
  {
    id: 10,
    city: "Chiclayo",
    region: "Lambayeque",
    regionColor: "#7c3aed",
    address: "Av. Augusto B. Leguía 2592, Chiclayo 14009",
    phones: ["935 788 639"],
    maps: "https://www.google.com/maps/place/Terrapuerto+Plaza+Norte+Chiclayo",
    dot: "#e8a820",
    img: "/chiclayo_plazanorte.png",
    whatsapp: "51935788639",
  },
  {
    id: 11,
    city: "Illimo",
    region: "Lambayeque",
    regionColor: "#7c3aed",
    address: "Au. Panamericana N 476, Lambayeque 14013",
    phones: ["964 755 681"],
    maps: "https://www.google.com/maps/place/Expreso+Jireh",
    dot: "#1a8c3c",
    img: "/illimo.png",
    whatsapp: "51964755681",
  },
  {
    id: 12,
    city: "Olmos",
    region: "Lambayeque",
    regionColor: "#7c3aed",
    address: "Caserío Nuevo Cruce Jaén — referencia a la cochera CCHISA",
    phones: ["991 598 645"],
    maps: "https://www.google.com/maps/place/Grifo+CCHISA",
    dot: "#1a8c3c",
    img: "/olmos_cchisa.png",
    whatsapp: "51991598645",
  },
  // ── Amazonas ────────────────────────────────────────────────
  {
    id: 13,
    city: "Bagua Grande",
    region: "Amazonas",
    regionColor: "#065f46",
    address: "Av. Chachapoyas 2840 — Terminal Leiva",
    phones: ["959 544 152"],
    maps: "https://www.google.com/maps/place/Terminal+Leyva",
    dot: "#22a849",
    img: "/chamaya.png",
    whatsapp: "51959544152",
  },
  {
    id: 14,
    city: "Pedro Ruiz",
    region: "Amazonas",
    regionColor: "#065f46",
    address: "Carr. Fernando Belaúnde Terry S/N",
    phones: ["922 210 161"],
    maps: "https://www.google.com/maps/place/Ctra.+Fernando+Bela%C3%BAnde+Terry",
    dot: "#1a8c3c",
    img: "/pedroruiz.png",
    whatsapp: "51922210161",
  },
  {
    id: 15,
    city: "Buenos Aires",
    region: "Amazonas",
    regionColor: "#065f46",
    address: "Carr. Fernando Belaúnde Terry 1246 — frente a la Comisaría",
    phones: ["913 574 460"],
    maps: "https://www.google.com/maps/place/Ctra.+Fernando+Bela%C3%BAnde+Terry+1246",
    dot: "#e8a820",
    img: "/buenosaires.png",
    whatsapp: "51913574460",
  },
  // ── San Martín ──────────────────────────────────────────────
  {
    id: 16,
    city: "Naranjos",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Marginal 314 — al costado de Turismo Cajamarca",
    phones: ["942 444 294"],
    maps: "https://www.google.com/maps/place/AV.+MARGINAL+314,+Naranjos",
    dot: "#e8a820",
    img: "/naranjos.png",
    whatsapp: "51942444294",
  },
  {
    id: 17,
    city: "Naranjillo",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Carr. Fernando Belaúnde Terry S/N — Naranjillo",
    phones: ["975 790 400"],
    maps: "https://www.google.com/maps/place/CARRETERA+FERNANDO+BELAUNDE",
    dot: "#1a8c3c",
    img: "/naranjillo.png",
    whatsapp: "51975790400",
  },
  {
    id: 18,
    city: "N. Cajamarca",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Cajamarca Norte — Terminal Terrestre La Molina",
    phones: ["931 703 571"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre+La+Molina",
    dot: "#22a849",
    img: "/n.cajamarca.png",
    whatsapp: "51931703571",
  },
  {
    id: 19,
    city: "Segunda Jerusalén",
    region: "San Martín",
    regionColor: "#92400e",
    address:
      "Av. Samaria Cdra. 1 — al costado de la Iglesia Pentecostés Misionera",
    phones: ["939 083 805"],
    maps: "https://www.google.com/maps/place/Iglesia+Pentecost%C3%A9s+Misionera+Segunda+Jerusal%C3%A9n",
    dot: "#e8a820",
    img: "/segunda_jerusalen.png",
    whatsapp: "51939083805",
  },
  {
    id: 20,
    city: "Rioja",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Campo Ferial #100 — Terminal Terrestre Stand 8",
    phones: ["941 583 051"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre+Municipal+Arturo+Iberico+Lopez",
    dot: "#22a849",
    img: "/riojagencia.png",
    whatsapp: "51941583051",
  },
  {
    id: 21,
    city: "Moyobamba",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Miguel Grau 555 — Terminal Terrestre Municipal",
    phones: ["995 454 537"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre",
    dot: "#1a8c3c",
    img: "/moyobamba_agencia.png",
    whatsapp: "51995454537",
  },
  {
    id: 22,
    city: "Tabalosos",
    region: "San Martín",
    regionColor: "#92400e",
    address:
      "Carr. Fernando Belaúnde Terry Km. 40 — junto al Restaurante Mi Elva, frente al grifo",
    phones: ["979 050 445"],
    maps: "https://www.google.com/maps/place/Ctra.+Fernando+Bela%C3%BAnde+Terry,+Tabalosos",
    dot: "#e8a820",
    img: "/tabalosos.png",
    whatsapp: "51979050445",
  },
  {
    id: 23,
    city: "Tarapoto",
    region: "San Martín",
    regionColor: "#92400e",
    address:
      "Terminal Santa Anita Stand 20 — costado del Mercado Santa Anita, Carr. Atupampa Morales",
    phones: ["995 454 609"],
    maps: "https://www.google.com/maps/place/Mercado+Santa+Anita",
    dot: "#22a849",
    img: "/santa_anita.png",
    whatsapp: "51995454609",
  },
  {
    id: 24,
    city: "Picota",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Carr. Fernando Belaúnde Terry S/N — costado Hotel Mateo",
    phones: ["924 290 846"],
    maps: "https://www.google.com/maps/place/Picota",
    dot: "#1a8c3c",
    img: "/picota.png",
    whatsapp: "51924290846",
  },
  {
    id: 25,
    city: "San Hilarión",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Carr. Fernando Belaúnde Terry S/N",
    phones: ["942 647 965", "998 031 404"],
    maps: "https://www.google.com/maps/place/San+Hilari%C3%B3n",
    dot: "#1a8c3c",
    img: "/san_hilarion.png",
    whatsapp: "51942647965",
  },
  {
    id: 26,
    city: "Bellavista",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Lima Cdra. 6 con Jr. Loreto — Tercer Piso",
    phones: ["942 135 150"],
    maps: "https://www.google.com/maps/place/Bellavista",
    dot: "#22a849",
    img: "/bellavista.png",
    whatsapp: "51942135150",
  },
  {
    id: 27,
    city: "Sacanche",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Carr. Fernando Belaúnde Terry S/N — Km. 737",
    phones: ["927 113 725", "929 855 077"],
    maps: "https://www.google.com/maps/place/Fernando+Belaunde+Terry",
    dot: "#e8a820",
    img: "/sacanche.png",
    whatsapp: "51927113725",
  },
  {
    id: 28,
    city: "Saposoa",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Jr. Chorrillos 516",
    phones: ["969 182 663"],
    maps: "https://www.google.com/maps/place/Jr.+Chorrillos+516,+Saposoa",
    dot: "#1a8c3c",
    img: "/saposoa.png",
    whatsapp: "51969182663",
  },
  {
    id: 29,
    city: "Juanjuí",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Jr. Arica 103 — Terminal Tobías Ruiz",
    phones: ["950 641 480"],
    maps: "https://www.google.com/maps/place/TERMINAL+TOBIAS+RUIZ",
    dot: "#22a849",
    img: "./juanjui.png",
    whatsapp: "51950641480",
  },
  {
    id: 30,
    city: "Yurimaguas",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Las Flores, Jr. Mariscal Caceres 230, Yurimaguas 16501",
    phones: ["972 851 055"],
    maps: "https://www.google.com/maps/place/5NB+234,+Yurimaguas",
    dot: "#1a8c3c",
    img: "/yurimaguas.png",
    whatsapp: "51972851055",
  },
  {
    id: 31,
    city: "Trujillo",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Av. Nicolás de Piérola 1230, Trujillo 13001 Urb. San Fernando",
    phones: ["999 333 419", "966 198 771"],
    maps: "https://www.google.com/maps/place/Turismo+Universo+Trujillo",
    dot: "#22a849",
    img: "/trujillo.png",
    whatsapp: "51966198771",
  },
];

const regions = [
  "Todas",
  ...Array.from(new Set(agencies.map((a) => a.region))),
];

export default function AgenciasPage() {
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("Todas");

  const filtered = agencies.filter((a) => {
    const q = search.toLowerCase();
    const matchSearch =
      a.city.toLowerCase().includes(q) ||
      a.region.toLowerCase().includes(q) ||
      a.address.toLowerCase().includes(q) ||
      a.phones.some((p) => p.includes(q));
    const matchRegion = activeRegion === "Todas" || a.region === activeRegion;
    return matchSearch && matchRegion;
  });

  useEffect(() => {}, []);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#f2fbf5",
        minHeight: "100vh",
        color: "#0d2818",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes slideUp  { from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);} }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.6);} }
        @keyframes cardIn   { from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);} }
        @keyframes shimmer  { 0%{background-position:200% center;}100%{background-position:-200% center;} }

        .agency-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          border: 1.5px solid #c8f0d8;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
          animation: cardIn .45s ease both;
        }
        .agency-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(26,140,60,.14);
          border-color: #1a8c3c;
        }
        .agency-img-wrap { position: relative; height: 160px; overflow: hidden; }
        .agency-img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
        .agency-card:hover .agency-img { transform: scale(1.06); }

        .region-badge {
          position: absolute; top: 12px; right: 12px;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(26,140,60,.25);
          color: #0f7a2e;
          font-size: 10px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; padding: 4px 10px; border-radius: 6px;
        }
        .city-dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; flex-shrink: 0; box-shadow: 0 0 0 3px rgba(255,255,255,.5); }

        .phone-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: #edfaf3; border: 1px solid #a7f3d0; border-radius: 6px;
          padding: 5px 10px; font-size: 12px; font-weight: 700; color: #0f7a2e;
          text-decoration: none; transition: background .15s, transform .1s; white-space: nowrap;
        }
        .phone-chip:hover { background: #d4f5e0; transform: translateY(-1px); }

        .maps-btn {
          display: flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #edfaf3, #d4f5e0);
          border: 1.5px solid #86efac; border-radius: 8px; padding: 9px 14px;
          font-size: 11px; font-weight: 700; letter-spacing: .06em;
          text-transform: uppercase; color: #0f7a2e; text-decoration: none;
          transition: all .15s;
        }
        .maps-btn:hover { background: linear-gradient(135deg, #d4f5e0, #bbf7d0); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(26,140,60,.18); }

        .filter-chip {
          padding: 7px 16px; border-radius: 20px; font-size: 12px; font-weight: 700;
          letter-spacing: .05em; border: 1.5px solid #c8f0d8; background: #fff;
          color: #5a8a6a; cursor: pointer; transition: all .15s; white-space: nowrap;
        }
        .filter-chip:hover { border-color: #1a8c3c; color: #1a8c3c; background: #edfaf3; }
        .filter-chip.active { background: #1a8c3c; border-color: #1a8c3c; color: #fff; }

        .search-input {
          border: 1.5px solid #c8f0d8; border-radius: 12px;
          padding: 12px 16px 12px 42px; font-size: 14px; font-weight: 500;
          color: #0d2818; background: #fff; outline: none; width: 100%; max-width: 340px;
          transition: border-color .2s, box-shadow .2s;
        }
        .search-input:focus { border-color: #1a8c3c; box-shadow: 0 0 0 3px rgba(26,140,60,.12); }
        .search-input::placeholder { color: #5a8a6a; }

        .wsp-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #fff; border: none; border-radius: 10px; padding: 10px 18px;
          font-size: 12px; font-weight: 700; letter-spacing: .04em;
          cursor: pointer; box-shadow: 0 4px 16px rgba(37,211,102,.30);
          transition: opacity .2s, transform .15s; text-decoration: none; white-space: nowrap;
        }
        .wsp-btn:hover { opacity: .9; transform: translateY(-1px); }

        @media (max-width: 768px) {
          .hero-pad { padding: 48px 20px 60px !important; }
          .agencies-grid { grid-template-columns: 1fr !important; }
          .toolbar { flex-direction: column !important; align-items: flex-start !important; }
          .section-inner { padding: 32px 16px 48px !important; }
          .cta-banner { flex-direction: column !important; padding: 28px 20px !important; }
        }
      `}</style>

      {/* ════ HERO ════ */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #edfaf3 0%, #d4f5e0 40%, #fef9e7 100%)",
          position: "relative",
          overflow: "hidden",
          borderBottom: "3px solid #86efac",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle, rgba(26,140,60,.10) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(232,168,32,.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.035,
            backgroundImage:
              "radial-gradient(circle, #1a8c3c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          className="hero-pad"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "68px 48px 76px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div style={{ animation: "slideUp .65s ease forwards" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,.80)",
                border: "1.5px solid rgba(26,140,60,.25)",
                borderRadius: 20,
                padding: "6px 18px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".12em",
                color: "#0f7a2e",
                textTransform: "uppercase",
                marginBottom: 24,
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  background: "#22a849",
                  borderRadius: "50%",
                  animation: "pulseDot 1.5s ease-in-out infinite",
                  display: "inline-block",
                }}
              />
              Puntos de venta oficiales
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(32px,5vw,56px)",
                fontWeight: 800,
                color: "#0d2818",
                lineHeight: 1.12,
                marginBottom: 18,
              }}
            >
              Nuestras{" "}
              <span style={{ fontStyle: "italic", color: "#1a8c3c" }}>
                agencias
              </span>{" "}
              en el norte del Perú
            </h1>

            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 22,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {[
                { w: 36, c: "#1a8c3c" },
                { w: 18, c: "#e8a820" },
                { w: 10, c: "#d42b2b" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: s.w,
                    height: 3,
                    background: s.c,
                    borderRadius: 2,
                  }}
                />
              ))}
            </div>

            <p
              style={{
                color: "#2d5a3d",
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 540,
                margin: "0 auto 32px",
              }}
            >
              Contamos con{" "}
              <strong style={{ color: "#1a8c3c" }}>
                31 puntos de atención
              </strong>{" "}
              distribuidos en 5 regiones del norte del Perú. Compra tu pasaje
              directamente en la agencia más cercana.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: 0,
                background: "rgba(255,255,255,.75)",
                borderRadius: 14,
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                border: "1.5px solid rgba(26,140,60,.20)",
                maxWidth: 520,
                margin: "0 auto",
                boxShadow: "0 8px 32px rgba(26,140,60,.12)",
              }}
            >
              {[
                { value: "31", label: "Agencias", color: "#1a8c3c" },
                { value: "5", label: "Regiones", color: "#e8a820" },
                { value: "2", label: "Rutas", color: "#1a4fa0" },
                { value: "7 am", label: "Apertura", color: "#d42b2b" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    padding: "16px 8px",
                    textAlign: "center",
                    borderRight:
                      i < 3 ? "1px solid rgba(26,140,60,.12)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: s.color,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#5a8a6a",
                      marginTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ COLOR STRIP ════ */}
      <div style={{ display: "flex", height: 4 }}>
        {["#1a8c3c", "#d42b2b", "#1a4fa0", "#e8a820", "#1a8c3c"].map(
          (c, i, a) => (
            <div
              key={i}
              style={{
                flex: i === 0 || i === a.length - 1 ? 2 : 1,
                background: c,
              }}
            />
          ),
        )}
      </div>

      {/* ════ TOOLBAR ════ */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1.5px solid #c8f0d8",
          position: "sticky",
          top: 68,
          zIndex: 40,
          boxShadow: "0 2px 16px rgba(26,140,60,.08)",
        }}
      >
        <div style={{ maxWidth: 1296, margin: "0 auto", padding: "14px 48px" }}>
          <div
            className="toolbar"
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              >
                <FaSearch size={13} color="#5a8a6a" />
              </div>
              <input
                className="search-input"
                placeholder="Buscar ciudad, región o teléfono..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#5a8a6a",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  whiteSpace: "nowrap",
                }}
              >
                <FaFilter size={9} /> Región:
              </span>
              {regions.map((r) => (
                <button
                  key={r}
                  className={`filter-chip${activeRegion === r ? " active" : ""}`}
                  onClick={() => setActiveRegion(r)}
                >
                  {r}
                </button>
              ))}
            </div>

            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#5a8a6a",
                whiteSpace: "nowrap",
              }}
            >
              {filtered.length} {filtered.length === 1 ? "agencia" : "agencias"}
            </div>
          </div>
        </div>
      </div>

      {/* ════ GRID ════ */}
      <section
        className="section-inner"
        style={{ maxWidth: 1296, margin: "0 auto", padding: "40px 48px 72px" }}
      >
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ fontSize: 16, fontWeight: 600, color: "#5a8a6a" }}>
              No se encontraron agencias
            </p>
          </div>
        ) : (
          <div
            className="agencies-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {filtered.map((agency, i) => (
              <div
                key={agency.id}
                className="agency-card"
                style={{
                  animationDelay: `${i * 40}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Imagen */}
                <div className="agency-img-wrap">
                  <img
                    src={agency.img}
                    alt={agency.city}
                    className="agency-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,40,15,.50) 0%, transparent 55%)",
                    }}
                  />
                  <div className="region-badge">{agency.region}</div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 14,
                      left: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      className="city-dot"
                      style={{ background: agency.dot }}
                    />
                    <span
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#fff",
                        textShadow: "0 1px 12px rgba(0,0,0,.55)",
                      }}
                    >
                      {agency.city}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "18px 18px 20px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: "#fee2e2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <FaMapMarkerAlt size={12} color="#e53e3e" />
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#2d5a3d",
                        lineHeight: 1.55,
                        fontWeight: 500,
                      }}
                    >
                      {agency.address}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 14,
                    }}
                  >
                    {agency.phones.map((phone) => (
                      <a
                        key={phone}
                        className="phone-chip"
                        href={`tel:+51${phone.replace(/\s/g, "")}`}
                      >
                        <FaPhoneAlt size={10} color="#25D366" />
                        {phone}
                      </a>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {agency.maps && (
                      <a
                        className="maps-btn"
                        href={agency.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaMapMarkerAlt size={11} /> Maps{" "}
                        <FaArrowRight size={10} />
                      </a>
                    )}
                    {agency.whatsapp && (
                      <a
                        className="wsp-btn"
                        href={`https://wa.me/${agency.whatsapp}?text=Hola!%20Estoy%20en%20${encodeURIComponent(agency.city)}%20y%20quiero%20consultar%20sobre%20pasajes%20%F0%9F%9A%8D`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp size={13} /> WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        <div
          className="cta-banner"
          style={{
            marginTop: 56,
            background:
              "linear-gradient(135deg, #edfaf3 0%, #d4f5e0 50%, #fef9e7 100%)",
            borderRadius: 20,
            padding: "40px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
            position: "relative",
            overflow: "hidden",
            border: "2px solid #a7f3d0",
            boxShadow: "0 8px 32px rgba(26,140,60,.10)",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -40,
              top: -40,
              width: 220,
              height: 220,
              background:
                "radial-gradient(circle, rgba(26,140,60,.10) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -30,
              bottom: -30,
              width: 160,
              height: 160,
              background:
                "radial-gradient(circle, rgba(232,168,32,.10) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#0f7a2e",
                marginBottom: 8,
              }}
            >
              ¿No encontraste tu ciudad?
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(20px,3vw,26px)",
                fontWeight: 700,
                color: "#0d2818",
                marginBottom: 6,
              }}
            >
              Escríbenos por WhatsApp
            </h3>
            <p style={{ fontSize: 13, color: "#2d5a3d", lineHeight: 1.65 }}>
              Te informamos de rutas, horarios y precios desde cualquier punto
              del norte del Perú.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <a
              href="https://wa.me/51999333419?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20rutas%20y%20pasajes%20%F0%9F%9A%8D"
              target="_blank"
              rel="noopener noreferrer"
              className="wsp-btn"
              style={{ padding: "14px 24px", fontSize: 14, borderRadius: 12 }}
            >
              <FaWhatsapp size={18} /> Escribir ahora <FaArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
