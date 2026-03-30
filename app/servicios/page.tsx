"use client";
import React from "react";

// ── Icon components ──────────────────────────────────────────────────────────

const BusIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 text-[#1A8C3C]"
  >
    <rect
      x="4"
      y="12"
      width="56"
      height="34"
      rx="4"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="10"
      y="18"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <rect
      x="30"
      y="18"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <circle cx="16" cy="52" r="5" stroke="currentColor" strokeWidth="3" />
    <circle cx="48" cy="52" r="5" stroke="currentColor" strokeWidth="3" />
    <line
      x1="4"
      y1="36"
      x2="60"
      y2="36"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const CarIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 text-[#1A8C3C]"
  >
    <path
      d="M8 32 L16 20 H48 L56 32 V44 H8 Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <rect
      x="8"
      y="32"
      width="48"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="18" cy="50" r="5" stroke="currentColor" strokeWidth="3" />
    <circle cx="46" cy="50" r="5" stroke="currentColor" strokeWidth="3" />
    <rect
      x="20"
      y="22"
      width="10"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="34"
      y="22"
      width="10"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
  >
    <path d="M12 4l-8 8h5v8h6v-8h5z" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const busServices = [
  {
    name: "SUPER FÉNIX",
    description:
      "Unidades modernas implementadas para su mayor comodidad y seguridad.",
    imgAlt: "Super Fénix bus",
    imgSrc:
      "https://via.placeholder.com/400x220/1a2e5a/ffffff?text=Super+F%C3%A9nix",
  },
  {
    name: "FÉNIX CAMA",
    description:
      "Unidades modernas de dos pisos para su mayor comodidad y seguridad.",
    imgAlt: "Fénix Cama bus",
    imgSrc:
      "https://via.placeholder.com/400x220/1a2e5a/ffffff?text=F%C3%A9nix+Cama",
  },
  {
    name: "NORMAL",
    description: "Unidades modernas, cómodas y seguras.",
    imgAlt: "Normal bus",
    imgSrc: "https://via.placeholder.com/400x220/1a2e5a/ffffff?text=Normal",
  },
];

const extraServices = [
  {
    icon: <BusIcon />,
    title: "CARGOS Y ENCOMIENDAS",
    description:
      "Servicio carguero todos los días a Lima, Chimbote, Trujillo, Chiclayo, Piura y todo el Valle. Tumbes y Cajamarca todos los domingos.",
  },
  {
    icon: <CarIcon />,
    title: "TAXI EMTRAFESA",
    description:
      "Modernas unidades para transportarlo de forma cómoda y segura. Atendemos recojo, servicios turísticos y contratos corporativos.",
  },
];

const footerServices = [
  "Libro de Reclamaciones",
  "Seguimiento de Encomiendas",
  "Comprobantes Electrónicos",
];

const footerLinks = ["Blog Fénix", "Acceso al WebMail", "Oficinas"];

// ── Main Page ─────────────────────────────────────────────────────────────────

const ServiciosPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Top banner ── */}

      <div className="h-1 bg-[#f0b800]" />

      {/* ── WhatsApp floating button ── */}
      <a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-[#25d366] text-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* ══════════════════════════════════════════════════
          SECTION 1 – NUESTROS SERVICIOS
      ══════════════════════════════════════════════════ */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-center text-3xl font-bold text-[#1A8C3C] tracking-widest mb-10">
          NUESTROS SERVICIOS
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {busServices.map((service) => (
            <div
              key={service.name}
              className="rounded-lg overflow-hidden shadow-md"
            >
              {/* Bus image */}
              <div className="h-52 bg-gray-200 overflow-hidden">
                <img
                  src={service.imgSrc}
                  alt={service.imgAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Card body */}
              <div className="bg-[#1A8C3C] text-white text-center px-6 pt-6 pb-8 flex flex-col items-center gap-3">
                <h3 className="text-base font-bold tracking-widest">
                  {service.name}
                </h3>
                <div className="w-8 h-0.5 bg-[#f0b800]" />
                <p className="text-sm leading-relaxed opacity-90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 – CARGOS / TAXI (bottom of services)
      ══════════════════════════════════════════════════ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left photo */}
          <div className="w-full md:w-80 flex-shrink-0">
            <img
              src="https://via.placeholder.com/440x440/e8eaf0/1a3a8f?text=Encomiendas"
              alt="Encomiendas staff"
              className="rounded-md w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Right service cards */}
          <div className="flex-1 flex flex-col gap-10">
            {extraServices.map((s) => (
              <div key={s.title} className="flex items-start gap-5">
                {/* Icon box */}
                <div className="border-2 border-[#0F5C28] rounded p-4 flex-shrink-0 flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A8C3C] tracking-widest mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer className="bg-gradient-to-b from-[#1A8C3C] to-[#22A849] text-white pt-12 pb-8 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Servicios column */}
          <div>
            <h4 className="text-base font-bold tracking-widest mb-3">
              SERVICIOS
            </h4>
            <div className="w-8 h-0.5 bg-[#f0b800] mb-5" />
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:underline opacity-90 hover:opacity-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces column */}
          <div>
            <h4 className="text-base font-bold tracking-widest mb-3">
              ENLACES DE INTERÉS
            </h4>
            <div className="w-8 h-0.5 bg-[#f0b800] mb-5" />
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:underline opacity-90 hover:opacity-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-4 bg-gray-800 text-white p-3 rounded shadow-lg hover:bg-gray-700 transition-colors z-50"
        aria-label="Ir arriba"
      >
        <ArrowUp />
      </button>
    </div>
  );
};

export default ServiciosPage;
