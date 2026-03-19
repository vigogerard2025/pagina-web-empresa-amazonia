"use client";

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
} from "react-icons/fa";

// ── Precios reales extraídos de manifiestos (Febrero–Marzo 2026) ─────────────
const CITY_PRICES: Record<string, number> = {
  // La Libertad
  Trujillo: 0,
  Chao: 20,
  Viru: 25,
  Paijan: 15,
  Pacasmayo: 20,
  Chepen: 30,
  Pacanguilla: 20,
  "Ciudad De Dios": 35,
  Chimbote: 40,
  // Lambayeque
  Chiclayo: 30,
  Olmos: 60,
  Motupe: 60,
  Jayanca: 60,
  Lambayeque: 50,
  Illimo: 55,
  Hualapampa: 60,
  // Amazonas
  Chamaya: 60,
  Pucara: 60,
  "Las Juntas": 60,
  Jaen: 70,
  Bagua: 80,
  "Pedro Ruiz": 80,
  Pomacochas: 80,
  "Buenos Aires": 80,
  "Aguas Verdes": 100,
  // San Martín
  Naranjos: 80,
  Naranjillo: 80,
  "Nueva Cajamarca": 80,
  "Segunda Jerusalen": 70,
  Rioja: 90,
  Calzada: 90,
  Moyobamba: 90,
  Tabalosos: 100,
  Tarapoto: 100,
  Alianza: 100,
  Picota: 110,
  "San Hilarion": 120,
  Bellavista: 120,
  Sacanche: 120,
  Saposoa: 120,
  Juanjui: 130,
  "Pampa Hermosa": 130,
  Yurimaguas: 130,
  // Rutas especiales
  "Km.81": 60,
  Progreso: 70,
  Pacayzapa: 90,
  Chiple: 60,
};

// ── Precios directos por ruta (origen → destino) desde los manifiestos ───────
const DIRECT_PRICES: Record<string, Record<string, number>> = {
  Trujillo: {
    Chao: 20,
    Viru: 25,
    Paijan: 15,
    Pacasmayo: 20,
    Chepen: 30,
    Pacanguilla: 20,
    "Ciudad De Dios": 35,
    Chiclayo: 30,
    Bagua: 80,
    Bellavista: 120,
    Chamaya: 60,
    Jaen: 70,
    Juanjui: 130,
    Moyobamba: 90,
    Naranjillo: 80,
    Naranjos: 80,
    "Nueva Cajamarca": 80,
    Olmos: 60,
    "Pedro Ruiz": 80,
    Picota: 110,
    Pomacochas: 80,
    Rioja: 90,
    Sacanche: 120,
    "San Hilarion": 120,
    Saposoa: 120,
    "Segunda Jerusalen": 70,
    Tabalosos: 100,
    Tarapoto: 100,
    Yurimaguas: 130,
    Alianza: 100,
    "Km.81": 60,
    Pacayzapa: 90,
    "Pampa Hermosa": 130,
  },
  Chao: {
    Bagua: 90,
    Bellavista: 140,
    Chamaya: 90,
    Chiclayo: 50,
    Jaen: 90,
    Juanjui: 150,
    Moyobamba: 110,
    Naranjillo: 100,
    Naranjos: 100,
    "Nueva Cajamarca": 100,
    "Pedro Ruiz": 90,
    Picota: 140,
    Pomacochas: 90,
    Rioja: 110,
    Saposoa: 150,
    Tabalosos: 120,
    Tarapoto: 120,
    Yurimaguas: 160,
    "Pampa Hermosa": 150,
    "Aguas Verdes": 100,
  },
  Viru: {
    Bagua: 90,
    Chiclayo: 50,
    Juanjui: 150,
    Moyobamba: 100,
    "Nueva Cajamarca": 100,
    Olmos: 80,
    Pomacochas: 90,
    Sacanche: 140,
    "Segunda Jerusalen": 100,
    Tarapoto: 120,
    Yurimaguas: 150,
    Naranjos: 100,
  },
  Paijan: {
    Bellavista: 110,
    Juanjui: 120,
    Moyobamba: 80,
    "Nueva Cajamarca": 80,
    Rioja: 80,
    Tarapoto: 90,
  },
  Pacasmayo: {
    Bagua: 70,
    Jaen: 70,
    Juanjui: 130,
    Moyobamba: 90,
    Naranjos: 80,
    "Nueva Cajamarca": 80,
    Rioja: 90,
    Saposoa: 130,
    Tarapoto: 100,
    Yurimaguas: 130,
  },
  Chepen: {
    Bellavista: 100,
    Juanjui: 100,
    Moyobamba: 70,
    Naranjillo: 70,
    Naranjos: 60,
    "Nueva Cajamarca": 65,
    Rioja: 70,
    Sacanche: 100,
    "Segunda Jerusalen": 70,
    Tarapoto: 85,
  },
  Pacanguilla: {
    Bagua: 50,
    Bellavista: 100,
    Chamaya: 50,
    Juanjui: 100,
    Moyobamba: 70,
    Naranjillo: 60,
    Naranjos: 60,
    "Nueva Cajamarca": 70,
    Picota: 90,
    Pomacochas: 60,
    "Pedro Ruiz": 50,
    Progreso: 70,
    Rioja: 70,
    "San Hilarion": 90,
    Tarapoto: 85,
    Yurimaguas: 120,
    Pacayzapa: 75,
  },
  Chiclayo: {
    Bagua: 30,
    Bellavista: 80,
    "Buenos Aires": 60,
    Chamaya: 25,
    Chiple: 30,
    Hualapampa: 25,
    Juanjui: 90,
    Jaen: 40,
    "Las Juntas": 30,
    Moyobamba: 50,
    Naranjillo: 50,
    Naranjos: 50,
    "Nueva Cajamarca": 50,
    "Pedro Ruiz": 40,
    Picota: 80,
    Pomacochas: 40,
    Pucara: 30,
    Rioja: 60,
    Sacanche: 80,
    "San Hilarion": 80,
    "Segunda Jerusalen": 50,
    Tabalosos: 60,
    Tarapoto: 60,
    Yurimaguas: 90,
    "Aguas Verdes": 50,
    Progreso: 50,
  },
  Olmos: {
    Bellavista: 100,
    Juanjui: 95,
    Moyobamba: 70,
    Naranjos: 60,
    "Nueva Cajamarca": 60,
    Picota: 90,
    Tarapoto: 80,
  },
  Bagua: {
    Bellavista: 60,
    Chepen: 50,
    Chiclayo: 30,
    Juanjui: 60,
    Moyobamba: 40,
    Naranjillo: 40,
    "Nueva Cajamarca": 40,
    Olmos: 30,
    Picota: 60,
    Rioja: 40,
    Sacanche: 60,
    "San Hilarion": 60,
    Tarapoto: 50,
    Trujillo: 55,
  },
  "Pedro Ruiz": {
    Chepen: 40,
    Chiclayo: 40,
    Motupe: 40,
    Pacanguilla: 60,
    Trujillo: 70,
  },
  Moyobamba: {
    Bagua: 50,
    Chao: 110,
    Chepen: 80,
    Chiclayo: 50,
    Chiple: 50,
    "Ciudad De Dios": 80,
    Hualapampa: 50,
    Jayanca: 50,
    Lambayeque: 50,
    Motupe: 50,
    Olmos: 50,
    Pacanguilla: 80,
    Pacasmayo: 80,
    Paijan: 90,
    "Pedro Ruiz": 30,
    Pucara: 50,
    Trujillo: 80,
  },
  "Nueva Cajamarca": {
    Bagua: 40,
    Chao: 110,
    Chepen: 70,
    Chiclayo: 50,
    Chiple: 50,
    "Ciudad De Dios": 80,
    Hualapampa: 50,
    Lambayeque: 50,
    Motupe: 50,
    Olmos: 50,
    Pacanguilla: 70,
    Pacasmayo: 80,
    Pucara: 50,
    Trujillo: 80,
  },
  Rioja: {
    Chao: 110,
    Chepen: 70,
    Chiclayo: 60,
    "Ciudad De Dios": 80,
    Pacanguilla: 70,
    Trujillo: 80,
  },
  Tarapoto: {
    Bagua: 50,
    Chamaya: 50,
    Chao: 120,
    Chepen: 80,
    Chiclayo: 60,
    Chimbote: 130,
    "Ciudad De Dios": 80,
    Hualapampa: 60,
    Jaen: 60,
    Jayanca: 70,
    Lambayeque: 60,
    Motupe: 60,
    Olmos: 60,
    Pacanguilla: 80,
    Pacasmayo: 90,
    Paijan: 90,
    "Pedro Ruiz": 50,
    Pomacochas: 45,
    Pucara: 60,
    Trujillo: 90,
  },
  Juanjui: {
    Bagua: 60,
    Chepen: 100,
    Chiclayo: 90,
    Chimbote: 150,
    Chiple: 70,
    "Ciudad De Dios": 110,
    Hualapampa: 70,
    Illimo: 90,
    Jaen: 70,
    Jayanca: 90,
    Lambayeque: 90,
    Motupe: 90,
    Naranjos: 40,
    "Nueva Cajamarca": 40,
    Olmos: 90,
    Pacasmayo: 100,
    "Pedro Ruiz": 60,
    Pucara: 70,
    Trujillo: 110,
  },
  Bellavista: {
    Bagua: 60,
    Chepen: 100,
    Chiclayo: 80,
    Chiple: 80,
    "Ciudad De Dios": 100,
    Hualapampa: 80,
    Jaen: 70,
    Jayanca: 80,
    Motupe: 80,
    Olmos: 90,
    Pacanguilla: 90,
    Pacasmayo: 100,
    "Pedro Ruiz": 60,
    Pucara: 70,
    "Segunda Jerusalen": 40,
    Trujillo: 110,
  },
  Picota: {
    Bagua: 60,
    Chepen: 110,
    Chiclayo: 90,
    Hualapampa: 80,
    Jaen: 80,
    "Las Juntas": 80,
    Motupe: 90,
    Olmos: 90,
    Pacanguilla: 100,
    Pucara: 80,
    Trujillo: 120,
  },
  "San Hilarion": {
    Bagua: 60,
    Chepen: 90,
    Chiclayo: 90,
    "Ciudad De Dios": 100,
    Motupe: 90,
    Trujillo: 105,
  },
  Sacanche: {
    Bagua: 70,
    Chao: 140,
    Chiclayo: 100,
    Trujillo: 120,
  },
  Saposoa: {
    Bagua: 80,
    Chiclayo: 100,
    Chimbote: 150,
    Jaen: 90,
    Moyobamba: 50,
    Trujillo: 120,
  },
  "Segunda Jerusalen": {
    Chao: 110,
    Chepen: 80,
    "Ciudad De Dios": 80,
    Hualapampa: 60,
    Olmos: 60,
    Paijan: 80,
    Trujillo: 80,
  },
  Tabalosos: {
    Chiclayo: 70,
    "Ciudad De Dios": 80,
    Trujillo: 90,
  },
  Yurimaguas: {
    Bagua: 80,
    Chao: 150,
    Chiclayo: 100,
    Olmos: 100,
    Trujillo: 120,
  },
  Naranjillo: {
    Chao: 100,
    Pacanguilla: 80,
    Trujillo: 80,
  },
  Naranjos: {
    Chiclayo: 60,
    Trujillo: 80,
  },
  "Buenos Aires": {
    Chiclayo: 60,
    Trujillo: 80,
  },
};

// Ciudades CON AGENCIA OFICIAL (sólo estas pueden ser origen)
const OFFICE_CITIES = [
  "Trujillo",
  "Chimbote",
  "Chao",
  "Viru",
  "Paijan",
  "Pacasmayo",
  "Chepen",
  "Pacanguilla",
  "Ciudad De Dios",
  "Chiclayo",
  "Olmos",
  "Bagua",
  "Pedro Ruiz",
  "Nueva Cajamarca",
  "Rioja",
  "Moyobamba",
  "Tabalosos",
  "Tarapoto",
  "San Hilarion",
  "Bellavista",
  "Sacanche",
  "Saposoa",
  "Juanjui",
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

  // Formulario
  const [origin, setOrigin] = useState("Trujillo");
  const [selectedDest, setSelectedDest] = useState<string | null>(null);
  const [destSearch, setDestSearch] = useState("");
  const [showDestList, setShowDestList] = useState(false);
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [fecha, setFecha] = useState("");
  const [pasajeros, setPasajeros] = useState("1");
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
      ``,
      `Por favor confirmarme disponibilidad y horarios. ¡Gracias! 😊`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const canSend =
    nombre.trim() && dni.trim() && fecha && selectedDest && pasajeros && origin;

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
        @keyframes dropIn    { from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);} }

        .animate-up { animation: slideUp .65s ease forwards; }

        .nav-link-mobile {
          color: rgba(255,255,255,.88); text-decoration: none; font-size: 15px;
          font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
          padding: 14px 24px; display: flex; align-items: center; gap: 6px;
          border-bottom: 1px solid rgba(255,255,255,.06);
          transition: background .2s, color .2s;
        }
        .nav-link-mobile:hover { background: rgba(255,255,255,.05); color: #f5c518; }

        .mobile-menu {
          display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: #0d1117; z-index: 999; flex-direction: column;
          animation: slideDown .25s ease forwards;
        }
        .mobile-menu.open { display: flex; }

        .contact-card {
          background: #fff; border-radius: 20px; padding: 32px 28px;
          border: 1.5px solid #e5e7eb;
          transition: transform .2s, box-shadow .2s, border-color .2s;
          cursor: pointer; text-decoration: none; color: inherit;
          display: flex; flex-direction: column; gap: 0;
        }
        .contact-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,.10); }
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
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
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
          transition: opacity .2s, transform .1s; text-decoration: none;
        }
        .map-btn:hover { opacity: .88; transform: translateY(-1px); }

        /* Formulario */
        .form-input {
          width: 100%; border: 1.5px solid #e5e7eb; border-radius: 10px;
          padding: 12px 14px 12px 38px; font-family: 'Inter', sans-serif;
          font-size: 14px; font-weight: 500; color: #111;
          background: #fff; outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .form-input:focus { border-color: #1a8c3c; box-shadow: 0 0 0 3px rgba(26,140,60,.10); }
        .form-input::placeholder { color: rgba(0,0,0,.35); font-weight: 400; }

        .dest-item {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 14px; cursor: pointer; border-radius: 8px;
          transition: background .15s;
          font-family: 'Inter', sans-serif; font-size: 13px;
        }
        .dest-item:hover { background: #f0fdf4; }
        .dest-item.selected { background: #dcfce7; }

        .dest-dropdown {
          position: absolute; top: calc(100% + 6px); left: 0; right: 0;
          background: #fff; border: 1.5px solid #e5e7eb; border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0,0,0,.12);
          z-index: 50; max-height: 260px; overflow-y: auto;
          animation: dropIn .2s ease forwards;
          padding: 6px;
        }
        .dest-dropdown::-webkit-scrollbar { width: 4px; }
        .dest-dropdown::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 2px; }

        .form-step-tab {
          flex: 1; padding: 10px; text-align: center;
          font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: .06em; text-transform: uppercase;
          border: none; cursor: pointer; transition: background .2s, color .2s;
        }

        .preview-box {
          background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 12px;
          padding: 16px 18px; font-family: 'Inter', sans-serif; font-size: 13px;
          line-height: 1.7; color: #1a1a1a;
        }
        .preview-box strong { color: #166534; }

        .city-chip {
          display: inline-flex; justify-content: space-between; align-items: center;
          padding: 8px 10px; border-radius: 8px; cursor: pointer;
          border: 1.5px solid #e5e7eb; background: #fafafa;
          transition: all .15s; font-family: 'Inter',sans-serif; font-size: 12px;
        }
        .city-chip:hover { border-color: #86efac; }
        .city-chip.selected { border-color: #1a8c3c; background: #f0fdf4; }

        @media (max-width: 768px) {
          .hero-pad { padding: 48px 20px 56px !important; }
          .hero-title { font-size: clamp(28px,7vw,40px) !important; }
          .main-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .section-pad { padding: 40px 16px !important; }
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; padding: 24px 16px !important; gap: 20px !important; }
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
            href="https://wa.me/51966198771"
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
            <FaWhatsapp size={16} color="#25D366" /> (+51) 966198771
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
      <div style={{ display: "flex", height: 5 }}>
        <div style={{ flex: 2, background: "#1a8c3c" }} />
        <div style={{ flex: 1, background: "#d42b2b" }} />
        <div style={{ flex: 1, background: "#1a4fa0" }} />
        <div style={{ flex: 1, background: "#f5c518" }} />
        <div style={{ flex: 2, background: "#1a8c3c" }} />
      </div>

      {/* ════ FORMULARIO DE RESERVA ════ */}
      <section
        style={{
          background: "linear-gradient(180deg,#f0fdf4 0%,#fff 100%)",
          borderBottom: "1px solid #e5e7eb",
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
                background: "#dcfce7",
                border: "1px solid #86efac",
                borderRadius: 20,
                padding: "5px 16px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".12em",
                color: "#166534",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <FaWhatsapp size={12} color="#25D366" /> Reserva rápida · 650+
              rutas disponibles
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(24px,4vw,34px)",
                fontWeight: 700,
                color: "#111",
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
                fontFamily: "'Inter',sans-serif",
                fontSize: 14,
                color: "rgba(0,0,0,.5)",
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
            {/* ── COLUMNA IZQUIERDA: Formulario ── */}
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                border: "1.5px solid #e5e7eb",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  background: "#f9fafb",
                  borderBottom: "1.5px solid #e5e7eb",
                }}
              >
                <button
                  className="form-step-tab"
                  onClick={() => setFormStep("dest")}
                  style={{
                    background: formStep === "dest" ? "#fff" : "transparent",
                    color: formStep === "dest" ? "#1a8c3c" : "rgba(0,0,0,.4)",
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
                    color: formStep === "data" ? "#1a8c3c" : "rgba(0,0,0,.4)",
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
                          color: "rgba(0,0,0,.45)",
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
                            background: "#f0fdf4",
                            border: "1.5px solid #86efac",
                            borderRadius: 8,
                            padding: "6px 14px",
                            fontFamily: "'Inter',sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#166534",
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
                          color: "rgba(0,0,0,.45)",
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
                                  fontFamily: "'Inter',sans-serif",
                                  fontSize: 13,
                                  color: "rgba(0,0,0,.4)",
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
                                    style={{ fontWeight: 600, color: "#111" }}
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
                        color: "rgba(0,0,0,.4)",
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
                              color: "#111",
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
                          background: "linear-gradient(135deg,#1a8c3c,#0f5c28)",
                          color: "#fff",
                          border: "none",
                          borderRadius: 12,
                          padding: "13px",
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: ".06em",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          boxShadow: "0 4px 16px rgba(26,140,60,.3)",
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
                          background: "#f0fdf4",
                          border: "1.5px solid #86efac",
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
                              color: "#166534",
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
                              color: "#111",
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
                          <div
                            style={{
                              fontFamily: "'Inter',sans-serif",
                              fontSize: 10,
                              color: "rgba(0,0,0,.4)",
                            }}
                          >
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
                            color: "rgba(0,0,0,.45)",
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
                            <FaUser size={12} color="#aaa" />
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
                            color: "rgba(0,0,0,.45)",
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
                            <FaIdCard size={12} color="#aaa" />
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
                            color: "rgba(0,0,0,.45)",
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
                            <FaUsers size={12} color="#aaa" />
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
                            color: "rgba(0,0,0,.45)",
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
                            <FaCalendarAlt size={12} color="#aaa" />
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
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#fffbeb",
                        border: "1.5px solid #fde68a",
                        borderRadius: 12,
                        padding: "14px 18px",
                        marginTop: 20,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Inter',sans-serif",
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
                          color: "#d4a017",
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
                        color: "rgba(0,0,0,.4)",
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

            {/* ── COLUMNA DERECHA: Preview + Botón ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  border: "1.5px solid #e5e7eb",
                  padding: "28px",
                  boxShadow: "0 8px 32px rgba(0,0,0,.06)",
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
                        fontFamily: "'Inter',sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "#166534",
                      }}
                    >
                      Vista previa
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#111",
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
                      <span style={{ color: "#aaa", fontStyle: "italic" }}>
                        Tu nombre
                      </span>
                    )}
                  </div>
                  <div>
                    🪪 <strong>DNI:</strong>{" "}
                    {dni || (
                      <span style={{ color: "#aaa", fontStyle: "italic" }}>
                        Tu DNI
                      </span>
                    )}
                  </div>
                  <div>
                    📍 <strong>Ruta:</strong> {origin} →{" "}
                    {selectedDest || (
                      <span style={{ color: "#aaa", fontStyle: "italic" }}>
                        Destino
                      </span>
                    )}
                  </div>
                  <div>
                    📅 <strong>Fecha:</strong>{" "}
                    {fecha || (
                      <span style={{ color: "#aaa", fontStyle: "italic" }}>
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
                      <span style={{ color: "#aaa", fontStyle: "italic" }}>
                        —
                      </span>
                    )}
                  </div>
                  <div style={{ marginTop: 8, color: "#555" }}>
                    Por favor confirmarme disponibilidad y horarios. ¡Gracias!
                    😊
                  </div>
                </div>
              </div>

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
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 12,
                    color: "rgba(0,0,0,.4)",
                    textAlign: "center",
                    marginTop: -8,
                  }}
                >
                  Selecciona origen, destino, nombre, DNI y fecha
                </div>
              )}

              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  border: "1.5px solid #e5e7eb",
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "#166534",
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
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#111",
                        }}
                      >
                        {step.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 11,
                          color: "rgba(0,0,0,.45)",
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
            background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
            border: "2px solid #86efac",
            borderRadius: 24,
            padding: "40px 44px",
            marginBottom: 48,
            position: "relative",
            overflow: "hidden",
          }}
        >
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
          <a className="contact-card tel" href="tel:+51966198771">
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
                  +51 966198771
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
                    Av. Nicolás de Piérola 1230
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
                    Lunes a Sabado
                    <br />
                    <span style={{ fontWeight: 700, color: "#111" }}>
                      07:00 am — 18:00 pm
                    </span>
                    <br />
                    Domingos y Feriados
                    <br />
                    <span style={{ fontWeight: 700, color: "#111" }}>
                      07:00 am — 17:00 pm
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
                    desc: "Más de 650 rutas activas al norte del Perú desde cualquier ciudad.",
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
