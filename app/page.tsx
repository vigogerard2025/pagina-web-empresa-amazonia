"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const routes = [
  {
    id: 1,
    from: "Trujillo",
    to: "Chiclayo",
    price: 30,
    duration: "12h",
    departure: "08:00",
    arrival: "20:00",
    seats: 12,
  },
  {
    id: 2,
    from: "Trujillo",
    to: "Bagua Grande",
    price: 80,
    duration: "12h",
    departure: "08:00",
    arrival: "20:00",
    seats: 8,
  },
  {
    id: 3,
    from: "Trujillo",
    to: "Nva Cajamarca", // ✅ FIX: campo "to" faltaba
    price: 80,
    duration: "8h",
    departure: "09:00",
    arrival: "17:00",
    seats: 15,
  },
  {
    id: 4,
    from: "Trujillo",
    to: "Moyobamba",
    price: 90,
    duration: "12h",
    departure: "08:00",
    arrival: "20:00",
    seats: 5,
  },
  {
    id: 5,
    from: "Trujillo",
    to: "Tarapoto",
    price: 100,
    duration: "6h",
    departure: "10:00",
    arrival: "16:00",
    seats: 20,
  },
  {
    id: 6,
    from: "Trujillo",
    to: "Picota",
    price: 120,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 10,
  },
  {
    id: 7,
    from: "Trujillo",
    to: "Bellavista",
    price: 120,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 3,
  },
  {
    id: 8,
    from: "Trujillo",
    to: "Saposoa",
    price: 130,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 18,
  },
  {
    id: 9,
    from: "Trujillo",
    to: "Juanjí",
    price: 130,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 7,
  },
  {
    id: 10,
    from: "Trujillo",
    to: "Pucara",
    price: 70,
    duration: "10h",
    departure: "09:00",
    arrival: "19:00",
    seats: 14,
  },
  {
    id: 11,
    from: "Trujillo",
    to: "Chamaya",
    price: 70,
    duration: "10h",
    departure: "09:00",
    arrival: "19:00",
    seats: 9,
  },
  {
    id: 12,
    from: "Trujillo",
    to: "Jaen",
    price: 80,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 11,
  },
  {
    id: 13,
    from: "Trujillo",
    to: "Pedro Ruiz",
    price: 80,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 14,
    from: "Trujillo",
    to: "Pomacochas",
    price: 80,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 15,
    from: "Trujillo",
    to: "Aguas Verdes",
    price: 80,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 16,
    from: "Trujillo",
    to: "Naranjos",
    price: 80,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 17,
    from: "Trujillo",
    to: "Naranjillo",
    price: 80,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 18,
    from: "Trujillo",
    to: "Segunda Jerusalen",
    price: 80,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 19,
    from: "Trujillo",
    to: "Rioja",
    price: 90,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 20,
    from: "Trujillo",
    to: "Tabalosos",
    price: 100,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 21,
    from: "Trujillo",
    to: "Alianza",
    price: 120,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 22,
    from: "Trujillo",
    to: "Yurimaguas",
    price: 130,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 23,
    from: "Trujillo",
    to: "San Hilarion",
    price: 120,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 24,
    from: "Trujillo",
    to: "Sacanche",
    price: 120,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
  {
    id: 25,
    from: "Trujillo",
    to: "Tocache",
    price: 200,
    duration: "10h",
    departure: "08:00",
    arrival: "18:00",
    seats: 6,
  },
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
  const [searched, setSearched] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredRoutes = routes.filter((r) => {
    if (origin && r.from !== origin) return false;
    if (destination && r.to !== destination) return false;
    return true;
  });
  const displayRoutes = searched ? filteredRoutes : routes;

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#ffffff",
        minHeight: "100vh",
        color: "#111111",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes slideUp  { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
        @keyframes slideDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }

        .animate-up   { animation: slideUp .7s ease forwards; }
        .animate-fade { animation: fadeIn 1s ease forwards; }

        /* ── Topbar ── */
        .topbar-link {
          color: rgba(30,30,30,.65); text-decoration: none; font-size: 12px;
          font-weight: 500; transition: color .2s; display: flex; align-items: center; gap: 5px;
        }
        .topbar-link:hover { color: #1a8c3c; }
        .topbar-div { width: 1px; height: 14px; background: rgba(0,0,0,.12); }

        .soc-top {
          width: 30px; height: 30px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none; transition: background .2s, transform .15s;
          cursor: pointer; background: transparent;
        }
        .soc-top:hover { background: rgba(0,0,0,.06); transform: translateY(-1px); }

        /* ── Nav links desktop ── */
        .nav-link {
          color: rgba(255,255,255,.88); text-decoration: none; font-size: 12.5px;
          font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
          padding: 8px 2px; border-bottom: 2px solid transparent; white-space: nowrap;
          display: flex; align-items: center; gap: 4px;
          transition: color .2s, border-bottom-color .2s;
        }
        .nav-link:hover { color: #f5c518; border-bottom-color: #f5c518; }

        /* ── Mobile menu link ── */
        .nav-link-mobile {
          color: rgba(255,255,255,.88); text-decoration: none; font-size: 15px;
          font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
          padding: 14px 24px; display: flex; align-items: center; gap: 6px;
          border-bottom: 1px solid rgba(255,255,255,.06);
          transition: background .2s, color .2s;
        }
        .nav-link-mobile:hover { background: rgba(255,255,255,.05); color: #f5c518; }

        /* ── Search inputs ── */
        .search-input {
          background: #fff; border: 1.5px solid #d1d5db; color: #111;
          padding: 13px 16px; border-radius: 8px; font-family: 'Inter', sans-serif;
          font-size: 14px; width: 100%; outline: none;
          transition: border-color .2s, box-shadow .2s;
          appearance: none; -webkit-appearance: none;
        }
        .search-input:focus { border-color: #1a8c3c; box-shadow: 0 0 0 3px rgba(26,140,60,.12); }
        .search-input option { background: #fff; color: #111; }

        /* ── Buttons ── */
        .btn-primary {
          background: linear-gradient(135deg, #1a8c3c, #0f5c28); color: #fff;
          border: none; padding: 13px 28px; font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: .06em;
          text-transform: uppercase; cursor: pointer; border-radius: 8px;
          transition: opacity .2s, transform .1s; white-space: nowrap;
          box-shadow: 0 4px 14px rgba(26,140,60,.3);
        }
        .btn-primary:hover { opacity: .88; transform: translateY(-1px); }

        /* ── Route cards ── */
        .route-card {
          background: #fff; border: 1.5px solid #e5e7eb; border-radius: 12px;
          padding: 22px; cursor: pointer;
          transition: border-color .2s, box-shadow .2s, transform .15s;
          animation: slideUp .5s ease forwards; opacity: 0;
        }
        .route-card:hover { border-color: #1a8c3c; box-shadow: 0 6px 24px rgba(26,140,60,.1); transform: translateY(-2px); }
        .route-card.selected { border-color: #1a8c3c; box-shadow: 0 6px 24px rgba(26,140,60,.15); background: #f0fdf4; }

        .badge { display:inline-block; padding:3px 10px; border-radius:20px; font-size:11px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; }
        .badge-low  { background: #dcfce7; color: #166534; }
        .badge-mid  { background: #fef9c3; color: #854d0e; }
        .badge-high { background: #fee2e2; color: #991b1b; }

        .feat-icon { width: 48px; height: 48px; border-radius: 12px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 22px; }
        .feat-card { border-radius: 14px; padding: 24px; display: flex; gap: 16px; align-items: flex-start; transition: transform .2s, box-shadow .2s; }
        .feat-card:hover { transform: translateY(-3px); }

        /* ════ RESPONSIVE ════ */

        /* Topbar oculto en móvil */
        @media (max-width: 768px) {
          .topbar { display: none !important; }
        }

        /* Nav desktop/mobile toggle */
        .nav-links-desktop { display: flex; }
        .nav-logo-bus { display: flex; }
        .hamburger { display: none; }

        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-logo-bus { display: none !important; }
          .hamburger { display: flex !important; }
        }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #0d1117;
          z-index: 999;
          flex-direction: column;
          animation: slideDown .25s ease forwards;
        }
        .mobile-menu.open { display: flex; }

        /* Hero responsive */
        @media (max-width: 768px) {
          .hero-content { padding: 60px 24px 80px !important; }
          .hero-title { font-size: clamp(32px, 8vw, 48px) !important; }
          .hero-desc { font-size: 14px !important; max-width: 100% !important; }
          .hero-btns { flex-direction: column !important; }
          .hero-btns button { width: 100% !important; text-align: center; justify-content: center; }
          .hero-stats { max-width: 100% !important; }
          .hero-line { display: none !important; }
          .badge-bottom-left { left: 16px !important; bottom: 16px !important; font-size: 11px !important; }
          .badge-bottom-right { right: 16px !important; bottom: 16px !important; }
        }

        /* Search responsive */
        @media (max-width: 768px) {
          .search-section { padding: 24px 16px !important; }
          .search-inner { padding: 20px 16px !important; }
          .search-row { flex-direction: column !important; }
          .search-row > * { min-width: 100% !important; }
        }

        /* Routes responsive */
        @media (max-width: 768px) {
          .routes-section { padding: 0 16px 48px !important; }
          .routes-grid { grid-template-columns: 1fr !important; }
        }

        /* Features responsive */
        @media (max-width: 768px) {
          .features-section { padding: 48px 16px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }

        /* Footer responsive */
        @media (max-width: 768px) {
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; padding: 24px 16px !important; gap: 20px !important; }
        }

        /* Stats responsive */
        @media (max-width: 480px) {
          .hero-stats { flex-direction: column !important; border-radius: 10px !important; }
          .hero-stats > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08) !important; }
          .hero-stats > div:last-child { border-bottom: none !important; }
        }
      `}</style>

      {/* ════════ TOP BAR ════════ */}
      <div
        className="topbar"
        style={{
          background: "#ffffff",
          padding: "6px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e8e8e8",
        }}
      >
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a
            className="topbar-link"
            href="https://wa.me/999333419"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              color: "rgba(30,30,30,.65)",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            <FaWhatsapp size={15} color="#25D366" />
            <span>(+51) 999 333 419</span>
          </a>
          <div className="topbar-div" />
          <a
            className="topbar-link"
            href="https://www.google.com/maps/place/Turismo+Universo+Trujillo/@-8.097581,-79.0376331,944m/data=!3m1!1e3!4m15!1m8!3m7!1s0x91ad3deae506cb59:0x5fede72cef4dde49!2sAv.+Nicol%C3%A1s+de+Pi%C3%A9rola+1230,+Trujillo+13001!3b1!8m2!3d-8.097581!4d-79.0376331!16s%2Fg%2F11vqn9zmr_!3m5!1s0x91ad3dc64e7a2a7b:0x4d64efd5950473b8!8m2!3d-8.0973113!4d-79.0378456!16s%2Fg%2F11h7d85rbd?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt size={13} color="#e53e3e" />
            <span>
              Av. Nicolás de Piérola N° 1230 Urb. San Fernando, Trujillo–Perú
            </span>
          </a>
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <div className="topbar-div" style={{ marginRight: 6 }} />
          <a
            className="soc-top"
            href="https://www.facebook.com/turismobusuniverso/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={17} color="#1877F2" />
          </a>
          <a
            className="soc-top"
            href="https://www.instagram.com/turismobusuniverso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={17} color="#E1306C" />
          </a>
          <div
            style={{
              marginLeft: 10,
              padding: "3px 10px",
              background: "#f4f4f4",
              borderRadius: 4,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".1em",
              color: "rgba(0,0,0,.4)",
              textTransform: "uppercase",
            }}
          >
            Proveedores
          </div>
        </div>
      </div>

      {/* ════════ MAIN NAV ════════ */}
      <nav
        style={{
          background: "#0d1117",
          padding: "0 24px",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
          minHeight: 68,
          boxShadow: "0 4px 24px rgba(0,0,0,.35)",
        }}
      >
        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "center", paddingRight: 20 }}
        >
          <img
            src="/logonombreuniverso.png"
            alt="Universo"
            style={{ height: 46, width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Links desktop */}
        <div
          className="nav-links-desktop"
          style={{
            alignItems: "center",
            gap: 24,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {["Inicio", "Clausulas", "Agencias"].map((l) => (
            <a key={l} className="nav-link" href="#">
              {l}
            </a>
          ))}

          <a className="nav-link" href="#">
            Contáctanos
            <svg
              width="9"
              height="5"
              viewBox="0 0 10 6"
              fill="currentColor"
              style={{ marginTop: 1 }}
            >
              <path d="M0 0l5 6 5-6z" />
            </svg>
          </a>
        </div>

        {/* Logo bus derecho */}
        <div className="nav-logo-bus" style={{ alignItems: "center" }}>
          <img
            src="/logobus.png"
            alt="logo-bus"
            style={{ height: 72, width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            padding: "8px",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaBars size={22} />
        </button>
      </nav>

      {/* ════════ MOBILE MENU ════════ */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <img
            src="/logonombreuniverso.png"
            alt="Universo"
            style={{ height: 40, objectFit: "contain" }}
          />
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(255,255,255,.7)",
              padding: 8,
            }}
          >
            <FaTimes size={22} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", paddingTop: 8 }}>
          {[
            "Inicio",
            "Servicios",
            "Agencias",
            "Nosotros",
            "Blog",
            "Contáctanos",
          ].map((l) => (
            <a
              key={l}
              className="nav-link-mobile"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>

        <div
          style={{
            padding: "20px 24px",
            borderTop: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          <a
            href="https://wa.me/999333419"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(255,255,255,.6)",
              textDecoration: "none",
              fontSize: 13,
            }}
          >
            <FaWhatsapp size={16} color="#25D366" /> (+51) 999 333 419
          </a>
          <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
            <a
              href="https://www.facebook.com/turismobusuniverso/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} color="#1877F2" />
            </a>
            <a
              href="https://www.instagram.com/turismobusuniverso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} color="#E1306C" />
            </a>
          </div>
        </div>
      </div>

      {/* ════════ HERO ════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/imagendefondocalidad.png"
          alt="Bus Universo fondo"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "contrast(1.05) saturate(1.08) brightness(0.92)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(110deg, rgba(5,12,28,0.82) 0%, rgba(8,20,45,0.62) 55%, rgba(5,12,28,0.25) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "45%",
            zIndex: 1,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.68), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "38%",
            height: "100%",
            zIndex: 1,
            background:
              "linear-gradient(to right, rgba(15,92,40,0.18), transparent)",
          }}
        />

        <div
          className="hero-line"
          style={{
            position: "absolute",
            left: 44,
            top: "18%",
            bottom: "18%",
            width: 3,
            zIndex: 2,
            background:
              "linear-gradient(to bottom, transparent, #f5c518 20%, #f5c518 80%, transparent)",
            borderRadius: 2,
            opacity: 0.75,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.02,
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 72px",
            width: "100%",
          }}
        >
          <div className="animate-up" style={{ maxWidth: 660 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.22)",
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
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5.5vw, 66px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-.01em",
                marginBottom: 18,
                color: "#ffffff",
                textShadow: "0 2px 28px rgba(0,0,0,0.45)",
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
                fontFamily: "'Inter', sans-serif",
                color: "rgba(215,225,240,0.85)",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.85,
                maxWidth: 490,
                marginBottom: 36,
              }}
            >
              🌄✨ Es hora de aventurarse hacia el norte ✨🚍 Nuevos paisajes,
              nuevas experiencias y destinos que te esperan en la ruta a la
              selva. El norte tiene historias por descubrir… y el camino
              comienza hoy.
            </p>

            <div
              className="hero-btns"
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 44,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("search-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "linear-gradient(135deg, #1a8c3c, #0f5c28)",
                  color: "#fff",
                  border: "none",
                  padding: "14px 28px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: 8,
                  boxShadow: "0 4px 22px rgba(26,140,60,.55)",
                  transition: "opacity .2s, transform .15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = ".88";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                }}
              >
                Comprar pasajes
              </button>
              <button
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.32)",
                  color: "#ffffff",
                  padding: "14px 24px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(8px)",
                  transition: "background .2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.17)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.07)";
                }}
              >
                Ver rutas
              </button>
            </div>

            {/* Stats */}
            <div
              className="hero-stats"
              style={{
                display: "flex",
                gap: 0,
                background: "rgba(5,12,28,0.48)",
                borderRadius: 14,
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.10)",
                maxWidth: 460,
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
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
                      i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
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
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.48)",
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
          className="badge-bottom-right"
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            zIndex: 3,
            background: "linear-gradient(135deg, #f5c518, #d4a017)",
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
                fontFamily: "'Inter', sans-serif",
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
                fontFamily: "'Inter', sans-serif",
                fontSize: 9,
                color: "rgba(0,0,0,.6)",
                fontWeight: 600,
              }}
            >
              Servicio VIP
            </div>
          </div>
        </div>

        {/* Badge ruta */}
        <div
          className="badge-bottom-left"
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            zIndex: 3,
            background: "rgba(5,12,28,0.65)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 8,
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            backdropFilter: "blur(10px)",
          }}
        >
          <span style={{ fontSize: 13 }}>📍</span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: "#e2e8f0",
              letterSpacing: ".04em",
            }}
          >
            Trujillo → Tarapoto y más
          </span>
        </div>
      </section>

      {/* ════════ COLOR STRIP ════════ */}
      <div style={{ display: "flex", height: 5 }}>
        <div style={{ flex: 2, background: "#1a8c3c" }} />
        <div style={{ flex: 1, background: "#d42b2b" }} />
        <div style={{ flex: 1, background: "#1a4fa0" }} />
        <div style={{ flex: 1, background: "#f5c518" }} />
        <div style={{ flex: 2, background: "#1a8c3c" }} />
      </div>

      {/* ════════ SEARCH ════════ */}
      <section
        id="search-section"
        className="search-section"
        style={{ padding: "40px 48px 48px", maxWidth: 1296, margin: "0 auto" }}
      >
        <div
          className="search-inner"
          style={{
            background: "#f0fdf4",
            border: "1.5px solid #bbf7d0",
            borderRadius: 16,
            padding: "28px 32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 4,
                height: 20,
                background: "linear-gradient(180deg,#1a8c3c,#f5c518)",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "#166534",
              }}
            >
              Buscar pasajes
            </span>
          </div>
          <div
            className="search-row"
            style={{
              display: "flex",
              gap: 14,
              alignItems: "flex-end",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Origen", value: origin, setter: setOrigin },
              { label: "Destino", value: destination, setter: setDestination },
            ].map(({ label, value, setter }) => (
              <div key={label} style={{ flex: 1, minWidth: 150 }}>
                <label
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgba(0,0,0,.5)",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 7,
                  }}
                >
                  {label}
                </label>
                <select
                  className="search-input"
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                >
                  <option value="">Seleccionar ciudad</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div style={{ flex: 1, minWidth: 150 }}>
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(0,0,0,.5)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 7,
                }}
              >
                Fecha de viaje
              </label>
              <input
                type="date"
                className="search-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button
              className="btn-primary"
              onClick={() => setSearched(true)}
              style={{ flexShrink: 0, height: 50, width: "100%" }}
            >
              Buscar rutas
            </button>
          </div>
        </div>
      </section>

      {/* ════════ ROUTES ════════ */}
      <section
        className="routes-section"
        style={{ padding: "0 48px 72px", maxWidth: 1296, margin: "0 auto" }}
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
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(22px,4vw,28px)",
                fontWeight: 700,
                letterSpacing: "-.01em",
                color: "#111",
              }}
            >
              {searched ? "Resultados de búsqueda" : "Rutas disponibles"}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(0,0,0,.45)",
                fontSize: 13,
                marginTop: 5,
              }}
            >
              {displayRoutes.length} rutas encontradas
            </p>
          </div>
          {searched && (
            <button
              onClick={() => {
                setSearched(false);
                setOrigin("");
                setDestination("");
                setDate("");
              }}
              style={{
                background: "transparent",
                border: "1.5px solid #d1d5db",
                color: "rgba(0,0,0,.55)",
                padding: "7px 14px",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {displayRoutes.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: "rgba(0,0,0,.3)",
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 14 }}>🔍</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
              No se encontraron rutas para esa búsqueda
            </p>
          </div>
        ) : (
          <div
            className="routes-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 14,
            }}
          >
            {displayRoutes.map((route, i) => {
              // ✅ FIX: seatsBadge y seatsLabel ahora están declarados dentro del map
              const seatsBadge =
                route.seats <= 5
                  ? "badge-high"
                  : route.seats <= 10
                    ? "badge-mid"
                    : "badge-low";
              const seatsLabel =
                route.seats <= 5
                  ? "Últimos asientos"
                  : route.seats <= 10
                    ? "Pocos asientos"
                    : "Disponible";

              return (
                <div
                  key={route.id}
                  className={`route-card${selectedRoute === route.id ? " selected" : ""}`}
                  style={{
                    animationDelay: `${i * 55}ms`,
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
                      marginBottom: 16,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
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
                          fontFamily: "'Inter', sans-serif",
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
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 22,
                          fontWeight: 700,
                          color: "#1a8c3c",
                        }}
                      >
                        S/ {route.price}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
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
                      marginBottom: 14,
                      opacity: 0.5,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", gap: 16 }}>
                      {[
                        { label: "Salida", value: route.departure },
                        { label: "Llegada", value: route.arrival },
                        { label: "Asientos", value: String(route.seats) },
                      ].map((item) => (
                        <div key={item.label}>
                          <div
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: 10,
                              color: "rgba(0,0,0,.4)",
                              textTransform: "uppercase",
                              letterSpacing: ".07em",
                              marginBottom: 2,
                              fontWeight: 600,
                            }}
                          >
                            {item.label}
                          </div>
                          <div
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: 14,
                              fontWeight: 700,
                              color: "#111",
                            }}
                          >
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className={`badge ${seatsBadge}`}>{seatsLabel}</span>
                  </div>
                  {selectedRoute === route.id && (
                    <div
                      style={{
                        marginTop: 18,
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
              );
            })}
          </div>
        )}
      </section>

      {/* ════════ COLOR STRIP ════════ */}
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

      {/* ════════ FEATURES ════════ */}
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
              fontFamily: "'Inter', sans-serif",
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
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px,4vw,32px)",
              fontWeight: 700,
              letterSpacing: "-.01em",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
                    fontFamily: "'Inter', sans-serif",
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
                    fontFamily: "'Inter', sans-serif",
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

      {/* ════════ FOOTER ════════ */}
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
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,.3)",
                fontSize: 12,
              }}
            >
              — ¡Siempre pensando en usted!
            </span>
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
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
                  fontFamily: "'Inter', sans-serif",
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
