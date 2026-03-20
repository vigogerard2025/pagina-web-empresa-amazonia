"use client";
import { useState, useEffect } from "react";
import {
  FaBus,
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCommentDots,
  FaClock,
} from "react-icons/fa";

const slides = [
  {
    url: "/turismo_bus_universo.jpg",
    ciudad: "Bagua Grande",
    region: "Amazonas",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1686810855843-cb595b8418bd?q=80&w=1025&auto=format&fit=crop",
    ciudad: "Bagua Grande",
    region: "Amazonas",
  },
  {
    url: "https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?q=80&w=1249&auto=format&fit=crop",
    ciudad: "Tarapoto",
    region: "San Martín",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1673288456151-4f7b871863c9?q=80&w=1170&auto=format&fit=crop",
    ciudad: "Moyobamba",
    region: "San Martín",
  },
  {
    url: "https://cocatambo.com/sites/default/files/tacacho-cecina-comida-selva-cocatambo.webp",
    ciudad: "Juanjuí",
    region: "San Martín",
  },
  {
    url: "https://images.unsplash.com/photo-1565983965700-a31031a213d8?q=80&w=1170&auto=format&fit=crop",
    ciudad: "Chachapoyas",
    region: "Amazonas",
  },
  {
    url: "https://aventuras.pe/blog/wp-content/uploads/2023/11/guacamayo-macao-e1650594697991.jpg",
    ciudad: "Selva",
    region: "Amazonas",
  },
  {
    url: "https://images.unsplash.com/photo-1578072551784-7edf375aa306?q=80&w=1074&auto=format&fit=crop",
    ciudad: "Jaén",
    region: "Cajamarca",
  },
];

// ── Rutas extraídas de manifiestos Feb-Mar 2026 ──────────────────────────────
// Precio = moda (precio más frecuente cobrado en ese par origen→destino)
const routes = [
  // Desde TRUJILLO
  { id: 1, from: "Trujillo", to: "Chiclayo", price: 30, duration: "3h" },
  { id: 2, from: "Trujillo", to: "Bagua Grande", price: 80, duration: "10h" },
  { id: 3, from: "Trujillo", to: "Bellavista", price: 120, duration: "16h" },
  { id: 4, from: "Trujillo", to: "Chamaya", price: 60, duration: "8h" },
  { id: 5, from: "Trujillo", to: "Jaén", price: 70, duration: "9h" },
  { id: 6, from: "Trujillo", to: "Juanjuí", price: 130, duration: "17h" },
  { id: 7, from: "Trujillo", to: "Moyobamba", price: 90, duration: "13h" },
  { id: 8, from: "Trujillo", to: "Naranjillo", price: 80, duration: "12h" },
  { id: 9, from: "Trujillo", to: "Naranjos", price: 80, duration: "12h" },
  {
    id: 10,
    from: "Trujillo",
    to: "Nueva Cajamarca",
    price: 80,
    duration: "12h",
  },
  { id: 11, from: "Trujillo", to: "Pedro Ruiz", price: 80, duration: "11h" },
  { id: 12, from: "Trujillo", to: "Picota", price: 110, duration: "15h" },
  { id: 13, from: "Trujillo", to: "Pomacochas", price: 80, duration: "12h" },
  { id: 14, from: "Trujillo", to: "Rioja", price: 90, duration: "13h" },
  { id: 15, from: "Trujillo", to: "Sacanche", price: 120, duration: "18h" },
  { id: 16, from: "Trujillo", to: "San Hilarión", price: 120, duration: "16h" },
  { id: 17, from: "Trujillo", to: "Saposoa", price: 120, duration: "17h" },
  {
    id: 18,
    from: "Trujillo",
    to: "Segunda Jerusalén",
    price: 70,
    duration: "12h",
  },
  { id: 19, from: "Trujillo", to: "Tabalosos", price: 100, duration: "14h" },
  { id: 20, from: "Trujillo", to: "Tarapoto", price: 100, duration: "14h" },
  { id: 21, from: "Trujillo", to: "Yurimaguas", price: 130, duration: "18h" },
  { id: 22, from: "Trujillo", to: "Alianza", price: 130, duration: "15h" },
  { id: 23, from: "Trujillo", to: "Pacanguilla", price: 20, duration: "2h" },
  { id: 24, from: "Trujillo", to: "Chepén", price: 20, duration: "2h y 30" },
  {
    id: 25,
    from: "Trujillo",
    to: "Ciudad de Dios",
    price: 20,
    duration: "2h y 30",
  },
  // Desde CHICLAYO
  { id: 101, from: "Chiclayo", to: "Trujillo", price: 30, duration: "3h" },
  { id: 102, from: "Chiclayo", to: "Bagua Grande", price: 30, duration: "6h" },
  { id: 103, from: "Chiclayo", to: "Bellavista", price: 80, duration: "14h" },
  { id: 104, from: "Chiclayo", to: "Chamaya", price: 25, duration: "4h" },
  { id: 105, from: "Chiclayo", to: "Juanjuí", price: 90, duration: "15h" },
  { id: 106, from: "Chiclayo", to: "Moyobamba", price: 50, duration: "11h" },
  { id: 107, from: "Chiclayo", to: "Naranjillo", price: 50, duration: "11h" },
  {
    id: 108,
    from: "Chiclayo",
    to: "Nueva Cajamarca",
    price: 50,
    duration: "10h",
  },
  { id: 109, from: "Chiclayo", to: "Pedro Ruiz", price: 40, duration: "7h" },
  { id: 110, from: "Chiclayo", to: "Picota", price: 80, duration: "14h" },
  { id: 111, from: "Chiclayo", to: "Pomacochas", price: 40, duration: "8h" },
  { id: 112, from: "Chiclayo", to: "Pucará", price: 30, duration: "4h" },
  { id: 113, from: "Chiclayo", to: "Rioja", price: 60, duration: "11h" },
  { id: 114, from: "Chiclayo", to: "Sacanche", price: 80, duration: "16h" },
  { id: 115, from: "Chiclayo", to: "San Hilarión", price: 80, duration: "13h" },
  {
    id: 116,
    from: "Chiclayo",
    to: "Segunda Jerusalén",
    price: 50,
    duration: "10h",
  },
  { id: 117, from: "Chiclayo", to: "Tabalosos", price: 60, duration: "12h" },
  { id: 118, from: "Chiclayo", to: "Tarapoto", price: 60, duration: "12h" },
  { id: 119, from: "Chiclayo", to: "Yurimaguas", price: 90, duration: "16h" },
  { id: 120, from: "Chiclayo", to: "Buenos Aires", price: 60, duration: "10h" },
  { id: 121, from: "Chiclayo", to: "Naranjos", price: 50, duration: "10h" },
  { id: 122, from: "Chiclayo", to: "Jaén", price: 30, duration: "5h" },
  // Desde TARAPOTO
  { id: 200, from: "Tarapoto", to: "Trujillo", price: 90, duration: "14h" },
  { id: 201, from: "Tarapoto", to: "Chiclayo", price: 60, duration: "12h" },
  { id: 202, from: "Tarapoto", to: "Bagua Grande", price: 50, duration: "6h" },
  { id: 203, from: "Tarapoto", to: "Chepén", price: 80, duration: "13h" },
  { id: 204, from: "Tarapoto", to: "Jaén", price: 60, duration: "7h" },
  { id: 205, from: "Tarapoto", to: "Olmos", price: 60, duration: "12h" },
  { id: 206, from: "Tarapoto", to: "Pacasmayo", price: 90, duration: "13h" },
  { id: 207, from: "Tarapoto", to: "Paiján", price: 90, duration: "13h" },
  { id: 208, from: "Tarapoto", to: "Pedro Ruiz", price: 50, duration: "4h" },
  // Desde MOYOBAMBA
  { id: 300, from: "Moyobamba", to: "Trujillo", price: 80, duration: "13h" },
  { id: 301, from: "Moyobamba", to: "Chiclayo", price: 50, duration: "11h" },
  { id: 302, from: "Moyobamba", to: "Bagua Grande", price: 50, duration: "5h" },
  { id: 303, from: "Moyobamba", to: "Olmos", price: 50, duration: "10h" },
  { id: 304, from: "Moyobamba", to: "Pacasmayo", price: 80, duration: "12h" },
  { id: 305, from: "Moyobamba", to: "Paiján", price: 90, duration: "13h" },
  // Desde JUANJUÍ
  { id: 400, from: "Juanjuí", to: "Trujillo", price: 110, duration: "17h" },
  { id: 401, from: "Juanjuí", to: "Chiclayo", price: 90, duration: "15h" },
  { id: 402, from: "Juanjuí", to: "Bagua Grande", price: 60, duration: "8h" },
  { id: 403, from: "Juanjuí", to: "Jaén", price: 70, duration: "9h" },
  {
    id: 404,
    from: "Juanjuí",
    to: "Nueva Cajamarca",
    price: 40,
    duration: "5h",
  },
  { id: 405, from: "Juanjuí", to: "Pacasmayo", price: 100, duration: "16h" },
  // Desde NUEVA CAJAMARCA
  {
    id: 500,
    from: "Nueva Cajamarca",
    to: "Trujillo",
    price: 80,
    duration: "12h",
  },
  {
    id: 501,
    from: "Nueva Cajamarca",
    to: "Chiclayo",
    price: 50,
    duration: "10h",
  },
  {
    id: 502,
    from: "Nueva Cajamarca",
    to: "Bagua Grande",
    price: 40,
    duration: "5h",
  },
  {
    id: 503,
    from: "Nueva Cajamarca",
    to: "Chepén",
    price: 70,
    duration: "11h",
  },
  { id: 504, from: "Nueva Cajamarca", to: "Olmos", price: 50, duration: "9h" },
  {
    id: 505,
    from: "Nueva Cajamarca",
    to: "Pacanguilla",
    price: 70,
    duration: "11h",
  },
  {
    id: 506,
    from: "Nueva Cajamarca",
    to: "Pacasmayo",
    price: 80,
    duration: "12h",
  },
  // Desde BELLAVISTA
  { id: 600, from: "Bellavista", to: "Trujillo", price: 110, duration: "16h" },
  { id: 601, from: "Bellavista", to: "Chiclayo", price: 80, duration: "14h" },
  {
    id: 602,
    from: "Bellavista",
    to: "Bagua Grande",
    price: 60,
    duration: "8h",
  },
  { id: 603, from: "Bellavista", to: "Chepén", price: 100, duration: "15h" },
  { id: 604, from: "Bellavista", to: "Jaén", price: 70, duration: "10h" },
  { id: 605, from: "Bellavista", to: "Pacasmayo", price: 100, duration: "15h" },
  // Desde PICOTA
  { id: 700, from: "Picota", to: "Trujillo", price: 120, duration: "15h" },
  { id: 701, from: "Picota", to: "Chiclayo", price: 90, duration: "14h" },
  { id: 702, from: "Picota", to: "Olmos", price: 90, duration: "13h" },
  // Desde BAGUA GRANDE
  { id: 800, from: "Bagua Grande", to: "Trujillo", price: 55, duration: "10h" },
  { id: 801, from: "Bagua Grande", to: "Chiclayo", price: 30, duration: "6h" },
  { id: 802, from: "Bagua Grande", to: "Tarapoto", price: 50, duration: "6h" },
  { id: 803, from: "Bagua Grande", to: "Juanjuí", price: 60, duration: "8h" },
  { id: 804, from: "Bagua Grande", to: "Moyobamba", price: 40, duration: "5h" },
  { id: 805, from: "Bagua Grande", to: "Picota", price: 60, duration: "9h" },
  {
    id: 806,
    from: "Bagua Grande",
    to: "Bellavista",
    price: 60,
    duration: "9h",
  },
  // Desde CHAO
  { id: 900, from: "Chao", to: "Bagua Grande", price: 90, duration: "10h" },
  { id: 901, from: "Chao", to: "Moyobamba", price: 110, duration: "13h" },
  { id: 902, from: "Chao", to: "Nueva Cajamarca", price: 100, duration: "12h" },
  { id: 903, from: "Chao", to: "Tarapoto", price: 120, duration: "14h" },
  { id: 904, from: "Chao", to: "Yurimaguas", price: 160, duration: "18h" },
  { id: 905, from: "Chao", to: "Jaén", price: 90, duration: "9h" },
  { id: 906, from: "Chao", to: "Pedro Ruiz", price: 90, duration: "11h" },
  { id: 907, from: "Chao", to: "Naranjillo", price: 100, duration: "12h" },
  { id: 908, from: "Chao", to: "Naranjos", price: 100, duration: "12h" },
  // Desde VIRÚ
  { id: 1000, from: "Virú", to: "Bagua Grande", price: 90, duration: "10h" },
  { id: 1001, from: "Virú", to: "Moyobamba", price: 100, duration: "13h" },
  {
    id: 1002,
    from: "Virú",
    to: "Nueva Cajamarca",
    price: 100,
    duration: "12h",
  },
  { id: 1003, from: "Virú", to: "Tarapoto", price: 120, duration: "14h" },
  { id: 1004, from: "Virú", to: "Yurimaguas", price: 150, duration: "18h" },
  { id: 1005, from: "Virú", to: "Juanjuí", price: 150, duration: "17h" },
  { id: 1006, from: "Virú", to: "Pomacochas", price: 90, duration: "12h" },
  // Desde PACASMAYO
  {
    id: 1100,
    from: "Pacasmayo",
    to: "Bagua Grande",
    price: 70,
    duration: "8h",
  },
  { id: 1101, from: "Pacasmayo", to: "Moyobamba", price: 90, duration: "12h" },
  { id: 1102, from: "Pacasmayo", to: "Tarapoto", price: 100, duration: "13h" },
  {
    id: 1103,
    from: "Pacasmayo",
    to: "Nueva Cajamarca",
    price: 80,
    duration: "11h",
  },
  {
    id: 1104,
    from: "Pacasmayo",
    to: "Yurimaguas",
    price: 130,
    duration: "17h",
  },
  { id: 1105, from: "Pacasmayo", to: "Rioja", price: 90, duration: "12h" },
  { id: 1106, from: "Pacasmayo", to: "Jaén", price: 70, duration: "8h" },
  { id: 1107, from: "Pacasmayo", to: "Saposoa", price: 130, duration: "16h" },
  // Desde PAIJÁN
  { id: 1200, from: "Paiján", to: "Tarapoto", price: 90, duration: "13h" },
  { id: 1201, from: "Paiján", to: "Moyobamba", price: 80, duration: "12h" },
  {
    id: 1202,
    from: "Paiján",
    to: "Nueva Cajamarca",
    price: 80,
    duration: "11h",
  },
  { id: 1203, from: "Paiján", to: "Bellavista", price: 110, duration: "16h" },
  { id: 1204, from: "Paiján", to: "Juanjuí", price: 120, duration: "17h" },
  // Desde PACANGUILLA
  {
    id: 1300,
    from: "Pacanguilla",
    to: "Moyobamba",
    price: 70,
    duration: "11h",
  },
  {
    id: 1301,
    from: "Pacanguilla",
    to: "Nueva Cajamarca",
    price: 70,
    duration: "11h",
  },
  { id: 1302, from: "Pacanguilla", to: "Tarapoto", price: 85, duration: "12h" },
  { id: 1303, from: "Pacanguilla", to: "Juanjuí", price: 100, duration: "16h" },
  {
    id: 1304,
    from: "Pacanguilla",
    to: "Bellavista",
    price: 100,
    duration: "15h",
  },
  {
    id: 1305,
    from: "Pacanguilla",
    to: "Bagua Grande",
    price: 50,
    duration: "7h",
  },
  {
    id: 1306,
    from: "Pacanguilla",
    to: "Pedro Ruiz",
    price: 50,
    duration: "8h",
  },
  {
    id: 1307,
    from: "Pacanguilla",
    to: "Yurimaguas",
    price: 120,
    duration: "17h",
  },
  {
    id: 1308,
    from: "Pacanguilla",
    to: "San Hilarión",
    price: 90,
    duration: "14h",
  },
  {
    id: 1309,
    from: "Pacanguilla",
    to: "Naranjillo",
    price: 60,
    duration: "10h",
  },
  { id: 1310, from: "Pacanguilla", to: "Picota", price: 90, duration: "14h" },
  // Desde OLMOS
  { id: 1400, from: "Olmos", to: "Moyobamba", price: 70, duration: "11h" },
  { id: 1401, from: "Olmos", to: "Juanjuí", price: 95, duration: "15h" },
  { id: 1402, from: "Olmos", to: "Picota", price: 90, duration: "13h" },
  { id: 1403, from: "Olmos", to: "Bellavista", price: 100, duration: "14h" },
  {
    id: 1404,
    from: "Olmos",
    to: "Nueva Cajamarca",
    price: 60,
    duration: "10h",
  },
  { id: 1405, from: "Olmos", to: "Naranjos", price: 60, duration: "10h" },
  // Desde PEDRO RUIZ
  { id: 1500, from: "Pedro Ruiz", to: "Trujillo", price: 70, duration: "11h" },
  { id: 1501, from: "Pedro Ruiz", to: "Chiclayo", price: 40, duration: "7h" },
  // Desde RIOJA
  { id: 1600, from: "Rioja", to: "Trujillo", price: 80, duration: "13h" },
  { id: 1601, from: "Rioja", to: "Chiclayo", price: 60, duration: "11h" },
  // Desde YURIMAGUAS
  { id: 1700, from: "Yurimaguas", to: "Trujillo", price: 120, duration: "18h" },
  { id: 1701, from: "Yurimaguas", to: "Chiclayo", price: 100, duration: "16h" },
  // Desde SEGUNDA JERUSALÉN
  {
    id: 1800,
    from: "Segunda Jerusalén",
    to: "Trujillo",
    price: 80,
    duration: "12h",
  },
  {
    id: 1801,
    from: "Segunda Jerusalén",
    to: "Chiclayo",
    price: 50,
    duration: "10h",
  },
  // Desde SAN HILARIÓN
  {
    id: 1900,
    from: "San Hilarión",
    to: "Trujillo",
    price: 105,
    duration: "16h",
  },
  {
    id: 1901,
    from: "San Hilarión",
    to: "Chiclayo",
    price: 90,
    duration: "13h",
  },
  { id: 1902, from: "San Hilarión", to: "Chepén", price: 90, duration: "14h" },
  // Desde SACANCHE
  { id: 2000, from: "Sacanche", to: "Trujillo", price: 120, duration: "18h" },
  { id: 2001, from: "Sacanche", to: "Chiclayo", price: 100, duration: "16h" },
  // Desde NARANJILLO
  { id: 2100, from: "Naranjillo", to: "Trujillo", price: 80, duration: "12h" },
  // Desde NARANJOS
  { id: 2200, from: "Naranjos", to: "Trujillo", price: 80, duration: "12h" },
  // Desde CHEPÉN
  { id: 2300, from: "Chepén", to: "Moyobamba", price: 70, duration: "11h" },
  { id: 2301, from: "Chepén", to: "Tarapoto", price: 85, duration: "13h" },
  {
    id: 2302,
    from: "Chepén",
    to: "Nueva Cajamarca",
    price: 65,
    duration: "11h",
  },
  { id: 2303, from: "Chepén", to: "Bellavista", price: 100, duration: "15h" },
  { id: 2304, from: "Chepén", to: "Sacanche", price: 100, duration: "17h" },
  { id: 2305, from: "Chepén", to: "Juanjuí", price: 100, duration: "16h" },
];

// ── Ciudades disponibles (todas las que aparecen en rutas) ──
const cities = [
  "Trujillo",
  "Chiclayo",
  "Tarapoto",
  "Moyobamba",
  "Juanjuí",
  "Nueva Cajamarca",
  "Bellavista",
  "Picota",
  "Bagua Grande",
  "Chao",
  "Virú",
  "Pacasmayo",
  "Paiján",
  "Pacanguilla",
  "Olmos",
  "Pedro Ruiz",
  "Rioja",
  "Yurimaguas",
  "Segunda Jerusalén",
  "San Hilarión",
  "Sacanche",
  "Naranjillo",
  "Naranjos",
  "Chepén",
  "Jaén",
  "Pomacochas",
  "Pucará",
  "Chamaya",
  "Alianza",
  "Buenos Aires",
  "Ciudad de Dios",
];

const F = "'Poppins', sans-serif";

// ── Horarios conocidos por ciudad de origen ────────────────────────────────
const SCHEDULES: Record<
  string,
  { time: string; label: string; note?: string }[]
> = {
  Trujillo: [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
    { time: "9:30 AM", label: "Mañana", note: "Disponible algunos días" },
  ],
  Chiclayo: [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
    { time: "9:30 AM", label: "Mañana", note: "Disponible algunos días" },
  ],
  Tarapoto: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
  Moyobamba: [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
  ],
  Juanjuí: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
  "Nueva Cajamarca": [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
  ],
  Bellavista: [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
  ],
  Picota: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
  "Bagua Grande": [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
  ],
  Chao: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
  Virú: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
  Pacasmayo: [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
    { time: "9:30 AM", label: "Mañana", note: "Disponible algunos días" },
  ],
  Paiján: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
  Pacanguilla: [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
  ],
  Olmos: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
  Rioja: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
  Yurimaguas: [
    { time: "12:00 PM", label: "Mediodía", note: "Salida principal" },
  ],
  Chepén: [{ time: "12:00 PM", label: "Mediodía", note: "Salida principal" }],
};

// ── Componente: consulta de destino + horario ──────────────────────────────
function CustomQueryCard({
  origin,
  destination,
  F,
}: {
  origin: string;
  destination: string;
  F: string;
}) {
  const [customDest, setCustomDest] = useState(destination || "");
  const [customOrigin, setCustomOrigin] = useState(origin || "");
  const [activeTab, setActiveTab] = useState<"ruta" | "horario">("ruta");

  // Horarios del origen seleccionado (custom o del buscador)
  const scheduleOrigin = customOrigin.trim() || origin || "";
  const schedules = SCHEDULES[scheduleOrigin] || null;

  const buildRutaMsg = () => {
    const from = customOrigin.trim() || origin || "mi ciudad";
    const to = customDest.trim() || destination || "mi destino";
    return encodeURIComponent(
      `Hola! 👋 Quiero consultar si hay servicio de bus de *${from}* a *${to}*.\n¿Tienen esa ruta disponible? ¿Cuál es el precio y horario? 🚍`,
    );
  };

  const buildHorarioMsg = () => {
    const from = customOrigin.trim() || origin || "mi ciudad";
    const to = customDest.trim() || destination || "mi destino";
    return encodeURIComponent(
      `Hola! 👋 Quiero consultar el *horario de salida* del bus de *${from}* a *${to}*.\n¿A qué hora sale el próximo bus disponible? 🕐🚍`,
    );
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,.08)",
    border: "1.5px solid rgba(255,255,255,.12)",
    borderRadius: 8,
    padding: "9px 12px",
    fontFamily: F,
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: F,
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,.4)",
    display: "block",
    marginBottom: 5,
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#0d1117 0%,#0f2a1a 100%)",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.07)",
        position: "relative",
      }}
    >
      {/* glow */}
      <div
        style={{
          position: "absolute",
          right: -40,
          top: -40,
          width: 200,
          height: 200,
          background: "rgba(26,140,60,.10)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* ── Tabs ── */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(255,255,255,.07)",
        }}
      >
        {(["ruta", "horario"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: "13px 16px",
              background: "transparent",
              border: "none",
              borderBottom:
                activeTab === tab
                  ? "2px solid #4ade80"
                  : "2px solid transparent",
              cursor: "pointer",
              fontFamily: F,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: activeTab === tab ? "#4ade80" : "rgba(255,255,255,.35)",
              transition: "color .2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
            }}
          >
            {tab === "ruta" ? (
              <>
                <FaCommentDots size={12} /> ¿Tu destino no está en la lista?
              </>
            ) : (
              <>
                <FaClock size={12} /> Consultar horario de salida
              </>
            )}
          </button>
        ))}
      </div>

      {/* ── Contenido ── */}
      <div
        style={{
          padding: "28px 32px",
          display: "flex",
          flexWrap: "wrap",
          gap: 28,
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Izquierda: descripción */}
        <div style={{ flex: "1 1 240px" }}>
          {activeTab === "ruta" ? (
            <>
              <div
                style={{
                  fontFamily: F,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                Consúltanos por WhatsApp
              </div>
              <p
                style={{
                  fontFamily: F,
                  fontSize: 12.5,
                  color: "rgba(255,255,255,.5)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Tenemos más de 300 rutas activas. Si tu ciudad no aparece,
                escríbenos y te confirmamos disponibilidad, precio y horario en
                minutos.
              </p>
            </>
          ) : (
            <>
              <div
                style={{
                  fontFamily: F,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                Horarios de salida
              </div>
              <p
                style={{
                  fontFamily: F,
                  fontSize: 12.5,
                  color: "rgba(255,255,255,.5)",
                  lineHeight: 1.7,
                  marginTop: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 16,
                }}
              >
                La mayoría de buses salen al{" "}
                <strong style={{ color: "#f5c518" }}>
                  mediodía (12:00 PM)
                </strong>
                . En algunas rutas y fechas también hay salida a las{" "}
                <strong style={{ color: "#f5c518" }}>9:30 AM</strong>.
              </p>

              {/* Chips de horario según origen */}
              {schedules ? (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  {schedules.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background:
                          i === 0
                            ? "rgba(245,197,24,.10)"
                            : "rgba(255,255,255,.05)",
                        border: `1px solid ${i === 0 ? "rgba(245,197,24,.3)" : "rgba(255,255,255,.08)"}`,
                        borderRadius: 10,
                        padding: "10px 14px",
                      }}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 8,
                          background:
                            i === 0
                              ? "rgba(245,197,24,.15)"
                              : "rgba(255,255,255,.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <FaClock
                          size={15}
                          color={i === 0 ? "#f5c518" : "rgba(255,255,255,.4)"}
                        />
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: F,
                            fontSize: 16,
                            fontWeight: 800,
                            color: i === 0 ? "#f5c518" : "#fff",
                            lineHeight: 1,
                          }}
                        >
                          {s.time}
                        </div>
                        <div
                          style={{
                            fontFamily: F,
                            fontSize: 10,
                            color: "rgba(255,255,255,.4)",
                            marginTop: 2,
                          }}
                        >
                          {s.label} · {s.note}
                        </div>
                      </div>
                      {i === 0 && (
                        <div
                          style={{
                            marginLeft: "auto",
                            background: "#f5c518",
                            color: "#0d1117",
                            fontSize: 9,
                            fontWeight: 800,
                            letterSpacing: ".1em",
                            padding: "3px 8px",
                            borderRadius: 6,
                            textTransform: "uppercase",
                          }}
                        >
                          Principal
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: 10,
                    padding: "12px 16px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: 12,
                      color: "rgba(255,255,255,.4)",
                      lineHeight: 1.6,
                    }}
                  >
                    {scheduleOrigin
                      ? `No tenemos el horario exacto de ${scheduleOrigin} en este momento.`
                      : "Selecciona una ciudad de origen para ver sus horarios."}
                    <br />
                    Consúltanos por WhatsApp para horarios actualizados.
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Derecha: formulario + botón */}
        <div
          style={{
            flex: "1 1 280px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Desde</label>
              <input
                style={inputStyle}
                placeholder={origin || "Ej. Trujillo"}
                value={customOrigin}
                onChange={(e) => setCustomOrigin(e.target.value)}
                onFocus={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = "#4ade80";
                }}
                onBlur={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    "rgba(255,255,255,.12)";
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Hasta</label>
              <input
                style={inputStyle}
                placeholder={destination || "Ej. Tocache"}
                value={customDest}
                onChange={(e) => setCustomDest(e.target.value)}
                onFocus={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = "#4ade80";
                }}
                onBlur={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    "rgba(255,255,255,.12)";
                }}
              />
            </div>
          </div>

          <a
            href={`https://wa.me/51966198771?text=${activeTab === "ruta" ? buildRutaMsg() : buildHorarioMsg()}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "linear-gradient(135deg,#25D366,#128C7E)",
              color: "#fff",
              borderRadius: 10,
              padding: "12px 20px",
              fontFamily: F,
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: ".04em",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(37,211,102,.35)",
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = ".88";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}
          >
            <FaWhatsapp size={15} />
            {activeTab === "ruta"
              ? "Consultar esta ruta por WhatsApp"
              : "Consultar horario por WhatsApp"}
          </a>

          {activeTab === "horario" && (
            <p
              style={{
                fontFamily: F,
                fontSize: 11,
                color: "rgba(255,255,255,.3)",
                textAlign: "center",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              ⚠️ Los horarios pueden variar según disponibilidad y fecha.
              Confirma siempre por WhatsApp antes de presentarte.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BusTransportPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      4000,
    );
    return () => clearInterval(interval);
  }, []);

  const filteredRoutes = routes.filter((r) => {
    if (origin && r.from !== origin) return false;
    if (destination && r.to !== destination) return false;
    return true;
  });

  const handleSearch = () => {
    setSearched(true);
    setSelectedRoute(null);
    setTimeout(
      () =>
        document
          .getElementById("results-section")
          ?.scrollIntoView({ behavior: "smooth" }),
      100,
    );
  };

  return (
    <div
      style={{
        fontFamily: F,
        background: "#fff",
        minHeight: "100vh",
        color: "#111",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600;1,700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }

        @keyframes slideUp  { from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);} }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.5);} }
        @keyframes resultsIn{ from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);} }
        @keyframes zoomSlow { from{transform:scale(1);}to{transform:scale(1.08);} }

        .slide-bg { position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;transition:opacity .8s ease;animation:zoomSlow 7s ease forwards; }
        .slide-bg.visible{opacity:1;} .slide-bg.hidden{opacity:0;}
        .animate-up { animation:slideUp .7s ease forwards; }

        .search-card{background:rgba(255,255,255,.97);border-radius:20px;padding:24px 28px 22px;box-shadow:0 24px 64px rgba(0,0,0,.22);max-width:880px;width:100%;margin:0 auto;}
        .search-fields-row{display:flex;align-items:stretch;background:#f9fafb;border:1.5px solid #e5e7eb;border-radius:14px;overflow:hidden;}
        .search-field{display:flex;flex-direction:column;gap:4px;flex:1;padding:14px 18px;}
        .search-field label{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(0,0,0,.4);font-family:'Poppins',sans-serif;}
        .search-select{border:none;outline:none;font-family:'Poppins',sans-serif;font-size:13.5px;font-weight:600;color:#111;background:transparent;cursor:pointer;padding:4px 0;appearance:none;-webkit-appearance:none;width:100%;}
        .search-select option{background:#fff;color:#111;}
        .search-date{border:none;outline:none;font-family:'Poppins',sans-serif;font-size:13.5px;font-weight:600;color:#111;background:transparent;cursor:pointer;padding:4px 0;width:100%;}
        .search-date::-webkit-calendar-picker-indicator{opacity:.5;cursor:pointer;}
        .field-divider{width:1px;background:#e5e7eb;align-self:stretch;margin:0;flex-shrink:0;}
        .btn-search{background:linear-gradient(135deg,#1a8c3c,#0f5c28);color:#fff;border:none;border-radius:12px;padding:14px 24px;font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;white-space:nowrap;box-shadow:0 4px 18px rgba(26,140,60,.4);transition:opacity .2s,transform .1s;display:flex;align-items:center;gap:8px;}
        .btn-search:hover{opacity:.88;transform:translateY(-1px);}

        .route-card{background:#fff;border:1.5px solid #e5e7eb;border-radius:14px;padding:20px 22px;cursor:pointer;transition:border-color .2s,box-shadow .2s,transform .15s;animation:resultsIn .4s ease forwards;opacity:0;}
        .route-card:hover{border-color:#1a8c3c;box-shadow:0 6px 24px rgba(26,140,60,.1);transform:translateY(-2px);}
        .route-card.selected{border-color:#1a8c3c;box-shadow:0 6px 24px rgba(26,140,60,.15);background:#f0fdf4;}
        .btn-primary{background:linear-gradient(135deg,#1a8c3c,#0f5c28);color:#fff;border:none;padding:12px 24px;font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;border-radius:8px;transition:opacity .2s,transform .1s;box-shadow:0 4px 14px rgba(26,140,60,.3);}
        .btn-primary:hover{opacity:.88;transform:translateY(-1px);}

        .feat-icon{width:48px;height:48px;border-radius:12px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:22px;}
        .feat-card{border-radius:14px;padding:24px;display:flex;gap:16px;align-items:flex-start;transition:transform .2s,box-shadow .2s;}

        .no-results-wrap{text-align:center;padding:80px 20px;}

        @media(max-width:768px){
          .hero-content{padding:60px 20px 100px!important;}
          .hero-title{font-size:clamp(28px,8vw,44px)!important;}
          .hero-desc{font-size:13px!important;max-width:100%!important;}
          .hero-line{display:none!important;}
          .search-card{padding:16px!important;border-radius:14px!important;}
          .search-fields-row{flex-direction:column!important;}
          .field-divider{width:100%!important;height:1px!important;}
          .routes-section{padding:0 16px 48px!important;}
          .routes-grid{grid-template-columns:1fr!important;}
          .features-section{padding:48px 16px!important;}
          .features-grid{grid-template-columns:1fr!important;}
          .footer-inner{flex-direction:column!important;align-items:flex-start!important;padding:24px 16px!important;gap:20px!important;}
        }
        @media(max-width:480px){
          .hero-stats{flex-direction:column!important;border-radius:10px!important;}
          .hero-stats>div{border-right:none!important;border-bottom:1px solid rgba(255,255,255,.08)!important;}
          .hero-stats>div:last-child{border-bottom:none!important;}
        }
      `}</style>

      {/* ════ HERO ════ */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.url}
            alt={slide.ciudad}
            className={`slide-bg ${i === current ? "visible" : "hidden"}`}
            style={{ zIndex: i === current ? 1 : 0 }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "linear-gradient(110deg,rgba(5,12,28,.60) 0%,rgba(8,20,45,.40) 55%,rgba(5,12,28,.10) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            zIndex: 2,
            background: "linear-gradient(to top,rgba(0,0,0,.45),transparent)",
          }}
        />
        <div
          className="hero-line"
          style={{
            position: "absolute",
            left: 44,
            top: "18%",
            bottom: "18%",
            width: 3,
            zIndex: 3,
            background:
              "linear-gradient(to bottom,transparent,#f5c518 20%,#f5c518 80%,transparent)",
            borderRadius: 2,
            opacity: 0.75,
          }}
        />

        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 72px 120px",
            width: "100%",
          }}
        >
          <div className="animate-up" style={{ maxWidth: 880 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,.09)",
                border: "1px solid rgba(255,255,255,.22)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".12em",
                color: "#e2e8f0",
                textTransform: "uppercase",
                marginBottom: 24,
                backdropFilter: "blur(10px)",
                fontFamily: F,
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
              Servicio Nacional
            </div>

            <h1
              className="hero-title"
              style={{
                fontFamily: F,
                fontSize: "clamp(36px,5.5vw,62px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 18,
                color: "#fff",
                textShadow: "0 2px 28px rgba(0,0,0,.45)",
              }}
            >
              Viaja por la <br />
              ruta nor oriental
              <br />
              <span style={{ fontStyle: "italic", color: "#f5c518" }}>
                del Perú
              </span>
              <br />
              con confianza
            </h1>

            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 22,
                alignItems: "center",
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
              className="hero-desc"
              style={{
                fontFamily: F,
                color: "rgba(215,225,240,.85)",
                fontSize: 15.5,
                lineHeight: 1.85,
                maxWidth: 490,
                marginBottom: 36,
                fontWeight: 400,
              }}
            >
              🌄✨ Es hora de aventurarse hacia el norte ✨🚍 Nuevos paisajes,
              nuevas experiencias y destinos que te esperan en la ruta a la
              selva.
            </p>

            {/* ── Search card ── */}
            <div className="search-card" id="search-section">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 18,
                }}
              >
                <FaBus size={17} color="#1a8c3c" />
                <span
                  style={{
                    fontFamily: F,
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#111",
                  }}
                >
                  Buses Interurbanos
                </span>
              </div>

              <div className="search-fields-row">
                <div className="search-field">
                  <label>Origen</label>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <FaMapMarkerAlt
                      size={12}
                      color="#1a8c3c"
                      style={{ flexShrink: 0 }}
                    />
                    <select
                      className="search-select"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    >
                      <option value="">Seleccionar ciudad</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field-divider" />

                <div className="search-field">
                  <label>Destino</label>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <FaMapMarkerAlt
                      size={12}
                      color="#e53e3e"
                      style={{ flexShrink: 0 }}
                    />
                    <select
                      className="search-select"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    >
                      <option value="">Seleccionar ciudad</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field-divider" />

                <div className="search-field">
                  <label>Ida</label>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <FaCalendarAlt
                      size={12}
                      color="#888"
                      style={{ flexShrink: 0 }}
                    />
                    <input
                      type="date"
                      className="search-date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field-divider" />

                <div
                  style={{
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    background: "#f9fafb",
                  }}
                >
                  <button className="btn-search" onClick={handleSearch}>
                    <FaSearch size={12} /> Buscar
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              className="hero-stats"
              style={{
                display: "flex",
                gap: 0,
                background: "rgba(5,12,28,.48)",
                borderRadius: 14,
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,.10)",
                maxWidth: 460,
                boxShadow: "0 8px 32px rgba(0,0,0,.35)",
                marginTop: 28,
              }}
            >
              {[
                { value: "35+", label: "Agencias", color: "#4ade80" },
                { value: "4200", label: "Pasajeros / mes", color: "#fbbf24" },
                { value: "98%", label: "Puntualidad", color: "#60a5fa" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    padding: "16px 12px",
                    textAlign: "center",
                    borderRight:
                      i < 2 ? "1px solid rgba(255,255,255,.08)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: 26,
                      fontWeight: 800,
                      color: s.color,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: F,
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
        <div style={{ flex: 2, background: "#1a8c3c" }} />
        <div style={{ flex: 1, background: "#d42b2b" }} />
        <div style={{ flex: 1, background: "#1a4fa0" }} />
        <div style={{ flex: 1, background: "#f5c518" }} />
        <div style={{ flex: 2, background: "#1a8c3c" }} />
      </div>

      {/* ════ RESULTADOS ════ */}
      {searched && (
        <section
          id="results-section"
          className="routes-section"
          style={{
            padding: "48px 48px 72px",
            maxWidth: 1296,
            margin: "0 auto",
            animation: "resultsIn .5s ease forwards",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 28,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: F,
                  fontSize: "clamp(22px,4vw,28px)",
                  fontWeight: 700,
                  color: "#111",
                  letterSpacing: "-0.01em",
                }}
              >
                Resultados de búsqueda
              </h2>
              <p
                style={{
                  fontFamily: F,
                  color: "rgba(0,0,0,.45)",
                  fontSize: 13,
                  marginTop: 5,
                  fontWeight: 400,
                }}
              >
                {filteredRoutes.length}{" "}
                {filteredRoutes.length === 1
                  ? "ruta encontrada"
                  : "rutas encontradas"}
                {origin && ` · Desde ${origin}`}
                {destination && ` → ${destination}`}
              </p>
            </div>
            <button
              onClick={() => {
                setSearched(false);
                setOrigin("");
                setDestination("");
                setDate("");
              }}
              style={{
                background: "transparent",
                border: "1.5px solid #d1d5db",
                color: "rgba(0,0,0,.55)",
                padding: "7px 16px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontFamily: F,
                fontWeight: 600,
              }}
            >
              ✕ Limpiar búsqueda
            </button>
          </div>

          {filteredRoutes.length === 0 ? (
            <div className="no-results-wrap">
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p
                style={{
                  fontFamily: F,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "rgba(0,0,0,.5)",
                  marginBottom: 6,
                }}
              >
                No se encontraron rutas
              </p>
              <p
                style={{
                  fontFamily: F,
                  fontSize: 13,
                  color: "rgba(0,0,0,.35)",
                  marginBottom: 28,
                  fontWeight: 400,
                }}
              >
                Pero podemos consultar tu destino directamente
              </p>
              <CustomQueryCard
                origin={origin}
                destination={destination}
                F={F}
              />
            </div>
          ) : (
            <div
              className="routes-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
                gap: 14,
              }}
            >
              {filteredRoutes.map((route, i) => (
                <div
                  key={route.id}
                  className={`route-card${selectedRoute === route.id ? " selected" : ""}`}
                  style={{
                    animationDelay: `${i * 40}ms`,
                    animationFillMode: "forwards",
                  }}
                  onClick={() =>
                    setSelectedRoute(
                      selectedRoute === route.id ? null : route.id,
                    )
                  }
                >
                  {/* Price badge top-right */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 10,
                      gap: 8,
                    }}
                  >
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div
                        style={{
                          fontFamily: F,
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#111",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {route.from} <span style={{ color: "#d4a017" }}>→</span>{" "}
                        {route.to}
                      </div>
                      <div
                        style={{
                          fontFamily: F,
                          fontSize: 11.5,
                          color: "rgba(0,0,0,.4)",
                          marginTop: 3,
                          fontWeight: 400,
                        }}
                      >
                        Duración aprox.: {route.duration}
                      </div>
                    </div>
                    <div
                      style={{
                        flexShrink: 0,
                        background: "#f0fdf4",
                        border: "1.5px solid #86efac",
                        borderRadius: 10,
                        padding: "6px 12px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: F,
                          fontSize: 18,
                          fontWeight: 800,
                          color: "#1a8c3c",
                          lineHeight: 1.1,
                          letterSpacing: "-0.02em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        S/ {route.price}
                      </div>
                      <div
                        style={{
                          fontFamily: F,
                          fontSize: 9,
                          color: "#166534",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: ".06em",
                          marginTop: 1,
                        }}
                      >
                        c/persona
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: 2,
                      borderRadius: 2,
                      background:
                        "linear-gradient(90deg,#1a8c3c,#1a4fa0,#d42b2b,#f5c518)",
                      opacity: 0.5,
                    }}
                  />
                  {selectedRoute === route.id && (
                    <div
                      style={{
                        marginTop: 14,
                        paddingTop: 14,
                        borderTop: "1.5px solid #bbf7d0",
                      }}
                    >
                      <a
                        href={`https://wa.me/51966198771?text=Hola!%20Quiero%20reservar%20un%20pasaje%20de%20${encodeURIComponent(route.from)}%20a%20${encodeURIComponent(route.to)}%20por%20S/%20${route.price}%20%F0%9F%9A%8D`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          display: "flex",
                          textDecoration: "none",
                          gap: 8,
                        }}
                      >
                        <FaWhatsapp size={14} /> Reservar — S/ {route.price}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ── Banner: destino no encontrado ── */}
          {filteredRoutes.length > 0 && (
            <div style={{ marginTop: 32 }}>
              <CustomQueryCard
                origin={origin}
                destination={destination}
                F={F}
              />
            </div>
          )}
        </section>
      )}

      {/* ════ COLOR STRIP ════ */}
      <div
        style={{
          display: "flex",
          height: 4,
          overflow: "hidden",
          margin: "0 16px",
          borderRadius: 2,
        }}
      >
        <div style={{ flex: 1, background: "#1a8c3c" }} />
        <div style={{ flex: 1, background: "#d42b2b" }} />
        <div style={{ flex: 1, background: "#1a4fa0" }} />
        <div style={{ flex: 1, background: "#f5c518" }} />
      </div>

      {/* ════ FEATURES ════ */}
      <section
        className="features-section"
        style={{
          padding: "60px 48px 72px",
          maxWidth: 1296,
          margin: "0 auto",
          background: "#fff",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontFamily: F,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "#166534",
              marginBottom: 10,
            }}
          >
            ¿Por qué elegirnos?
          </div>
          <h2
            style={{
              fontFamily: F,
              fontSize: "clamp(24px,4vw,32px)",
              fontWeight: 700,
              color: "#111",
              letterSpacing: "-0.01em",
            }}
          >
            Viaja con{" "}
            <span style={{ fontStyle: "italic", color: "#d4a017" }}>
              Universo
            </span>
          </h2>
        </div>
        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 16,
          }}
        >
          {[
            {
              icon: "🛡️",
              title: "Viaje seguro",
              desc: "Unidades sometidas a inspecciones técnicas posteriores a cada servicio, bajo estrictos protocolos de seguridad y mantenimiento preventivo..",
              accent: "#1a8c3c",
              bg: "#f0fdf4",
              border: "#bbf7d0",
            },

            {
              icon: "💺",
              title: "Asientos cama",
              desc: "Butacas reclinables de 180° en rutas nocturnas para que viajes descansado.",
              accent: "#1a4fa0",
              bg: "#eff6ff",
              border: "#bfdbfe",
            },
            {
              icon: "⏱️",
              title: "Puntualidad",
              desc: "Sistema de control de horarios en tiempo real. Llegamos siempre a la hora.",
              accent: "#d42b2b",
              bg: "#fef2f2",
              border: "#fecaca",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="feat-card"
              style={{ background: f.bg, border: `1.5px solid ${f.border}` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  `0 8px 24px ${f.accent}18`;
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                className="feat-icon"
                style={{ background: `${f.accent}15` }}
              >
                {f.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: F,
                    fontWeight: 700,
                    fontSize: 14.5,
                    marginBottom: 6,
                    color: "#111",
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{
                    fontFamily: F,
                    fontSize: 13,
                    color: "rgba(0,0,0,.55)",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <footer
        style={{
          background:
            "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 60%, #f0fdf4 100%)",
          borderTop: "3px solid #1a8c3c",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decoración de fondo */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 160,
            height: 160,
            background: "rgba(26,140,60,.07)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: 60,
            width: 100,
            height: 100,
            background: "rgba(245,197,24,.08)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

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
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Logo + slogan */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/logonombreuniverso.png"
              alt="Universo"
              style={{ height: 34 }}
            />
            <span
              style={{
                fontFamily: F,
                color: "#2d5a3d",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              — ¡Siempre pensando en usted!
            </span>
          </div>

          {/* Copyright */}
          <div
            style={{
              fontFamily: F,
              color: "#5a8a6a",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            © 2025 Transporte Turismo Bus Universo S.A.C. · Todos los derechos
            reservados
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 8 }}>
            {["Términos", "Privacidad", "Soporte"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: F,
                  color: "#1a8c3c",
                  textDecoration: "none",
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "5px 12px",
                  borderRadius: 20,
                  border: "1.5px solid rgba(26,140,60,.25)",
                  background: "rgba(26,140,60,.06)",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLAnchorElement;
                  el.style.background = "#1a8c3c";
                  el.style.color = "#fff";
                  el.style.borderColor = "#1a8c3c";
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLAnchorElement;
                  el.style.background = "rgba(26,140,60,.06)";
                  el.style.color = "#1a8c3c";
                  el.style.borderColor = "rgba(26,140,60,.25)";
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
