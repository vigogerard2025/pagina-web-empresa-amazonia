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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .topbar-link { color:rgba(30,30,30,.65);text-decoration:none;font-size:12px;font-weight:500;transition:color .2s;display:flex;align-items:center;gap:5px; }
        .topbar-link:hover { color:#1a8c3c; }
        .topbar-div { width:1px;height:14px;background:rgba(0,0,0,.12); }
        .soc-top { width:30px;height:30px;border-radius:6px;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:background .2s,transform .15s;cursor:pointer;background:transparent; }
        .soc-top:hover { background:rgba(0,0,0,.06);transform:translateY(-1px); }
        .nav-link { color:rgba(255,255,255,.88);text-decoration:none;font-size:12.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:8px 2px;border-bottom:2px solid transparent;white-space:nowrap;display:flex;align-items:center;gap:4px;transition:color .2s,border-bottom-color .2s; }
        .nav-link:hover { color:#f5c518;border-bottom-color:#f5c518; }
        .nav-link-mobile { color:rgba(255,255,255,.88);text-decoration:none;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:14px 24px;display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.06);transition:background .2s,color .2s; }
        .nav-link-mobile:hover { background:rgba(255,255,255,.05);color:#f5c518; }

        @keyframes slideDown { from{opacity:0;transform:translateY(-10px);}to{opacity:1;transform:translateY(0);} }

        @media (max-width:768px) { .topbar { display:none !important; } }
        .nav-links-desktop { display:flex; }
        .nav-logo-bus { display:flex; }
        .hamburger { display:none; }
        @media (max-width:900px) {
          .nav-links-desktop { display:none !important; }
          .nav-logo-bus { display:none !important; }
          .hamburger { display:flex !important; }
        }
        .mobile-menu { display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:#0d1117;z-index:999;flex-direction:column;animation:slideDown .25s ease forwards; }
        .mobile-menu.open { display:flex; }
      `}</style>

      {/* ════ TOP BAR ════ */}
      <div
        className="topbar"
        style={{
          background: "#fff",
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
            href="https://www.google.com/maps/place/Turismo+Universo+Trujillo"
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

      {/* ════ NAV ════ */}
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
          {[
            { label: "Inicio", href: "/" },
            { label: "Clausulas", href: "/clausulas" },
            { label: "Agencias", href: "/agencias" },
          ].map((item) => (
            <a key={item.label} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-link" href="/contactanos">
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

      {/* ════ MOBILE MENU ════ */}
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
            { label: "Inicio", href: "/" },
            { label: "Clausulas", href: "/clausulas" },
            { label: "Agencias", href: "/agencias" },
            { label: "Contáctanos", href: "/contactanos" },
          ].map((item) => (
            <a
              key={item.label}
              className="nav-link-mobile"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
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
    </>
  );
}
