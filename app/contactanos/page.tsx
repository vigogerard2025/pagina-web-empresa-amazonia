"use client";
import CheckoutImplement from "../components/CheckoutImplement";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaTimes,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaUser,
  FaIdCard,
  FaCalendarAlt,
  FaUsers,
  FaPaperPlane,
  FaExchangeAlt,
  FaBox,
} from "react-icons/fa";

const CITY_PRICES: Record<string, number> = {
  Trujillo: 0,
  Chao: 20,
  Virú: 25,
  Paiján: 15,
  Pacasmayo: 20,
  Chepén: 30,
  Pacanguilla: 20,
  "Ciudad de Dios": 20,
  Chiclayo: 30,
  Olmos: 60,
  Chamaya: 60,
  Pucará: 30,
  Jaén: 70,
  "Bagua Grande": 80,
  "Pedro Ruiz": 80,
  Pomacochas: 80,
  "Buenos Aires": 60,
  Naranjos: 80,
  Naranjillo: 80,
  "Nueva Cajamarca": 80,
  "Segunda Jerusalén": 70,
  Rioja: 90,
  Moyobamba: 90,
  Tabalosos: 100,
  Tarapoto: 100,
  Alianza: 130,
  Picota: 110,
  "San Hilarión": 120,
  Bellavista: 120,
  Sacanche: 120,
  Saposoa: 120,
  Juanjuí: 130,
  Yurimaguas: 130,
};

const DIRECT_PRICES: Record<string, Record<string, number>> = {
  Trujillo: {
    Chiclayo: 30,
    Pacanguilla: 20,
    Chepén: 20,
    "Ciudad de Dios": 20,
    Chamaya: 60,
    Jaén: 70,
    "Bagua Grande": 80,
    "Pedro Ruiz": 80,
    Pomacochas: 80,
    Naranjillo: 80,
    Naranjos: 80,
    "Nueva Cajamarca": 80,
    Moyobamba: 90,
    Rioja: 90,
    Tabalosos: 100,
    Tarapoto: 100,
    Picota: 110,
    Bellavista: 120,
    Sacanche: 120,
    "San Hilarión": 120,
    Saposoa: 120,
    "Segunda Jerusalén": 70,
    Juanjuí: 130,
    Yurimaguas: 130,
    Alianza: 130,
  },
  Chiclayo: {
    Trujillo: 30,
    Chamaya: 25,
    Pucará: 30,
    Jaén: 30,
    "Bagua Grande": 30,
    "Pedro Ruiz": 40,
    Pomacochas: 40,
    Moyobamba: 50,
    Naranjillo: 50,
    Naranjos: 50,
    "Nueva Cajamarca": 50,
    "Segunda Jerusalén": 50,
    Rioja: 60,
    Tabalosos: 60,
    Tarapoto: 60,
    "Buenos Aires": 60,
    Picota: 80,
    Bellavista: 80,
    Sacanche: 80,
    "San Hilarión": 80,
    Juanjuí: 90,
    Yurimaguas: 90,
  },
  Tarapoto: {
    "Bagua Grande": 50,
    "Pedro Ruiz": 50,
    Jaén: 60,
    Olmos: 60,
    Chiclayo: 60,
    Chepén: 80,
    Pacasmayo: 90,
    Paiján: 90,
    Trujillo: 90,
  },
  Moyobamba: {
    "Bagua Grande": 50,
    Olmos: 50,
    Chiclayo: 50,
    Pacasmayo: 80,
    Trujillo: 80,
    Paiján: 90,
  },
  Juanjuí: {
    "Nueva Cajamarca": 40,
    "Bagua Grande": 60,
    Jaén: 70,
    Chiclayo: 90,
    Pacasmayo: 100,
    Trujillo: 110,
  },
  "Nueva Cajamarca": {
    "Bagua Grande": 40,
    Olmos: 50,
    Chiclayo: 50,
    Pacanguilla: 70,
    Chepén: 70,
    Trujillo: 80,
    Pacasmayo: 80,
  },
  Bellavista: {
    "Bagua Grande": 60,
    Jaén: 70,
    Chiclayo: 80,
    Chepén: 100,
    Pacasmayo: 100,
    Trujillo: 110,
  },
  Picota: { Olmos: 90, Chiclayo: 90, Trujillo: 120 },
  "Bagua Grande": {
    Chiclayo: 30,
    Moyobamba: 40,
    Tarapoto: 50,
    Bellavista: 60,
    Juanjuí: 60,
    Picota: 60,
    Trujillo: 55,
  },
  Chao: {
    "Bagua Grande": 90,
    Jaén: 90,
    "Pedro Ruiz": 90,
    Naranjillo: 100,
    Naranjos: 100,
    "Nueva Cajamarca": 100,
    Moyobamba: 110,
    Tarapoto: 120,
    Yurimaguas: 160,
  },
  Virú: {
    "Bagua Grande": 90,
    Pomacochas: 90,
    Moyobamba: 100,
    "Nueva Cajamarca": 100,
    Tarapoto: 120,
    Juanjuí: 150,
    Yurimaguas: 150,
  },
  Pacasmayo: {
    "Bagua Grande": 70,
    Jaén: 70,
    Moyobamba: 90,
    Rioja: 90,
    "Nueva Cajamarca": 80,
    Tarapoto: 100,
    Saposoa: 130,
    Yurimaguas: 130,
  },
  Paiján: {
    Moyobamba: 80,
    "Nueva Cajamarca": 80,
    Tarapoto: 90,
    Bellavista: 110,
    Juanjuí: 120,
  },
  Pacanguilla: {
    "Bagua Grande": 50,
    "Pedro Ruiz": 50,
    Naranjillo: 60,
    Moyobamba: 70,
    "Nueva Cajamarca": 70,
    Tarapoto: 85,
    Picota: 90,
    "San Hilarión": 90,
    Bellavista: 100,
    Juanjuí: 100,
    Yurimaguas: 120,
  },
  Olmos: {
    "Nueva Cajamarca": 60,
    Naranjos: 60,
    Moyobamba: 70,
    Picota: 90,
    Juanjuí: 95,
    Bellavista: 100,
  },
  "Pedro Ruiz": { Chiclayo: 40, Trujillo: 70 },
  Rioja: { Chiclayo: 60, Trujillo: 80 },
  Yurimaguas: { Chiclayo: 100, Trujillo: 120 },
  "Segunda Jerusalén": { Chiclayo: 50, Trujillo: 80 },
  "San Hilarión": { Chepén: 90, Chiclayo: 90, Trujillo: 105 },
  Sacanche: { Chiclayo: 100, Trujillo: 120 },
  Naranjillo: { Trujillo: 80 },
  Naranjos: { Trujillo: 80 },
  Chepén: {
    Moyobamba: 70,
    Tarapoto: 85,
    "Nueva Cajamarca": 65,
    Bellavista: 100,
    Juanjuí: 100,
    Sacanche: 100,
  },
};

const OFFICE_CITIES = [
  "Trujillo",
  "Chao",
  "Virú",
  "Paiján",
  "Pacasmayo",
  "Chepén",
  "Pacanguilla",
  "Ciudad de Dios",
  "Chiclayo",
  "Olmos",
  "Bagua Grande",
  "Pedro Ruiz",
  "Nueva Cajamarca",
  "Rioja",
  "Moyobamba",
  "Tabalosos",
  "Tarapoto",
  "San Hilarión",
  "Bellavista",
  "Sacanche",
  "Saposoa",
  "Juanjuí",
  "Yurimaguas",
];

const cities = Object.keys(CITY_PRICES);

function calcPrice(from: string, to: string): number {
  if (DIRECT_PRICES[from]?.[to]) return DIRECT_PRICES[from][to];
  if (DIRECT_PRICES[to]?.[from]) return DIRECT_PRICES[to][from];
  const diff = Math.abs((CITY_PRICES[from] ?? 0) - (CITY_PRICES[to] ?? 0));
  return diff <= 20 ? diff + 10 : diff;
}

export default function ContactanosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("Trujillo");
  const [selectedDest, setSelectedDest] = useState<string | null>(null);
  const [destSearch, setDestSearch] = useState("");
  const [showDestList, setShowDestList] = useState(false);
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [fecha, setFecha] = useState("");
  const [pasajeros, setPasajeros] = useState("1");
  const [encomienda, setEncomienda] = useState<"no" | "si">("no");
  const [descEncomienda, setDescEncomienda] = useState("");
  const [formStep, setFormStep] = useState<"dest" | "data">("dest");

  const availableDests = cities.filter((c) => c !== origin);
  const filteredDest = availableDests.filter((c) =>
    c.toLowerCase().includes(destSearch.toLowerCase()),
  );

  const routePrice =
    origin && selectedDest ? calcPrice(origin, selectedDest) : 0;
  const totalPrice = routePrice * parseInt(pasajeros || "1");

  const handleSelectDest = (city: string) => {
    setSelectedDest(city);
    setDestSearch(city);
    setShowDestList(false);
    setFormStep("data");
  };

  const handleOriginChange = (newOrigin: string) => {
    setOrigin(newOrigin);
    setSelectedDest(null);
    setDestSearch("");
    setFormStep("dest");
  };

  const swapOriginDest = () => {
    if (!selectedDest) return;
    const prevOrigin = origin;
    const prevDest = selectedDest;
    setOrigin(prevDest);
    setSelectedDest(prevOrigin);
    setDestSearch(prevOrigin);
  };

  const buildWspMessage = () => {
    const lines = [
      `🚍 *SOLICITUD DE RESERVA*`,
      ``,
      `👤 *Pasajero:* ${nombre}`,
      `🪪 *DNI:* ${dni}`,
      `📍 *Ruta:* ${origin} → ${selectedDest}`,
      `📅 *Fecha de viaje:* ${fecha}`,
      `👥 *Pasajeros:* ${pasajeros}`,
      `💰 *Precio estimado:* S/ ${totalPrice} (${pasajeros} × S/ ${routePrice})`,
      `📦 *Encomienda:* ${encomienda === "si" ? `Sí${descEncomienda.trim() ? ` — ${descEncomienda.trim()}` : ""}` : "No"}`,
      ``,
      `Por favor confirmarme disponibilidad y horarios. ¡Gracias! 😊`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const canSend = !!(
    nombre.trim() &&
    dni.trim() &&
    fecha &&
    selectedDest &&
    pasajeros &&
    origin
  );

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        @keyframes slideUp   { from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);} }
        @keyframes pulseDot  { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.6);} }
        @keyframes pulseRing { 0%{box-shadow:0 0 0 0 rgba(37,211,102,.45);}70%{box-shadow:0 0 0 18px rgba(37,211,102,0);}100%{box-shadow:0 0 0 0 rgba(37,211,102,0);} }
        @keyframes float     { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }
        @keyframes dropIn    { from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-10px);}to{opacity:1;transform:translateY(0);} }
        .animate-up { animation: slideUp .65s ease forwards; }
        .nav-link-mobile { color: #0f7a2e; text-decoration: none; font-size: 15px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; padding: 14px 24px; display: flex; align-items: center; gap: 6px; border-bottom: 1px solid #c8f0d8; transition: background .2s, color .2s; }
        .nav-link-mobile:hover { background: #edfaf3; color: #1a8c3c; }
        .mobile-menu { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #fff; z-index: 999; flex-direction: column; animation: slideDown .25s ease forwards; }
        .mobile-menu.open { display: flex; }
        .contact-card { background: #fff; border-radius: 20px; padding: 32px 28px; border: 1.5px solid #c8f0d8; transition: transform .2s, box-shadow .2s, border-color .2s; cursor: pointer; text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: 0; }
        .contact-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(26,140,60,.12); }
        .contact-card.fb:hover { border-color: #1877F2; box-shadow: 0 16px 48px rgba(24,119,242,.12); }
        .contact-card.ig:hover { border-color: #E1306C; box-shadow: 0 16px 48px rgba(225,48,108,.12); }
        .contact-card.tel:hover { border-color: #1a8c3c; box-shadow: 0 16px 48px rgba(26,140,60,.15); }
        .wsp-main-btn { background: linear-gradient(135deg, #25D366, #128C7E); color: #fff; border: none; border-radius: 14px; padding: 18px 32px; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: .04em; cursor: pointer; display: flex; align-items: center; gap: 12px; justify-content: center; width: 100%; box-shadow: 0 6px 28px rgba(37,211,102,.35); transition: opacity .2s, transform .15s; animation: pulseRing 2.5s ease-in-out infinite; text-decoration: none; }
        .wsp-main-btn:hover { opacity: .9; transform: translateY(-2px); }
        .step-badge { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #1a8c3c, #22a849); color: #fff; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .copy-btn { background: #edfaf3; border: 1px solid #a7f3d0; border-radius: 6px; padding: 4px 10px; font-size: 11px; font-weight: 600; color: #0f7a2e; cursor: pointer; transition: background .2s, color .2s; font-family: 'Inter', sans-serif; letter-spacing: .04em; }
        .copy-btn:hover { background: #d4f5e0; color: #0d2818; }
        .info-row { display: flex; align-items: flex-start; gap: 14px; padding: 16px 0; border-bottom: 1px solid #edfaf3; }
        .info-row:last-child { border-bottom: none; }
        .map-btn { background: linear-gradient(135deg, #1a4fa0, #1565c0); color: #fff; border: none; border-radius: 10px; padding: 13px 22px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 16px rgba(26,79,160,.25); transition: opacity .2s, transform .1s; text-decoration: none; }
        .map-btn:hover { opacity: .88; transform: translateY(-1px); }
        .form-input { width: 100%; border: 1.5px solid #c8f0d8; border-radius: 10px; padding: 12px 14px 12px 38px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: #0d2818; background: #fff; outline: none; transition: border-color .2s, box-shadow .2s; }
        .form-input:focus { border-color: #1a8c3c; box-shadow: 0 0 0 3px rgba(26,140,60,.12); }
        .form-input::placeholder { color: #5a8a6a; font-weight: 400; }
        .dest-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; cursor: pointer; border-radius: 8px; transition: background .15s; font-family: 'Inter', sans-serif; font-size: 13px; }
        .dest-item:hover { background: #edfaf3; }
        .dest-item.selected { background: #d4f5e0; }
        .dest-dropdown { position: absolute; top: calc(100% + 6px); left: 0; right: 0; background: #fff; border: 1.5px solid #c8f0d8; border-radius: 12px; box-shadow: 0 12px 40px rgba(26,140,60,.12); z-index: 50; max-height: 260px; overflow-y: auto; animation: dropIn .2s ease forwards; padding: 6px; }
        .dest-dropdown::-webkit-scrollbar { width: 4px; }
        .dest-dropdown::-webkit-scrollbar-thumb { background: #a7f3d0; border-radius: 2px; }
        .form-step-tab { flex: 1; padding: 10px; text-align: center; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; border: none; cursor: pointer; transition: background .2s, color .2s; }
        .preview-box { background: #edfaf3; border: 1.5px solid #a7f3d0; border-radius: 12px; padding: 16px 18px; font-family: 'Inter', sans-serif; font-size: 13px; line-height: 1.7; color: #0d2818; }
        .preview-box strong { color: #0f7a2e; }
        .city-chip { display: inline-flex; justify-content: space-between; align-items: center; padding: 8px 10px; border-radius: 8px; cursor: pointer; border: 1.5px solid #c8f0d8; background: #f9fdf6; transition: all .15s; font-family: 'Inter',sans-serif; font-size: 12px; }
        .city-chip:hover { border-color: #a7f3d0; background: #edfaf3; }
        .city-chip.selected { border-color: #1a8c3c; background: #d4f5e0; }
        @media (max-width: 768px) {
          .hero-pad { padding: 48px 20px 56px !important; }
          .hero-title { font-size: clamp(28px,7vw,40px) !important; }
          .main-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .section-pad { padding: 40px 16px !important; }
          .form-grid { grid-template-columns: 1fr !important; }
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
            borderBottom: "2px solid #c8f0d8",
            background: "#f2fbf5",
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
              background: "#edfaf3",
              border: "1.5px solid #a7f3d0",
              borderRadius: 8,
              cursor: "pointer",
              color: "#1a8c3c",
              padding: 8,
            }}
          >
            <FaTimes size={20} />
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
            borderTop: "2px solid #c8f0d8",
            display: "flex",
            gap: 16,
            alignItems: "center",
            background: "#f2fbf5",
          }}
        >
          <a
            href="https://wa.me/51966198771"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#0f7a2e",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <FaWhatsapp size={16} color="#25D366" /> (+51) 966198771
          </a>
        </div>
      </div>

      {/* ════ HERO ════ */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #edfaf3 0%, #d4f5e0 45%, #fef9e7 100%)",
          position: "relative",
          overflow: "hidden",
          borderBottom: "3px solid #86efac",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(26,140,60,.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "radial-gradient(circle, #1a8c3c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -60,
            bottom: -40,
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle, rgba(232,168,32,.12) 0%, transparent 70%)",
            borderRadius: "50%",
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
              Atención al pasajero
            </div>
            <h1
              className="hero-title"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px,5vw,58px)",
                fontWeight: 800,
                color: "#0d2818",
                lineHeight: 1.12,
                marginBottom: 18,
              }}
            >
              ¿Cómo podemos{" "}
              <span style={{ fontStyle: "italic", color: "#1a8c3c" }}>
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
                  background: "#e8a820",
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
                color: "#2d5a3d",
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              Reserva tu pasaje fácil y rápido por WhatsApp, o contáctanos por
              cualquiera de nuestros canales disponibles.
            </p>
          </div>
        </div>
      </section>

      {/* ════ COLOR STRIP ════ */}
      <div style={{ display: "flex", height: 4 }}>
        <div style={{ flex: 2, background: "#1a8c3c" }} />
        <div style={{ flex: 1, background: "#d42b2b" }} />
        <div style={{ flex: 1, background: "#1a4fa0" }} />
        <div style={{ flex: 1, background: "#e8a820" }} />
        <div style={{ flex: 2, background: "#1a8c3c" }} />
      </div>

      {/* ════ FORMULARIO DE RESERVA ════ */}
      <section
        style={{
          background: "linear-gradient(180deg, #edfaf3 0%, #f9fdf6 100%)",
          borderBottom: "1.5px solid #c8f0d8",
        }}
      >
        <div
          className="section-pad"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "60px 48px 68px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#d4f5e0",
                border: "1px solid #a7f3d0",
                borderRadius: 20,
                padding: "5px 16px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".12em",
                color: "#0f7a2e",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <FaWhatsapp size={12} color="#25D366" /> Reserva rápida · rutas
              disponibles
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(24px,4vw,34px)",
                fontWeight: 700,
                color: "#0d2818",
                marginBottom: 10,
              }}
            >
              Arma tu reserva y{" "}
              <span style={{ fontStyle: "italic", color: "#1a8c3c" }}>
                envíala por WhatsApp
              </span>
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#2d5a3d",
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              Elige cualquier origen y destino. Calculamos el precio
              automáticamente y generamos el mensaje listo para enviar.
            </p>
          </div>

          <div
            className="main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "start",
            }}
          >
            {/* ── FORMULARIO ── */}
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                border: "1.5px solid #c8f0d8",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(26,140,60,.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  background: "#f9fdf6",
                  borderBottom: "1.5px solid #c8f0d8",
                }}
              >
                <button
                  className="form-step-tab"
                  onClick={() => setFormStep("dest")}
                  style={{
                    background: formStep === "dest" ? "#fff" : "transparent",
                    color: formStep === "dest" ? "#1a8c3c" : "#5a8a6a",
                    borderBottom:
                      formStep === "dest"
                        ? "2px solid #1a8c3c"
                        : "2px solid transparent",
                  }}
                >
                  1 · Origen & Destino
                </button>
                <button
                  className="form-step-tab"
                  onClick={() => selectedDest && setFormStep("data")}
                  style={{
                    background: formStep === "data" ? "#fff" : "transparent",
                    color: formStep === "data" ? "#1a8c3c" : "#5a8a6a",
                    borderBottom:
                      formStep === "data"
                        ? "2px solid #1a8c3c"
                        : "2px solid transparent",
                    opacity: !selectedDest ? 0.5 : 1,
                  }}
                >
                  2 · Tus datos
                </button>
              </div>

              <div style={{ padding: "28px 28px 32px" }}>
                {formStep === "dest" && (
                  <div>
                    <div style={{ marginBottom: 20 }}>
                      <label
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "#5a8a6a",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        📍 Ciudad de origen
                      </label>
                      <div style={{ position: "relative" }}>
                        <div
                          style={{
                            position: "absolute",
                            left: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            zIndex: 1,
                          }}
                        >
                          <FaMapMarkerAlt size={13} color="#1a8c3c" />
                        </div>
                        <select
                          className="form-input"
                          value={origin}
                          onChange={(e) => handleOriginChange(e.target.value)}
                          style={{ appearance: "none" }}
                        >
                          {OFFICE_CITIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {selectedDest && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: 12,
                        }}
                      >
                        <button
                          onClick={swapOriginDest}
                          style={{
                            background: "#edfaf3",
                            border: "1.5px solid #a7f3d0",
                            borderRadius: 8,
                            padding: "6px 14px",
                            fontFamily: "'Inter',sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#0f7a2e",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <FaExchangeAlt size={11} /> Intercambiar
                          origen/destino
                        </button>
                      </div>
                    )}

                    <div style={{ marginBottom: 18 }}>
                      <label
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "#5a8a6a",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        🏁 Ciudad de destino
                      </label>
                      <div style={{ position: "relative" }}>
                        <div
                          style={{
                            position: "absolute",
                            left: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            zIndex: 1,
                          }}
                        >
                          <FaMapMarkerAlt size={13} color="#e53e3e" />
                        </div>
                        <input
                          className="form-input"
                          placeholder="Buscar destino..."
                          value={destSearch}
                          onChange={(e) => {
                            setDestSearch(e.target.value);
                            setShowDestList(true);
                            if (!e.target.value) setSelectedDest(null);
                          }}
                          onFocus={() => setShowDestList(true)}
                          onBlur={() =>
                            setTimeout(() => setShowDestList(false), 150)
                          }
                        />
                        {showDestList && (
                          <div className="dest-dropdown">
                            {filteredDest.length === 0 ? (
                              <div
                                style={{
                                  padding: "10px 14px",
                                  fontSize: 13,
                                  color: "#5a8a6a",
                                }}
                              >
                                Sin resultados
                              </div>
                            ) : (
                              filteredDest.map((city) => (
                                <div
                                  key={city}
                                  className={`dest-item${selectedDest === city ? " selected" : ""}`}
                                  onMouseDown={() => handleSelectDest(city)}
                                >
                                  <span
                                    style={{
                                      fontWeight: 600,
                                      color: "#0d2818",
                                    }}
                                  >
                                    {city}
                                  </span>
                                  <span
                                    style={{
                                      fontWeight: 700,
                                      color: "#1a8c3c",
                                      fontSize: 14,
                                    }}
                                  >
                                    S/ {calcPrice(origin, city)}
                                  </span>
                                </div>
                              ))
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "#5a8a6a",
                        marginBottom: 10,
                      }}
                    >
                      Destinos disponibles desde{" "}
                      <strong style={{ color: "#1a8c3c" }}>{origin}</strong>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 7,
                        maxHeight: 280,
                        overflowY: "auto",
                        paddingRight: 4,
                      }}
                    >
                      {availableDests.map((city) => (
                        <div
                          key={city}
                          className={`city-chip${selectedDest === city ? " selected" : ""}`}
                          onClick={() => handleSelectDest(city)}
                        >
                          <span
                            style={{
                              fontWeight: 600,
                              color: "#0d2818",
                              fontSize: 11,
                            }}
                          >
                            {city}
                          </span>
                          <span
                            style={{
                              fontWeight: 800,
                              color: "#1a8c3c",
                              fontSize: 12,
                              marginLeft: 6,
                            }}
                          >
                            S/{calcPrice(origin, city)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {selectedDest && (
                      <button
                        onClick={() => setFormStep("data")}
                        style={{
                          marginTop: 18,
                          width: "100%",
                          background: "linear-gradient(135deg,#1a8c3c,#22a849)",
                          color: "#fff",
                          border: "none",
                          borderRadius: 12,
                          padding: "13px",
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 13,
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          boxShadow: "0 4px 16px rgba(26,140,60,.28)",
                        }}
                      >
                        Continuar: {origin} → {selectedDest} · S/{routePrice}{" "}
                        <FaArrowRight size={12} />
                      </button>
                    )}
                  </div>
                )}

                {formStep === "data" && (
                  <div>
                    {selectedDest && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "#edfaf3",
                          border: "1.5px solid #a7f3d0",
                          borderRadius: 12,
                          padding: "12px 16px",
                          marginBottom: 24,
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "'Inter',sans-serif",
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#0f7a2e",
                              textTransform: "uppercase",
                              letterSpacing: ".08em",
                            }}
                          >
                            Ruta seleccionada
                          </div>
                          <div
                            style={{
                              fontFamily: "'Inter',sans-serif",
                              fontSize: 15,
                              fontWeight: 700,
                              color: "#0d2818",
                              marginTop: 2,
                            }}
                          >
                            {origin} → {selectedDest}
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
                            S/ {routePrice}
                          </div>
                          <div style={{ fontSize: 10, color: "#5a8a6a" }}>
                            por persona
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className="form-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 14,
                      }}
                    >
                      <div style={{ gridColumn: "1/-1" }}>
                        <label
                          style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            color: "#5a8a6a",
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          Nombre completo
                        </label>
                        <div style={{ position: "relative" }}>
                          <div
                            style={{
                              position: "absolute",
                              left: 12,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <FaUser size={12} color="#5a8a6a" />
                          </div>
                          <input
                            className="form-input"
                            placeholder="Ej. Juan Pérez García"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            color: "#5a8a6a",
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          DNI
                        </label>
                        <div style={{ position: "relative" }}>
                          <div
                            style={{
                              position: "absolute",
                              left: 12,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <FaIdCard size={12} color="#5a8a6a" />
                          </div>
                          <input
                            className="form-input"
                            placeholder="12345678"
                            value={dni}
                            onChange={(e) =>
                              setDni(
                                e.target.value.replace(/\D/g, "").slice(0, 8),
                              )
                            }
                            maxLength={8}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            color: "#5a8a6a",
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          Pasajeros
                        </label>
                        <div style={{ position: "relative" }}>
                          <div
                            style={{
                              position: "absolute",
                              left: 12,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <FaUsers size={12} color="#5a8a6a" />
                          </div>
                          <select
                            className="form-input"
                            value={pasajeros}
                            onChange={(e) => setPasajeros(e.target.value)}
                            style={{ appearance: "none" }}
                          >
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                              <option key={n} value={n}>
                                {n} pasajero{n > 1 ? "s" : ""}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div style={{ gridColumn: "1/-1" }}>
                        <label
                          style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            color: "#5a8a6a",
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          Fecha de viaje
                        </label>
                        <div style={{ position: "relative" }}>
                          <div
                            style={{
                              position: "absolute",
                              left: 12,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <FaCalendarAlt size={12} color="#5a8a6a" />
                          </div>
                          <input
                            type="date"
                            className="form-input"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                      </div>
                      <div style={{ gridColumn: "1/-1" }}>
                        <label
                          style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            color: "#5a8a6a",
                            display: "block",
                            marginBottom: 8,
                          }}
                        >
                          📦 ¿Lleva encomienda?
                        </label>
                        <div
                          style={{
                            display: "flex",
                            gap: 10,
                            marginBottom: encomienda === "si" ? 10 : 0,
                          }}
                        >
                          {(["no", "si"] as const).map((val) => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => {
                                setEncomienda(val);
                                if (val === "no") setDescEncomienda("");
                              }}
                              style={{
                                flex: 1,
                                padding: "11px",
                                border: "1.5px solid",
                                borderColor:
                                  encomienda === val
                                    ? val === "si"
                                      ? "#1a8c3c"
                                      : "#e53e3e"
                                    : "#c8f0d8",
                                borderRadius: 10,
                                fontFamily: "'Inter',sans-serif",
                                fontSize: 13,
                                fontWeight: 700,
                                cursor: "pointer",
                                background:
                                  encomienda === val
                                    ? val === "si"
                                      ? "#edfaf3"
                                      : "#fff5f5"
                                    : "#f9fdf6",
                                color:
                                  encomienda === val
                                    ? val === "si"
                                      ? "#0f7a2e"
                                      : "#c53030"
                                    : "#5a8a6a",
                                transition: "all .15s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 6,
                              }}
                            >
                              {val === "si" ? "✅ Sí" : "❌ No"}
                            </button>
                          ))}
                        </div>
                        {encomienda === "si" && (
                          <div style={{ position: "relative" }}>
                            <div
                              style={{
                                position: "absolute",
                                left: 12,
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              <FaBox size={12} color="#5a8a6a" />
                            </div>
                            <input
                              className="form-input"
                              placeholder="¿Qué desea enviar? Ej: ropa, documentos, alimentos..."
                              value={descEncomienda}
                              onChange={(e) =>
                                setDescEncomienda(e.target.value)
                              }
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#fef9e7",
                        border: "1.5px solid #fde68a",
                        borderRadius: 12,
                        padding: "14px 18px",
                        marginTop: 20,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#92400e",
                        }}
                      >
                        Total estimado ({pasajeros} × S/ {routePrice})
                      </span>
                      <span
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: 22,
                          fontWeight: 700,
                          color: "#e8a820",
                        }}
                      >
                        S/ {totalPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => setFormStep("dest")}
                      style={{
                        marginTop: 14,
                        background: "transparent",
                        border: "none",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#5a8a6a",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      ← Cambiar ruta
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* ── PREVIEW + BOTÓN ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Vista previa */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  border: "1.5px solid #c8f0d8",
                  padding: "28px",
                  boxShadow: "0 8px 32px rgba(26,140,60,.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "linear-gradient(135deg,#25D366,#128C7E)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaWhatsapp size={18} color="#fff" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "#0f7a2e",
                      }}
                    >
                      Vista previa
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#0d2818",
                      }}
                    >
                      Mensaje que se enviará
                    </div>
                  </div>
                </div>
                <div className="preview-box">
                  <div>
                    🚍 <strong>SOLICITUD DE RESERVA</strong>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    👤 <strong>Pasajero:</strong>{" "}
                    {nombre || (
                      <span style={{ color: "#a0c4b0", fontStyle: "italic" }}>
                        Tu nombre
                      </span>
                    )}
                  </div>
                  <div>
                    🪪 <strong>DNI:</strong>{" "}
                    {dni || (
                      <span style={{ color: "#a0c4b0", fontStyle: "italic" }}>
                        Tu DNI
                      </span>
                    )}
                  </div>
                  <div>
                    📍 <strong>Ruta:</strong> {origin} →{" "}
                    {selectedDest || (
                      <span style={{ color: "#a0c4b0", fontStyle: "italic" }}>
                        Destino
                      </span>
                    )}
                  </div>
                  <div>
                    📅 <strong>Fecha:</strong>{" "}
                    {fecha || (
                      <span style={{ color: "#a0c4b0", fontStyle: "italic" }}>
                        Fecha de viaje
                      </span>
                    )}
                  </div>
                  <div>
                    👥 <strong>Pasajeros:</strong> {pasajeros}
                  </div>
                  <div>
                    💰 <strong>Precio est.:</strong>{" "}
                    {selectedDest ? (
                      `S/ ${totalPrice} (${pasajeros} × S/ ${routePrice})`
                    ) : (
                      <span style={{ color: "#a0c4b0", fontStyle: "italic" }}>
                        —
                      </span>
                    )}
                  </div>
                  <div>
                    📦 <strong>Encomienda:</strong>{" "}
                    {encomienda === "si" ? (
                      <span style={{ color: "#0f7a2e" }}>
                        Sí
                        {descEncomienda.trim()
                          ? ` — ${descEncomienda.trim()}`
                          : ""}
                      </span>
                    ) : (
                      <span style={{ color: "#e53e3e" }}>No</span>
                    )}
                  </div>
                  <div style={{ marginTop: 8, color: "#2d5a3d" }}>
                    Por favor confirmarme disponibilidad y horarios. ¡Gracias!
                    😊
                  </div>
                </div>
              </div>

              {/* ✅ BOTÓN WHATSAPP */}
              <a
                className="wsp-main-btn"
                href={
                  canSend
                    ? `https://wa.me/51966198771?text=${buildWspMessage()}`
                    : "#"
                }
                target={canSend ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!canSend) e.preventDefault();
                }}
                style={{
                  opacity: canSend ? 1 : 0.45,
                  pointerEvents: canSend ? "auto" : "none",
                  animation: canSend ? undefined : "none",
                }}
              >
                <FaPaperPlane size={17} />
                {canSend
                  ? "Enviar reserva por WhatsApp"
                  : "Completa todos los campos"}
                {canSend && <FaArrowRight size={13} />}
              </a>

              {!canSend && (
                <div
                  style={{
                    fontSize: 12,
                    color: "#5a8a6a",
                    textAlign: "center",
                    marginTop: -8,
                  }}
                >
                  Selecciona origen, destino, nombre, DNI y fecha
                </div>
              )}

              {/* ✅ PAGO EN LÍNEA */}
              {canSend && selectedDest && (
                <>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{ flex: 1, height: 1, background: "#c8f0d8" }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#5a8a6a",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                      }}
                    >
                      o paga en línea
                    </span>
                    <div
                      style={{ flex: 1, height: 1, background: "#c8f0d8" }}
                    />
                  </div>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 16,
                      border: "1.5px solid #c8f0d8",
                      padding: "22px",
                      boxShadow: "0 8px 32px rgba(26,140,60,.08)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "#0f7a2e",
                        marginBottom: 6,
                      }}
                    >
                      💳 Pago en línea seguro
                    </div>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#5a8a6a",
                        marginBottom: 16,
                        lineHeight: 1.5,
                      }}
                    >
                      Paga tu pasaje ahora con tarjeta o Yape. Tu reserva
                      quedará confirmada al instante.
                    </p>
                    <CheckoutImplement
                      amount={totalPrice}
                      email="pasajero@gmail.com"
                      onSuccess={(data) => {
                        console.log("✅ Pago exitoso:", data);
                      }}
                      onError={(msg) => {
                        console.error("❌ Error de pago:", msg);
                      }}
                    />
                    <p
                      style={{
                        fontSize: 11,
                        color: "#a0c4b0",
                        marginTop: 12,
                        textAlign: "center",
                      }}
                    >
                      🔒 Pago seguro procesado por Culqi · PCI DSS Compliant
                    </p>
                  </div>
                </>
              )}

              {/* ¿Cómo funciona? */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  border: "1.5px solid #c8f0d8",
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "#0f7a2e",
                    marginBottom: 14,
                  }}
                >
                  ¿Cómo funciona?
                </div>
                {[
                  {
                    n: "1",
                    title: "Elige tu ruta",
                    desc: "Selecciona origen y destino. El precio se calcula solo.",
                  },
                  {
                    n: "2",
                    title: "Completa tus datos",
                    desc: "Nombre, DNI, fecha y número de pasajeros.",
                  },
                  {
                    n: "3",
                    title: "Envía el mensaje",
                    desc: "Se abre WhatsApp con todo listo. ¡Solo da click!",
                  },
                  {
                    n: "4",
                    title: "Confirmamos en minutos",
                    desc: "Te respondemos con horarios y asientos disponibles.",
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      className="step-badge"
                      style={{ width: 24, height: 24, fontSize: 11 }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#0d2818",
                        }}
                      >
                        {step.title}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#5a8a6a",
                          lineHeight: 1.5,
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
      </section>

      {/* ════ SECCIÓN PRINCIPAL ════ */}
      <section
        className="section-pad"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 48px 72px" }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #edfaf3 0%, #d4f5e0 100%)",
            border: "2px solid #a7f3d0",
            borderRadius: 24,
            padding: "40px 44px",
            marginBottom: 48,
            position: "relative",
            overflow: "hidden",
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
              background: "rgba(26,140,60,.08)",
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
              background: "rgba(232,168,32,.08)",
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
                    boxShadow: "0 6px 20px rgba(37,211,102,.35)",
                    animation: "float 3s ease-in-out infinite",
                    flexShrink: 0,
                  }}
                >
                  <FaWhatsapp size={28} color="#fff" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "#0f7a2e",
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
                      color: "#0d2818",
                    }}
                  >
                    Reserva por WhatsApp
                  </h2>
                </div>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#2d5a3d",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                La forma más rápida de reservar tu pasaje. Escríbenos con tu
                ruta, fecha y número de pasajeros y te confirmamos en minutos.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#fff",
                  borderRadius: 12,
                  padding: "14px 18px",
                  border: "1.5px solid #a7f3d0",
                  marginBottom: 22,
                  width: "fit-content",
                }}
              >
                <FaPhoneAlt size={14} color="#25D366" />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0d2818",
                    letterSpacing: ".02em",
                  }}
                >
                  (+51) 966198771
                </span>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy("51966198771")}
                >
                  {copied ? "✓ Copiado" : "Copiar"}
                </button>
              </div>
              <a
                className="wsp-main-btn"
                href="https://wa.me/51966198771?text=Hola!%20Quiero%20reservar%20un%20pasaje%20con%20Transportes%20Universo%20%F0%9F%9A%8D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} /> Escribir por WhatsApp ahora{" "}
                <FaArrowRight size={14} />
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#0f7a2e",
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
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#0d2818",
                          marginBottom: 2,
                        }}
                      >
                        {step.title}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#2d5a3d",
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

        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "#0f7a2e",
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
              color: "#0d2818",
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
          {[
            {
              cls: "fb",
              href: "https://www.facebook.com/turismobusuniverso/?locale=es_LA",
              icon: <FaFacebook size={24} color="#fff" />,
              iconBg: "linear-gradient(135deg,#1877F2,#0d5cbf)",
              iconShadow: "0 4px 14px rgba(24,119,242,.25)",
              label: "Facebook",
              labelColor: "#1877F2",
              name: "Turismo Bus Universo",
              desc: "Síguenos para estar al tanto de promociones, nuevas rutas y noticias de la empresa.",
              cta: "Ver página",
            },
            {
              cls: "ig",
              href: "https://www.instagram.com/turismobusuniverso/",
              icon: <FaInstagram size={24} color="#fff" />,
              iconBg:
                "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
              iconShadow: "0 4px 14px rgba(225,48,108,.25)",
              label: "Instagram",
              labelColor: "#E1306C",
              name: "@turismobusuniverso",
              desc: "Fotos de nuestros destinos, buses y experiencias de viajeros que ya recorrieron el norte.",
              cta: "Ver perfil",
            },
            {
              cls: "tel",
              href: "tel:+51966198771",
              icon: <FaPhoneAlt size={20} color="#fff" />,
              iconBg: "linear-gradient(135deg,#1a8c3c,#22a849)",
              iconShadow: "0 4px 14px rgba(26,140,60,.25)",
              label: "Llamada directa",
              labelColor: "#0f7a2e",
              name: "+51 966198771",
              desc: "Habla directamente con nuestro equipo para consultas, reservas y cualquier información.",
              cta: "Llamar ahora",
            },
          ].map((card) => (
            <a
              key={card.cls}
              className={`contact-card ${card.cls}`}
              href={card.href}
              target={card.cls !== "tel" ? "_blank" : undefined}
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
                    background: card.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: card.iconShadow,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: card.labelColor,
                      marginBottom: 2,
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{ fontSize: 15, fontWeight: 700, color: "#0d2818" }}
                  >
                    {card.name}
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#2d5a3d",
                  lineHeight: 1.65,
                  marginBottom: 18,
                }}
              >
                {card.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: card.labelColor,
                }}
              >
                {card.cta} <FaArrowRight size={11} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ════ DIRECCIÓN / HORARIO ════ */}
      <section
        style={{
          background: "#edfaf3",
          borderTop: "1.5px solid #c8f0d8",
          borderBottom: "1.5px solid #c8f0d8",
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
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  color: "#0f7a2e",
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
                  color: "#0d2818",
                  marginBottom: 24,
                }}
              >
                Nuestras oficinas
              </h3>
              {[
                {
                  bg: "#fee2e2",
                  icon: <FaMapMarkerAlt size={18} color="#e53e3e" />,
                  title: "Dirección",
                  content: (
                    <span>
                      Av. Nicolás de Piérola 1230
                      <br />
                      Urb. San Fernando, Trujillo — La Libertad, Perú
                    </span>
                  ),
                },
                {
                  bg: "#dbeafe",
                  icon: <FaClock size={17} color="#1a4fa0" />,
                  title: "Horario de atención",
                  content: (
                    <span>
                      Lunes a Sábado{" "}
                      <strong style={{ color: "#0d2818" }}>
                        07:00 am — 18:00 pm
                      </strong>
                      <br />
                      Domingos y Feriados{" "}
                      <strong style={{ color: "#0d2818" }}>
                        07:00 am — 17:00 pm
                      </strong>
                    </span>
                  ),
                },
                {
                  bg: "#d4f5e0",
                  icon: <FaWhatsapp size={18} color="#25D366" />,
                  title: "WhatsApp (24/7)",
                  content: (
                    <span>
                      Consultas y reservas por mensaje
                      <br />
                      <strong style={{ color: "#0d2818" }}>
                        Respuesta en menos de 10 min
                      </strong>
                    </span>
                  ),
                },
              ].map((row, i) => (
                <div key={i} className="info-row">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: row.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {row.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#0d2818",
                        marginBottom: 3,
                      }}
                    >
                      {row.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#2d5a3d",
                        lineHeight: 1.6,
                      }}
                    >
                      {row.content}
                    </div>
                  </div>
                </div>
              ))}
              <a
                className="map-btn"
                href="https://www.google.com/maps/place/Turismo+Universo+Trujillo/@-8.0973113,-79.0404205,914m"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 24, display: "inline-flex" }}
              >
                <FaMapMarkerAlt size={14} /> Ver en Google Maps{" "}
                <FaArrowRight size={12} />
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  color: "#0f7a2e",
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
                  color: "#0d2818",
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
                      border: "1.5px solid #c8f0d8",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: "#edfaf3",
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
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#0d2818",
                          marginBottom: 2,
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#2d5a3d",
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
          background:
            "linear-gradient(135deg, #edfaf3 0%, #d4f5e0 50%, #fef9e7 100%)",
          position: "relative",
          overflow: "hidden",
          borderTop: "1.5px solid #a7f3d0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 500,
            height: 200,
            background:
              "radial-gradient(ellipse, rgba(26,140,60,.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "radial-gradient(circle, #1a8c3c 1px, transparent 1px)",
            backgroundSize: "24px 24px",
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
              color: "#0d2818",
              marginBottom: 14,
            }}
          >
            ¿Listo para tu próximo viaje?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#2d5a3d",
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            Escríbenos ahora y reserva tu pasaje en minutos. Trujillo y todo el
            norte del Perú te esperan.
          </p>
          <a
            className="wsp-main-btn"
            href="https://wa.me/51966198771?text=Hola!%20Quiero%20reservar%20un%20pasaje%20con%20Transportes%20Universo%20%F0%9F%9A%8D"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: 380, margin: "0 auto" }}
          >
            <FaWhatsapp size={20} /> Reservar mi pasaje ahora{" "}
            <FaArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
