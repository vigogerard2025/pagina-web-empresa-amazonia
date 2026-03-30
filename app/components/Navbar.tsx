"use client";

import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        :root {
          --blue-main:  #1a8c3c;
          --blue-dark:  #0f5c28;
          --blue-mid:   #22a849;
          --gold:       #f5c518;
          --gold-dark:  #d4a800;
          --white:      #ffffff;
          --text-nav:   #0d3a1a;
          --nav-bg:     #ffffff;
          --top-bg:     #0f6e2e;
        }
        * { box-sizing: border-box; }

        /* ════ TOP BAR ════ */
        .nb-topbar {
          background: var(--top-bg);
          padding: 0 40px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Montserrat', sans-serif;
        }
        .nb-top-left { display: flex; align-items: center; }
        .nb-top-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.90);
          text-decoration: none;
          padding: 0 14px;
          height: 34px;
          border-right: 1px solid rgba(255,255,255,0.20);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.2s, background 0.2s;
        }
        .nb-top-item:first-child { border-left: 1px solid rgba(255,255,255,0.20); }
        .nb-top-item:hover { color: #fff; background: rgba(255,255,255,0.08); }

        .nb-top-right { display: flex; align-items: center; height: 34px; }
        .nb-soc-wrap {
          display: flex;
          align-items: center;
          height: 34px;
          border-left: 1px solid rgba(255,255,255,0.20);
          border-right: 1px solid rgba(255,255,255,0.20);
        }
        .nb-soc {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          border-right: 1px solid rgba(255,255,255,0.15);
          transition: background 0.2s;
        }
        .nb-soc:last-child { border-right: none; }
        .nb-soc:hover { background: rgba(255,255,255,0.14); }
        .nb-provider-btn {
          height: 34px;
          display: flex;
          align-items: center;
          padding: 0 18px;
          border-left: 1px solid rgba(255,255,255,0.20);
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .nb-provider-btn:hover { color: #fff; background: rgba(255,255,255,0.08); }

        /* ════ MAIN NAV ════ */
        .nb-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--nav-bg);
          box-shadow: 0 2px 16px rgba(26,63,160,0.13);
          transition: box-shadow 0.3s;
          font-family: 'Montserrat', sans-serif;
          overflow: visible;
        }
        .nb-nav.scrolled { box-shadow: 0 4px 28px rgba(26,63,160,0.20); }

        /* línea azul top */
        .nb-nav::before {
          content: '';
          display: block;
          height: 4px;
          background: var(--blue-main);
        }

        .nb-nav-inner {
          display: flex;
          align-items: stretch;
          max-width: 1400px;
          margin: 0 auto;
          overflow: visible;
          position: relative;
          min-height: 70px;
        }

        /* ── Bloque logo con corte diagonal derecho (efecto EMTRAFESA) ── */
        .nb-logo-block {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 80px 0 36px;
          min-width: 300px;
          background: var(--blue-main);
          flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 42px) 0, 100% 50%, calc(100% - 42px) 100%, 0 100%);
          filter: drop-shadow(6px 0 14px rgba(15,92,40,0.35));
        }
        .nb-logo-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.2s, opacity 0.2s;
        }
        .nb-logo-pill:hover { transform: translateY(-1px); opacity: 0.90; }
        .nb-logo-pill img {
          height: 52px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* Links */
        .nb-links {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 16px 0 32px;
          gap: 0;
        }
        .nb-link {
          position: relative;
          text-decoration: none;
          color: var(--text-nav);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          padding: 8px 14px;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 14px; right: 14px;
          height: 3px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94);
          border-radius: 2px;
        }
        .nb-link:hover { color: var(--blue-main); }
        .nb-link:hover::after { transform: scaleX(1); }

        /* CTA dorado con corte diagonal */
        .nb-cta-wrap {
          display: flex;
          align-items: center;
          padding: 0 16px 0 4px;
          flex-shrink: 0;
        }
        .nb-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          background: var(--gold);
          color: var(--blue-dark);
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 11px 22px 11px 18px;
          clip-path: polygon(12px 0, 100% 0, 100% 100%, 0 100%, 0 12px);
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 3px 14px rgba(245,197,24,0.40);
        }
        .nb-cta:hover {
          background: var(--gold-dark);
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(245,197,24,0.55);
        }

        /* Bus */
        .nb-bus-wrap {
          position: relative;
          display: flex;
          align-items: center;
          width: 120px;
          flex-shrink: 0;
        }
        .nb-bus-img {
          position: absolute;
          bottom: -24px;
          right: 8px;
          height: 118px;
          width: auto;
          object-fit: contain;
          opacity: 0.97;
          filter: drop-shadow(0 4px 10px rgba(26,63,160,0.22));
          z-index: 101;
          pointer-events: none;
        }

        /* Hamburger */
        .nb-hamburger {
          display: none;
          background: var(--blue-main);
          border: none;
          cursor: pointer;
          color: #fff;
          padding: 10px 14px;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          align-self: center;
          margin-right: 16px;
          border-radius: 4px;
        }
        .nb-hamburger:hover { background: var(--blue-dark); }

        /* ════ MOBILE MENU ════ */
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
          padding: 14px 20px;
          background: var(--blue-main);
          border-bottom: 4px solid var(--gold);
        }
        .nb-mobile-logo-pill {
          display: flex;
          align-items: center;
        }
        .nb-mobile-logo-pill img {
          height: 36px; width: auto; object-fit: contain;
        }
        .nb-mobile-close {
          background: rgba(255,255,255,0.15);
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 6px;
          cursor: pointer;
          color: #fff;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          transition: background 0.2s;
        }
        .nb-mobile-close:hover { background: rgba(255,255,255,0.25); }

        .nb-mobile-links { flex: 1; overflow-y: auto; padding: 8px 0; background: #fff; }
        .nb-mobile-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--text-nav);
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          padding: 15px 24px;
          border-bottom: 1px solid #edfaf3;
          border-left: 4px solid transparent;
          transition: background 0.2s, color 0.2s, border-left-color 0.2s;
        }
        .nb-mobile-link:hover {
          background: #edfaf3;
          color: var(--blue-main);
          border-left-color: var(--gold);
        }
        .nb-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: var(--gold);
          color: var(--blue-dark);
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 15px 28px;
          margin: 14px 20px 0;
          border-radius: 4px;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(245,197,24,0.40);
          transition: background 0.2s, transform 0.15s;
        }
        .nb-mobile-cta:hover { background: var(--gold-dark); transform: translateY(-1px); }

        .nb-mobile-footer {
          padding: 16px 20px;
          border-top: 3px solid var(--blue-main);
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f5fdf8;
        }
        .nb-mobile-contact {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: var(--blue-main);
          font-family: 'Montserrat', sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          transition: color 0.2s;
        }
        .nb-mobile-contact:hover { color: var(--blue-dark); }
        .nb-mobile-socials { margin-left: auto; display: flex; gap: 8px; }
        .nb-mobile-soc {
          width: 32px; height: 32px;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          background: var(--blue-main);
          transition: background 0.2s, transform 0.15s;
        }
        .nb-mobile-soc:hover { background: var(--blue-dark); transform: translateY(-2px); }

        /* Responsive */
        @media (max-width: 768px) { .nb-topbar { display: none !important; } }
        @media (max-width: 960px) {
          .nb-links    { display: none !important; }
          .nb-cta-wrap { display: none !important; }
          .nb-bus-wrap { display: none !important; }
          .nb-hamburger { display: flex !important; }
          .nb-logo-block { padding: 0 58px 0 24px; }
          .nb-logo-pill img { height: 34px; }
          .nb-nav-inner { min-height: 62px; }
        }
        @media (min-width: 961px) { .nb-hamburger { display: none !important; } }
      `}</style>

      {/* TOP BAR */}
      <div className="nb-topbar">
        <div className="nb-top-left">
          <a
            className="nb-top-item"
            href="https://wa.me/51966198771"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={12} color="rgba(255,255,255,0.9)" />
            (+51) 966 198 771
          </a>
          <a
            className="nb-top-item"
            href="https://www.google.com/maps/place/Turismo+Universo+Trujillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt size={11} color="rgba(255,255,255,0.9)" />
            Av. Nicolás de Piérola N° 1230, San Fernando — Trujillo, Perú
          </a>
        </div>
        <div className="nb-top-right">
          <div className="nb-soc-wrap">
            <a
              className="nb-soc"
              href="https://www.facebook.com/turismobusuniverso/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={13} color="#fff" />
            </a>
            <a
              className="nb-soc"
              href="https://www.instagram.com/turismobusuniverso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={13} color="#fff" />
            </a>
            <a
              className="nb-soc"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={13} color="#fff" />
            </a>
          </div>
          <a href="#" className="nb-provider-btn">
            Proveedores
          </a>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={`nb-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nb-nav-inner">
          <div className="nb-logo-block">
            <a href="/" className="nb-logo-pill">
              <img src="/logonombreuniverso.png" alt="Turismo Bus Universo" />
            </a>
          </div>

          <div className="nb-links">
            {[
              { label: "Inicio", href: "/" },
              { label: "Servicios", href: "/servicios" },
              { label: "Cláusulas", href: "/clausulas" },
              { label: "Agencias", href: "/agencias" },
              { label: "Nosotros", href: "/nosotros" },
            ].map((item) => (
              <a key={item.label} className="nb-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nb-cta-wrap">
            <a className="nb-cta" href="/contactanos">
              Contáctanos
              <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
                <path
                  d="M0 4h6M3 1l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <button
            className="nb-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <FaBars size={19} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`nb-mobile${menuOpen ? " open" : ""}`}>
        <div className="nb-mobile-header">
          <div className="nb-mobile-logo-pill">
            <img src="/logonombreuniverso.png" alt="Turismo Bus Universo" />
          </div>
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
            { label: "Servicios", href: "/servicios" },
            { label: "Cláusulas", href: "/clausulas" },
            { label: "Agencias", href: "/agencias" },
            { label: "Nosotros", href: "/nosotros" },
          ].map((item) => (
            <a
              key={item.label}
              className="nb-mobile-link"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nb-mobile-cta"
            href="/contactanos"
            onClick={() => setMenuOpen(false)}
          >
            Contáctanos →
          </a>
        </div>

        <div className="nb-mobile-footer">
          <a
            href="https://wa.me/51966198771"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-mobile-contact"
          >
            <FaWhatsapp size={14} color="#25D366" />
            (+51) 966 198 771
          </a>
          <div className="nb-mobile-socials">
            <a
              className="nb-mobile-soc"
              href="https://www.facebook.com/turismobusuniverso/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={15} color="#fff" />
            </a>
            <a
              className="nb-mobile-soc"
              href="https://www.instagram.com/turismobusuniverso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={15} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
