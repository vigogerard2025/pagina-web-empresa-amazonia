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

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Cláusulas", href: "/clausulas" },
    { label: "Agencias", href: "/agencias" },
    { label: "Contáctanos", href: "/contactanos" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --gold-dim: rgba(201,168,76,0.15);
          --dark: #0B0E13;
          --dark-mid: #111419;
          --dark-card: #161A22;
          --cream: #F5F0E8;
          --muted: rgba(245,240,232,0.5);
          --border: rgba(201,168,76,0.18);
        }

        * { box-sizing: border-box; }

        .nb-topbar {
          background: var(--cream);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 0 52px;
          height: 38px;
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
          font-weight: 400;
          color: #555;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nb-top-link:hover { color: #111; }

        .nb-divider {
          width: 1px;
          height: 12px;
          background: rgba(0,0,0,0.15);
        }

        .nb-top-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nb-soc {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .nb-soc:hover {
          background: rgba(0,0,0,0.06);
          transform: translateY(-1px);
        }

        .nb-provider-badge {
          margin-left: 8px;
          padding: 3px 10px;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 20px;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
        }

        /* ─── NAV ─── */
        .nb-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--dark);
          transition: box-shadow 0.3s, background 0.3s;
          font-family: 'Outfit', sans-serif;
        }
        .nb-nav.scrolled {
          background: rgba(11,14,19,0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 var(--border), 0 8px 40px rgba(0,0,0,0.55);
        }

        .nb-nav-inner {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          min-height: 72px;
          padding: 0 28px;
          border-bottom: 1px solid var(--border);
        }

        /* Gold accent line top */
        .nb-nav::before {
          content: '';
          display: block;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent);
        }

        .nb-logo-wrap {
          display: flex;
          align-items: center;
          padding-right: 24px;
        }

        .nb-logo {
          height: 44px;
          width: auto;
          object-fit: contain;
        }

        /* ─── Desktop links ─── */
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
          color: var(--muted);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 6px;
          transition: color 0.22s, background 0.22s;
          white-space: nowrap;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 16px;
          right: 16px;
          height: 1px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .nb-link:hover {
          color: var(--gold-light);
          background: var(--gold-dim);
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
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          color: #0B0E13;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 9px 22px;
          border-radius: 6px;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 2px 16px rgba(201,168,76,0.28);
          margin-left: 8px;
          white-space: nowrap;
        }
        .nb-cta:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(201,168,76,0.4);
        }

        /* Bus logo */
        .nb-bus-wrap {
          display: flex;
          align-items: center;
          padding-left: 12px;
        }
        .nb-bus-img {
          height: 88px;
          width: auto;
          object-fit: contain;
          opacity: 0.92;
          filter: drop-shadow(0 2px 12px rgba(201,168,76,0.18));
        }

        /* Hamburger */
        .nb-hamburger {
          display: none;
          background: none;
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          color: var(--muted);
          padding: 8px 10px;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          align-self: center;
        }
        .nb-hamburger:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--gold-dim);
        }

        /* ─── Mobile Menu ─── */
        .nb-mobile {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 999;
          flex-direction: column;
          background: var(--dark-mid);
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
          padding: 18px 24px;
          border-bottom: 1px solid var(--border);
          background: var(--dark);
        }
        .nb-mobile-header::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold) 40%, var(--gold-light) 60%, transparent);
        }
        .nb-mobile-close {
          background: none;
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          color: var(--muted);
          padding: 8px 10px;
          display: flex;
          align-items: center;
          transition: border-color 0.2s, color 0.2s;
        }
        .nb-mobile-close:hover { border-color: var(--gold); color: var(--gold); }

        .nb-mobile-links {
          flex: 1;
          overflow-y: auto;
          padding: 16px 0;
        }

        .nb-mobile-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--muted);
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 16px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.2s, color 0.2s, padding-left 0.2s;
          gap: 12px;
        }
        .nb-mobile-link:hover {
          background: var(--gold-dim);
          color: var(--gold-light);
          padding-left: 36px;
        }
        .nb-mobile-link-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.5;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        .nb-mobile-link:hover .nb-mobile-link-dot { opacity: 1; }

        .nb-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0B0E13;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 16px 28px;
          margin: 16px 24px 0;
          border-radius: 8px;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(201,168,76,0.3);
          transition: opacity 0.2s, transform 0.15s;
        }
        .nb-mobile-cta:hover { opacity: 0.9; transform: translateY(-1px); }

        .nb-mobile-footer {
          padding: 20px 24px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--dark);
        }

        .nb-mobile-contact {
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          color: var(--muted);
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          transition: color 0.2s;
        }
        .nb-mobile-contact:hover { color: #fff; }

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
          border: 1px solid var(--border);
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }
        .nb-mobile-soc:hover {
          border-color: var(--gold);
          background: var(--gold-dim);
          transform: translateY(-2px);
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .nb-topbar { display: none !important; }
        }

        @media (max-width: 960px) {
          .nb-links { display: none !important; }
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
            <FaWhatsapp size={13} color="#25D366" />
            (+51) 966 198 771
          </a>
          <div className="nb-divider" />
          <a
            className="nb-top-link"
            href="https://www.google.com/maps/place/Turismo+Universo+Trujillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt size={12} color="#C9A84C" />
            Av. Nicolás de Piérola N° 1230, San Fernando — Trujillo, Perú
          </a>
        </div>

        <div className="nb-top-right">
          <div className="nb-divider" style={{ marginRight: 4 }} />
          <a
            className="nb-soc"
            href="https://www.facebook.com/turismobusuniverso/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={15} color="#1877F2" />
          </a>
          <a
            className="nb-soc"
            href="https://www.instagram.com/turismobusuniverso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={15} color="#E1306C" />
          </a>
          <div className="nb-provider-badge">Proveedores</div>
        </div>
      </div>

      {/* ════ MAIN NAV ════ */}
      <nav className={`nb-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nb-nav-inner">
          {/* Logo */}
          <div className="nb-logo-wrap">
            <img
              src="/logonombreuniverso.png"
              alt="Turismo Universo"
              className="nb-logo"
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

          {/* Bus logo right */}
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
        <div className="nb-mobile-header" style={{ position: "relative" }}>
          <img
            src="/logonombreuniverso.png"
            alt="Turismo Universo"
            style={{ height: 38, objectFit: "contain" }}
          />
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
