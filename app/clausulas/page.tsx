export default function ClausulasPage() {
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
          max-width: 780px;
          margin: 0 auto;
          padding: 60px 24px 80px;
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

        @media (max-width: 600px) {
          .cls-hero { padding: 56px 24px 44px; }
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
                Todos nuestros pasajeros cuentan con seguro de viaje respaldado
                por <strong>MAPFRE PERU</strong>. Ante cualquier consulta o
                inconveniente, acércate a nuestras oficinas o contáctanos al{" "}
                <strong>(+51) 999 333 419</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
