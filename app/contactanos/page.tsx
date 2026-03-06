"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export default function ContactanosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#ffffff",
        minHeight: "100vh",
        color: "#111",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes slideUp   { from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);} }
        @keyframes fadeIn    { from{opacity:0;}to{opacity:1;} }
        @keyframes pulseDot  { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.6);} }
        @keyframes pulseRing { 0%{box-shadow:0 0 0 0 rgba(37,211,102,.45);}70%{box-shadow:0 0 0 18px rgba(37,211,102,0);}100%{box-shadow:0 0 0 0 rgba(37,211,102,0);} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-10px);}to{opacity:1;transform:translateY(0);} }
        @keyframes float     { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }

        .animate-up   { animation: slideUp .65s ease forwards; }
        .animate-fade { animation: fadeIn .8s ease forwards; }

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
          text-decoration: none; transition: background .2s, transform .15s; cursor: pointer; background: transparent;
        }
        .soc-top:hover { background: rgba(0,0,0,.06); transform: translateY(-1px); }

        /* ── Nav ── */
        .nav-link {
          color: rgba(255,255,255,.88); text-decoration: none; font-size: 12.5px;
          font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
          padding: 8px 2px; border-bottom: 2px solid transparent; white-space: nowrap;
          display: flex; align-items: center; gap: 4px;
          transition: color .2s, border-bottom-color .2s;
        }
        .nav-link:hover, .nav-link.active { color: #f5c518; border-bottom-color: #f5c518; }
        .nav-link-mobile {
          color: rgba(255,255,255,.88); text-decoration: none; font-size: 15px;
          font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
          padding: 14px 24px; display: flex; align-items: center; gap: 6px;
          border-bottom: 1px solid rgba(255,255,255,.06);
          transition: background .2s, color .2s;
        }
        .nav-link-mobile:hover { background: rgba(255,255,255,.05); color: #f5c518; }

        .nav-links-desktop { display: flex; }
        .nav-logo-bus { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-logo-bus { display: none !important; }
          .hamburger { display: flex !important; }
        }

        .mobile-menu {
          display: none; position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #0d1117; z-index: 999;
          flex-direction: column; animation: slideDown .25s ease forwards;
        }
        .mobile-menu.open { display: flex; }

        /* ── Cards de contacto ── */
        .contact-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px;
          border: 1.5px solid #e5e7eb;
          transition: transform .2s, box-shadow .2s, border-color .2s;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,.10);
        }
        .contact-card.wsp:hover { border-color: #25D366; box-shadow: 0 16px 48px rgba(37,211,102,.15); }
        .contact-card.fb:hover  { border-color: #1877F2; box-shadow: 0 16px 48px rgba(24,119,242,.15); }
        .contact-card.ig:hover  { border-color: #E1306C; box-shadow: 0 16px 48px rgba(225,48,108,.15); }
        .contact-card.tel:hover { border-color: #1a8c3c; box-shadow: 0 16px 48px rgba(26,140,60,.15); }

        .wsp-main-btn {
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #fff; border: none; border-radius: 14px;
          padding: 18px 32px; font-family: 'Inter', sans-serif;
          font-size: 15px; font-weight: 700; letter-spacing: .04em;
          cursor: pointer; display: flex; align-items: center; gap: 12px;
          justify-content: center; width: 100%;
          box-shadow: 0 6px 28px rgba(37,211,102,.40);
          transition: opacity .2s, transform .15s;
          animation: pulseRing 2.5s ease-in-out infinite;
          text-decoration: none;
        }
        .wsp-main-btn:hover { opacity: .9; transform: translateY(-2px); }

        .step-badge {
          width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg, #1a8c3c, #0f5c28);
          color: #fff; font-size: 12px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .copy-btn {
          background: #f3f4f6; border: none; border-radius: 6px;
          padding: 4px 10px; font-size: 11px; font-weight: 600;
          color: rgba(0,0,0,.5); cursor: pointer; transition: background .2s, color .2s;
          font-family: 'Inter', sans-serif; letter-spacing: .04em;
        }
        .copy-btn:hover { background: #e5e7eb; color: #111; }

        .info-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 0; border-bottom: 1px solid #f3f4f6;
        }
        .info-row:last-child { border-bottom: none; }

        .map-btn {
          background: linear-gradient(135deg, #1a4fa0, #0d3270);
          color: #fff; border: none; border-radius: 10px;
          padding: 13px 22px; font-family: 'Inter', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .06em;
          text-transform: uppercase; cursor: pointer; display: flex;
          align-items: center; gap: 8px;
          box-shadow: 0 4px 16px rgba(26,79,160,.3);
          transition: opacity .2s, transform .1s;
          text-decoration: none;
        }
        .map-btn:hover { opacity: .88; transform: translateY(-1px); }

        @media (max-width: 768px) {
          .topbar { display: none !important; }
          .hero-pad { padding: 48px 20px 56px !important; }
          .hero-title { font-size: clamp(28px,7vw,40px) !important; }
          .main-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .section-pad { padding: 40px 16px !important; }
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; padding: 24px 16px !important; gap: 20px !important; }
        }
      `}</style>

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
            href="https://wa.me/51999333419"
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
        </div>
      </div>

      {/* ════ HERO ════ */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0d1117 0%, #0f2a1a 50%, #0d1117 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(26,140,60,.25) 0%, transparent 70%)",
          }}
        />

        <div
          className="hero-pad"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "72px 48px 80px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div className="animate-up">
            {/* Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.18)",
                borderRadius: 20,
                padding: "6px 18px",
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
              Atención al pasajero
            </div>

            <h1
              className="hero-title"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px,5vw,58px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.12,
                marginBottom: 18,
                textShadow: "0 2px 28px rgba(0,0,0,.4)",
              }}
            >
              ¿Cómo podemos{" "}
              <span style={{ fontStyle: "italic", color: "#f5c518" }}>
                ayudarte?
              </span>
            </h1>

            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 20,
                alignItems: "center",
                justifyContent: "center",
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
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(215,225,240,.80)",
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 520,
                margin: "0 auto 0",
              }}
            >
              Reserva tu pasaje fácil y rápido por WhatsApp, o contáctanos por
              cualquiera de nuestros canales disponibles.
            </p>
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

      {/* ════ SECCIÓN PRINCIPAL ════ */}
      <section
        className="section-pad"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 48px 72px" }}
      >
        {/* ── WhatsApp destacado ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
            border: "2px solid #86efac",
            borderRadius: 24,
            padding: "40px 44px",
            marginBottom: 48,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decoración fondo */}
          <div
            style={{
              position: "absolute",
              right: -40,
              top: -40,
              width: 220,
              height: 220,
              background: "rgba(37,211,102,.08)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 30,
              bottom: -60,
              width: 160,
              height: 160,
              background: "rgba(37,211,102,.06)",
              borderRadius: "50%",
            }}
          />

          <div
            className="main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Izquierda */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg,#25D366,#128C7E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(37,211,102,.4)",
                    animation: "float 3s ease-in-out infinite",
                    flexShrink: 0,
                  }}
                >
                  <FaWhatsapp size={28} color="#fff" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "#166534",
                      marginBottom: 3,
                    }}
                  >
                    Canal principal · Más rápido
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "clamp(22px,3vw,30px)",
                      fontWeight: 700,
                      color: "#111",
                    }}
                  >
                    Reserva por WhatsApp
                  </h2>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 14,
                  color: "rgba(0,0,0,.6)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                La forma más rápida de reservar tu pasaje. Escríbenos con tu
                ruta, fecha y número de pasajeros y te confirmamos en minutos.
                Atención todos los días.
              </p>

              {/* Número con copy */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#fff",
                  borderRadius: 12,
                  padding: "14px 18px",
                  border: "1.5px solid #bbf7d0",
                  marginBottom: 22,
                  width: "fit-content",
                }}
              >
                <FaPhoneAlt size={14} color="#25D366" />
                <span
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#111",
                    letterSpacing: ".02em",
                  }}
                >
                  (+51) 999 333 419
                </span>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy("51999333419")}
                >
                  {copied ? "✓ Copiado" : "Copiar"}
                </button>
              </div>

              <a
                className="wsp-main-btn"
                href="https://wa.me/51999333419?text=Hola!%20Quiero%20reservar%20un%20pasaje%20con%20Transportes%20Universo%20%F0%9F%9A%8D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
                Escribir por WhatsApp ahora
                <FaArrowRight size={14} />
              </a>
            </div>

            {/* Derecha — pasos */}
            <div>
              <div
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#166534",
                  marginBottom: 18,
                }}
              >
                ¿Cómo reservar?
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  {
                    n: "1",
                    title: "Escríbenos",
                    desc: "Manda un mensaje con tu destino y fecha de viaje.",
                  },
                  {
                    n: "2",
                    title: "Confirmamos disponibilidad",
                    desc: "Te indicamos asientos, horario y precio en minutos.",
                  },
                  {
                    n: "3",
                    title: "Reserva tu asiento",
                    desc: "Realiza el pago y recibe tu confirmación al instante.",
                  },
                  {
                    n: "4",
                    title: "¡Listo para viajar!",
                    desc: "Preséntate en nuestras oficinas el día de tu viaje.",
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                    }}
                  >
                    <div className="step-badge">{step.n}</div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#111",
                          marginBottom: 2,
                        }}
                      >
                        {step.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 12,
                          color: "rgba(0,0,0,.5)",
                          lineHeight: 1.55,
                        }}
                      >
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Grid de otros canales ── */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "#166534",
              marginBottom: 8,
            }}
          >
            Otros canales
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(20px,3vw,26px)",
              fontWeight: 700,
              color: "#111",
            }}
          >
            También puedes encontrarnos en
          </h3>
        </div>

        <div
          className="cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {/* Facebook */}
          <a
            className="contact-card fb"
            href="https://www.facebook.com/turismobusuniverso/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "linear-gradient(135deg,#1877F2,#0d5cbf)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(24,119,242,.3)",
                }}
              >
                <FaFacebook size={24} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "#1877F2",
                    marginBottom: 2,
                  }}
                >
                  Facebook
                </div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#111",
                  }}
                >
                  Turismo Bus Universo
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 13,
                color: "rgba(0,0,0,.55)",
                lineHeight: 1.65,
                marginBottom: 18,
              }}
            >
              Síguenos para estar al tanto de promociones, nuevas rutas y
              noticias de la empresa.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Inter',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#1877F2",
              }}
            >
              Ver página <FaArrowRight size={11} />
            </div>
          </a>

          {/* Instagram */}
          <a
            className="contact-card ig"
            href="https://www.instagram.com/turismobusuniverso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background:
                    "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(225,48,108,.3)",
                }}
              >
                <FaInstagram size={24} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "#E1306C",
                    marginBottom: 2,
                  }}
                >
                  Instagram
                </div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#111",
                  }}
                >
                  @turismobusuniverso
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 13,
                color: "rgba(0,0,0,.55)",
                lineHeight: 1.65,
                marginBottom: 18,
              }}
            >
              Fotos de nuestros destinos, buses y experiencias de viajeros que
              ya recorrieron el norte del Perú con nosotros.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Inter',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#E1306C",
              }}
            >
              Ver perfil <FaArrowRight size={11} />
            </div>
          </a>

          {/* Teléfono */}
          <a className="contact-card tel" href="tel:+51999333419">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "linear-gradient(135deg,#1a8c3c,#0f5c28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(26,140,60,.3)",
                }}
              >
                <FaPhoneAlt size={20} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "#166534",
                    marginBottom: 2,
                  }}
                >
                  Llamada directa
                </div>
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#111",
                  }}
                >
                  +51 999 333 419
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 13,
                color: "rgba(0,0,0,.55)",
                lineHeight: 1.65,
                marginBottom: 18,
              }}
            >
              Habla directamente con nuestro equipo para consultas, reservas y
              cualquier información sobre tus rutas.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Inter',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#1a8c3c",
              }}
            >
              Llamar ahora <FaArrowRight size={11} />
            </div>
          </a>
        </div>
      </section>

      {/* ════ DIRECCIÓN / HORARIO ════ */}
      <section
        style={{
          background: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          className="section-pad"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px" }}
        >
          <div
            className="main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* Dirección */}
            <div>
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
                Dónde encontrarnos
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(20px,3vw,26px)",
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 24,
                }}
              >
                Nuestras oficinas
              </h3>

              <div className="info-row">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#fee2e2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaMapMarkerAlt size={18} color="#e53e3e" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#111",
                      marginBottom: 3,
                    }}
                  >
                    Dirección
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 13,
                      color: "rgba(0,0,0,.6)",
                      lineHeight: 1.6,
                    }}
                  >
                    Av. Nicolás de Piérola N° 1230
                    <br />
                    Urb. San Fernando, Trujillo — La Libertad, Perú
                  </div>
                </div>
              </div>

              <div className="info-row">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaClock size={17} color="#1a4fa0" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#111",
                      marginBottom: 3,
                    }}
                  >
                    Horario de atención
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 13,
                      color: "rgba(0,0,0,.6)",
                      lineHeight: 1.6,
                    }}
                  >
                    Lunes a Domingo
                    <br />
                    <span style={{ fontWeight: 700, color: "#111" }}>
                      06:00 am — 10:00 pm
                    </span>
                  </div>
                </div>
              </div>

              <div className="info-row">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#f0fdf4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaWhatsapp size={18} color="#25D366" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#111",
                      marginBottom: 3,
                    }}
                  >
                    WhatsApp (24/7)
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 13,
                      color: "rgba(0,0,0,.6)",
                      lineHeight: 1.6,
                    }}
                  >
                    Consultas y reservas por mensaje
                    <br />
                    <span style={{ fontWeight: 700, color: "#111" }}>
                      Respuesta en menos de 10 min
                    </span>
                  </div>
                </div>
              </div>

              <a
                className="map-btn"
                href="https://www.google.com/maps/place/Turismo+Universo+Trujillo/@-8.097581,-79.0376331,944m"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 24, display: "inline-flex" }}
              >
                <FaMapMarkerAlt size={14} />
                Ver en Google Maps
                <FaArrowRight size={12} />
              </a>
            </div>

            {/* Por qué elegirnos para contacto */}
            <div>
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
                Compromisos
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(20px,3vw,26px)",
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 24,
                }}
              >
                Lo que nos diferencia
              </h3>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {[
                  {
                    icon: "⚡",
                    title: "Respuesta inmediata",
                    desc: "Contestamos en menos de 10 minutos por WhatsApp, todos los días.",
                  },
                  {
                    icon: "🔒",
                    title: "Reserva segura",
                    desc: "Tu pasaje queda guardado hasta el día del viaje sin sorpresas.",
                  },
                  {
                    icon: "📍",
                    title: "Múltiples destinos",
                    desc: "Más de 50 rutas activas al norte del Perú desde Trujillo y viceversa.",
                  },
                  {
                    icon: "💬",
                    title: "Atención personalizada",
                    desc: "Un agente real, no un bot. Resolvemos todas tus dudas.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "14px 18px",
                      background: "#fff",
                      borderRadius: 12,
                      border: "1.5px solid #e5e7eb",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#111",
                          marginBottom: 2,
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 12,
                          color: "rgba(0,0,0,.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                    <FaCheckCircle
                      size={15}
                      color="#1a8c3c"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA FINAL ════ */}
      <section
        style={{
          background: "#0d1117",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 500,
            height: 200,
            background:
              "radial-gradient(ellipse, rgba(37,211,102,.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "64px 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚍</div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(24px,4vw,34px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            ¿Listo para tu próximo viaje?
          </h2>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,.55)",
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            Escríbenos ahora y reserva tu pasaje en minutos. Trujillo y todo el
            norte del Perú te esperan.
          </p>
          <a
            className="wsp-main-btn"
            href="https://wa.me/51999333419?text=Hola!%20Quiero%20reservar%20un%20pasaje%20con%20Transportes%20Universo%20%F0%9F%9A%8D"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: 380, margin: "0 auto" }}
          >
            <FaWhatsapp size={20} />
            Reservar mi pasaje ahora
            <FaArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <footer style={{ background: "#080c12", borderTop: "3px solid #f5c518" }}>
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
