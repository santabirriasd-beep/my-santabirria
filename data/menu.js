// data/menu.js
const menuData = {
  destacados: [
    {
      id: "quesabirrias",
      name: "Quesabirrias",
      desc: "La estrella de la casa, tres tortillas bañadas en la grasa de la birria, su porción de proteína y consomé para dipear.",
      price: 6.99,
      image: "/platos/ChatGPT Image 6 sept 2025, 11_49_58 p.m..png"
    },
    {
      id: "CbA1",
      name: "Conazo de Birria",
      desc: "Tortilla de trigo dorada y crujiente en forma de cono, rellena de frijoles refritos, crema agria y birria deshebrada, queso fundido, caldo para dipear y coronada con guacamole fresco. Una creación Street Food con el sello único de Santa Birria.",
      price: 7.00,
      image: "/platos/ChatGPT Image 7 sept 2025, 10_31_50 a.m..png"
    },
    {
      id: "Pz1",
      name: "Pizza Birria",
      desc: "Tres tortillas de trigo doradas y crujientes, rellenas de un mix de quesos (cheddar y mozzarella), birria deshebrada; coronada con guacamole, pico de gallo y salsas picantes.",
      price: 15.00,
      image: "/platos/ChatGPT Image 10 sept 2025, 09_42_03 p.m..png"
    },
    {
      id: "NaM",
      name: "La Cumbre Azteca",
      desc: "Un volcán lleno de sabor: totopos con auténtico maíz, proteína a elección, guarniciones de la casa; coronado con queso fundido, cheddar y salsa chipotle.",
      price: 7.50,
      image: "/platos/ChatGPT Image 10 sept 2025, 09_49_56 p.m..png"
    },
    {
      id: "BSB1",
      name: "Burrito Santa Birria",
      desc: "Birria, frijoles, queso fundido, guacamole, crema agria, lechuga y pico de gallo.",
      price: 7.25,
      image: "/platos/burrito-santa-birria.png"
    },
    {
      id: "CBU1",
      name: "Concha de Birria (unidad)",
      desc: "Concha crujiente de maíz con queso, birria y guarniciones de la casa.",
      price: 2.50,
      image: "/platos/concha-birria.png"
    },
    {
      id: "Tst1",
      name: "Tostada de Tinga",
      desc: "Tortilla de maíz crujiente con pollo deshebrado en jitomate, frijoles refritos y cebolla en escabeche; coronada con crema agria, lechuga, queso rallado y aguacate.",
      price: 4.50,
      image: "/platos/tingas.jpg"
    },
    {
      id: "CB1",
      name: "Caldo de Birria",
      desc: "Tradicional, con totopos, birria, lechuga fresca, limón y crema agria.",
      price: 6.50,
      image: "/platos/caldo-birria.png"
    },
    {
      id: "GB",
      name: "Gringa de Birria",
      desc: "Tortilla de trigo dorada con mix de quesos, birria, guacamole, pico de gallo y lechuga.",
      // Sugerencia: usa la ruta que tengas disponible
      image: "/platos/gringa.png",
      // Para compatibilidad con componentes que esperan 'price' plano, puedes usar el precio default:
      price: 5.50,
      sizes: [
        { id: "12", label: "12 cm", price: 3.50 },
        { id: "16", label: "16 cm", price: 5.50 }, // default
        { id: "25", label: "25 cm", price: 6.25 }
      ],
      defaultSizeId: "16"
    },
    {
      id: "BRM1",
      name: "Birriamen",
      desc: "Fideos estilo urbano en caldo de birria con carne deshebrada.",
      price: 7.75,
      image: "/platos/birriamen.png"
    },
    {
      id: "FT10",
      name: "Fuente de Tacos (10 und)",
      desc: "Diez tacos de birria con nachos y guarniciones; ideal para compartir.",
      price: 22.50,
      image: "/platos/fuente-tacos-10.png"
    }
  ],

  combos: [
    {
      id: "c1",
      name: "El Pecado Mortal",
      desc: "Tres quesatacos + Agua de Jamaica + Totopos artesanales + Guarniciones de la casa.",
      price: 8.99,
      image: "/platos/ChatGPT Image 7 sept 2025, 07_46_55 p.m..png"
    },
    {
      id: "c2",
      name: "La Última Cena",
      desc: "Mini Pizza Birria + Horchata + Caldo de Birria + Flan Napolitano + Guarniciones de la casa.",
      price: 14.99,
      image: "/platos/ChatGPT Image 10 sept 2025, 10_16_58 p.m..png"
    },
    {
      id: "c3",
      name: "Tres Plomasos",
      desc: "Conos pequeños de maíz rellenos de Birria, Pastor y Pollo + Agua de Jamaica + Totopos artesanales + Guarniciones de la casa.",
      price: 8.99,
      image: "/platos/ChatGPT Image 10 sept 2025, 10_19_54 p.m..png"
    },
    {
      id: "c4",
      name: "El Forastero",
      desc: "2 Tingas de Pollo + 2 Tingas de Birria + 2 Bebidas + Flan Napolitano + Guarniciones de la casa.",
      price: 9.99,
      image: "/platos/ChatGPT Image 10 sept 2025, 10_22_45 p.m..png"
    }
  ],

  bebidas: [
    {
      id: "b1",
      name: "Agua de Jamaica",
      desc: "Refrescante y natural, hecha con flores de jamaica infusionadas y un toque de dulzor.",
      price: 1.25,
      image: "/platos/ChatGPT Image 7 sept 2025, 11_20_57 p.m..png"
    },
    {
      id: "b2",
      name: "Horchata",
      desc: "Tradicional a base de arroz y canela, cremosa y refrescante.",
      price: 1.50,
      image: "/platos/ChatGPT Image 7 sept 2025, 11_26_22 p.m..png"
    },
    {
      id: "b3",
      name: "Gaseosas",
      desc: "¿Siempre vas por lo seguro? Aquí están las clásicas que nunca fallan.",
      price: 1.00,
      image: "/platos/ChatGPT Image 7 sept 2025, 11_27_30 p.m..png"
    },
    {
      id: "b4",
      name: "Güitig",
      desc: "Agua mineral ecuatoriana.",
      price: 1.50,
      image: "/platos/ChatGPT Image 7 sept 2025, 11_26_22 p.m..png"
    }
  ],

  cervezasYMicheladas: [
    { id: "MIC1", name: "Michelada Santa Birria", price: 4.00, image: "/bebidas/michelada.png" },
    { id: "CAN1", name: "Cantarito",              price: 5.00, image: "/bebidas/cantarito.png" },
    { id: "CERCOR", name: "Corona",   price: 3.00, image: "/bebidas/corona.png" },
    { id: "CERMOD", name: "Modelo",   price: 3.50, image: "/bebidas/modelo.png" },
    { id: "CERHEI", name: "Heineken", price: 3.00, image: "/bebidas/heineken.png" },
    { id: "CERPIL", name: "Pilsener", price: 2.50, image: "/bebidas/pilsener.png" },
    { id: "CERCLB", name: "Club",     price: 2.50, image: "/bebidas/club.png" },
    { id: "CERSOL", name: "Sol",      price: 3.00, image: "/bebidas/sol.png" }
  ],

  porcionesExtra: [
    { id: "PXG",  name: "Guacamole", desc: "Porción extra.", price: 1.00 },
    { id: "PXS",  name: "Salsas",    desc: "Porción extra.", price: 1.00 },
    { id: "PXF",  name: "Frijoles",  desc: "Porción extra.", price: 1.50 }
  ],

  temporada: [
    {
      id: "temp_agch",
      name: "Aguachile",
      desc: "Camarón en limón, chile y pepino; fresco y picante.",
      price: 7.99,
      image: "/platos/ChatGPT Image 6 sept 2025, 10_59_24 p.m..png",
      available: false
    },
    {
      id: "temp_nogada",
      name: "Chile en Nogada",
      desc: "Relleno tradicional con salsa de nuez, granada y perejil.",
      price: 8.99,
      image: "/platos/ChatGPT Image 10 sept 2025, 11_13_57 p.m..png",
      available: false
    },
    {
      id: "temp_mole",
      name: "Mole con Pollo",
      desc: "Pollo bañado en mole artesanal, con arroz y tortillas calientes.",
      price: 8.50,
      image: "/platos/ChatGPT Image 10 sept 2025, 11_20_20 p.m..png",
      available: false
    }
  ],

  mensajeCambioProteina: {
    title: "¡¡¡Por cambiar a la Santa Birria!!!",
    subtitle: "Tu sacrificio será ¡¡¡10 ctvs!!! 🌮🔥"
  }
};

export default menuData;
