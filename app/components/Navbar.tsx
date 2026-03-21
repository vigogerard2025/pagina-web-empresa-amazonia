"use client";

import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --green-deep:   #0f7a2e;
          --green-main:   #1a8c3c;
          --green-bright: #22a849;
          --green-light:  #d4f5e0;
          --green-pale:   #edfaf3;
          --gold:         #e8a820;
          --gold-light:   #f5c518;
          --gold-pale:    #fef9e7;
          --cream:        #f9fdf6;
          --white:        #ffffff;
          --text-dark:    #0d2818;
          --text-mid:     #2d5a3d;
          --text-soft:    #5a8a6a;
          --border-green: rgba(26,140,60,0.18);
          --shadow-green: rgba(26,140,60,0.15);
        }

        * { box-sizing: border-box; }

        /* ── TOP BAR ── */
        .nb-topbar {
          background: var(--green-main);
          padding: 0 52px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Outfit', sans-serif;
        }

        .nb-top-left {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nb-top-link {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          font-size: 11.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.88);
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nb-top-link:hover { color: #fff; }

        .nb-divider-top {
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.3);
        }

        .nb-top-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nb-soc {
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .nb-soc:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-1px);
        }

        .nb-provider-badge {
          margin-left: 8px;
          padding: 2px 10px;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 20px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }

        /* ── NAV ── */
        .nb-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background:#558B6E;
          border-bottom: 2px solid var(--green-light);
          transition: box-shadow 0.3s, background 0.3s;
          font-family: 'Outfit', sans-serif;
          /* overflow visible para que el bus sobresalga hacia abajo */
          overflow: visible;
        }
        .nb-nav.scrolled {
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 2px 24px var(--shadow-green);
        }

        /* Línea de colores superior */
        .nb-nav::before {
          content: '';
          display: block;
          height: 3px;
          background: linear-gradient(90deg,
            var(--green-main) 0%,
            var(--green-bright) 25%,
            var(--gold) 50%,
            var(--green-bright) 75%,
            var(--green-main) 100%
          );
        }

        .nb-nav-inner {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          /* Altura fija y compacta — el bus sale por debajo sin empujar */
          min-height: 68px;
          padding: 0 28px;
          /* overflow visible para el bus */
          overflow: visible;
          position: relative;
        }

        .nb-logo-wrap {
          display: flex;
          align-items: center;
          padding-right: 24px;
        }

        .nb-logo {
          height: 40px;
          width: auto;
          object-fit: contain;
        }

        /* Desktop links */
        .nb-links {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .nb-link {
          position: relative;
          text-decoration: none;
          color: var(--text-mid);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 8px;
          transition: color 0.22s, background 0.22s;
          white-space: nowrap;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 16px;
          right: 16px;
          height: 2px;
          background: var(--green-main);
          border-radius: 1px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .nb-link:hover {
          color: var(--green-main);
          background: var(--green-pale);
        }
        .nb-link:hover::after {
          transform: scaleX(1);
        }

        /* CTA button */
        .nb-cta {
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          background: linear-gradient(135deg, var(--green-main), var(--green-bright));
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 9px 22px;
          border-radius: 8px;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 3px 16px var(--shadow-green);
          margin-left: 8px;
          white-space: nowrap;
        }
        .nb-cta:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(26,140,60,0.35);
        }

        /* ── Bus logo: crece hacia abajo sin afectar la altura de la navbar ── */
        .nb-bus-wrap {
          /* Se posiciona en el flujo normal para mantener el espacio a la derecha */
          position: relative;
          display: flex;
          align-items: center;
          /* Ancho fijo para reservar espacio horizontal */
          width: 140px;
          flex-shrink: 0;
        }
        .nb-bus-img {
          /* Sale del flujo vertical con position absolute */
          position: absolute;
          bottom: -28px;   /* cuánto sobresale por debajo */
          right: 0;
          height: 130px;   /* tamaño del bus — ajusta aquí */
          width: auto;
          object-fit: contain;
          opacity: 0.96;
          filter: drop-shadow(0 4px 12px rgba(26,140,60,0.22));
          /* z-index alto para que aparezca sobre el hero */
          z-index: 101;
          pointer-events: none;
        }

        /* Hamburger */
        .nb-hamburger {
          display: none;
          background: var(--green-pale);
          border: 1.5px solid var(--border-green);
          border-radius: 8px;
          cursor: pointer;
          color: var(--green-main);
          padding: 8px 10px;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          align-self: center;
        }
        .nb-hamburger:hover {
          background: var(--green-light);
          border-color: var(--green-main);
        }

        /* Mobile Menu */
        .nb-mobile {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 999;
          flex-direction: column;
          background: var(--white);
        }
        .nb-mobile.open {
          display: flex;
          animation: mobileIn 0.3s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes mobileIn {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .nb-mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          border-bottom: 2px solid var(--green-light);
          background: var(--cream);
          position: relative;
        }
        .nb-mobile-header::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--green-main), var(--gold), var(--green-bright));
        }
        .nb-mobile-close {
          background: var(--green-pale);
          border: 1.5px solid var(--border-green);
          border-radius: 8px;
          cursor: pointer;
          color: var(--green-main);
          padding: 8px 10px;
          display: flex;
          align-items: center;
          transition: background 0.2s;
        }
        .nb-mobile-close:hover { background: var(--green-light); }

        .nb-mobile-links {
          flex: 1;
          overflow-y: auto;
          padding: 12px 0;
          background: var(--white);
        }

        .nb-mobile-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--text-mid);
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 16px 28px;
          border-bottom: 1px solid var(--green-pale);
          transition: background 0.2s, color 0.2s, padding-left 0.2s;
          gap: 12px;
        }
        .nb-mobile-link:hover {
          background: var(--green-pale);
          color: var(--green-main);
          padding-left: 36px;
        }
        .nb-mobile-link-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--green-main);
          opacity: 0.4;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        .nb-mobile-link:hover .nb-mobile-link-dot { opacity: 1; }

        .nb-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: linear-gradient(135deg, var(--green-main), var(--green-bright));
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 15px 28px;
          margin: 16px 24px 0;
          border-radius: 10px;
          gap: 8px;
          box-shadow: 0 4px 18px var(--shadow-green);
          transition: opacity 0.2s, transform 0.15s;
        }
        .nb-mobile-cta:hover { opacity: 0.9; transform: translateY(-1px); }

        .nb-mobile-footer {
          padding: 18px 24px;
          border-top: 2px solid var(--green-light);
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--cream);
        }

        .nb-mobile-contact {
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          color: var(--text-soft);
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nb-mobile-contact:hover { color: var(--green-main); }

        .nb-mobile-socials {
          margin-left: auto;
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .nb-mobile-soc {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border: 1.5px solid var(--border-green);
          background: var(--green-pale);
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }
        .nb-mobile-soc:hover {
          border-color: var(--green-main);
          background: var(--green-light);
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .nb-topbar { display: none !important; }
        }

        @media (max-width: 960px) {
          .nb-links    { display: none !important; }
          .nb-bus-wrap { display: none !important; }
          .nb-hamburger { display: flex !important; }
          .nb-nav-inner { padding: 0 20px; }
        }

        @media (min-width: 961px) {
          .nb-hamburger { display: none !important; }
        }
      `}</style>

      {/* ════ TOP BAR ════ */}
      <div className="nb-topbar">
        <div className="nb-top-left">
          <a
            className="nb-top-link"
            href="https://wa.me/51966198771"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={13} color="rgba(255,255,255,0.9)" />
            (+51) 966 198 771
          </a>
          <div className="nb-divider-top" />
          <a
            className="nb-top-link"
            href="https://www.google.com/maps/place/Turismo+Universo+Trujillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt size={12} color="rgba(255,255,255,0.9)" />
            Av. Nicolás de Piérola N° 1230, San Fernando — Trujillo, Perú
          </a>
        </div>
        <div className="nb-top-right">
          <div className="nb-divider-top" style={{ marginRight: 4 }} />
          <a
            className="nb-soc"
            href="https://www.facebook.com/turismobusuniverso/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={14} color="#fff" />
          </a>
          <a
            className="nb-soc"
            href="https://www.instagram.com/turismobusuniverso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={14} color="#fff" />
          </a>
          <div className="nb-provider-badge">Proveedores</div>
        </div>
      </div>

      {/* ════ MAIN NAV ════ */}
      <nav className={`nb-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nb-nav-inner">
          <div className="nb-logo-wrap">
            <img
              src="/logonombreuniverso.png"
              alt=""
              width={"160px"}
              height={"10px"}
            />
          </div>

          {/* Desktop Links */}
          <div className="nb-links">
            {[
              { label: "Inicio", href: "/" },
              { label: "Cláusulas", href: "/clausulas" },
              { label: "Agencias", href: "/agencias" },
            ].map((item) => (
              <a key={item.label} className="nb-link" href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nb-cta" href="/contactanos">
              Contáctanos
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                <path
                  d="M0 4h6M3 1l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          </div>

          {/* ── Bus: position absolute, crece sin afectar la altura ── */}
          <div className="nb-bus-wrap">
            <img src="/logobus.png" alt="Bus Universo" className="nb-bus-img" />
          </div>

          {/* Hamburger */}
          <button
            className="nb-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <FaBars size={18} />
          </button>
        </div>
      </nav>

      {/* ════ MOBILE MENU ════ */}
      <div className={`nb-mobile${menuOpen ? " open" : ""}`}>
        <div className="nb-mobile-header">
          <svg
            height="38"
            viewBox="0 0 260 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Turismo Bus Universo"
          >
            <text
              x="2"
              y="13"
              fontFamily="'Arial Narrow', Arial, sans-serif"
              fontStyle="italic"
              fontWeight="700"
              fontSize="12"
              letterSpacing="1.5"
              fill="#1a8c3c"
            >
              TURISMO BUS
            </text>
            <text
              x="0"
              y="43"
              fontFamily="'Arial Black', 'Arial Narrow', Arial, sans-serif"
              fontStyle="italic"
              fontWeight="900"
              fontSize="34"
              letterSpacing="-0.5"
              fill="#d42b2b"
              stroke="#fff"
              strokeWidth="2"
              paintOrder="stroke"
            >
              UNIVERSO
            </text>
          </svg>
          <button
            className="nb-mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="nb-mobile-links">
          {[
            { label: "Inicio", href: "/" },
            { label: "Cláusulas", href: "/clausulas" },
            { label: "Agencias", href: "/agencias" },
          ].map((item) => (
            <a
              key={item.label}
              className="nb-mobile-link"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nb-mobile-link-dot" />
              {item.label}
            </a>
          ))}
          <a
            className="nb-mobile-cta"
            href="/contactanos"
            onClick={() => setMenuOpen(false)}
          >
            Contáctanos
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path
                d="M0 4h6M3 1l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="nb-mobile-footer">
          <a
            href="https://wa.me/51966198771"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-mobile-contact"
          >
            <FaWhatsapp size={15} color="#25D366" />
            (+51) 966 198 771
          </a>
          <div className="nb-mobile-socials">
            <a
              className="nb-mobile-soc"
              href="https://www.facebook.com/turismobusuniverso/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={16} color="#1877F2" />
            </a>
            <a
              className="nb-mobile-soc"
              href="https://www.instagram.com/turismobusuniverso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={16} color="#E1306C" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
