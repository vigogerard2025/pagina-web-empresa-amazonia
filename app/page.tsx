"use client";
import { useState, useEffect } from "react";
import { FaBus, FaSearch, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// ── Slideshow: fotos de destinos ──────────────────────────────────────────────
const slides = [
  {
    url: "https://plus.unsplash.com/premium_photo-1686810855843-cb595b8418bd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ciudad: "Bagua Grande",
    region: "Amazonas",
  },
  {
    url: "https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ciudad: "Tarapoto",
    region: "San Martín",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1673288456151-4f7b871863c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ciudad: "Moyobamba",
    region: "San Martín",
  },
  {
    url: "https://cocatambo.com/sites/default/files/tacacho-cecina-comida-selva-cocatambo.webp",
    ciudad: "Juanji",
    region: "La Libertad",
  },
  {
    url: "https://images.unsplash.com/photo-1565983965700-a31031a213d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ciudad: "Chachapoyas",
    region: "Amazonas",
  },
  {
    url: "https://aventuras.pe/blog/wp-content/uploads/2023/11/guacamayo-macao-e1650594697991.jpg ",
    ciudad: "Tarapoto",
    region: "Amazonas",
  },
  {
    url: "https://images.unsplash.com/photo-1578072551784-7edf375aa306?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ciudad: "Jaén",
    region: "Cajamarca",
  },
];

const routes = [
  { id: 1, from: "Trujillo", to: "Chiclayo", price: 30, duration: "12h" },
  { id: 2, from: "Trujillo", to: "Bagua Grande", price: 80, duration: "12h" },
  { id: 3, from: "Trujillo", to: "Nva Cajamarca", price: 80, duration: "8h" },
  { id: 4, from: "Trujillo", to: "Moyobamba", price: 90, duration: "12h" },
  { id: 5, from: "Trujillo", to: "Tarapoto", price: 100, duration: "6h" },
  { id: 6, from: "Trujillo", to: "Picota", price: 120, duration: "10h" },
  { id: 7, from: "Trujillo", to: "Bellavista", price: 120, duration: "10h" },
  { id: 8, from: "Trujillo", to: "Saposoa", price: 130, duration: "10h" },
  { id: 9, from: "Trujillo", to: "Juanjí", price: 130, duration: "10h" },
  { id: 10, from: "Trujillo", to: "Pucara", price: 70, duration: "10h" },
  { id: 11, from: "Trujillo", to: "Chamaya", price: 70, duration: "10h" },
  { id: 12, from: "Trujillo", to: "Jaen", price: 80, duration: "10h" },
  { id: 13, from: "Trujillo", to: "Pedro Ruiz", price: 80, duration: "10h" },
  { id: 14, from: "Trujillo", to: "Pomacochas", price: 80, duration: "10h" },
  { id: 15, from: "Trujillo", to: "Aguas Verdes", price: 80, duration: "10h" },
  { id: 16, from: "Trujillo", to: "Naranjos", price: 80, duration: "10h" },
  { id: 17, from: "Trujillo", to: "Naranjillo", price: 80, duration: "10h" },
  {
    id: 18,
    from: "Trujillo",
    to: "Segunda Jerusalen",
    price: 80,
    duration: "10h",
  },
  { id: 19, from: "Trujillo", to: "Rioja", price: 90, duration: "10h" },
  { id: 20, from: "Trujillo", to: "Tabalosos", price: 100, duration: "10h" },
  { id: 21, from: "Trujillo", to: "Alianza", price: 120, duration: "10h" },
  { id: 22, from: "Trujillo", to: "Yurimaguas", price: 130, duration: "10h" },
  { id: 23, from: "Trujillo", to: "San Hilarion", price: 120, duration: "10h" },
  { id: 24, from: "Trujillo", to: "Sacanche", price: 120, duration: "10h" },
  { id: 25, from: "Trujillo", to: "Tocache", price: 200, duration: "10h" },
  { id: 101, from: "Chiclayo", to: "Trujillo", price: 30, duration: "12h" },
  { id: 102, from: "Bagua Grande", to: "Trujillo", price: 80, duration: "12h" },
  { id: 103, from: "Nva Cajamarca", to: "Trujillo", price: 80, duration: "8h" },
  { id: 104, from: "Moyobamba", to: "Trujillo", price: 90, duration: "12h" },
  { id: 105, from: "Tarapoto", to: "Trujillo", price: 100, duration: "6h" },
  { id: 106, from: "Picota", to: "Trujillo", price: 120, duration: "10h" },
  { id: 107, from: "Bellavista", to: "Trujillo", price: 120, duration: "10h" },
  { id: 108, from: "Saposoa", to: "Trujillo", price: 130, duration: "10h" },
  { id: 109, from: "Juanjí", to: "Trujillo", price: 130, duration: "10h" },
  { id: 110, from: "Pucara", to: "Trujillo", price: 70, duration: "10h" },
  { id: 111, from: "Chamaya", to: "Trujillo", price: 70, duration: "10h" },
  { id: 113, from: "Pedro Ruiz", to: "Trujillo", price: 80, duration: "10h" },
  { id: 114, from: "Pomacochas", to: "Trujillo", price: 80, duration: "10h" },
  { id: 115, from: "Aguas Verdes", to: "Trujillo", price: 80, duration: "10h" },
  { id: 116, from: "Naranjos", to: "Trujillo", price: 80, duration: "10h" },
  { id: 117, from: "Naranjillo", to: "Trujillo", price: 80, duration: "10h" },
  {
    id: 118,
    from: "Segunda Jerusalen",
    to: "Trujillo",
    price: 80,
    duration: "10h",
  },
  { id: 119, from: "Rioja", to: "Trujillo", price: 90, duration: "10h" },
  { id: 120, from: "Tabalosos", to: "Trujillo", price: 100, duration: "10h" },
  { id: 121, from: "Alianza", to: "Trujillo", price: 120, duration: "10h" },
  { id: 122, from: "Yurimaguas", to: "Trujillo", price: 130, duration: "10h" },
  {
    id: 123,
    from: "San Hilarion",
    to: "Trujillo",
    price: 120,
    duration: "10h",
  },
  { id: 124, from: "Sacanche", to: "Trujillo", price: 120, duration: "10h" },
  { id: 125, from: "Tocache", to: "Trujillo", price: 200, duration: "10h" },
];

const cities = [
  "Trujillo",
  "Chiclayo",
  "Bagua Grande",
  "Nva Cajamarca",
  "Moyobamba",
  "Tarapoto",
  "Picota",
  "Bellavista",
  "Saposoa",
  "Juanjí",
  "Pucara",
  "Chamaya",
  "Jaen",
  "Pedro Ruiz",
  "Pomacochas",
  "Aguas Verdes",
  "Naranjos",
  "Naranjillo",
  "Segunda Jerusalen",
  "Rioja",
  "Tabalosos",
  "Alianza",
  "Yurimaguas",
  "San Hilarion",
  "Sacanche",
  "Tocache",
];

export default function BusTransportPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);

  // ── Slideshow state ──
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setFading(true);
      const next = (current + 1) % slides.length;
      setTimeout(() => {
        setCurrent(next);
        setFading(false);
        setPrev(null);
      }, 800); // duración del crossfade
    }, 2000); // cada 2 segundos
    return () => clearInterval(interval);
  }, [current]);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setPrev(current);
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
      setPrev(null);
    }, 800);
  };

  const filteredRoutes = routes.filter((r) => {
    if (origin && r.from !== origin) return false;
    if (destination && r.to !== destination) return false;
    return true;
  });

  const handleSearch = () => {
    setSearched(true);
    setSelectedRoute(null);
    setTimeout(() => {
      document
        .getElementById("results-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      style={{
        fontFamily: "'Inter',sans-serif",
        background: "#fff",
        minHeight: "100vh",
        color: "#111",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }

        @keyframes slideUp   { from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);} }
        @keyframes pulseDot  { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.5);} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-10px);}to{opacity:1;transform:translateY(0);} }
        @keyframes resultsIn { from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);} }

        /* ── Slideshow ── */
        @keyframes zoomSlow { from{transform:scale(1);}to{transform:scale(1.08);} }
        .slide-bg {
          position:absolute;inset:0;width:100%;height:100%;
          object-fit:cover;object-position:center;
          transition:opacity 0.8s ease;
          animation:zoomSlow 7s ease forwards;
        }
        .slide-bg.visible  { opacity:1; }
        .slide-bg.hidden   { opacity:0; }

        /* Pill destino actual */
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);} }
        .slide-label {
          position:absolute;bottom:80px;right:28px;z-index:4;
          background:rgba(5,12,28,.65);border:1px solid rgba(255,255,255,.18);
          backdrop-filter:blur(10px);border-radius:10px;
          padding:10px 16px;display:flex;flex-direction:column;gap:2px;
          animation:fadeSlideUp .5s ease forwards;
        }
        .slide-label-city  { font-size:15px;font-weight:700;color:#fff;letter-spacing:-.01em; }
        .slide-label-region{ font-size:10px;font-weight:600;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em; }

        /* Dots */
        .slide-dots {
          position:absolute;bottom:28px;left:50%;transform:translateX(-50%);
          z-index:4;display:flex;gap:8px;align-items:center;
        }
        .slide-dot {
          width:8px;height:8px;border-radius:4px;
          background:rgba(255,255,255,.35);border:none;cursor:pointer;padding:0;
          transition:background .3s,width .3s;
        }
        .slide-dot.active {
          background:#f5c518;width:24px;
        }

        .animate-up { animation:slideUp .7s ease forwards; }

        /* Search card */
        .search-card { background:rgba(255,255,255,.97);border-radius:20px;padding:24px 28px 22px;box-shadow:0 24px 64px rgba(0,0,0,.22);max-width:880px;width:100%;margin:0 auto; }
        .search-fields-row { display:flex;align-items:stretch;background:#f9fafb;border:1.5px solid #e5e7eb;border-radius:14px;overflow:hidden; }
        .search-field { display:flex;flex-direction:column;gap:4px;flex:1;padding:14px 18px; }
        .search-field label { font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(0,0,0,.4); }
        .search-select { border:none;outline:none;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;color:#111;background:transparent;cursor:pointer;padding:4px 0;appearance:none;-webkit-appearance:none;width:100%; }
        .search-select option { background:#fff;color:#111; }
        .search-date { border:none;outline:none;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;color:#111;background:transparent;cursor:pointer;padding:4px 0;width:100%; }
        .search-date::-webkit-calendar-picker-indicator { opacity:.5;cursor:pointer; }
        .field-divider { width:1px;background:#e5e7eb;align-self:stretch;margin:0;flex-shrink:0; }
        .btn-search { background:linear-gradient(135deg,#1a8c3c,#0f5c28);color:#fff;border:none;border-radius:12px;padding:14px 24px;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;white-space:nowrap;box-shadow:0 4px 18px rgba(26,140,60,.4);transition:opacity .2s,transform .1s;display:flex;align-items:center;gap:8px; }
        .btn-search:hover { opacity:.88;transform:translateY(-1px); }

        /* Route cards */
        .route-card { background:#fff;border:1.5px solid #e5e7eb;border-radius:14px;padding:20px 22px;cursor:pointer;transition:border-color .2s,box-shadow .2s,transform .15s;animation:resultsIn .4s ease forwards;opacity:0; }
        .route-card:hover { border-color:#1a8c3c;box-shadow:0 6px 24px rgba(26,140,60,.1);transform:translateY(-2px); }
        .route-card.selected { border-color:#1a8c3c;box-shadow:0 6px 24px rgba(26,140,60,.15);background:#f0fdf4; }
        .btn-primary { background:linear-gradient(135deg,#1a8c3c,#0f5c28);color:#fff;border:none;padding:12px 24px;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;border-radius:8px;transition:opacity .2s,transform .1s;box-shadow:0 4px 14px rgba(26,140,60,.3); }
        .btn-primary:hover { opacity:.88;transform:translateY(-1px); }

        .feat-icon { width:48px;height:48px;border-radius:12px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:22px; }
        .feat-card { border-radius:14px;padding:24px;display:flex;gap:16px;align-items:flex-start;transition:transform .2s,box-shadow .2s; }
        .feat-card:hover { transform:translateY(-3px); }

        @media (max-width:768px) {
          .hero-content{padding:60px 20px 100px!important;}
          .hero-title{font-size:clamp(32px,8vw,48px)!important;}
          .hero-desc{font-size:14px!important;max-width:100%!important;}
          .hero-line{display:none!important;}
          .search-card{padding:16px!important;border-radius:14px!important;}
          .search-fields-row{flex-direction:column!important;}
          .field-divider{width:100%!important;height:1px!important;}
          .routes-section{padding:0 16px 48px!important;}
          .routes-grid{grid-template-columns:1fr!important;}
          .features-section{padding:48px 16px!important;}
          .features-grid{grid-template-columns:1fr!important;}
          .footer-inner{flex-direction:column!important;align-items:flex-start!important;padding:24px 16px!important;gap:20px!important;}
          .slide-label{display:none!important;}
        }
        @media (max-width:480px) {
          .hero-stats{flex-direction:column!important;border-radius:10px!important;}
          .hero-stats>div{border-right:none!important;border-bottom:1px solid rgba(255,255,255,.08)!important;}
          .hero-stats>div:last-child{border-bottom:none!important;}
        }
      `}</style>

      {/* ════ HERO ════ */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* ── Slideshow de fondos ── */}
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.url}
            alt={slide.ciudad}
            className={`slide-bg ${i === current ? "visible" : "hidden"}`}
            style={{ zIndex: i === current ? 1 : 0 }}
          />
        ))}

        {/* Overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "linear-gradient(110deg,rgba(5,12,28,.60) 0%,rgba(8,20,45,.40) 55%,rgba(5,12,28,.10) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            zIndex: 2,
            background: "linear-gradient(to top,rgba(0,0,0,.45),transparent)",
          }}
        />

        {/* Línea vertical decorativa */}
        <div
          className="hero-line"
          style={{
            position: "absolute",
            left: 44,
            top: "18%",
            bottom: "18%",
            width: 3,
            zIndex: 3,
            background:
              "linear-gradient(to bottom,transparent,#f5c518 20%,#f5c518 80%,transparent)",
            borderRadius: 2,
            opacity: 0.75,
          }}
        />

        {/* ── Etiqueta del destino actual ── */}
        <div className="slide-label" key={current}>
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,.45)",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              fontWeight: 600,
            }}
          >
            📍 Destino
          </span>
          <span className="slide-label-city">{slides[current].ciudad}</span>
          <span className="slide-label-region">{slides[current].region}</span>
        </div>

        {/* ── Dots de navegación ── */}
        <div className="slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slide-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a ${slides[i].ciudad}`}
            />
          ))}
        </div>

        {/* ── Contenido ── */}
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 72px 120px",
            width: "100%",
          }}
        >
          <div className="animate-up" style={{ maxWidth: 880 }}>
            {/* Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,.09)",
                border: "1px solid rgba(255,255,255,.22)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".12em",
                color: "#e2e8f0",
                textTransform: "uppercase",
                marginBottom: 24,
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  background: "#4ade80",
                  borderRadius: "50%",
                  animation: "pulseDot 1.5s ease-in-out infinite",
                  display: "inline-block",
                }}
              />
              Servicio Nacional
            </div>

            <h1
              className="hero-title"
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(36px,5.5vw,66px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-.01em",
                marginBottom: 18,
                color: "#fff",
                textShadow: "0 2px 28px rgba(0,0,0,.45)",
              }}
            >
              Viaja por el <br />
              norte del
              <span style={{ fontStyle: "italic", color: "#f5c518" }}>
                {" "}
                Perú
              </span>
              <br />
              con confianza
            </h1>

            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 22,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 3,
                  background: "#1a8c3c",
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  width: 18,
                  height: 3,
                  background: "#f5c518",
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 3,
                  background: "#d42b2b",
                  borderRadius: 2,
                }}
              />
            </div>

            <p
              className="hero-desc"
              style={{
                fontFamily: "'Inter',sans-serif",
                color: "rgba(215,225,240,.85)",
                fontSize: 16,
                lineHeight: 1.85,
                maxWidth: 490,
                marginBottom: 36,
              }}
            >
              🌄✨ Es hora de aventurarse hacia el norte ✨🚍 Nuevos paisajes,
              nuevas experiencias y destinos que te esperan en la ruta a la
              selva.
            </p>

            {/* Search card */}
            <div className="search-card" id="search-section">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 18,
                  flexWrap: "wrap",
                }}
              >
                <FaBus size={17} color="#1a8c3c" />
                <span
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#111",
                  }}
                >
                  Buses Interurbanos
                </span>
                <div style={{ display: "flex", gap: 18, marginLeft: 4 }}>
                  {["Pasajes de bus", "Ida y vuelta"].map((opt, idx) => (
                    <label
                      key={opt}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        cursor: "pointer",
                        fontSize: 13,
                        fontWeight: 500,
                        color: idx === 0 ? "#1a8c3c" : "#999",
                      }}
                    >
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          border:
                            idx === 0 ? "5px solid #1a8c3c" : "2px solid #ccc",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="search-fields-row">
                <div className="search-field">
                  <label>Origen</label>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <FaMapMarkerAlt
                      size={12}
                      color="#1a8c3c"
                      style={{ flexShrink: 0 }}
                    />
                    <select
                      className="search-select"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    >
                      <option value="">Seleccionar ciudad</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field-divider" />
                <div className="search-field">
                  <label>Destino</label>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <FaMapMarkerAlt
                      size={12}
                      color="#e53e3e"
                      style={{ flexShrink: 0 }}
                    />
                    <select
                      className="search-select"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    >
                      <option value="">Seleccionar ciudad</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field-divider" />
                <div className="search-field">
                  <label>Ida</label>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <FaCalendarAlt
                      size={12}
                      color="#888"
                      style={{ flexShrink: 0 }}
                    />
                    <input
                      type="date"
                      className="search-date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field-divider" />
                <div className="search-field" style={{ background: "#f3f4f6" }}>
                  <label style={{ color: "rgba(0,0,0,.3)" }}>
                    Vuelta (Opcional)
                  </label>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <FaCalendarAlt
                      size={12}
                      color="#bbb"
                      style={{ flexShrink: 0 }}
                    />
                    <input
                      type="date"
                      className="search-date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      style={{ color: "#aaa" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    background: "#f9fafb",
                  }}
                >
                  <button className="btn-search" onClick={handleSearch}>
                    <FaSearch size={12} /> Buscar
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              className="hero-stats"
              style={{
                display: "flex",
                gap: 0,
                background: "rgba(5,12,28,.48)",
                borderRadius: 14,
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,.10)",
                maxWidth: 460,
                boxShadow: "0 8px 32px rgba(0,0,0,.35)",
                marginTop: 28,
              }}
            >
              {[
                { value: "50+", label: "Rutas activas", color: "#4ade80" },
                { value: "4200", label: "Pasajeros / mes", color: "#fbbf24" },
                { value: "98%", label: "Puntualidad", color: "#60a5fa" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    padding: "16px 12px",
                    textAlign: "center",
                    borderRight:
                      i < 2 ? "1px solid rgba(255,255,255,.08)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: 24,
                      fontWeight: 700,
                      color: s.color,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 10,
                      color: "rgba(255,255,255,.48)",
                      marginTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badge Golden Class */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 24,
            zIndex: 4,
            background: "linear-gradient(135deg,#f5c518,#d4a017)",
            borderRadius: 10,
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 6px 28px rgba(212,160,23,.50)",
          }}
        >
          <span style={{ fontSize: 16 }}>⭐</span>
          <div>
            <div
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 10,
                fontWeight: 800,
                color: "#1a1a1a",
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              Golden Class
            </div>
            <div
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 9,
                color: "rgba(0,0,0,.6)",
                fontWeight: 600,
              }}
            >
              Servicio VIP
            </div>
          </div>
        </div>
      </section>

      {/* ════ COLOR STRIP ════ */}
      <div style={{ display: "flex", height: 5 }}>
        <div style={{ flex: 2, background: "#1a8c3c" }} />
        <div style={{ flex: 1, background: "#d42b2b" }} />
        <div style={{ flex: 1, background: "#1a4fa0" }} />
        <div style={{ flex: 1, background: "#f5c518" }} />
        <div style={{ flex: 2, background: "#1a8c3c" }} />
      </div>

      {/* ════ RESULTADOS ════ */}
      {searched && (
        <section
          id="results-section"
          className="routes-section"
          style={{
            padding: "48px 48px 72px",
            maxWidth: 1296,
            margin: "0 auto",
            animation: "resultsIn .5s ease forwards",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 28,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(22px,4vw,28px)",
                  fontWeight: 700,
                  color: "#111",
                }}
              >
                Resultados de búsqueda
              </h2>
              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  color: "rgba(0,0,0,.45)",
                  fontSize: 13,
                  marginTop: 5,
                }}
              >
                {filteredRoutes.length}{" "}
                {filteredRoutes.length === 1
                  ? "ruta encontrada"
                  : "rutas encontradas"}
                {origin && ` · Desde ${origin}`}
                {destination && ` → ${destination}`}
              </p>
            </div>
            <button
              onClick={() => {
                setSearched(false);
                setOrigin("");
                setDestination("");
                setDate("");
                setReturnDate("");
              }}
              style={{
                background: "transparent",
                border: "1.5px solid #d1d5db",
                color: "rgba(0,0,0,.55)",
                padding: "7px 16px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "'Inter',sans-serif",
                fontWeight: 600,
              }}
            >
              ✕ Limpiar búsqueda
            </button>
          </div>
          {filteredRoutes.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "rgba(0,0,0,.5)",
                }}
              >
                No se encontraron rutas
              </p>
              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 13,
                  color: "rgba(0,0,0,.35)",
                  marginTop: 6,
                }}
              >
                Intenta con otro origen o destino
              </p>
            </div>
          ) : (
            <div
              className="routes-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
                gap: 14,
              }}
            >
              {filteredRoutes.map((route, i) => (
                <div
                  key={route.id}
                  className={`route-card${selectedRoute === route.id ? " selected" : ""}`}
                  style={{
                    animationDelay: `${i * 40}ms`,
                    animationFillMode: "forwards",
                  }}
                  onClick={() =>
                    setSelectedRoute(
                      selectedRoute === route.id ? null : route.id,
                    )
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 14,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#111",
                        }}
                      >
                        <span>{route.from}</span>
                        <span style={{ color: "#d4a017", fontSize: 13 }}>
                          →
                        </span>
                        <span>{route.to}</span>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 12,
                          color: "rgba(0,0,0,.4)",
                          marginTop: 3,
                        }}
                      >
                        Duración: {route.duration}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: 22,
                          fontWeight: 700,
                          color: "#1a8c3c",
                        }}
                      >
                        S/ {route.price}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 11,
                          color: "rgba(0,0,0,.4)",
                        }}
                      >
                        por persona
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: 2,
                      borderRadius: 2,
                      background:
                        "linear-gradient(90deg,#1a8c3c,#1a4fa0,#d42b2b,#f5c518)",
                      opacity: 0.5,
                    }}
                  />
                  {selectedRoute === route.id && (
                    <div
                      style={{
                        marginTop: 16,
                        paddingTop: 14,
                        borderTop: "1.5px solid #bbf7d0",
                      }}
                    >
                      <button
                        className="btn-primary"
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          display: "flex",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(
                            `¡Reserva iniciada para ${route.from} → ${route.to}!`,
                          );
                        }}
                      >
                        Reservar ahora — S/ {route.price}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ════ COLOR STRIP ════ */}
      <div
        style={{
          display: "flex",
          height: 4,
          overflow: "hidden",
          margin: "0 16px",
          borderRadius: 2,
        }}
      >
        <div style={{ flex: 1, background: "#1a8c3c" }} />
        <div style={{ flex: 1, background: "#d42b2b" }} />
        <div style={{ flex: 1, background: "#1a4fa0" }} />
        <div style={{ flex: 1, background: "#f5c518" }} />
      </div>

      {/* ════ FEATURES ════ */}
      <section
        className="features-section"
        style={{
          padding: "60px 48px 72px",
          maxWidth: 1296,
          margin: "0 auto",
          background: "#fff",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "#166534",
              marginBottom: 10,
            }}
          >
            ¿Por qué elegirnos?
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(24px,4vw,32px)",
              fontWeight: 700,
              color: "#111",
            }}
          >
            Viaja con{" "}
            <span style={{ fontStyle: "italic", color: "#d4a017" }}>
              Universo
            </span>
          </h2>
        </div>
        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 16,
          }}
        >
          {[
            {
              icon: "🛡️",
              title: "Viaje seguro",
              desc: "Unidades revisadas mensualmente con los más altos estándares de seguridad vial.",
              accent: "#1a8c3c",
              bg: "#f0fdf4",
              border: "#bbf7d0",
            },
            {
              icon: "⭐",
              title: "Golden Class",
              desc: "Servicio premium con asientos cama VIP, Wi-Fi y entretenimiento a bordo.",
              accent: "#d4a017",
              bg: "#fefce8",
              border: "#fde68a",
            },
            {
              icon: "💺",
              title: "Asientos cama",
              desc: "Butacas reclinables de 180° en rutas nocturnas para que viajes descansado.",
              accent: "#1a4fa0",
              bg: "#eff6ff",
              border: "#bfdbfe",
            },
            {
              icon: "⏱️",
              title: "Puntualidad",
              desc: "Sistema de control de horarios en tiempo real. Llegamos siempre a la hora.",
              accent: "#d42b2b",
              bg: "#fef2f2",
              border: "#fecaca",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="feat-card"
              style={{ background: f.bg, border: `1.5px solid ${f.border}` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  `0 8px 24px ${f.accent}18`;
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                className="feat-icon"
                style={{ background: `${f.accent}15` }}
              >
                {f.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    marginBottom: 6,
                    color: "#111",
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 13,
                    color: "rgba(0,0,0,.55)",
                    lineHeight: 1.65,
                  }}
                >
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <footer style={{ background: "#0d1117", borderTop: "3px solid #f5c518" }}>
        <div
          className="footer-inner"
          style={{
            maxWidth: 1296,
            margin: "0 auto",
            padding: "28px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/logonombreuniverso.png"
              alt="Universo"
              style={{
                height: 34,
                filter: "brightness(0) invert(1) opacity(0.8)",
              }}
            />
            <span
              style={{
                fontFamily: "'Inter',sans-serif",
                color: "rgba(255,255,255,.3)",
                fontSize: 12,
              }}
            >
              — ¡Siempre pensando en usted!
            </span>
          </div>
          <div
            style={{
              fontFamily: "'Inter',sans-serif",
              color: "rgba(255,255,255,.28)",
              fontSize: 12,
            }}
          >
            © 2025 Transportes Universo S.A.C. · Todos los derechos reservados
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Términos", "Privacidad", "Soporte"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  color: "rgba(255,255,255,.35)",
                  textDecoration: "none",
                  fontSize: 12,
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#f5c518";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,.35)";
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
