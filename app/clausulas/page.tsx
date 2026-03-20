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
            Condiciones Generales del <br />
            <em>Contrato de Viaje</em> — Boleto de Viaje
          </h1>
          <p>
            Transportes Turismo Bus Universo S.A.C. · Condiciones del servicio
          </p>
        </div>

        {/* ── Body ── */}
        <div className="cls-body">
          <div className="cls-section-label">Términos y condiciones</div>
          <div className="cls-list">
            {[
              {
                num: "01",
                texto:
                  "Al recabar su boleto de viaje, el pasajero debe verificar que todos los datos consignados sean correctos, incluyendo la fecha y la hora del viaje.",
              },
              {
                num: "02",
                texto:
                  "El pasajero, al momento de abordar el bus en el control respectivo, deberá identificarse con su DNI físico. En el caso de menores de edad, deberán contar con autorización de viaje correspondiente, así como su DNI físico y/o Partida de Nacimiento original. Si no viajan con ambos padres, se requerirá una autorización notarial. De no cumplirse con estos requisitos, no se permitirá el embarque del menor, perdiendo su boleto sin derecho a devolución.",
              },
              {
                num: "03",
                texto:
                  "Los niños y niñas mayores de cinco (05) años deberán adquirir su boleto de viaje completo.",
              },
              {
                num: "04",
                texto:
                  "La transferencia, postergación y/o devolución del boleto deberá ser realizada personalmente por el titular del mismo, previa identificación con su DNI. La solicitud deberá efectuarse con una anticipación no menor a cuatro (4) horas antes de la fecha de viaje en Rutas Largas y una (1) hora antes en Rutas cortas. Para la postergación de manera virtual, deberá realizarlo vía WhatsApp a los números N° 999 333 419 o N° 966 198 771 con una anticipación de 24 horas a la fecha y hora de su viaje (Art. 66.7 de la Ley N° 29571 - Código de Protección y Defensa del Consumidor).",
              },
              {
                num: "05",
                texto:
                  "El pasajero deberá presentarse a la agencia o terminal treinta (30) minutos de anticipación a la hora programada de salida del bus, tiempo durante el cual deberá entregar su equipaje. La unidad saldrá puntualmente a la hora establecida. Una vez iniciado el servicio, si el pasajero no hubiera abordado oportunamente, no habrá lugar a postergación ni devolución del importe pagado.",
              },
              {
                num: "06",
                texto:
                  "La hora de embarque y desembarque en los puntos de escala es referencial y está sujeta a las condiciones de la vía, condiciones climáticas, tránsito u otros factores ajenos a la empresa. Asimismo, la empresa no brinda servicio de custodia de objetos personales fuera del servicio de transporte contratado.",
              },
              {
                num: "07",
                texto:
                  "Si por alguna razón el bus se retrasa en su hora de salida, ya sea por un desperfecto mecánico imprevisible, fuerza mayor o interrupción del servicio, la empresa podrá: a) trasladar a los pasajeros en otro vehículo de la empresa; b) fletar otro bus para conducir a los pasajeros; c) cancelar la salida del vehículo y devolver el importe del boleto de viaje.",
              },
              {
                num: "08",
                texto:
                  "La empresa no se responsabiliza por pérdida o deterioro de objetos de valor, alhajas, dinero y artículos de lujo u otros bienes no declarados que el pasajero lleve consigo. Esta exclusión no aplica en caso de dolo o negligencia comprobada de la empresa o de su personal.",
              },
              {
                num: "09",
                texto:
                  "En caso de pérdida, deterioro o sustracción del equipaje transportado en la bodega del bus, se aplicará lo establecido en el Reglamento Nacional de Transporte (numeral 76.2.12.5, del Artículo 76° del D.S. 017-2009-MTC).",
              },
              {
                num: "10",
                texto:
                  "La empresa podrá negar el embarque al pasajero que se presente bajo la influencia de bebidas alcohólicas y/o sustancias estupefacientes, o cuando porte armas, explosivos u otros objetos similares que representen un peligro para la seguridad de los pasajeros y del servicio. En tales casos, no habrá lugar a reembolso, siempre que la restricción haya sido debidamente informada y aplicada de manera razonable y proporcional.",
              },
              {
                num: "11",
                texto:
                  "Se encuentra prohibido fumar en el interior del bus, de conformidad con la normativa vigente sobre protección de la salud pública, a fin de garantizar el bienestar y seguridad de todos los pasajeros.",
              },
              {
                num: "12",
                texto:
                  "Está prohibido transportar en el equipaje de mano: objetos punzocortantes, herramientas, armas de fuego, así como artículos inflamables.",
              },
              {
                num: "13",
                texto:
                  "Está prohibido transportar en la bodega del bus, así como en el salón de pasajeros, líquidos corrosivos, pinturas mal embaladas y bebidas que puedan fermentarse, ya que pueden dañar los equipajes transportados en la bodega.",
              },
              {
                num: "14",
                texto:
                  "El pasajero tiene derecho a transportar gratuitamente hasta veinte (20) kilos de equipaje compuesto por artículos personales, conforme al Decreto Supremo N° 016-2006-EF. El transporte de equipaje en exceso estará sujeto a disponibilidad de espacio en la bodega y al pago de la tarifa correspondiente, el cual se le informará de manera oportuna.",
              },
              {
                num: "15",
                texto:
                  "En caso de falta de espacio en la bodega, se le informará al cliente el traslado de su equipaje mediante el servicio de carga, el cual estará supeditado a su disponibilidad.",
              },
              {
                num: "16",
                texto:
                  "En caso de pérdida, deterioro o sustracción del equipaje transportado en la bodega del bus, se aplicará lo establecido en el Reglamento Nacional de Transporte y demás normas vigentes sobre la materia.",
              },
              {
                num: "17",
                texto:
                  "Si desde la fecha de emisión del boleto de viaje hasta el día del viaje se produjera una variación tarifaria, dicha modificación deberá ser informada previamente al pasajero, quien podrá optar por pagar la diferencia correspondiente o solicitar la devolución del importe pagado.",
              },
              {
                num: "18",
                texto:
                  "Se prohíbe el traslado de animales o mascotas en el salón de pasajeros y en la bodega del bus, con excepción de los perros guía o de asistencia, los cuales podrán viajar junto a la persona con discapacidad debidamente acreditada conforme a la normativa del CONADIS y la Ley General de la Persona con Discapacidad.",
              },
              {
                num: "19",
                texto:
                  "El servicio de transporte cuenta con cobertura del SOAT (Seguro Obligatorio de Accidentes de Tránsito) y con una póliza adicional contratada con MAPFRE PERU COMPAÑÍA DE SEGUROS Y REASEGUROS, conforme a las condiciones establecidas en cada póliza y la normativa vigente.",
              },
              {
                num: "20",
                texto:
                  "La adquisición del presente boleto implica la aceptación de las presentes condiciones generales, siempre que estas hayan sido puestas previamente en conocimiento del pasajero de forma clara, accesible y legible.",
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
                Todos nuestros pasajeros cuentan con SOAT y seguro de viaje
                adicional respaldado por{" "}
                <strong>MAPFRE PERU COMPAÑÍA DE SEGUROS Y REASEGUROS</strong>.
                Ante cualquier consulta o inconveniente, acércate a nuestras
                oficinas o contáctanos al <strong>(+51) 999 333 419</strong> o{" "}
                <strong>(+51) 966 198 771</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
