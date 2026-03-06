export default function ClausulasPage() {
  const clausulas = [
    {
      num: "01",
      texto:
        "Al recabar su boleto de viaje el pasajero debe verificar que todos los datos consignados estén conformes. Este es válido para la hora y fecha de viaje.",
    },
    {
      num: "02",
      texto:
        "Las postergaciones y/o endosos se realizan: presencialmente, con anticipación no menor a 24 horas de la fecha y hora de viaje, en las oficinas y dentro del horario de atención de la empresa. Aplica cobro por reemisión y diferencia tarifaria de ser el caso.",
    },
    {
      num: "03",
      texto:
        "El pasajero debe presentarse 30 minutos antes de la hora de viaje. Para el embarque debe presentar su boleto de viaje y su DNI, en caso de no contar con este último perderá su derecho de viajar y el valor del pasaje pagado. Aplica cobro por reemisión por duplicado del boleto de viaje.",
    },
    {
      num: "04",
      texto:
        "Los niños mayores de 5 años viajan en su propio asiento y pagan pasaje completo.",
    },
    {
      num: "05",
      texto:
        "Los menores de edad que viajen deberán ser identificados con DNI o excepcionalmente con la partida de nacimiento. Si viajan solos o acompañados con un mayor de edad, que no sea uno de los padres, deben contar con una autorización de viaje de conformidad con las normas legales vigentes.",
    },
    {
      num: "06",
      texto:
        "El pasajero viaja asegurado por MAPFRE PERU COMPAÑÍA DE SEGUROS Y REASEGUROS.",
    },
    {
      num: "07",
      texto:
        "El pasajero tiene derecho a transportar 20 kilos de equipaje (objetos de uso personal y corriente). El exceso será admitido previo pago de la tarifa vigente.",
    },
    {
      num: "08",
      texto:
        "La Empresa no será responsable por la pérdida de dinero, joyas, alhajas, artefactos eléctricos y objetos de valor, transportados como equipajes.",
    },
    {
      num: "09",
      texto:
        "El pasajero es responsable exclusivo de la custodia de los bienes que transporta dentro del salón del bus.",
    },
    {
      num: "10",
      texto:
        "El pasajero se encuentra impedido de transportar dentro de su equipaje sustancias y/o materiales restringidos o prohibidos.",
    },
    {
      num: "11",
      texto:
        "Ante la pérdida, deterioro y/o destrucción de un equipaje, la Empresa indemnizará al pasajero según lo establecido en numeral 76.2.12.5, del artículo 76° del D.S. 017-2009-MTC.",
    },
  ];

  const oficinas = [
    {
      ciudad: "Chimbote",
      dir: 'Terminal Terrestre "El Chimbador" - Módulo Q-17',
      tel: "993 767 433",
    },
    { ciudad: "Paijàn", dir: "Av. Panamericana Norte 657", tel: "998 391 250" },
    {
      ciudad: "Pacasmayo",
      dir: "Terrapuerto Pacasmayo Stand N°9",
      tel: "980 947 832 / 981 911 766",
    },
    {
      ciudad: "Chiclayo",
      dir: "Panamericana Norte Km 774 Terminal Gasela",
      tel: "944 671 146 / 979 695 508",
    },
    {
      ciudad: "Bagua Grande",
      dir: "Av. Chachapoyas 2840 Terminal Leiva",
      tel: "959 544 152",
    },
    {
      ciudad: "Pedro Ruiz",
      dir: "Carr. Fernando Belaúnde Terry S/N",
      tel: "982 772 303 / 922 210 161",
    },
    {
      ciudad: "N. Cajamarca",
      dir: "Av. Cajamarca Norte 456 (Terminal Molina Stand N°8)",
      tel: "931 703 571",
    },
    {
      ciudad: "Rioja",
      dir: "Av. Campo Ferial #100 Term. Terrestre Std. 8 (costado de TSP)",
      tel: "941 583 051",
    },
    {
      ciudad: "Moyobamba",
      dir: "Av. Miguel Grau 555 Term. Terrestre municipal",
      tel: "956 078 715 / 995 454 537",
    },
    {
      ciudad: "Tarapoto",
      dir: "Jr. Primero de Mayo Cdr. 3 Terminal Morales",
      tel: "995 454 609",
    },
    {
      ciudad: "San Hilarion",
      dir: "Carr. Fernando Belaúnde Terry S/N",
      tel: "998 031 404",
    },
    {
      ciudad: "Bellavista",
      dir: "Av. Lima con Jr. Junín Tercer Piso",
      tel: "942 135 150",
    },
    {
      ciudad: "Sacanche",
      dir: "Carr. Fernando Belaúnde Terry S/N Km. 737",
      tel: "927 113 725 / 972 080 038",
    },
    {
      ciudad: "Juanjuí",
      dir: "Jr. Arica 103",
      tel: "950 641 480 / 988 394 622",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap');

        .clausulas-page {
          font-family: 'DM Sans', sans-serif;
          background: #f8f6f1;
          min-height: 100vh;
          color: #1a1a1a;
        }

        /* ── Hero banner ── */
        .cls-hero {
          background: #0d1117;
          position: relative;
          overflow: hidden;
          padding: 72px 48px 60px;
          text-align: center;
        }
        .cls-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 18px,
            rgba(26,140,60,0.04) 18px,
            rgba(26,140,60,0.04) 19px
          );
        }
        .cls-hero-strip {
          display: flex;
          height: 4px;
          margin-bottom: 36px;
          border-radius: 2px;
          overflow: hidden;
          max-width: 160px;
          margin-left: auto;
          margin-right: auto;
        }
        .cls-hero h1 {
          font-family: 'Crimson Pro', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -.02em;
          line-height: 1.15;
          position: relative;
          margin-bottom: 16px;
        }
        .cls-hero h1 em {
          font-style: italic;
          color: #f5c518;
        }
        .cls-hero p {
          color: rgba(255,255,255,.5);
          font-size: 14px;
          position: relative;
          letter-spacing: .04em;
          text-transform: uppercase;
          font-weight: 500;
        }

        /* ── Layout ── */
        .cls-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 24px 80px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: start;
        }

        /* ── Cláusulas ── */
        .cls-section-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #1a8c3c;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cls-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #d4d0c8;
        }

        .cls-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .cls-item {
          display: flex;
          gap: 20px;
          padding: 22px 0;
          border-bottom: 1px solid #e8e4db;
          transition: background .15s;
        }
        .cls-item:last-child { border-bottom: none; }
        .cls-item:hover { background: rgba(26,140,60,.03); margin: 0 -16px; padding-left: 16px; padding-right: 16px; border-radius: 8px; }

        .cls-num {
          font-family: 'Crimson Pro', serif;
          font-size: 28px;
          font-weight: 700;
          color: #1a8c3c;
          line-height: 1;
          min-width: 44px;
          padding-top: 2px;
          opacity: .7;
        }
        .cls-text {
          font-size: 14.5px;
          line-height: 1.75;
          color: #333;
          font-weight: 400;
        }

        /* ── Sidebar: Oficinas ── */
        .cls-sidebar {
          position: sticky;
          top: 88px;
        }
        .cls-oficinas-card {
          background: #0d1117;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,.18);
        }
        .cls-oficinas-header {
          background: linear-gradient(135deg, #1a8c3c, #0f5c28);
          padding: 20px 24px;
          text-align: center;
        }
        .cls-oficinas-header h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -.01em;
        }
        .cls-oficinas-header p {
          font-size: 11px;
          color: rgba(255,255,255,.6);
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: .1em;
          font-weight: 600;
        }

        .cls-oficinas-list {
          padding: 8px 0 12px;
          max-height: 520px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #1a8c3c #1a1f2e;
        }
        .cls-oficinas-list::-webkit-scrollbar { width: 4px; }
        .cls-oficinas-list::-webkit-scrollbar-track { background: #1a1f2e; }
        .cls-oficinas-list::-webkit-scrollbar-thumb { background: #1a8c3c; border-radius: 2px; }

        .cls-oficina-item {
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255,255,255,.05);
          transition: background .15s;
        }
        .cls-oficina-item:last-child { border-bottom: none; }
        .cls-oficina-item:hover { background: rgba(255,255,255,.04); }

        .cls-oficina-ciudad {
          display: inline-block;
          background: #1a8c3c;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 4px;
          margin-bottom: 6px;
        }
        .cls-oficina-dir {
          font-size: 12px;
          color: rgba(255,255,255,.65);
          line-height: 1.5;
          margin-bottom: 3px;
        }
        .cls-oficina-tel {
          font-size: 11.5px;
          color: #4ade80;
          font-weight: 600;
          letter-spacing: .02em;
        }

        /* ── Footer card ── */
        .cls-footer-note {
          margin-top: 40px;
          background: #fff;
          border: 1.5px solid #e8e4db;
          border-radius: 14px;
          padding: 24px 28px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .cls-footer-note-icon {
          font-size: 28px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .cls-footer-note-title {
          font-family: 'Crimson Pro', serif;
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 6px;
        }
        .cls-footer-note-text {
          font-size: 13px;
          color: #666;
          line-height: 1.65;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .cls-body { grid-template-columns: 1fr; gap: 40px; }
          .cls-sidebar { position: static; }
          .cls-hero { padding: 56px 24px 44px; }
          .cls-oficinas-list { max-height: 360px; }
        }
        @media (max-width: 600px) {
          .cls-body { padding: 36px 16px 60px; }
        }
      `}</style>

      <div className="clausulas-page">
        {/* ── Hero ── */}
        <div className="cls-hero">
          <div className="cls-hero-strip">
            <div style={{ flex: 2, background: "#1a8c3c" }} />
            <div style={{ flex: 1, background: "#d42b2b" }} />
            <div style={{ flex: 1, background: "#1a4fa0" }} />
            <div style={{ flex: 1, background: "#f5c518" }} />
          </div>
          <h1>
            Cláusulas Generales de <br />
            <em>Contratación</em> — Boleto de Viaje
          </h1>
          <p>Transportes Universo S.A.C. · Condiciones del servicio</p>
        </div>

        {/* ── Body ── */}
        <div className="cls-body">
          {/* Cláusulas */}
          <div>
            <div className="cls-section-label">Términos y condiciones</div>
            <div className="cls-list">
              {[
                {
                  num: "01",
                  texto:
                    "Al recabar su boleto de viaje el pasajero debe verificar que todos los datos consignados estén conformes. Este es válido para la hora y fecha de viaje.",
                },
                {
                  num: "02",
                  texto:
                    "Las postergaciones y/o endosos se realizan: presencialmente, con anticipación no menor a 24 horas de la fecha y hora de viaje, en las oficinas y dentro del horario de atención de la empresa. Aplica cobro por reemisión y diferencia tarifaria de ser el caso.",
                },
                {
                  num: "03",
                  texto:
                    "El pasajero debe presentarse 30 minutos antes de la hora de viaje. Para el embarque debe presentar su boleto de viaje y su DNI, en caso de no contar con este último perderá su derecho de viajar y el valor del pasaje pagado. Aplica cobro por reemisión por duplicado del boleto de viaje.",
                },
                {
                  num: "04",
                  texto:
                    "Los niños mayores de 5 años viajan en su propio asiento y pagan pasaje completo.",
                },
                {
                  num: "05",
                  texto:
                    "Los menores de edad que viajen deberán ser identificados con DNI o excepcionalmente con la partida de nacimiento. Si viajan solos o acompañados con un mayor de edad, que no sea uno de los padres, deben contar con una autorización de viaje de conformidad con las normas legales vigentes.",
                },
                {
                  num: "06",
                  texto:
                    "El pasajero viaja asegurado por MAPFRE PERU COMPAÑÍA DE SEGUROS Y REASEGUROS.",
                },
                {
                  num: "07",
                  texto:
                    "El pasajero tiene derecho a transportar 20 kilos de equipaje (objetos de uso personal y corriente). El exceso será admitido previo pago de la tarifa vigente.",
                },
                {
                  num: "08",
                  texto:
                    "La Empresa no será responsable por la pérdida de dinero, joyas, alhajas, artefactos eléctricos y objetos de valor, transportados como equipajes.",
                },
                {
                  num: "09",
                  texto:
                    "El pasajero es responsable exclusivo de la custodia de los bienes que transporta dentro del salón del bus.",
                },
                {
                  num: "10",
                  texto:
                    "El pasajero se encuentra impedido de transportar dentro de su equipaje sustancias y/o materiales restringidos o prohibidos.",
                },
                {
                  num: "11",
                  texto:
                    "Ante la pérdida, deterioro y/o destrucción de un equipaje, la Empresa indemnizará al pasajero según lo establecido en numeral 76.2.12.5, del artículo 76° del D.S. 017-2009-MTC.",
                },
              ].map((c) => (
                <div key={c.num} className="cls-item">
                  <div className="cls-num">{c.num}</div>
                  <p className="cls-text">{c.texto}</p>
                </div>
              ))}
            </div>

            {/* Nota al pie */}
            <div className="cls-footer-note">
              <div className="cls-footer-note-icon">🛡️</div>
              <div>
                <div className="cls-footer-note-title">Viaja protegido</div>
                <div className="cls-footer-note-text">
                  Todos nuestros pasajeros cuentan con seguro de viaje
                  respaldado por <strong>MAPFRE PERU</strong>. Ante cualquier
                  consulta o inconveniente, acércate a nuestras oficinas o
                  contáctanos al <strong>(+51) 999 333 419</strong>.
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Oficinas */}
          <div className="cls-sidebar">
            <div className="cls-oficinas-card">
              <div className="cls-oficinas-header">
                <h2>Nuestras Oficinas</h2>
                <p>Puntos de atención a nivel nacional</p>
              </div>
              <div className="cls-oficinas-list">
                {[
                  {
                    ciudad: "Chimbote",
                    dir: 'Terminal Terrestre "El Chimbador" - Módulo Q-17',
                    tel: "993 767 433",
                  },
                  {
                    ciudad: "Paijàn",
                    dir: "Av. Panamericana Norte 657",
                    tel: "998 391 250",
                  },
                  {
                    ciudad: "Pacasmayo",
                    dir: "Terrapuerto Pacasmayo Stand N°9",
                    tel: "980 947 832 / 981 911 766",
                  },
                  {
                    ciudad: "Chiclayo",
                    dir: "Panamericana Norte Km 774 Terminal Gasela",
                    tel: "944 671 146 / 979 695 508",
                  },
                  {
                    ciudad: "Bagua Grande",
                    dir: "Av. Chachapoyas 2840 Terminal Leiva",
                    tel: "959 544 152",
                  },
                  {
                    ciudad: "Pedro Ruiz",
                    dir: "Carr. Fernando Belaúnde Terry S/N",
                    tel: "982 772 303 / 922 210 161",
                  },
                  {
                    ciudad: "N. Cajamarca",
                    dir: "Av. Cajamarca Norte 456 (Terminal Molina Stand N°8)",
                    tel: "931 703 571",
                  },
                  {
                    ciudad: "Rioja",
                    dir: "Av. Campo Ferial #100 Term. Terrestre Std. 8",
                    tel: "941 583 051",
                  },
                  {
                    ciudad: "Moyobamba",
                    dir: "Av. Miguel Grau 555 Term. Terrestre municipal",
                    tel: "956 078 715 / 995 454 537",
                  },
                  {
                    ciudad: "Tarapoto",
                    dir: "Jr. Primero de Mayo Cdr. 3 Terminal Morales",
                    tel: "995 454 609",
                  },
                  {
                    ciudad: "San Hilarion",
                    dir: "Carr. Fernando Belaúnde Terry S/N",
                    tel: "998 031 404",
                  },
                  {
                    ciudad: "Bellavista",
                    dir: "Av. Lima con Jr. Junín Tercer Piso",
                    tel: "942 135 150",
                  },
                  {
                    ciudad: "Sacanche",
                    dir: "Carr. Fernando Belaúnde Terry S/N Km. 737",
                    tel: "927 113 725 / 972 080 038",
                  },
                  {
                    ciudad: "Juanjuí",
                    dir: "Jr. Arica 103",
                    tel: "950 641 480 / 988 394 622",
                  },
                ].map((o) => (
                  <div key={o.ciudad} className="cls-oficina-item">
                    <span className="cls-oficina-ciudad">{o.ciudad}</span>
                    <div className="cls-oficina-dir">{o.dir}</div>
                    <div className="cls-oficina-tel">📞 {o.tel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
