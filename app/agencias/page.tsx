"use client";

import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaTimes,
  FaArrowRight,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
// import { supabase } from "@/lib/supabase";

// ── Datos oficiales completos — extraídos del Excel RELACION_DE_OFICINAS_BUS_UNIVERSO ──
const agencies = [
  // ── Áncash ──────────────────────────────────────────────────
  {
    id: 1,
    city: "Chimbote",
    region: "Áncash",
    regionColor: "#d42b2b",
    address: "Terminal El Chimbador — Stand Q-7",
    phones: ["993 767 433"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre+Chimbote/@-9.1045559,-78.5580393,18.5z/data=!4m12!1m5!3m4!2zOcKwMDYnMTcuMiJTIDc4wrAzMycyOC4xIlc!8m2!3d-9.1047793!4d-78.5578073!3m5!1s0x91ab84045765c6a5:0xd99c235aa2f87756!8m2!3d-9.1047793!4d-78.5578073!16s%2Fg%2F11g7gdqw8h?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#e53e3e",
    img: "/chimbador_terminal.png",
    whatsapp: "51993767433",
  },

  // ── La Libertad ─────────────────────────────────────────────
  {
    id: 2,
    city: "Chao",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Au. Panamericana N 13, Chao 13631 — al lado de Botica Medina",
    phones: ["968 499 740", "987 455 023"],
    maps: "https://www.google.com/maps/@-8.5387296,-78.6773439,3a,75y,230.05h,91.03t/data=!3m7!1e1!3m5!1s6fIKB0q2A8EFBaha9sLNtg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-1.0298218462498738%26panoid%3D6fIKB0q2A8EFBaha9sLNtg%26yaw%3D230.05366993227085!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#60a5fa",
    img: "/chao_terminal.png",
    whatsapp: "51987455023",
  },
  {
    id: 3,
    city: "Virú",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Av. Panamericana 396 — Puente Virú",
    phones: ["968 499 740"],
    maps: "https://www.google.com/maps/place/Panamericana+Nte.+396,+13620/@-8.411023,-78.807637,17z/data=!3m1!4b1!4m5!3m4!1s0x91acfc9d665ae85f:0x9804771c6a44ad38!8m2!3d-8.4110283!4d-78.8050621?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3Dm/?q=Viru+La+Libertad+Peru",
    dot: "#60a5fa",
    img: "/viru_puente.png",
    whatsapp: "51968499740",
  },
  {
    id: 4,
    city: "Paiján",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Carretera Panamericana 1319 — Sector Manco Cápac",
    phones: ["937 512 954"],
    maps: "https://www.google.com/maps/@-7.7332027,-79.3018744,3a,75y,50.99h,93.28t/data=!3m7!1e1!3m5!1sDJ3HkkFqbySPmt4HbX6Ucw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.276347274329126%26panoid%3DDJ3HkkFqbySPmt4HbX6Ucw%26yaw%3D50.99190710643565!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#f5c518",
    img: "/paijan_terminal.png",
    whatsapp: "51937512954",
  },
  {
    id: 5,
    city: "Paiján 2",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Ctra. Panamericana N 657, Paiján 13721",
    phones: ["957 954 622"],
    maps: "https://www.google.com/maps/@-7.7338426,-79.3008682,3a,90y,244.15h,89.33t/data=!3m7!1e1!3m5!1swifxZdBT-9qOQdlXphbj6g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.6710347378615467%26panoid%3DwifxZdBT-9qOQdlXphbj6g%26yaw%3D244.14723542980443!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#f5c518",
    img: "/paijan2.png",
    whatsapp: "51957954622",
  },
  {
    id: 6,
    city: "Pacasmayo",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address:
      "1ra cdra. de Leoncio Prado — Terminal Terrestre Pacasmayo Stand 3 y 13",
    phones: ["981 911 766", "980 947 832"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre+Pacasmayo/@-7.3965125,-79.5672815,3a,90y,140.4h,88.68t/data=!3m7!1e1!3m5!1sz5JbwVU_UcEOvs4PqA9sNw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.3205965850238783%26panoid%3Dz5JbwVU_UcEOvs4PqA9sNw%26yaw%3D140.4003922139878!7i16384!8i8192!4m10!1m2!2m1!1s1ra+cdra.+de+Leoncio+Prado+%E2%80%94+Terminal+Terrestre+Pacasmayo+Stand+3+y+13!3m6!1s0x904d4606a6a1ca4b:0x992f035f6c6aa13c!8m2!3d-7.397103!4d-79.5670464!15sCkgxcmEgY2RyYS4gZGUgTGVvbmNpbyBQcmFkbyDigJQgVGVybWluYWwgVGVycmVzdHJlIFBhY2FzbWF5byBTdGFuZCAzIHkgMTNaRSJDMXJhIGNkcmEgZGUgbGVvbmNpbyBwcmFkbyB0ZXJtaW5hbCB0ZXJyZXN0cmUgcGFjYXNtYXlvIHN0YW5kIDMgeSAxM5IBC2J1c19zdGF0aW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU10YVdaNWVHOVJSUkFC4AEA-gEECAAQKw!16s%2Fg%2F1ydp2p6ng?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#60a5fa",
    img: "/pacasmayo_terminal.png",
    whatsapp: "51981911766",
  },
  {
    id: 7,
    city: "Ciudad de Dios",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Panamericana Norte — Ciudad de Dios Kiosko N°4",
    phones: ["959 998 794"],
    maps: "https://www.google.com/maps/place/Au.+Panamericana+N/@-7.8384455,-79.1521497,3a,75y,240.56h,85.44t/data=!3m7!1e1!3m5!1sXHBkky0DIXJ-dw8-PCjZuw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D4.5601498979005015%26panoid%3DXHBkky0DIXJ-dw8-PCjZuw%26yaw%3D240.55872898711607!7i16384!8i8192!4m15!1m8!3m7!1s0x91072068667cccc9:0xbe1f0eee754411d!2sAu.+Panamericana+N!3b1!8m2!3d-7.838863!4d-79.1526054!16s%2Fg%2F12fgs81yp!3m5!1s0x91072068667cccc9:0xbe1f0eee754411d!8m2!3d-7.838863!4d-79.1526054!16s%2Fg%2F12fgs81yp?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#93c5fd",
    img: "/ciudaddedios.png",
    whatsapp: "51959998794",
  },
  {
    id: 8,
    city: "Guadalupe",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address: "Jr. Zoila Bay 181 — Cafetal II, costado del Parque San Isidro",
    phones: ["942 873 849"],
    maps: "https://www.google.com/maps/@-7.2492965,-79.4685065,3a,75y,197.23h,79.1t/data=!3m7!1e1!3m5!1scaKZzIV6G0fSYMq0ivPwnA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D10.896044400769057%26panoid%3DcaKZzIV6G0fSYMq0ivPwnA%26yaw%3D197.22653053692878!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#bfdbfe",
    img: "/guadalupe.png",
    whatsapp: "51942873849",
  },
  {
    id: 9,
    city: "Chepén Terminal",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address:
      "Av. Ezequiel Gonzáles Cáceda 188 Stand-22 — Terminal Terrestre de Chepén",
    phones: ["999t 7157 93", "952 510 976"],
    maps: "https://www.google.com/maps/place/Terminal+terrestre+de+Chep%C3%A9n/@-7.220581,-79.4338135,15z/data=!4m6!3m5!1s0x904d3300170e385f:0xbbd40dd8087195f1!8m2!3d-7.2201949!4d-79.4335241!16s%2Fg%2F11vzbh1960?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#3b82f6",
    img: "/terminal_chepen.png",
    whatsapp: "51999157937",
  },
  {
    id: 11,
    city: "Pacanguilla",
    region: "La Libertad",
    regionColor: "#1a4fa0",
    address:
      "Calle Bolívar 290 — Pacanguilla, a una esquina del paradero de autos Chepén",
    phones: ["939 797 326"],
    maps: "https://www.google.com/maps/place/Calle+Bolivar,+Pacanguilla+13860/@-7.1573065,-79.4415191,3a,75y,149.01h,90.3t/data=!3m7!1e1!3m5!1s2SZkVEX6mHf8Cnx7MJuoNw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.29989714859854644%26panoid%3D2SZkVEX6mHf8Cnx7MJuoNw%26yaw%3D149.0121221658179!7i16384!8i8192!4m15!1m8!3m7!1s0x904d326e81266565:0x4b0fa46144d40fed!2sCalle+Bolivar,+Pacanguilla+13860!3b1!8m2!3d-7.1573425!4d-79.44157!16s%2Fg%2F11y8blxq0m!3m5!1s0x904d326e81266565:0x4b0fa46144d40fed!8m2!3d-7.1573425!4d-79.44157!16s%2Fg%2F11y8blxq0m?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    dot: "#93c5fd",
    img: "/pacanguilla.png",
    whatsapp: "51939797326",
  },

  // ── Lambayeque ──────────────────────────────────────────────
  {
    id: 13,
    city: "Terrapuerto Plaza Norte Chiclayo",
    region: "Lambayeque",
    regionColor: "#7c3aed",
    address: "Av. Augusto B. Leguía 2592, Chiclayo 14009",
    phones: ["935 788 639"],
    maps: "https://www.google.com/maps/place/Terrapuerto+Plaza+Norte+Chiclayo/@-6.7581481,-79.8652479,17z/data=!4m10!1m2!2m1!1sAv.+Augusto+B.+Legu%C3%ADa+2590+Stand+30+%E2%80%94+Terminal+Plaza+Norte!3m6!1s0x904ceeee5441e971:0x177085d265800cad!8m2!3d-6.7581481!4d-79.8607418!15sCj1Bdi4gQXVndXN0byBCLiBMZWd1w61hIDI1OTAgU3RhbmQgMzAg4oCUIFRlcm1pbmFsIFBsYXphIE5vcnRl4AEA!16s%2Fg%2F11vzrw7p60?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#c4b5fd",
    img: "/chiclayo_plazanorte.png",
    whatsapp: "51935788639",
  },
  {
    id: 14,
    city: "Illimo",
    region: "Lambayeque",
    regionColor: "#7c3aed",
    address: "Au. Panamericana N 476, Lambayeque 14013",
    phones: ["964 755 681"],
    maps: "https://www.google.com/maps/place/Expreso+Jireh/@-6.7008848,-79.9023657,3a,75y,287.57h,95.51t/data=!3m7!1e1!3m5!1sj42LuG98O9SOfK4CqIOq0Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-5.505664982500676%26panoid%3Dj42LuG98O9SOfK4CqIOq0Q%26yaw%3D287.5687214481369!7i13312!8i6656!4m10!1m2!2m1!1sexpreso+jireh+chiclayo!3m6!1s0x904ced0038cc0803:0xb82603bd9ab287df!8m2!3d-6.700782!4d-79.9024775!15sChZleHByZXNvIGppcmVoIGNoaWNsYXlvkgENdHJhdmVsX2FnZW5jeeABAA!16s%2Fg%2F11xvh_xj7z?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#ddd6fe",
    img: "/illimo.png",
    whatsapp: "51964755681",
  },
  {
    id: 15,
    city: "Olmos",
    region: "Lambayeque",
    regionColor: "#7c3aed",
    address: "Caserío Nuevo Cruce Jaén — referencia a la cochera CCHISA",
    phones: ["991 598 645"],
    maps: "https://www.google.com/maps/place/Grifo+CCHISA+(Ex.+Consorcios+Mori)/@-6.7369043,-79.8814074,3a,75y,63.41h,93.45t/data=!3m7!1e1!3m5!1sAz6mJ9YAavvL9HGvKgIACA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.448607030360364%26panoid%3DAz6mJ9YAavvL9HGvKgIACA%26yaw%3D63.40698655417178!7i16384!8i8192!4m14!1m7!3m6!1s0x904cee7b912e3eef:0xd91ef137dea9cbd0!2sGrifo+CCHISA+(Ex.+Consorcios+Mori)!8m2!3d-6.7368215!4d-79.8811048!16s%2Fg%2F11gbp__z0c!3m5!1s0x904cee7b912e3eef:0xd91ef137dea9cbd0!8m2!3d-6.7368215!4d-79.8811048!16s%2Fg%2F11gbp__z0c?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#ede9fe",
    img: "/olmos_cchisa.png",
    whatsapp: "51991598645",
  },

  // ── Amazonas ────────────────────────────────────────────────
  {
    id: 16,
    city: "Bagua Grande",
    region: "Amazonas",
    regionColor: "#065f46",
    address: "Av. Chachapoyas 2840 — Terminal Leiva",
    phones: ["914 420 313"],
    maps: "https://www.google.com/maps/place/Terminal+Leyva/@-5.7575741,-78.4383837,17z/data=!4m10!1m2!2m1!1sAv.+Chachapoyas+2840+%E2%80%94+Terminal+Leiva!3m6!1s0x91b44fbd00000001:0xcee0e7102f5cce78!8m2!3d-5.7576547!4d-78.4357215!15sCidBdi4gQ2hhY2hhcG95YXMgMjg0MCDigJQgVGVybWluYWwgTGVpdmFaJCIiYXYgY2hhY2hhcG95YXMgMjg0MCB0ZXJtaW5hbCBsZWl2YZIBCnJlc3RhdXJhbnSaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVDYlZWWE1UWmhWRkUxWW5wb2VWSkVTazlOUXpBelpXNXNSVnBJWXhBQuABAPoBBAgAEDA!16s%2Fg%2F11c5smlm8m?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#4ade80",
    img: "/chamaya.png",
    whatsapp: "51959544152",
  },

  {
    id: 17,
    city: "Pedro Ruiz",
    region: "Amazonas",
    regionColor: "#065f46",
    address: "Carr. Fernando Belaúnde Terry S/N",
    phones: ["982 772 303", "922 210 161"],
    maps: "https://www.google.com/maps/place/Ctra.+Fernando+Bela%C3%BAnde+Terry/@-5.9214092,-78.1195584,3a,75y,90.27h,93.08t/data=!3m7!1e1!3m5!1sI2sR3-M2hwuQ8i06FTFF2w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.078275302330553%26panoid%3DI2sR3-M2hwuQ8i06FTFF2w%26yaw%3D90.27393580094342!7i16384!8i8192!4m15!1m8!3m7!1s0x91b49b7e6e8fe457:0x2bc3405674c57e69!2sCtra.+Fernando+Bela%C3%BAnde+Terry!3b1!8m2!3d-5.9214227!4d-78.1197751!16s%2Fg%2F1tg_bkf0!3m5!1s0x91b49b7e6e8fe457:0x2bc3405674c57e69!8m2!3d-5.9214227!4d-78.1197751!16s%2Fg%2F1tg_bkf0?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#34d399",
    img: "/pedroruiz.png",
    whatsapp: "51982772303",
  },
  {
    id: 18,
    city: "Buenos Aires",
    region: "Amazonas",
    regionColor: "#065f46",
    address:
      "Carr. Fernando Belaúnde Terry 1246 — frente a la Comisaría (entre Pomacochas y Naranjos)",
    phones: ["913 574 460"],
    maps: "https://www.google.com/maps/place/Ctra.+Fernando+Bela%C3%BAnde+Terry+1246,+Pomacochas+01150/@-5.8214903,-77.970806,17z/data=!3m1!4b1!4m5!3m4!1s0x91b42704aa792569:0xe7d96234efd0d574!8m2!3d-5.8214956!4d-77.9682311?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#a7f3d0",
    img: "/buenosaires.png",
    whatsapp: "51913574460",
  },

  // ── San Martín ──────────────────────────────────────────────
  {
    id: 19,
    city: "Naranjos",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Marginal 314 — al costado de Turismo Cajamarca",
    phones: ["942 444 294"],
    maps: "https://www.google.com/maps/place/AV.+MARGINAL+314,+Naranjos+22866/@-5.7384303,-77.5026697,15z/data=!4m16!1m9!3m8!1s0x91b6f24290dce1d9:0x4f33e4ffa2ad3fe!2sAV.+MARGINAL+314,+Naranjos+22866!3b1!8m2!3d-5.7385044!4d-77.5027397!10e5!16s%2Fg%2F11s9l6yl3f!3m5!1s0x91b6f24290dce1d9:0x4f33e4ffa2ad3fe!8m2!3d-5.7385044!4d-77.5027397!16s%2Fg%2F11s9l6yl3f?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#fb923c",
    img: "/naranjos.png",
    whatsapp: "51942444294",
  },
  {
    id: 20,
    city: "Naranjillo",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Carr. Fernando Belaúnde Terry S/N — Naranjillo",
    phones: ["975 790 400"],
    maps: "https://www.google.com/maps/place/CARRETERA+FERNANDO+BELAUNDE/@-5.8096875,-77.3935764,3a,75y,137.43h,92.52t/data=!3m7!1e1!3m5!1sp1Wv0ECjaTxF1ppjcCxtrw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-2.5222593896327794%26panoid%3Dp1Wv0ECjaTxF1ppjcCxtrw%26yaw%3D137.43359904803108!7i16384!8i8192!4m15!1m8!3m7!1s0x91b6ef73c55e2a5b:0x384524106bee019c!2sNaranjillo!3b1!8m2!3d-5.8065853!4d-77.3984704!16s%2Fg%2F1vgx1t_y!3m5!1s0x91b6ef30581d5be9:0xcfcfd4fcf1635aa6!8m2!3d-5.8092961!4d-77.3940519!16s%2Fg%2F11thqxdg9t?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#fdba74",
    img: "/naranjillo.png",
    whatsapp: "51975790400",
  },
  {
    id: 21,
    city: "N. Cajamarca",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Cajamarca Norte — Terminal Terrestre La Molina",
    phones: ["931 703 571"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre+La+Molina/@-5.9281701,-77.3154473,17z/data=!4m15!1m8!3m7!1s0x91b6dd8e83a6f883:0x1364125be898171e!2sTerminal+Terrestre+La+Molina!8m2!3d-5.9281701!4d-77.3154473!10e5!16s%2Fg%2F11bw6497j5!3m5!1s0x91b6dd8e83a6f883:0x1364125be898171e!8m2!3d-5.9281701!4d-77.3154473!16s%2Fg%2F11bw6497j5?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#f97316",
    img: "/n.cajamarca.png",
    whatsapp: "51931703571",
  },
  {
    id: 22,
    city: "Segunda Jerusalén",
    region: "San Martín",
    regionColor: "#92400e",
    address:
      "Av. Samaria Cdra. 1 — al costado de la Iglesia Pentecostés Misionera",
    phones: ["939 083 805"],
    maps: "https://www.google.com/maps/place/Iglesia+Pentecost%C3%A9s+Misionera+Segunda+Jerusal%C3%A9n/@-5.9916378,-77.2800005,3a,75y,39.2h,89.61t/data=!3m7!1e1!3m5!1spr_ywX6NwMYrFE5z8pRRAQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.3887837716800959%26panoid%3Dpr_ywX6NwMYrFE5z8pRRAQ%26yaw%3D39.19720724761396!7i16384!8i8192!4m14!1m7!3m6!1s0x91b6dea5d09ea3b9:0x83a74a951f047d94!2sIglesia+Pentecost%C3%A9s+Misionera+Segunda+Jerusal%C3%A9n!8m2!3d-5.9908792!4d-77.2802933!16s%2Fg%2F11b7lgyjqs!3m5!1s0x91b6dea5d09ea3b9:0x83a74a951f047d94!8m2!3d-5.9908792!4d-77.2802933!16s%2Fg%2F11b7lgyjqs?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#fb923c",
    img: "/segunda_jerusalen.png",
    whatsapp: "51939083805",
  },
  {
    id: 23,
    city: "Rioja",
    region: "San Martín",
    regionColor: "#92400e",
    address:
      "Av. Campo Ferial #100 — Terminal Terrestre Stand 8, costado de TSP",
    phones: ["941 583 051"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre+Municipal+Arturo+Iberico+Lopez/@-6.0551671,-77.1678398,17.5z/data=!4m10!1m2!2m1!1sAv.+Campo+Ferial+%23100+%E2%80%94+Terminal+Terrestre+Stand+8,+costado+de+TSP!3m6!1s0x91b727bc779a6bcb:0x46317503d98f2a85!8m2!3d-6.05516!4d-77.1659029!15sCkRBdi4gQ2FtcG8gRmVyaWFsICMxMDAg4oCUIFRlcm1pbmFsIFRlcnJlc3RyZSBTdGFuZCA4LCBjb3N0YWRvIGRlIFRTUJIBC2J1c19zdGF0aW9u4AEA!16s%2Fg%2F1pxqc4rnp?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#f97316",
    img: "/riojagencia.png",
    whatsapp: "51941583051",
  },
  {
    id: 24,
    city: "Moyobamba",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Miguel Grau 555 — Terminal Terrestre Municipal",
    phones: ["995 454 537"],
    maps: "https://www.google.com/maps/place/Terminal+Terrestre/@-6.0452045,-76.9708222,3a,75y,47.57h,78.47t/data=!3m7!1e1!3m5!1shNvOQ3O9_Of0W2Z7nYHfLA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D11.52863004774565%26panoid%3DhNvOQ3O9_Of0W2Z7nYHfLA%26yaw%3D47.57483618906018!7i13312!8i6656!4m14!1m7!3m6!1s0x91b73b103b41cef3:0x51fbc79713f914b2!2sTerminal+Terrestre!8m2!3d-6.0451601!4d-76.9704046!16s%2Fg%2F11gl0y0bbc!3m5!1s0x91b73b103b41cef3:0x51fbc79713f914b2!8m2!3d-6.0451601!4d-76.9704046!16s%2Fg%2F11gl0y0bbc?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#fb923c",
    img: "/moyobamba_agencia.png",
    whatsapp: "51995454537",
  },
  {
    id: 25,
    city: "Tabalosos",
    region: "San Martín",
    regionColor: "#92400e",
    address:
      "Carr. Fernando Belaúnde Terry Km. 40 — junto al Restaurante Mi Elva, frente al grifo",
    phones: ["979 050 445"],
    maps: "https://www.google.com/maps/place/Ctra.+Fernando+Bela%C3%BAnde+Terry,+Tabalosos/@-6.3866568,-76.6304153,15z/data=!4m11!1m3!2m2!1sTabalosos+Carr.+Fernando+Bela%C3%BAnde+Terry+Km.+40+%E2%80%94+junto+al+Restaurante+Mi+Elva,+frente+al+grifo!6e1!3m6!1s0x91b49b7e6e8fe457:0x2bc3405674c57e69!8m2!3d-6.3867179!4d-76.6304224!15sCmFUYWJhbG9zb3MgQ2Fyci4gRmVybmFuZG8gQmVsYcO6bmRlIFRlcnJ5IEttLiA0MCDigJQganVudG8gYWwgUmVzdGF1cmFudGUgTWkgRWx2YSwgZnJlbnRlIGFsIGdyaWZvkgEFcm91dGXgAQA!16s%2Fg%2F1tg_bkf0?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#fdba74",
    img: "/tabalosos.png",
    whatsapp: "51979050445",
  },
  {
    id: 26,
    city: "Tarapoto Santa Anita",
    region: "San Martín",
    regionColor: "#92400e",
    address:
      "Terminal Santa Anita Stand 20 — costado del Mercado Santa Anita, Carr. Atupampa Morales",
    phones: ["996 454 609"],
    maps: "https://www.google.com/maps/place/Mercado+Santa+Anita'/@-6.4895639,-76.3889518,3a,75y,186.79h,92.41t/data=!3m7!1e1!3m5!1si4dows2_heevdzD2RlOMwQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-2.4145987512358715%26panoid%3Di4dows2_heevdzD2RlOMwQ%26yaw%3D186.78810665529988!7i16384!8i8192!4m10!1m2!2m1!1sTerminal+Santa+Anita+Tarapoto!3m6!1s0x91ba0bc3d31a7377:0x49fedb35c91d5b2a!8m2!3d-6.4903458!4d-76.3890869!15sCh1UZXJtaW5hbCBTYW50YSBBbml0YSBUYXJhcG90b1ofIh10ZXJtaW5hbCBzYW50YSBhbml0YSB0YXJhcG90b5IBBm1hcmtldJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOUGNIRXRZVE5SUlJBQuABAPoBBAgAEB8!16s%2Fg%2F11j98zzs2b?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#22c55e",
    img: "/santa_anita.png",
    whatsapp: "51996454609",
  },
  {
    id: 27,
    city: "Picota",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Carr. Fernando Belaúnde Terry S/N — costado Hotel Mateo",
    phones: ["924 290 846"],
    maps: "https://www.google.com/maps/place/Picota/@-6.921107,-76.334992,3a,75y,30.95h,94.49t/data=!3m7!1e1!3m5!1swpaBXn6ukkpGFjf0ye5q6A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-4.492062424993932%26panoid%3DwpaBXn6ukkpGFjf0ye5q6A%26yaw%3D30.947066227537505!7i16384!8i8192!4m6!3m5!1s0x91ba87881e9f04b7:0xd5ffb8db127ae91d!8m2!3d-6.9199176!4d-76.3304777!16s%2Fm%2F047fpv6?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#fb923c",
    img: "/picota.png",
    whatsapp: "51924290846",
  },
  {
    id: 28,
    city: "San Hilarión",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Carr. Fernando Belaúnde Terry S/N",
    phones: ["998 031 404"],
    maps: "https://www.google.com/maps/place/San+Hilari%C3%B3n/@-6.9963233,-76.4430821,15z/data=!4m6!3m5!1s0x91ba821336ad1961:0xa3331dbad24701af!8m2!3d-6.9993164!4d-76.4418473!16s%2Fm%2F043jwcs?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#22c55e",
    img: "/san_hilarion.png",
    whatsapp: "51998031404",
  },
  {
    id: 29,
    city: "Bellavista",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Av. Lima Cdra. 6 con Jr. Loreto — Tercer Piso",
    phones: ["942 135 150"],
    maps: "]https://www.google.com/maps/place/Bellavista/@-7.0520657,-76.5889836,19z/data=!4m6!3m5!1s0x91b07a6434cf00f3:0x16eb0cc657796f94!8m2!3d-7.0534572!4d-76.5892774!16s%2Fm%2F047pcnp?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#a78bfa",
    img: "/bellavista.png",
    whatsapp: "51942135150",
  },
  {
    id: 30,
    city: "Sacanche",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Carr. Fernando Belaúnde Terry S/N — Km. 737",
    phones: ["929 855 077"],
    maps: "https://www.google.com/maps/place/Fernando+Belaunde+Terry/@-7.9020854,-76.6666304,3a,75y,174.7h,94.1t/data=!3m7!1e1!3m5!1sENqdQaDsS962N4-ZZhnCVw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-4.101070425634575%26panoid%3DENqdQaDsS962N4-ZZhnCVw%26yaw%3D174.70036990254155!7i16384!8i8192!4m15!1m8!3m7!1s0x91b0a0eba374da97:0xd2aef54bd41bd6fd!2sFernando+Belaunde+Terry!3b1!8m2!3d-7.9020057!4d-76.6666117!16s%2Fg%2F1ptvzystd!3m5!1s0x91b0a0eba374da97:0xd2aef54bd41bd6fd!8m2!3d-7.9020057!4d-76.6666117!16s%2Fg%2F1ptvzystd?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#fb923c",
    img: "/sacanche.png",
    whatsapp: "51929855077",
  },
  {
    id: 31,
    city: "Saposoa",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Jr. Chorrillos 516",
    phones: ["969 182 663"],
    maps: "https://www.google.com/maps/place/Jr.+Chorrillos+516,+Saposoa+22661/@-6.9378186,-76.7704636,17z/data=!4m6!3m5!1s0x91b061b027960619:0xfab3bb31de91302b!8m2!3d-6.9378598!4d-76.7703275!16s%2Fg%2F11tk54bfz7?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#fbbf24",
    img: "/saposoa.png",
    whatsapp: "51969182663",
  },
  {
    id: 32,
    city: "Juanjuí",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Jr. Arica 103 — Terminal Tobías Ruiz",
    phones: ["988 394 622"],
    maps: "https://www.google.com/maps/place/TERMINAL+TOBIAS+RUIZ/@-7.1803393,-76.7347538,18z/data=!4m15!1m8!3m7!1s0x91b06bbd4669d5bf:0x4e88e1b46c0939ff!2sTERMINAL+TOBIAS+RUIZ!8m2!3d-7.180322!4d-76.7347968!10e5!16s%2Fg%2F11f8_knyt4!3m5!1s0x91b06bbd4669d5bf:0x4e88e1b46c0939ff!8m2!3d-7.180322!4d-76.7347968!16s%2Fg%2F11f8_knyt4?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    dot: "#4ade80",
    img: "./juanjui.png",
    whatsapp: "51988394622",
  },
  {
    id: 33,
    city: "Yurimaguas",
    region: "San Martín",
    regionColor: "#92400e",
    address: "Jr. Mariscal Cáceres 230",
    phones: ["972 851 055"],
    maps: "https://maps.google.com/?q=Yurimaguas+Alto+Amazonas+Loreto+Peru",
    dot: "#22c55e",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    whatsapp: "51972851055",
  },
  {
    id: 34,
    city: "Trujillo",
    region: "La Libertad",
    regionColor: "#92400e",
    address:
      "Av. Nicolás de Piérola N° 1230 Urb. San Fernando, Trujillo — La Libertad, Perú",
    phones: ["972 851 055"],
    maps: "https://maps.google.com/?q=Yurimaguas+Alto+Amazonas+Loreto+Peru",
    dot: "#22c55e",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    whatsapp: "51972851055",
  },
];

const regions = [
  "Todas",
  ...Array.from(new Set(agencies.map((a) => a.region))),
];

export default function AgenciasPage() {
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("Todas");

  const filtered = agencies.filter((a) => {
    const q = search.toLowerCase();
    const matchSearch =
      a.city.toLowerCase().includes(q) ||
      a.region.toLowerCase().includes(q) ||
      a.address.toLowerCase().includes(q) ||
      a.phones.some((p) => p.includes(q));
    const matchRegion = activeRegion === "Todas" || a.region === activeRegion;
    return matchSearch && matchRegion;
  });
  useEffect(() => {
    // supabase
    //   .from("agencias")
    //   .select("*")
    //   .then(({ data, error }) => {
    //     if (error) {
    //       console.error("❌ ERROR DETALLADO:", JSON.stringify(error, null, 2));
    //     } else {
    //       console.log("✅ Datos recibidos:", data);
    //       console.log("📊 Total registros:", data?.length);
    //     }
    //   });
  }, []);
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#f8f9fa",
        minHeight: "100vh",
        color: "#111",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes slideUp  { from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);} }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.6);} }
        @keyframes cardIn   { from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);} }

        .agency-card {
          background: #fff; border-radius: 18px; overflow: hidden;
          border: 1.5px solid #e5e7eb;
          transition: transform .22s ease, box-shadow .22s ease;
          animation: cardIn .45s ease both;
        }
        .agency-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,.10); }
        .agency-img-wrap { position: relative; height: 160px; overflow: hidden; }
        .agency-img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
        .agency-card:hover .agency-img { transform: scale(1.06); }

        .region-badge {
          position: absolute; top: 12px; right: 12px;
          background: rgba(0,0,0,.55); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,.18); color: #fff;
          font-size: 10px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; padding: 4px 10px; border-radius: 6px;
        }
        .city-dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; flex-shrink: 0; box-shadow: 0 0 0 3px rgba(255,255,255,.35); }

        .phone-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px;
          padding: 5px 10px; font-size: 12px; font-weight: 700; color: #166534;
          text-decoration: none; transition: background .15s, transform .1s; white-space: nowrap;
        }
        .phone-chip:hover { background: #dcfce7; transform: translateY(-1px); }

        .maps-btn {
          display: flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #f0fdf4, #dcfce7);
          border: 1.5px solid #86efac; border-radius: 8px; padding: 9px 14px;
          font-size: 11px; font-weight: 700; letter-spacing: .06em;
          text-transform: uppercase; color: #166534; text-decoration: none;
          transition: all .15s;
        }
        .maps-btn:hover { background: linear-gradient(135deg, #dcfce7, #bbf7d0); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(26,140,60,.15); }

        .filter-chip {
          padding: 7px 16px; border-radius: 20px; font-size: 12px; font-weight: 700;
          letter-spacing: .05em; border: 1.5px solid #e5e7eb; background: #fff;
          color: rgba(0,0,0,.5); cursor: pointer; transition: all .15s; white-space: nowrap;
        }
        .filter-chip:hover { border-color: #1a8c3c; color: #1a8c3c; }
        .filter-chip.active { background: #1a8c3c; border-color: #1a8c3c; color: #fff; }

        .search-input {
          border: 1.5px solid #e5e7eb; border-radius: 12px;
          padding: 12px 16px 12px 42px; font-size: 14px; font-weight: 500;
          color: #111; background: #fff; outline: none; width: 100%; max-width: 340px;
          transition: border-color .2s, box-shadow .2s;
        }
        .search-input:focus { border-color: #1a8c3c; box-shadow: 0 0 0 3px rgba(26,140,60,.10); }
        .search-input::placeholder { color: rgba(0,0,0,.35); }

        .wsp-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #fff; border: none; border-radius: 10px; padding: 10px 18px;
          font-size: 12px; font-weight: 700; letter-spacing: .04em;
          cursor: pointer; box-shadow: 0 4px 16px rgba(37,211,102,.35);
          transition: opacity .2s, transform .15s; text-decoration: none; white-space: nowrap;
        }
        .wsp-btn:hover { opacity: .9; transform: translateY(-1px); }

        @media (max-width: 768px) {
          .hero-pad { padding: 48px 20px 60px !important; }
          .agencies-grid { grid-template-columns: 1fr !important; }
          .toolbar { flex-direction: column !important; align-items: flex-start !important; }
          .section-inner { padding: 32px 16px 48px !important; }
          .cta-banner { flex-direction: column !important; padding: 28px 20px !important; }
        }
      `}</style>

      {/* ════ HERO ════ */}
      <section
        style={{
          background:
            "linear-gradient(135deg,#0d1117 0%,#0f2a1a 50%,#0d1117 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 320,
            background:
              "radial-gradient(ellipse,rgba(26,140,60,.22) 0%,transparent 70%)",
          }}
        />

        <div
          className="hero-pad"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "68px 48px 76px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div style={{ animation: "slideUp .65s ease forwards" }}>
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
              Puntos de venta oficiales
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(32px,5vw,56px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.12,
                marginBottom: 18,
                textShadow: "0 2px 28px rgba(0,0,0,.4)",
              }}
            >
              Nuestras{" "}
              <span style={{ fontStyle: "italic", color: "#f5c518" }}>
                agencias
              </span>{" "}
              en el norte del Perú
            </h1>

            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 22,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {["#1a8c3c", "#f5c518", "#d42b2b"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: i === 0 ? 36 : i === 1 ? 18 : 10,
                    height: 3,
                    background: c,
                    borderRadius: 2,
                  }}
                />
              ))}
            </div>

            <p
              style={{
                color: "rgba(215,225,240,.78)",
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 540,
                margin: "0 auto 32px",
              }}
            >
              Contamos con{" "}
              <strong style={{ color: "#f5c518" }}>
                37 puntos de atención
              </strong>{" "}
              distribuidos en 5 regiones del norte del Perú. Compra tu pasaje
              directamente en la agencia más cercana.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: 0,
                background: "rgba(5,12,28,.48)",
                borderRadius: 14,
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,.10)",
                maxWidth: 520,
                margin: "0 auto",
                boxShadow: "0 8px 32px rgba(0,0,0,.35)",
              }}
            >
              {[
                { value: "37", label: "Agencias", color: "#4ade80" },
                { value: "5", label: "Regiones", color: "#fbbf24" },
                { value: "50+", label: "Rutas", color: "#60a5fa" },
                { value: "6am", label: "Apertura", color: "#f87171" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    padding: "16px 8px",
                    textAlign: "center",
                    borderRight:
                      i < 3 ? "1px solid rgba(255,255,255,.08)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: s.color,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,.48)",
                      marginTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ COLOR STRIP ════ */}
      <div style={{ display: "flex", height: 5 }}>
        {["#1a8c3c", "#d42b2b", "#1a4fa0", "#f5c518", "#1a8c3c"].map(
          (c, i, a) => (
            <div
              key={i}
              style={{
                flex: i === 0 || i === a.length - 1 ? 2 : 1,
                background: c,
              }}
            />
          ),
        )}
      </div>

      {/* ════ TOOLBAR ════ */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 68,
          zIndex: 40,
          boxShadow: "0 2px 12px rgba(0,0,0,.06)",
        }}
      >
        <div style={{ maxWidth: 1296, margin: "0 auto", padding: "14px 48px" }}>
          <div
            className="toolbar"
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {/* Buscador */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              >
                <FaSearch size={13} color="#aaa" />
              </div>
              <input
                className="search-input"
                placeholder="Buscar ciudad, región o teléfono..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filtros */}
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "rgba(0,0,0,.4)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  whiteSpace: "nowrap",
                }}
              >
                <FaFilter size={9} /> Región:
              </span>
              {regions.map((r) => (
                <button
                  key={r}
                  className={`filter-chip${activeRegion === r ? " active" : ""}`}
                  onClick={() => setActiveRegion(r)}
                >
                  {r}
                </button>
              ))}
            </div>

            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(0,0,0,.4)",
                whiteSpace: "nowrap",
              }}
            >
              {filtered.length} {filtered.length === 1 ? "agencia" : "agencias"}
            </div>
          </div>
        </div>
      </div>

      {/* ════ GRID ════ */}
      <section
        className="section-inner"
        style={{ maxWidth: 1296, margin: "0 auto", padding: "40px 48px 72px" }}
      >
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p
              style={{ fontSize: 16, fontWeight: 600, color: "rgba(0,0,0,.4)" }}
            >
              No se encontraron agencias
            </p>
          </div>
        ) : (
          <div
            className="agencies-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {filtered.map((agency, i) => (
              <div
                key={agency.id}
                className="agency-card"
                style={{
                  animationDelay: `${i * 40}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Imagen */}
                <div className="agency-img-wrap">
                  <img
                    src={agency.img}
                    alt={agency.city}
                    className="agency-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(0,0,0,.45) 0%,transparent 60%)",
                    }}
                  />
                  <div className="region-badge">{agency.region}</div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 14,
                      left: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      className="city-dot"
                      style={{ background: agency.dot }}
                    />
                    <span
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#fff",
                        textShadow: "0 1px 12px rgba(0,0,0,.6)",
                      }}
                    >
                      {agency.city}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "18px 18px 20px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: "#fee2e2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <FaMapMarkerAlt size={12} color="#e53e3e" />
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "rgba(0,0,0,.65)",
                        lineHeight: 1.55,
                        fontWeight: 500,
                      }}
                    >
                      {agency.address}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 14,
                    }}
                  >
                    {agency.phones.map((phone) => (
                      <a
                        key={phone}
                        className="phone-chip"
                        href={`tel:+51${phone.replace(/\s/g, "")}`}
                      >
                        <FaPhoneAlt size={10} color="#25D366" />
                        {phone}
                      </a>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {agency.maps && (
                      <a
                        className="maps-btn"
                        href={agency.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaMapMarkerAlt size={11} /> Maps{" "}
                        <FaArrowRight size={10} />
                      </a>
                    )}
                    {agency.whatsapp && (
                      <a
                        className="wsp-btn"
                        href={`https://wa.me/${agency.whatsapp}?text=Hola!%20Estoy%20en%20${encodeURIComponent(agency.city)}%20y%20quiero%20consultar%20sobre%20pasajes%20%F0%9F%9A%8D`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp size={13} /> WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        <div
          className="cta-banner"
          style={{
            marginTop: 56,
            background: "linear-gradient(135deg,#0d1117 0%,#0f2a1a 100%)",
            borderRadius: 20,
            padding: "40px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -60,
              top: -60,
              width: 280,
              height: 280,
              background: "rgba(26,140,60,.08)",
              borderRadius: "50%",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#4ade80",
                marginBottom: 8,
              }}
            >
              ¿No encontraste tu ciudad?
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(20px,3vw,26px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 6,
              }}
            >
              Escríbenos por WhatsApp
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.5)",
                lineHeight: 1.65,
              }}
            >
              Te informamos de rutas, horarios y precios desde cualquier punto
              del norte del Perú.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <a
              href="https://wa.me/51999333419?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20rutas%20y%20pasajes%20%F0%9F%9A%8D"
              target="_blank"
              rel="noopener noreferrer"
              className="wsp-btn"
              style={{ padding: "14px 24px", fontSize: 14, borderRadius: 12 }}
            >
              <FaWhatsapp size={18} /> Escribir ahora <FaArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
