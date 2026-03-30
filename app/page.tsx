"use client";
import { useState, useEffect, useCallback } from "react";
import {
  FaBus,
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCommentDots,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaArrowRight,
  FaExclamationCircle,
  FaUser,
  FaUsers,
} from "react-icons/fa";

// ─────────────────────────────────────────────────────────────────────────────
// SLIDES con frases motivadoras
// ─────────────────────────────────────────────────────────────────────────────
const slides = [
  {
    url: "/bus_universo_slide1.png",
    ciudad: "Bagua Grande",
    region: "Amazonas",
    frase: "11 años llevándote a tu destino con seguridad",
    subfrase: "Confía en la experiencia — reserva hoy mismo",
  },
  {
    url: "/bus_universo1.jpg",
    ciudad: "Bagua Grande",
    region: "Amazonas",
    frase: "¿Antojo de selva? Nosotros te llevamos",
    subfrase: "Rutas diarias · Salidas al mediodía",
  },
  {
    url: "/bus_universo2.jpg",
    ciudad: "Tarapoto",
    region: "San Martín",
    frase: "Tarapoto te espera — viaja con Universo",
    subfrase: "Más de 300 rutas activas en el norte del Perú",
  },
  {
    url: "/bus_universo3.jpg",
    ciudad: "Moyobamba",
    region: "San Martín",
    frase: "Ciudad de las Orquídeas, a solo un pasaje",
    subfrase: "Cómodo · Seguro · Puntual",
  },
  {
    url: "/bus_universo4.jpg",
    ciudad: "Juanjuí",
    region: "San Martín",
    frase: "Sabores de la selva te esperan en Juanjuí",
    subfrase: "¡Reserva tu asiento ahora — cupos limitados!",
  },
  {
    url: "/bus_universo5.jpg",
    ciudad: "Juanjuí",
    region: "San Martín",
    frase: "Sabores de la selva te esperan en Juanjuí",
    subfrase: "¡Reserva tu asiento ahora — cupos limitados!",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// RUTAS
// ─────────────────────────────────────────────────────────────────────────────
const routes: Route[] = [
  {
    id: 1,
    from: "Trujillo",
    to: "Chiclayo",
    price: 30,
    duration: "3h",
  },
  {
    id: 2,
    from: "Trujillo",
    to: "Bagua Grande",
    price: 80,
    duration: "10h",
  },
  { id: 3, from: "Trujillo", to: "Bellavista", price: 120, duration: "16h" },
  { id: 4, from: "Trujillo", to: "Chamaya", price: 60, duration: "8h" },
  {
    id: 5,
    from: "Trujillo",
    to: "Jaén",
    transfer: "Chamaya",
    price: 70,
    duration: "9h",
  },
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
  {
    id: 17,
    from: "Trujillo",
    to: "Saposoa",
    transfer: "Sacanche",
    price: 120,
    duration: "17h",
  },
  {
    id: 18,
    from: "Trujillo",
    to: "Segunda Jerusalén",
    price: 70,
    duration: "12h",
  },
  { id: 19, from: "Trujillo", to: "Tabalosos", price: 100, duration: "14h" },
  { id: 20, from: "Trujillo", to: "Tarapoto", price: 100, duration: "14h" },
  {
    id: 21,
    from: "Trujillo",
    to: "Yurimaguas",
    transfer: "Tarapoto",
    price: 130,
    duration: "18h",
  },
  {
    id: 22,
    from: "Trujillo",
    to: "Alianza",
    transfer: "Tarapoto",
    price: 130,
    duration: "15h",
  },
  { id: 23, from: "Trujillo", to: "Pacanguilla", price: 20, duration: "2h" },
  { id: 24, from: "Trujillo", to: "Chepén", price: 20, duration: "2h y 30" },
  {
    id: 25,
    from: "Trujillo",
    to: "Ciudad de Dios",
    price: 20,
    duration: "2h y 30",
  },
  { id: 101, from: "Chiclayo", to: "Trujillo", price: 30, duration: "3h" },
  { id: 102, from: "Chiclayo", to: "Bagua Grande", price: 30, duration: "6h" },
  { id: 103, from: "Chiclayo", to: "Bellavista", price: 80, duration: "14h" },
  { id: 104, from: "Chiclayo", to: "Chamaya", price: 25, duration: "4h" },
  {
    id: 105,
    from: "Chiclayo",
    to: "Juanjuí",
    /* sin transfer, Juanjuí es su propio desembarque */ price: 90,
    duration: "15h",
  },
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
  {
    id: 119,
    from: "Chiclayo",
    to: "Yurimaguas",
    transfer: "Tarapoto",
    price: 90,
    duration: "16h",
  },
  { id: 120, from: "Chiclayo", to: "Buenos Aires", price: 60, duration: "10h" },
  { id: 121, from: "Chiclayo", to: "Naranjos", price: 50, duration: "10h" },
  {
    id: 122,
    from: "Chiclayo",
    to: "Jaén",
    transfer: "Chamaya",
    price: 30,
    duration: "5h",
  },
  { id: 200, from: "Tarapoto", to: "Trujillo", price: 90, duration: "14h" },
  { id: 201, from: "Tarapoto", to: "Chiclayo", price: 60, duration: "12h" },
  { id: 202, from: "Tarapoto", to: "Bagua Grande", price: 50, duration: "6h" },
  { id: 203, from: "Tarapoto", to: "Chepén", price: 80, duration: "13h" },
  { id: 204, from: "Tarapoto", to: "Jaén", price: 60, duration: "7h" },
  { id: 205, from: "Tarapoto", to: "Olmos", price: 60, duration: "12h" },
  { id: 206, from: "Tarapoto", to: "Pacasmayo", price: 90, duration: "13h" },
  { id: 207, from: "Tarapoto", to: "Paiján", price: 90, duration: "13h" },
  { id: 208, from: "Tarapoto", to: "Pedro Ruiz", price: 50, duration: "4h" },
  { id: 300, from: "Moyobamba", to: "Trujillo", price: 80, duration: "13h" },
  { id: 301, from: "Moyobamba", to: "Chiclayo", price: 50, duration: "11h" },
  { id: 302, from: "Moyobamba", to: "Bagua Grande", price: 50, duration: "5h" },
  { id: 303, from: "Moyobamba", to: "Olmos", price: 50, duration: "10h" },
  { id: 304, from: "Moyobamba", to: "Pacasmayo", price: 80, duration: "12h" },
  { id: 305, from: "Moyobamba", to: "Paiján", price: 90, duration: "13h" },
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
  { id: 700, from: "Picota", to: "Trujillo", price: 120, duration: "15h" },
  { id: 701, from: "Picota", to: "Chiclayo", price: 90, duration: "14h" },
  { id: 702, from: "Picota", to: "Olmos", price: 90, duration: "13h" },
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
  { id: 900, from: "Chao", to: "Bagua Grande", price: 90, duration: "10h" },
  { id: 901, from: "Chao", to: "Moyobamba", price: 110, duration: "13h" },
  { id: 902, from: "Chao", to: "Nueva Cajamarca", price: 100, duration: "12h" },
  { id: 903, from: "Chao", to: "Tarapoto", price: 120, duration: "14h" },
  { id: 904, from: "Chao", to: "Yurimaguas", price: 160, duration: "18h" },
  { id: 905, from: "Chao", to: "Jaén", price: 90, duration: "9h" },
  { id: 906, from: "Chao", to: "Pedro Ruiz", price: 90, duration: "11h" },
  { id: 907, from: "Chao", to: "Naranjillo", price: 100, duration: "12h" },
  { id: 908, from: "Chao", to: "Naranjos", price: 100, duration: "12h" },
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
  { id: 1500, from: "Pedro Ruiz", to: "Trujillo", price: 70, duration: "11h" },
  { id: 1501, from: "Pedro Ruiz", to: "Chiclayo", price: 40, duration: "7h" },
  { id: 1600, from: "Rioja", to: "Trujillo", price: 80, duration: "13h" },
  { id: 1601, from: "Rioja", to: "Chiclayo", price: 60, duration: "11h" },
  { id: 1700, from: "Yurimaguas", to: "Trujillo", price: 120, duration: "18h" },
  { id: 1701, from: "Yurimaguas", to: "Chiclayo", price: 100, duration: "16h" },
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
  { id: 2000, from: "Sacanche", to: "Trujillo", price: 120, duration: "18h" },
  { id: 2001, from: "Sacanche", to: "Chiclayo", price: 100, duration: "16h" },
  { id: 2100, from: "Naranjillo", to: "Trujillo", price: 80, duration: "12h" },
  { id: 2200, from: "Naranjos", to: "Trujillo", price: 80, duration: "12h" },
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

const F = "'Poppins', sans-serif";

// ─────────────────────────────────────────────────────────────────────────────
// TICKET BOOKING — Solo IDA, precio más alto, pasajeros input libre, sin retorno
// ─────────────────────────────────────────────────────────────────────────────
const STEPS = ["Elegir Destino", "Itinerario", "Pasajeros", "Confirmar"];
interface Route {
  id: number;
  from: string;
  to: string;
  transfer?: string; // ← NUEVO (opcional)
  price: number;
  duration: string;
}
interface Passenger {
  name: string;
  dni: string;
}
interface BookingState {
  step: number;
  origin: string;
  destination: string;
  dateIda: string;
  selectedItinerary: number | null;
  passengerCount: string;
  passengers: Passenger[];
}

function addMins(time: string, mins: number): string {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + mins;
  const hh = Math.floor(total / 60) % 24;
  const mm = total % 60;
  const ampm = hh >= 12 ? "PM" : "AM";
  const h12 = hh > 12 ? hh - 12 : hh === 0 ? 12 : hh;
  return `${String(h12).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${ampm}`;
}

function getItineraries(price: number, duration: string) {
  const mins = Math.round(
    (parseFloat(duration.replace("h", "").split(" ")[0]) || 3) * 60,
  );
  return [
    {
      id: 1,
      departure: "05:40 PM",
      duration,
      arrivalEst: addMins("17:40", mins),
      service: "D - Normal",
      seats: 27,
      hasEscalas: true,
      price,
    },
  ];
}

function StepIndicator({ step }: { step: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        overflowX: "auto",
        paddingBottom: 4,
      }}
    >
      {STEPS.map((label, i) => {
        const active = i + 1 === step;
        const done = i + 1 < step;
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              flex: i < STEPS.length - 1 ? 1 : undefined,
              minWidth: "fit-content",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: active ? "#1a4fa0" : done ? "#1a8c3c" : "#f3f4f6",
                color: active || done ? "#fff" : "#9ca3af",
                padding: "10px 16px",
                borderRadius: 8,
                fontFamily: F,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".04em",
                textTransform: "uppercase" as const,
                whiteSpace: "nowrap" as const,
                transition: "all .3s",
                border: active
                  ? "2px solid #1a4fa0"
                  : done
                    ? "2px solid #1a8c3c"
                    : "2px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: active
                    ? "rgba(255,255,255,.2)"
                    : done
                      ? "rgba(255,255,255,.25)"
                      : "#e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 800,
                  color: active || done ? "#fff" : "#9ca3af",
                  flexShrink: 0,
                }}
              >
                {done ? <FaCheck size={9} /> : i + 1}
              </div>
              {label}
            </div>
            {i < STEPS.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background: done ? "#1a8c3c" : "#e5e7eb",
                  minWidth: 12,
                  transition: "background .3s",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function TicketBookingSection() {
  const today = new Date().toISOString().split("T")[0];
  const [state, setState] = useState<BookingState>({
    step: 1,
    origin: "",
    destination: "",
    dateIda: today,
    selectedItinerary: null,
    passengerCount: "1",
    passengers: [{ name: "", dni: "" }],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const update = (patch: Partial<BookingState>) =>
    setState((s) => ({ ...s, ...patch }));

  const matchedRoute = routes.find(
    (r) => r.from === state.origin && r.to === state.destination,
  );
  const itineraries = matchedRoute
    ? getItineraries(matchedRoute.price, matchedRoute.duration)
    : [];
  // Precio más alto = servicio Directo (último)
  const highPriceItin = itineraries[itineraries.length - 1];
  const selectedIt =
    itineraries.find((i) => i.id === state.selectedItinerary) ?? highPriceItin;
  const paxCount = Math.max(1, parseInt(state.passengerCount) || 1);
  const totalPrice = selectedIt ? selectedIt.price * paxCount : 0;

  const validate = () => {
    const e: Record<string, string> = {};
    if (state.step === 1) {
      if (!state.origin) e.origin = "Selecciona embarque";
      if (!state.destination) e.destination = "Selecciona destino";
      if (state.origin === state.destination && state.origin)
        e.destination = "Origen y destino deben ser distintos";
      if (!state.dateIda) e.dateIda = "Selecciona fecha";
    }
    if (state.step === 2 && state.selectedItinerary === null)
      e.itinerary = "Selecciona un itinerario";
    if (state.step === 3) {
      if (
        !state.passengerCount.trim() ||
        isNaN(parseInt(state.passengerCount)) ||
        parseInt(state.passengerCount) < 1
      )
        e.passengerCount = "Ingresa cantidad válida (mín. 1)";
      state.passengers.slice(0, paxCount).forEach((p, i) => {
        if (!p.name.trim()) e[`name_${i}`] = "Nombre requerido";
        if (!p.dni.trim() || p.dni.length < 8) e[`dni_${i}`] = "DNI inválido";
      });
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goNext = () => {
    if (!validate()) return;
    update({ step: Math.min(state.step + 1, 4) });
  };
  const goBack = () => update({ step: Math.max(state.step - 1, 1) });

  const syncPassengers = (countStr: string) => {
    const n = Math.max(1, parseInt(countStr) || 1);
    const pax = Array.from(
      { length: n },
      (_, i) => state.passengers[i] || { name: "", dni: "" },
    );
    update({ passengerCount: countStr, passengers: pax });
  };

  const whatsappMsg = () => {
    const lines = [
      `🚍 *RESERVA DE PASAJE — BUS UNIVERSO*`,
      ``,
      `📍 *Ruta:* ${state.origin} → ${state.destination}`,
      // ← NUEVO
      matchedRoute?.transfer
        ? `🔄 *Desembarque en:* ${matchedRoute.transfer}`
        : "",
      `📅 *Fecha:* ${state.dateIda}`,
      // ... resto igual
    ]
      .filter(Boolean)
      .join("\n");
    return encodeURIComponent(lines);
  };

  const sStyle = (err?: string): React.CSSProperties => ({
    width: "100%",
    padding: "10px 14px",
    fontFamily: F,
    fontSize: 13,
    fontWeight: 600,
    color: "#111",
    border: `2px solid ${err ? "#ef4444" : "#e5e7eb"}`,
    borderRadius: 8,
    background: "#fff",
    outline: "none",
    appearance: "none" as const,
    cursor: "pointer",
    transition: "border-color .2s",
  });
  const iStyle = (err?: string): React.CSSProperties => ({
    width: "100%",
    padding: "10px 14px",
    fontFamily: F,
    fontSize: 13,
    fontWeight: 500,
    color: "#111",
    border: `2px solid ${err ? "#ef4444" : "#e5e7eb"}`,
    borderRadius: 8,
    background: "#fff",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color .2s",
  });
  const lStyle: React.CSSProperties = {
    fontFamily: F,
    fontSize: 10,
    fontWeight: 700,
    color: "#6b7280",
    letterSpacing: ".1em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: 6,
  };

  return (
    <section style={{ background: "#f9fafb", padding: "0 0 60px" }}>
      <div
        style={{
          background: "linear-gradient(135deg,#1a4fa0 0%,#1a8c3c 100%)",
          padding: "28px 48px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 4,
            }}
          >
            <FaBus color="rgba(255,255,255,.7)" size={18} />
            <span
              style={{
                fontFamily: F,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(255,255,255,.7)",
                letterSpacing: ".15em",
                textTransform: "uppercase",
              }}
            >
              Compra tu pasaje en línea
            </span>
          </div>
          <h2
            style={{
              fontFamily: F,
              fontSize: "clamp(20px,3vw,26px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            Reserva tu viaje 🚌
          </h2>
        </div>
      </div>

      <div style={{ maxWidth: 850, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ padding: "24px 0 20px", overflowX: "auto" }}>
          <StepIndicator step={state.step} />
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: "1.5px solid #e5e7eb",
            boxShadow: "0 4px 24px rgba(0,0,0,.06)",
            overflow: "hidden",
          }}
        >
          {/* Subtitle bar */}
          <div
            style={{
              background:
                state.step === 1
                  ? "#eff6ff"
                  : state.step === 2
                    ? "#f0fdf4"
                    : state.step === 3
                      ? "#fffbeb"
                      : "#f0fdf4",
              borderBottom: "1.5px solid #e5e7eb",
              padding: "14px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap" as const,
              gap: 8,
            }}
          >
            <div
              style={{
                fontFamily: F,
                fontSize: 13,
                fontWeight: 700,
                color: "#374151",
              }}
            >
              {state.step === 1 &&
                "Selecciona tu origen, destino y fecha de viaje"}
              {state.step === 2 && (
                <>
                  <strong style={{ color: "#1a4fa0" }}>
                    {state.origin.toUpperCase()} →{" "}
                    {state.destination.toUpperCase()}
                  </strong>{" "}
                  · Elige el itinerario
                </>
              )}
              {state.step === 3 && "Ingresa los datos de los pasajeros"}
              {state.step === 4 && "Resumen y confirmación"}
            </div>
            {state.step > 1 && state.step < 4 && (
              <div
                style={{
                  fontFamily: F,
                  fontSize: 11,
                  color: "#6b7280",
                  fontWeight: 500,
                }}
              >
                {state.origin} → {state.destination} · {state.dateIda}
              </div>
            )}
          </div>

          <div style={{ padding: "28px 28px 24px" }}>
            {/* PASO 1 */}
            {state.step === 1 && (
              <div
                style={{ display: "flex", flexWrap: "wrap" as const, gap: 16 }}
              >
                <div style={{ flex: "1 1 180px" }}>
                  <label style={lStyle}>Embarque</label>
                  <select
                    style={sStyle(errors.origin)}
                    value={state.origin}
                    onChange={(e) => {
                      update({
                        origin: e.target.value,
                        selectedItinerary: null,
                      });
                      setErrors({});
                    }}
                  >
                    <option value="">Seleccionar ciudad</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.origin && (
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 11,
                        color: "#ef4444",
                        marginTop: 4,
                      }}
                    >
                      {errors.origin}
                    </div>
                  )}
                </div>
                {/* "Destino" en vez de "Desembarque" */}
                <div style={{ flex: "1 1 180px" }}>
                  <label style={lStyle}>Destino</label>
                  <select
                    style={sStyle(errors.destination)}
                    value={state.destination}
                    onChange={(e) => {
                      update({
                        destination: e.target.value,
                        selectedItinerary: null,
                      });
                      setErrors({});
                    }}
                  >
                    <option value="">Seleccionar ciudad</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.destination && (
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 11,
                        color: "#ef4444",
                        marginTop: 4,
                      }}
                    >
                      {errors.destination}
                    </div>
                  )}
                </div>
                <div style={{ flex: "1 1 150px" }}>
                  <label style={lStyle}>Fecha de viaje</label>
                  <input
                    type="date"
                    min={today}
                    style={iStyle(errors.dateIda)}
                    value={state.dateIda}
                    onChange={(e) => {
                      update({ dateIda: e.target.value });
                      setErrors({});
                    }}
                  />
                  {errors.dateIda && (
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 11,
                        color: "#ef4444",
                        marginTop: 4,
                      }}
                    >
                      {errors.dateIda}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    flex: "0 0 auto",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <button
                    onClick={goNext}
                    style={{
                      background: "linear-gradient(135deg,#1a4fa0,#1a8c3c)",
                      color: "#fff",
                      border: "none",
                      padding: "11px 28px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontFamily: F,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: ".06em",
                      textTransform: "uppercase" as const,
                      boxShadow: "0 4px 14px rgba(26,79,160,.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <FaSearch size={12} /> BUSCAR
                  </button>
                </div>
              </div>
            )}

            {/* PASO 2: ITINERARIO */}
            {state.step === 2 && (
              <div>
                {itineraries.length > 0 ? (
                  itineraries.map((itin) => (
                    <div
                      key={itin.id}
                      onClick={() => {
                        update({ selectedItinerary: itin.id });
                        setErrors({});
                      }}
                      style={{
                        border: `2px solid ${state.selectedItinerary === itin.id ? "#1a4fa0" : "#e5e7eb"}`,
                        borderRadius: 12,
                        padding: "18px 22px",
                        cursor: "pointer",
                        background:
                          state.selectedItinerary === itin.id
                            ? "#eff6ff"
                            : "#fff",
                        transition: "all .2s",
                        marginBottom: 12,
                        boxShadow:
                          state.selectedItinerary === itin.id
                            ? "0 4px 16px rgba(26,79,160,.12)"
                            : "none",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 16,
                          flexWrap: "wrap" as const,
                        }}
                      >
                        <div style={{ minWidth: 120 }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontFamily: F,
                                  fontSize: 22,
                                  fontWeight: 800,
                                  color: "#111",
                                  lineHeight: 1,
                                }}
                              >
                                {" "}
                                {itin.duration}
                                <div
                                  style={{
                                    fontFamily: F,
                                    fontSize: 10,
                                    color: "#9ca3af",
                                    fontWeight: 500,
                                    marginTop: 2,
                                  }}
                                >
                                  Duracion Aprox
                                </div>
                                {routes.transfer && (
                                  <div
                                    style={{
                                      fontFamily: F,
                                      fontSize: 11,
                                      color: "#b45309", // ámbar oscuro
                                      marginTop: 2,
                                      fontWeight: 600,
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 4,
                                    }}
                                  >
                                    🔄 Desembarque en{" "}
                                    <strong>{routes.transfer}</strong>
                                  </div>
                                )}
                              </div>
                            </div>
                            <FaArrowRight color="#d1d5db" size={12} />
                            <div></div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: 1,
                            height: 40,
                            background: "#e5e7eb",
                            flexShrink: 0,
                          }}
                        />

                        <div
                          style={{ textAlign: "center" as const, minWidth: 60 }}
                        >
                          {/* Destino */}
                          <div style={{ textAlign: "center", minWidth: 60 }}>
                            <div
                              style={{
                                fontFamily: F,
                                fontSize: 18,
                                fontWeight: 800,
                                color: "#1a8c3c",
                              }}
                            >
                              {state.destination}
                            </div>
                            <div
                              style={{
                                fontFamily: F,
                                fontSize: 10,
                                color: "#9ca3af",
                                fontWeight: 500,
                              }}
                            >
                              Destino final
                            </div>
                            {/* ← NUEVO */}
                            {matchedRoute?.transfer && (
                              <div
                                style={{
                                  marginTop: 6,
                                  fontFamily: F,
                                  fontSize: 11,
                                  fontWeight: 700,
                                  color: "#b45309",
                                  background: "#fffbeb",
                                  border: "1px solid #fcd34d",
                                  borderRadius: 6,
                                  padding: "3px 8px",
                                }}
                              >
                                🔄 Desembarque: {matchedRoute.transfer}
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          style={{
                            width: 1,
                            height: 40,
                            background: "#e5e7eb",
                            flexShrink: 0,
                          }}
                        />
                        <div
                          style={{ textAlign: "center" as const, minWidth: 70 }}
                        >
                          <div
                            style={{
                              fontFamily: F,
                              fontSize: 20,
                              fontWeight: 800,
                              color: "#1a8c3c",
                            }}
                          >
                            S/ {itin.price}
                          </div>
                          <div
                            style={{
                              fontFamily: F,
                              fontSize: 10,
                              color: "#9ca3af",
                              fontWeight: 500,
                            }}
                          >
                            c/persona
                          </div>
                        </div>
                        <button
                          style={{
                            padding: "10px 22px",
                            borderRadius: 8,
                            border: "none",
                            cursor: "pointer",
                            background:
                              state.selectedItinerary === itin.id
                                ? "#1a4fa0"
                                : "#1a8c3c",
                            color: "#fff",
                            fontFamily: F,
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: ".04em",
                            textTransform: "uppercase" as const,
                          }}
                        >
                          {state.selectedItinerary === itin.id
                            ? "✓ Elegido"
                            : "ELEGIR"}
                        </button>
                      </div>
                      {itin.hasEscalas && (
                        <div
                          style={{
                            marginTop: 12,
                            padding: "8px 12px",
                            background: "#fffbeb",
                            border: "1px solid #fcd34d",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <FaExclamationCircle color="#f59e0b" size={13} />
                          <span
                            style={{
                              fontFamily: F,
                              fontSize: 11,
                              color: "#92400e",
                              fontWeight: 500,
                            }}
                          >
                            Hora de embarque referencial. Bus proviene de otro
                            terminal.
                          </span>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div
                    style={{ textAlign: "center" as const, padding: "40px 0" }}
                  >
                    <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
                    <p
                      style={{
                        fontFamily: F,
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#6b7280",
                      }}
                    >
                      No encontramos esa ruta directa
                    </p>
                    <a
                      href={`https://wa.me/51966198771?text=${encodeURIComponent(`Hola! Quiero viajar de ${state.origin} a ${state.destination} el ${state.dateIda}. ¿Disponibilidad? 🚍`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        marginTop: 16,
                        background: "linear-gradient(135deg,#25D366,#128C7E)",
                        color: "#fff",
                        padding: "10px 22px",
                        borderRadius: 10,
                        textDecoration: "none",
                        fontFamily: F,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      <FaWhatsapp size={14} /> Consultar por WhatsApp
                    </a>
                  </div>
                )}
                {errors.itinerary && (
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: 12,
                      color: "#ef4444",
                      marginTop: 8,
                      fontWeight: 600,
                    }}
                  >
                    ⚠️ {errors.itinerary}
                  </div>
                )}
              </div>
            )}

            {/* PASO 3: PASAJEROS — input libre */}
            {state.step === 3 && (
              <div>
                <div style={{ marginBottom: 24 }}>
                  <label style={lStyle}>¿Cuántos pasajeros viajan?</label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      flexWrap: "wrap" as const,
                    }}
                  >
                    <div
                      style={{
                        position: "relative" as const,
                        flex: "0 0 150px",
                      }}
                    >
                      <FaUsers
                        size={13}
                        color="#6b7280"
                        style={{
                          position: "absolute" as const,
                          left: 12,
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none" as const,
                        }}
                      />
                      <input
                        type="number"
                        min="1"
                        max="50"
                        placeholder="Ej: 3"
                        value={state.passengerCount}
                        onChange={(e) => syncPassengers(e.target.value)}
                        style={{
                          ...iStyle(errors.passengerCount),
                          paddingLeft: 34,
                        }}
                      />
                    </div>
                    {selectedIt &&
                      parseInt(state.passengerCount) >= 1 &&
                      !isNaN(parseInt(state.passengerCount)) && (
                        <span
                          style={{
                            fontFamily: F,
                            fontSize: 13,
                            color: "#374151",
                          }}
                        >
                          Total estimado:{" "}
                          <strong style={{ color: "#1a8c3c", fontSize: 16 }}>
                            S/ {selectedIt.price * paxCount}
                          </strong>
                          <span
                            style={{
                              color: "#9ca3af",
                              fontSize: 11,
                              marginLeft: 6,
                            }}
                          >
                            ({paxCount} × S/ {selectedIt.price})
                          </span>
                        </span>
                      )}
                  </div>
                  {errors.passengerCount && (
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 11,
                        color: "#ef4444",
                        marginTop: 4,
                      }}
                    >
                      {errors.passengerCount}
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 14,
                  }}
                >
                  {state.passengers.slice(0, paxCount).map((p, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#f9fafb",
                        borderRadius: 10,
                        padding: "16px 18px",
                        border: "1.5px solid #e5e7eb",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: F,
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#1a4fa0",
                          letterSpacing: ".08em",
                          textTransform: "uppercase" as const,
                          marginBottom: 12,
                        }}
                      >
                        <FaUser size={10} style={{ marginRight: 6 }} /> Pasajero{" "}
                        {i + 1}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          flexWrap: "wrap" as const,
                        }}
                      >
                        <div style={{ flex: "1 1 200px" }}>
                          <label style={lStyle}>Nombre completo</label>
                          <input
                            style={iStyle(errors[`name_${i}`])}
                            placeholder="Ej. Juan Pérez García"
                            value={p.name}
                            onChange={(e) => {
                              const pax = [...state.passengers];
                              pax[i] = { ...pax[i], name: e.target.value };
                              update({ passengers: pax });
                              setErrors({});
                            }}
                          />
                          {errors[`name_${i}`] && (
                            <div
                              style={{
                                fontFamily: F,
                                fontSize: 11,
                                color: "#ef4444",
                                marginTop: 4,
                              }}
                            >
                              {errors[`name_${i}`]}
                            </div>
                          )}
                        </div>
                        <div style={{ flex: "0 1 160px" }}>
                          <label style={lStyle}>DNI</label>
                          <input
                            style={iStyle(errors[`dni_${i}`])}
                            placeholder="12345678"
                            maxLength={8}
                            value={p.dni}
                            onChange={(e) => {
                              const pax = [...state.passengers];
                              pax[i] = {
                                ...pax[i],
                                dni: e.target.value.replace(/\D/g, ""),
                              };
                              update({ passengers: pax });
                              setErrors({});
                            }}
                          />
                          {errors[`dni_${i}`] && (
                            <div
                              style={{
                                fontFamily: F,
                                fontSize: 11,
                                color: "#ef4444",
                                marginTop: 4,
                              }}
                            >
                              {errors[`dni_${i}`]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 4: RESUMEN */}
            {state.step === 4 && (
              <div
                style={{ display: "flex", gap: 28, flexWrap: "wrap" as const }}
              >
                <div style={{ flex: "1 1 340px" }}>
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#374151",
                      marginBottom: 14,
                    }}
                  >
                    Resumen del viaje
                  </div>
                  <div
                    style={{
                      background: "#eff6ff",
                      border: "1.5px solid #bfdbfe",
                      borderRadius: 12,
                      padding: "16px 20px",
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#1a4fa0",
                        letterSpacing: ".12em",
                        textTransform: "uppercase" as const,
                        marginBottom: 10,
                      }}
                    >
                      ✈ Solo Ida
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between" as const,
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: F,
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#111",
                        }}
                      >
                        {state.origin} → {state.destination}
                      </span>
                      <span
                        style={{
                          fontFamily: F,
                          fontSize: 13,
                          fontWeight: 800,
                          color: "#1a8c3c",
                        }}
                      >
                        S/ {selectedIt?.price ?? 0} c/u
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 11.5,
                        color: "#6b7280",
                      }}
                    >
                      📅 {state.dateIda} · 🕐 {selectedIt?.departure} ·{" "}
                      {selectedIt?.service}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#fffbeb",
                      border: "1.5px solid #fcd34d",
                      borderRadius: 12,
                      padding: "16px 20px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#92400e",
                        letterSpacing: ".12em",
                        textTransform: "uppercase" as const,
                        marginBottom: 10,
                      }}
                    >
                      👥 Pasajeros ({paxCount})
                    </div>
                    {state.passengers.slice(0, paxCount).map((p, i) => (
                      <div
                        key={i}
                        style={{
                          fontFamily: F,
                          fontSize: 12,
                          color: "#374151",
                          marginBottom: 4,
                        }}
                      >
                        {i + 1}. <strong>{p.name}</strong> — DNI: {p.dni}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: "0 1 280px" }}>
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg,#0d1117 0%,#0f2a1a 100%)",
                      borderRadius: 16,
                      padding: "24px 22px",
                      border: "1px solid rgba(255,255,255,.07)",
                      position: "sticky" as const,
                      top: 20,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 11,
                        fontWeight: 700,
                        color: "rgba(255,255,255,.4)",
                        letterSpacing: ".12em",
                        textTransform: "uppercase" as const,
                        marginBottom: 16,
                      }}
                    >
                      Total a pagar
                    </div>
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 38,
                        fontWeight: 900,
                        color: "#4ade80",
                        lineHeight: 1,
                        marginBottom: 6,
                      }}
                    >
                      S/ {totalPrice}
                    </div>
                    <div
                      style={{
                        fontFamily: F,
                        fontSize: 11.5,
                        color: "rgba(255,255,255,.35)",
                        marginBottom: 24,
                      }}
                    >
                      {paxCount} pasajero{paxCount > 1 ? "s" : ""} · solo ida
                    </div>
                    <a
                      href={`https://wa.me/51966198771?text=${whatsappMsg()}`}
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
                        padding: "13px 20px",
                        fontFamily: F,
                        fontSize: 12.5,
                        fontWeight: 700,
                        letterSpacing: ".04em",
                        textDecoration: "none",
                        boxShadow: "0 4px 16px rgba(37,211,102,.35)",
                        marginBottom: 12,
                      }}
                    >
                      <FaWhatsapp size={15} /> Confirmar por WhatsApp
                    </a>
                    <p
                      style={{
                        fontFamily: F,
                        fontSize: 10.5,
                        color: "rgba(255,255,255,.25)",
                        textAlign: "center" as const,
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      Al confirmar, un agente coordinará el pago y emitirá tu
                      boleto.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {state.step > 1 && (
            <div
              style={{
                borderTop: "1.5px solid #f3f4f6",
                padding: "16px 28px",
                display: "flex",
                justifyContent: "space-between" as const,
                alignItems: "center",
                background: "#fafafa",
              }}
            >
              <button
                onClick={goBack}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  border: "2px solid #e5e7eb",
                  color: "#6b7280",
                  padding: "9px 18px",
                  borderRadius: 8,
                  fontFamily: F,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: ".04em",
                  textTransform: "uppercase" as const,
                }}
              >
                ← Atrás
              </button>
              {state.step < 4 && (
                <button
                  onClick={goNext}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "linear-gradient(135deg,#1a4fa0,#1a8c3c)",
                    color: "#fff",
                    border: "none",
                    padding: "10px 24px",
                    borderRadius: 8,
                    fontFamily: F,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: ".05em",
                    textTransform: "uppercase" as const,
                    boxShadow: "0 4px 14px rgba(26,79,160,.3)",
                  }}
                >
                  Continuar <FaArrowRight size={10} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM QUERY CARD
// ─────────────────────────────────────────────────────────────────────────────
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
  const scheduleOrigin = customOrigin.trim() || origin || "";
  const schedules = SCHEDULES[scheduleOrigin] || null;
  const buildMsg = (tab: "ruta" | "horario") => {
    const from = customOrigin.trim() || origin || "mi ciudad";
    const to = customDest.trim() || destination || "mi destino";
    return tab === "ruta"
      ? encodeURIComponent(
          `Hola! 👋 ¿Hay bus de *${from}* a *${to}*? ¿Precio y horario? 🚍`,
        )
      : encodeURIComponent(
          `Hola! 👋 ¿A qué hora sale el bus de *${from}* a *${to}*? 🕐🚍`,
        );
  };
  const is: React.CSSProperties = {
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
    boxSizing: "border-box" as const,
  };
  const ls: React.CSSProperties = {
    fontFamily: F,
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: ".1em",
    textTransform: "uppercase" as const,
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
        position: "relative" as const,
      }}
    >
      <div
        style={{
          position: "absolute" as const,
          right: -40,
          top: -40,
          width: 200,
          height: 200,
          background: "rgba(26,140,60,.10)",
          borderRadius: "50%",
          pointerEvents: "none" as const,
        }}
      />
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
              textTransform: "uppercase" as const,
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
                <FaClock size={12} /> Consultar horario
              </>
            )}
          </button>
        ))}
      </div>
      <div
        style={{
          padding: "28px 32px",
          display: "flex",
          flexWrap: "wrap" as const,
          gap: 28,
          alignItems: "flex-start",
          position: "relative" as const,
          zIndex: 1,
        }}
      >
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
                Tenemos más de 50 rutas activas. Si tu ciudad no aparece,
                escríbenos y te confirmamos en minutos.
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
                  margin: "0 0 16px",
                }}
              >
                La mayoría salen al{" "}
                <strong style={{ color: "#f5c518" }}>
                  mediodía (12:00 PM)
                </strong>
                . Algunas rutas también a las{" "}
                <strong style={{ color: "#f5c518" }}>9:30 AM</strong>.
              </p>
              {schedules ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 8,
                  }}
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
                            textTransform: "uppercase" as const,
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
                      ? `No tenemos el horario de ${scheduleOrigin} en este momento.`
                      : "Selecciona una ciudad de origen."}
                    <br />
                    Consúltanos por WhatsApp.
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div
          style={{
            flex: "1 1 280px",
            display: "flex",
            flexDirection: "column" as const,
            gap: 10,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1 }}>
              <label style={ls}>Desde</label>
              <input
                style={is}
                placeholder={origin || "Ej. Trujillo"}
                value={customOrigin}
                onChange={(e) => setCustomOrigin(e.target.value)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={ls}>Hasta</label>
              <input
                style={is}
                placeholder={destination || "Ej. Tocache"}
                value={customDest}
                onChange={(e) => setCustomDest(e.target.value)}
              />
            </div>
          </div>
          <a
            href={`https://wa.me/51966198771?text=${buildMsg(activeTab)}`}
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
            }}
          >
            <FaWhatsapp size={15} />{" "}
            {activeTab === "ruta"
              ? "Consultar ruta por WhatsApp"
              : "Consultar horario por WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BusTransportPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      4500,
    );
    return () => clearInterval(t);
  }, [paused]);

  const prev = useCallback(() => {
    setPaused(true);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
    setTimeout(() => setPaused(false), 6000);
  }, []);
  const next = useCallback(() => {
    setPaused(true);
    setCurrent((p) => (p + 1) % slides.length);
    setTimeout(() => setPaused(false), 6000);
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
        *{box-sizing:border-box;margin:0;padding:0;}
        @keyframes slideUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
        @keyframes pulseDot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.5);}}
        @keyframes resultsIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
        @keyframes zoomSlow{from{transform:scale(1);}to{transform:scale(1.08);}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}

        .slide-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;transition:opacity .9s ease;animation:zoomSlow 8s ease forwards;}
        .slide-bg.visible{opacity:1;} .slide-bg.hidden{opacity:0;}
        .animate-up{animation:slideUp .7s ease forwards;}
        .hero-frase{animation:fadeInUp .65s ease .15s both;}
        .hero-subfrase{animation:fadeInUp .65s ease .35s both;}

        /* Botones flecha slider */
        .slider-btn{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.18);backdrop-filter:blur(6px);border:1.5px solid rgba(255,255,255,.35);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10;transition:background .2s,transform .2s;}
        .slider-btn:hover{background:rgba(255,255,255,.32);transform:translateY(-50%) scale(1.1);}
        .slider-btn.prev{left:18px;}
        .slider-btn.next{right:18px;}

        /* Dots navegación */
        .slider-dots{position:absolute;bottom:22px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:10;}
        .slider-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.4);cursor:pointer;transition:all .25s;border:none;padding:0;}
        .slider-dot.active{background:#fff;width:24px;border-radius:4px;}

        .search-card{background:rgba(255,255,255,.97);border-radius:20px;padding:24px 28px 22px;box-shadow:0 24px 64px rgba(0,0,0,.22);max-width:880px;width:100%;margin:0 auto;}
        .search-fields-row{display:flex;align-items:stretch;background:#f9fafb;border:1.5px solid #e5e7eb;border-radius:14px;overflow:hidden;}
        .search-field{display:flex;flex-direction:column;gap:4px;flex:1;padding:14px 18px;}
        .search-field label{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(0,0,0,.4);font-family:'Poppins',sans-serif;}
        .search-select{border:none;outline:none;font-family:'Poppins',sans-serif;font-size:13.5px;font-weight:600;color:#111;background:transparent;cursor:pointer;padding:4px 0;appearance:none;-webkit-appearance:none;width:100%;}
        .search-date{border:none;outline:none;font-family:'Poppins',sans-serif;font-size:13.5px;font-weight:600;color:#111;background:transparent;cursor:pointer;padding:4px 0;width:100%;}
        .field-divider{width:1px;background:#e5e7eb;align-self:stretch;flex-shrink:0;}
        .btn-search{background:linear-gradient(135deg,#1a8c3c,#0f5c28);color:#fff;border:none;border-radius:12px;padding:14px 24px;font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;white-space:nowrap;box-shadow:0 4px 18px rgba(26,140,60,.4);transition:opacity .2s;display:flex;align-items:center;gap:8px;}
        .btn-search:hover{opacity:.88;}
        .route-card{background:#fff;border:1.5px solid #e5e7eb;border-radius:14px;padding:20px 22px;cursor:pointer;transition:border-color .2s,box-shadow .2s,transform .15s;animation:resultsIn .4s ease forwards;opacity:0;}
        .route-card:hover{border-color:#1a8c3c;box-shadow:0 6px 24px rgba(26,140,60,.1);transform:translateY(-2px);}
        .route-card.selected{border-color:#1a8c3c;box-shadow:0 6px 24px rgba(26,140,60,.15);background:#f0fdf4;}
        .btn-primary{background:linear-gradient(135deg,#1a8c3c,#0f5c28);color:#fff;border:none;padding:12px 24px;font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;border-radius:8px;transition:opacity .2s;box-shadow:0 4px 14px rgba(26,140,60,.3);}
        .btn-primary:hover{opacity:.88;}
        .feat-card{border-radius:14px;padding:24px;display:flex;gap:16px;align-items:flex-start;transition:transform .2s,box-shadow .2s;}
        select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px !important;}
        @media(max-width:768px){
          .hero-content{padding:60px 20px 100px!important;}
          .slider-btn{width:36px!important;height:36px!important;}
          .search-card{padding:16px!important;border-radius:14px!important;}
          .search-fields-row{flex-direction:column!important;}
          .field-divider{width:100%!important;height:1px!important;}
          .routes-section{padding:0 16px 48px!important;}
          .routes-grid{grid-template-columns:1fr!important;}
          .features-section{padding:48px 16px!important;}
          .features-grid{grid-template-columns:1fr!important;}
          .footer-inner{flex-direction:column!important;align-items:flex-start!important;padding:24px 16px!important;gap:20px!important;}
        }
      `}</style>

      {/* ════ HERO con SLIDER ════ */}
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
            background: "linear-gradient(to top,rgba(0,0,0,.45),transparent)",
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

        {/* ── Flechas ── */}
        <button
          className="slider-btn prev"
          onClick={prev}
          aria-label="Anterior"
        >
          <FaChevronLeft size={15} />
        </button>
        <button
          className="slider-btn next"
          onClick={next}
          aria-label="Siguiente"
        >
          <FaChevronRight size={15} />
        </button>

        {/* ── Dots ── */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === current ? " active" : ""}`}
              onClick={() => {
                setPaused(true);
                setCurrent(i);
                setTimeout(() => setPaused(false), 6000);
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Línea decorativa */}
        <div
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
            {/* Badge */}
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
                marginBottom: 20,
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
              11 años de servicio · Transporte Nacional
            </div>

            <h1
              style={{
                fontFamily: F,
                fontSize: "clamp(46px,5.5vw,20px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 16,
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

            {/* Frases del slide actual — cambian con animación */}
            <div key={`frase-${current}`} style={{ marginBottom: 18 }}>
              <p
                className="hero-frase"
                style={{
                  fontFamily: F,
                  fontSize: "clamp(14px,2vw,18px)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 5,
                  textShadow: "0 1px 12px rgba(0,0,0,.5)",
                }}
              >
                ✨ {slides[current].frase}
              </p>
              <p
                className="hero-subfrase"
                style={{
                  fontFamily: F,
                  fontSize: "clamp(11px,1.5vw,14px)",
                  fontWeight: 400,
                  color: "rgba(210,230,255,.85)",
                }}
              >
                {slides[current].subfrase}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 26,
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

            {/* Search card */}

            {/* Stats — con años */}
            <div
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
                { value: "4200", label: "Pasajeros/mes", color: "#fbbf24" },
                { value: "11", label: "Años de exp.", color: "#f87171" },
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

      {/* ════ TICKET BOOKING ════ */}
      <TicketBookingSection />

      {/* ════ COLOR STRIP 2 ════ */}
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
                Resultados
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
                {filteredRoutes.length === 1 ? "ruta" : "rutas"}
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
              ✕ Limpiar
            </button>
          </div>

          {filteredRoutes.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
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
                Consulta directamente por WhatsApp
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
                        href={`https://wa.me/51966198771?text=${encodeURIComponent(`Hola! Quiero reservar pasaje de ${route.from} a ${route.to} por S/ ${route.price} 🚍`)}`}
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
          <p
            style={{
              fontFamily: F,
              fontSize: 13,
              color: "rgba(0,0,0,.5)",
              marginTop: 8,
            }}
          >
            11 años llevando pasajeros por el norte del Perú con seguridad y
            puntualidad
          </p>
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
              desc: "Unidades sometidas a inspecciones técnicas posteriores a cada servicio, bajo estrictos protocolos de seguridad.",
              accent: "#1a8c3c",
              bg: "#f0fdf4",
              border: "#bbf7d0",
            },
            {
              icon: "💺",
              title: "Asientos cama",
              desc: "Butacas reclinables de 180° en rutas nocturnas para que viajes descansado y llegues con energía.",
              accent: "#1a4fa0",
              bg: "#eff6ff",
              border: "#bfdbfe",
            },
            {
              icon: "⏱️",
              title: "Puntualidad",
              desc: "Sistema de control de horarios en tiempo real. Llegamos siempre a la hora acordada.",
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
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  background: `${f.accent}15`,
                }}
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
            "linear-gradient(135deg,#f0fdf4 0%,#dcfce7 60%,#f0fdf4 100%)",
          borderTop: "3px solid #1a8c3c",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLAnchorElement;
                  el.style.background = "rgba(26,140,60,.06)";
                  el.style.color = "#1a8c3c";
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
