"use client";
import { useState } from "react";
export default function AgenciasPage() {
  const agencias = [
    {
      ciudad: "Trujillo",
      region: "La Libertad",
      principal: true,
      dir: "Av. Nicolás de Piérola N° 1230 Urb. San Fernando",
      tel: "999 333 419",
      color: "#1a4fa0",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Plaza_de_Armas_de_Trujillo_%28Per%C3%BA%29.jpg/800px-Plaza_de_Armas_de_Trujillo_%28Per%C3%BA%29.jpg",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-8.097581,-79.0376331",
    },
    {
      ciudad: "Chimbote",
      region: "Áncash",
      dir: 'Terminal Terrestre "El Chimbador" - Módulo Q-17',
      tel: "993 767 433",
      color: "#0891b2",
      foto: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      // lat:-9.1047793 lng:-78.5578073
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-9.1047793,-78.5578073&query_place_id=ChIJpcZlVwSEq5ERVnf4olojnNk",
    },
    {
      ciudad: "Paijàn",
      region: "La Libertad",
      dir: "Av. Panamericana Norte 657",
      tel: "998 391 250",
      color: "#d97706",
      foto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      // lat:-7.7339852 lng:-79.3008360
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-7.7339852,-79.3008360&query_place_id=ChIJ5Z7jLQZUrZERp6Zitj1gqWo",
    },
    {
      ciudad: "Pacasmayo",
      region: "La Libertad",
      dir: "Terrapuerto Pacasmayo Stand N°9",
      tel: "980 947 832 / 981 911 766",
      color: "#0284c7",
      foto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      // lat:-7.3969310 lng:-79.5672956
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-7.3969310,-79.5672956&query_place_id=ChIJ3weMpiNHTZARC4lCTFYlaM0",
    },
    {
      ciudad: "Chiclayo",
      region: "Lambayeque",
      dir: "Panamericana Norte Km 774 Terminal Gasela",
      tel: "944 671 146 / 979 695 508",
      color: "#7c3aed",
      foto: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
      // lat:-6.7558086 lng:-79.8636393
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-6.7558086,-79.8636393&query_place_id=ChIJy-Cq-PHuTJARMwz2xDWyxT4",
    },
    {
      ciudad: "Bagua Grande",
      region: "Amazonas",
      dir: "Av. Chachapoyas 2840 Terminal Leiva",
      tel: "959 544 152",
      color: "#16a34a",
      foto: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
      // lat:-5.7576547 lng:-78.4357215
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-5.7576547,-78.4357215&query_place_id=ChIJAQAAAL1PtJEReM5cLxDn4M4",
    },
    {
      ciudad: "Pedro Ruiz",
      region: "Amazonas",
      dir: "Carr. Fernando Belaúnde Terry S/N",
      tel: "982 772 303 / 922 210 161",
      color: "#65a30d",
      foto: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
      // lat:-5.9386330 lng:-77.9736189
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-5.9386330,-77.9736189",
    },
    {
      ciudad: "N. Cajamarca",
      region: "San Martín",
      dir: "Av. Cajamarca Norte 456 (Terminal Molina Stand N°8)",
      tel: "931 703 571",
      color: "#b45309",
      foto: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
      // lat:-5.9281701 lng:-77.3154473
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-5.9281701,-77.3154473&query_place_id=ChIJg_img47dtpERHheY6FsSZBM",
    },
    {
      ciudad: "Rioja",
      region: "San Martín",
      dir: "Av. Campo Ferial #100 Term. Terrestre Std. 8 (costado de TSP)",
      tel: "941 583 051",
      color: "#dc2626",
      foto: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80",
      // lat:-6.05516 lng:-77.1659029
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-6.05516,-77.1659029&query_place_id=ChIJy2uad7wnt5ERhSqP2QN1MUY",
    },
    {
      ciudad: "Moyobamba",
      region: "San Martín",
      dir: "Av. Miguel Grau 555 Term. Terrestre municipal",
      tel: "956 078 715 / 995 454 537",
      color: "#0891b2",
      foto: "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?w=600&q=80",
      // lat:-6.0451601 lng:-76.9704046
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-6.0451601,-76.9704046&query_place_id=ChIJ885BOxA7t5ERshT5E5fH-1E",
    },
    {
      ciudad: "Tarapoto",
      region: "San Martín",
      dir: "Jr. Primero de Mayo Cdr. 3 Terminal Morales",
      tel: "995 454 609",
      color: "#16a34a",
      foto: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      // lat:-6.479374 lng:-76.3836955 (Morales - Tarapoto)
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-6.479374,-76.3836955",
    },
    {
      ciudad: "San Hilarion",
      region: "San Martín",
      dir: "Carr. Fernando Belaúnde Terry S/N",
      tel: "998 031 404",
      color: "#15803d",
      foto: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
      // lat:-6.9993336 lng:-76.4430630
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-6.9993336,-76.4430630",
    },
    {
      ciudad: "Bellavista",
      region: "San Martín",
      dir: "Av. Lima con Jr. Junín Tercer Piso",
      tel: "942 135 150",
      color: "#7c3aed",
      foto: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80",
      // lat:-7.0594 lng:-76.5801 (Bellavista San Martin)
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-7.0594,-76.5801",
    },
    {
      ciudad: "Sacanche",
      region: "San Martín",
      dir: "Carr. Fernando Belaúnde Terry S/N Km. 737",
      tel: "927 113 725 / 972 080 038",
      color: "#d97706",
      foto: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&q=80",
      // lat:-7.0807418 lng:-76.7394833 (Carr Belaunde - Sacanche zona)
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-7.0807418,-76.7394833",
    },
    {
      ciudad: "Juanjuí",
      region: "San Martín",
      dir: "Jr. Arica 103",
      tel: "950 641 480 / 988 394 622",
      color: "#0284c7",
      foto: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80",
      // lat:-7.1821376 lng:-76.7353093
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=-7.1821376,-76.7353093&query_place_id=ChIJh_2wQ4prsJERRbPjz_lM1t0",
    },
  ];

  const MapIcon = () => (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const principal = agencias.find((a) => a.principal)!;
  const resto = agencias.filter((a) => !a.principal);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .ag-page { font-family:'DM Sans',sans-serif; background:#f8f6f1; min-height:100vh; color:#1a1a1a; }

        /* Hero */
        .ag-hero { background:#0d1117; position:relative; overflow:hidden; padding:72px 48px 60px; text-align:center; }
        .ag-hero::before { content:''; position:absolute; inset:0; background:repeating-linear-gradient(-45deg,transparent,transparent 18px,rgba(26,140,60,.04) 18px,rgba(26,140,60,.04) 19px); }
        .ag-hero-strip { display:flex; height:4px; border-radius:2px; overflow:hidden; max-width:160px; margin:0 auto 36px; }
        .ag-hero h1 { font-family:'Crimson Pro',serif; font-size:clamp(32px,5vw,52px); font-weight:700; color:#fff; letter-spacing:-.02em; line-height:1.15; position:relative; margin-bottom:14px; }
        .ag-hero h1 em { font-style:italic; color:#f5c518; }
        .ag-hero p { color:rgba(255,255,255,.5); font-size:14px; position:relative; letter-spacing:.04em; text-transform:uppercase; font-weight:500; }
        .ag-hero-count { display:inline-flex; align-items:center; gap:8px; background:rgba(26,140,60,.15); border:1px solid rgba(26,140,60,.3); border-radius:20px; padding:6px 16px; margin-top:20px; font-size:13px; font-weight:600; color:#4ade80; position:relative; }
        .ag-hero-count span { width:7px; height:7px; background:#4ade80; border-radius:50%; display:inline-block; animation:agPulse 1.5s ease-in-out infinite; }
        @keyframes agPulse { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.5);} }

        /* Body */
        .ag-body { max-width:1280px; margin:0 auto; padding:56px 24px 80px; }
        .ag-section-label { font-size:10px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#1a8c3c; margin-bottom:28px; display:flex; align-items:center; gap:10px; }
        .ag-section-label::after { content:''; flex:1; height:1px; background:#d4d0c8; }

        /* Card principal */
        .ag-card-principal { background:#0d1117; border-radius:20px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,.2); margin-bottom:48px; display:grid; grid-template-columns:1fr 1fr; }
        .ag-card-principal-img { position:relative; overflow:hidden; min-height:280px; }
        .ag-card-principal-img img { width:100%; height:100%; object-fit:cover; transition:transform .5s ease; }
        .ag-card-principal:hover .ag-card-principal-img img { transform:scale(1.05); }
        .ag-card-principal-img::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(13,17,23,.4),transparent); }
        .ag-card-principal-body { padding:44px 48px; display:flex; flex-direction:column; justify-content:center; gap:18px; }
        .ag-badge-sede { display:inline-flex; align-items:center; gap:6px; background:linear-gradient(135deg,#1a8c3c,#0f5c28); color:#fff; font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; padding:4px 12px; border-radius:20px; width:fit-content; }
        .ag-principal-ciudad { font-family:'Crimson Pro',serif; font-size:38px; font-weight:700; color:#fff; letter-spacing:-.02em; line-height:1.1; }
        .ag-principal-ciudad em { font-style:italic; color:#f5c518; }
        .ag-principal-region { font-size:11px; color:rgba(255,255,255,.4); font-weight:600; text-transform:uppercase; letter-spacing:.1em; margin-bottom:4px; }
        .ag-info-line { display:flex; align-items:flex-start; gap:10px; font-size:13.5px; color:rgba(255,255,255,.7); line-height:1.55; }
        .ag-maps-btn-dark { display:inline-flex; align-items:center; gap:8px; background:rgba(26,140,60,.15); border:1.5px solid rgba(26,140,60,.4); color:#4ade80; text-decoration:none; padding:11px 22px; border-radius:10px; font-size:13px; font-weight:700; letter-spacing:.04em; transition:background .2s,transform .15s; width:fit-content; margin-top:4px; }
        .ag-maps-btn-dark:hover { background:rgba(26,140,60,.28); transform:translateY(-1px); }

        /* Grid cards */
        .ag-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(270px,1fr)); gap:18px; }
        .ag-card { background:#fff; border-radius:16px; overflow:hidden; border:1.5px solid #e8e4db; box-shadow:0 2px 12px rgba(0,0,0,.06); transition:transform .2s,box-shadow .2s,border-color .2s; }
        .ag-card:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(0,0,0,.12); border-color:#c8c4bb; }
        .ag-card-img { position:relative; height:148px; overflow:hidden; }
        .ag-card-img img { width:100%; height:100%; object-fit:cover; transition:transform .4s ease; }
        .ag-card:hover .ag-card-img img { transform:scale(1.08); }
        .ag-card-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.58) 0%,transparent 60%); }
        .ag-card-region-tag { position:absolute; top:10px; right:10px; background:rgba(0,0,0,.45); backdrop-filter:blur(6px); border-radius:6px; padding:3px 8px; font-size:10px; font-weight:600; color:rgba(255,255,255,.85); letter-spacing:.06em; text-transform:uppercase; }
        .ag-card-city-badge { position:absolute; bottom:12px; left:14px; display:flex; align-items:center; gap:6px; }
        .ag-card-city-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; box-shadow:0 0 0 2px rgba(255,255,255,.3); }
        .ag-card-city-name { font-family:'Crimson Pro',serif; font-size:20px; font-weight:700; color:#fff; text-shadow:0 1px 8px rgba(0,0,0,.5); }
        .ag-card-body { padding:16px 18px 18px; display:flex; flex-direction:column; gap:8px; }
        .ag-card-dir { font-size:12.5px; color:#555; line-height:1.55; display:flex; gap:7px; align-items:flex-start; }
        .ag-card-tel { font-size:12.5px; color:#15803d; font-weight:700; display:flex; gap:7px; align-items:center; }
        .ag-card-maps { display:flex; align-items:center; justify-content:center; gap:7px; background:#f0fdf4; border:1.5px solid #bbf7d0; color:#166534; text-decoration:none; padding:9px 14px; border-radius:10px; font-size:12px; font-weight:700; letter-spacing:.04em; transition:background .2s,transform .1s; width:100%; margin-top:4px; }
        .ag-card-maps:hover { background:#dcfce7; transform:translateY(-1px); }

        /* Responsive */
        @media (max-width:860px) { .ag-card-principal{grid-template-columns:1fr;} .ag-card-principal-img{min-height:200px;} .ag-card-principal-body{padding:28px 24px;} .ag-hero{padding:56px 24px 44px;} }
        @media (max-width:600px) { .ag-body{padding:36px 16px 60px;} .ag-grid{grid-template-columns:1fr;} }
      `}</style>

      <div className="ag-page">
        {/* Hero */}
        <div className="ag-hero">
          <div className="ag-hero-strip">
            <div style={{ flex: 2, background: "#1a8c3c" }} />
            <div style={{ flex: 1, background: "#d42b2b" }} />
            <div style={{ flex: 1, background: "#1a4fa0" }} />
            <div style={{ flex: 1, background: "#f5c518" }} />
          </div>
          <h1>
            Nuestras <em>Agencias</em>
            <br />a Nivel Nacional
          </h1>
          <p>Transportes Universo S.A.C. · Puntos de atención</p>
          <div>
            <div className="ag-hero-count">
              <span />
              15 oficinas activas en todo el norte del Perú
            </div>
          </div>
        </div>

        <div className="ag-body">
          {/* Sede principal */}
          <div className="ag-section-label">Sede principal</div>
          <div className="ag-card-principal">
            <div className="ag-card-principal-img">
              <img
                src={principal.foto}
                alt="Trujillo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80";
                }}
              />
            </div>
            <div className="ag-card-principal-body">
              <div className="ag-badge-sede">⭐ Sede Principal</div>
              <div>
                <div className="ag-principal-region">{principal.region}</div>
                <div className="ag-principal-ciudad">
                  Trujillo, <em>Perú</em>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <div className="ag-info-line">
                  <span>📍</span>
                  <span>{principal.dir}</span>
                </div>
                <div className="ag-info-line">
                  <span>📞</span>
                  <span style={{ color: "#4ade80", fontWeight: 700 }}>
                    (+51) {principal.tel}
                  </span>
                </div>
              </div>
              <a
                className="ag-maps-btn-dark"
                href={principal.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapIcon /> Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Todas las agencias */}
          <div className="ag-section-label" style={{ marginTop: 8 }}>
            Todas nuestras agencias
          </div>
          <div className="ag-grid">
            {resto.map((ag) => (
              <div key={ag.ciudad} className="ag-card">
                <div className="ag-card-img">
                  <img
                    src={ag.foto}
                    alt={ag.ciudad}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80";
                    }}
                  />
                  <div className="ag-card-overlay" />
                  <div className="ag-card-region-tag">{ag.region}</div>
                  <div className="ag-card-city-badge">
                    <div
                      className="ag-card-city-dot"
                      style={{ background: ag.color }}
                    />
                    <span className="ag-card-city-name">{ag.ciudad}</span>
                  </div>
                </div>
                <div className="ag-card-body">
                  <div className="ag-card-dir">
                    <span>📍</span>
                    <span>{ag.dir}</span>
                  </div>
                  <div className="ag-card-tel">
                    <span>📞</span>
                    <span>{ag.tel}</span>
                  </div>
                  <a
                    className="ag-card-maps"
                    href={ag.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapIcon /> Ver en Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
