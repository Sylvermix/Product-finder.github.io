import type { Product } from '../types'

// Unsplash fashion photos — grouped by category
const U = 'https://images.unsplash.com/photo-'
const Q = '?w=400&h=500&fit=crop&auto=format&q=80'

// ── Sweatshirts / Hoodies ─────────────────────────────
const SW = {
  a: `${U}1515886657613-9f3515b0c78f${Q}`, // fashion person in top
  b: `${U}1521572163474-6864f9cf17ab${Q}`, // man in grey sweatshirt
  c: `${U}1562157873-818bc0726f68${Q}`,    // casual knit top
  d: `${U}1620799140408-edc6dcb6d633${Q}`, // hoodie detail
  e: `${U}1529139574466-a303027c1d8b${Q}`, // man casual sweatshirt
  f: `${U}1542291026-7eec264c27ff${Q}`,    // dark crewneck
  g: `${U}1558618666-fcd25c85cd64${Q}`,    // white crewneck
}

// ── Polos / T-shirts ─────────────────────────────────
const PO = {
  a: `${U}1581655353564-df123a1eb820${Q}`, // polo shirt product
  b: `${U}1617137984095-74e4e5e3613f${Q}`, // man in yellow polo
  c: `${U}1576566588028-4147f3842f27${Q}`, // polo detail close-up
  d: `${U}1596755094514-f87e34085b2c${Q}`, // polo on flat surface
  e: `${U}1626497764746-6dc36546b388${Q}`, // polo shirt folded
}

// ── Jackets / Coats ──────────────────────────────────
const JA = {
  a: `${U}1551028719-00167b16eac5${Q}`,    // casual jacket
  b: `${U}1591047139829-d91aecb6caea${Q}`, // man in jacket outdoors
  c: `${U}1507679799987-c73779587ccf${Q}`, // jacket fashion
  d: `${U}1584370848010-d7fe6bc767ec${Q}`, // outerwear
  e: `${U}1516762689617-e1cffcef479d${Q}`, // coat / parka
  f: `${U}1589310243389-96a5483213a8${Q}`, // bomber style
  g: `${U}1506794778202-cad84cf45f1d${Q}`, // structured coat
}

// ── Pants / Trousers ─────────────────────────────────
const PA = {
  a: `${U}1624378439575-d8705ad7ae80${Q}`, // tailored trousers
  b: `${U}1548690312-e3b507d8c110${Q}`,    // jeans / casual pants
  c: `${U}1622470953794-aa9c70b0fb9d${Q}`, // chinos on person
  d: `${U}1541099649105-f69ad21f3246${Q}`, // pants flat-lay
  e: `${U}1490481651871-ab68de25d43d${Q}`, // pants model shot
  f: `${U}1612817288484-6f916006741a${Q}`, // slim chino
}

export const allProducts: Product[] = [
  // ── Selected gifts (high match score) ────────────────
  {
    id: 'p1',
    name: 'Essential Crewneck',
    price: 89,
    images: [SW.a, SW.b, SW.c, SW.d],
    colors: ['#1a1a1a', '#f5f5f5', '#3b5c8c', '#8c3b3b'],
    matchScore: 95,
  },
  {
    id: 'p2',
    name: 'Classic Polo',
    price: 120,
    images: [PO.a, PO.b, PO.c],
    colors: ['#ffffff', '#082415', '#c8a96e', '#4a7c59'],
    matchScore: 92,
  },
  {
    id: 'p3',
    name: 'Field Jacket',
    price: 280,
    images: [JA.a, JA.b, JA.c, JA.d],
    colors: ['#5c4a2a', '#2a3d2e', '#6b6b6b', '#1a1a1a'],
    matchScore: 88,
  },
  {
    id: 'p4',
    name: 'Tapered Chino',
    price: 150,
    images: [PA.a, PA.b, PA.c],
    colors: ['#c8b89a', '#4a4a4a', '#1a1a1a', '#8c7c6c'],
    matchScore: 85,
  },
  {
    id: 'p5',
    name: 'Premium Hoodie',
    price: 135,
    images: [SW.b, SW.c, SW.d, SW.e],
    colors: ['#082415', '#3a3a3a', '#c0c0c0', '#8b4513'],
    matchScore: 90,
  },
  {
    id: 'p6',
    name: 'Slim Fit Polo',
    price: 110,
    images: [PO.b, PO.c, PO.d, PO.e],
    colors: ['#ffffff', '#add8e6', '#ffb6c1', '#90ee90'],
    matchScore: 82,
  },
  {
    id: 'p7',
    name: 'Bomber Jacket',
    price: 320,
    images: [JA.b, JA.c, JA.f],
    colors: ['#1a1a1a', '#2f4f4f', '#8b6914'],
    matchScore: 87,
  },
  {
    id: 'p8',
    name: 'Straight Leg Pant',
    price: 175,
    images: [PA.b, PA.c, PA.d],
    colors: ['#1a1a1a', '#f5f5dc', '#4682b4', '#8b4513'],
    matchScore: 78,
  },
  // ── More gifts ───────────────────────────────────────
  {
    id: 'p9',
    name: 'Varsity Sweatshirt',
    price: 95,
    images: [SW.c, SW.d, SW.e],
    colors: ['#8b0000', '#1a1a2e', '#006400', '#8b6914'],
    matchScore: 80,
  },
  {
    id: 'p10',
    name: 'Technical Jacket',
    price: 450,
    images: [JA.c, JA.d, JA.e, JA.f],
    colors: ['#1a1a1a', '#2e4a3e', '#4a4a6a'],
    matchScore: 91,
  },
  {
    id: 'p11',
    name: 'Oxford Polo',
    price: 130,
    images: [PO.c, PO.d, PO.e],
    colors: ['#ffffff', '#ffd700', '#ff6b6b', '#4169e1'],
    matchScore: 76,
  },
  {
    id: 'p12',
    name: 'Cargo Pant',
    price: 195,
    images: [PA.c, PA.d, PA.e],
    colors: ['#556b2f', '#8b7355', '#1a1a1a', '#4a4a4a'],
    matchScore: 72,
  },
  {
    id: 'p13',
    name: 'Oversized Crewneck',
    price: 110,
    images: [SW.d, SW.e, SW.f],
    colors: ['#f5f5f5', '#d3d3d3', '#082415', '#2c2c2c'],
    matchScore: 84,
  },
  {
    id: 'p14',
    name: 'Club Jacket',
    price: 390,
    images: [JA.d, JA.e, JA.f, JA.g],
    colors: ['#1a1a1a', '#082415', '#8b6914'],
    matchScore: 89,
  },
  {
    id: 'p15',
    name: 'Athletic Polo',
    price: 98,
    images: [PO.d, PO.e, PO.a],
    colors: ['#ffffff', '#1a1a1a', '#00008b', '#006400'],
    matchScore: 74,
  },
  {
    id: 'p16',
    name: 'Slim Chino',
    price: 145,
    images: [PA.d, PA.e, PA.f],
    colors: ['#f5deb3', '#2f4f4f', '#8b4513', '#4a4a4a'],
    matchScore: 70,
  },
  {
    id: 'p17',
    name: 'French Terry Sweatshirt',
    price: 125,
    images: [SW.e, SW.f, SW.g],
    colors: ['#e8e8e8', '#082415', '#8b0000', '#1a1a1a'],
    matchScore: 83,
  },
  {
    id: 'p18',
    name: 'Parka Jacket',
    price: 480,
    images: [JA.e, JA.f, JA.g, JA.a],
    colors: ['#2e4a3e', '#556b2f', '#1a1a1a', '#4a3728'],
    matchScore: 86,
  },
  {
    id: 'p19',
    name: 'Jogging Pant',
    price: 85,
    images: [PA.e, PA.f, PA.a],
    colors: ['#1a1a1a', '#808080', '#082415', '#8b0000'],
    matchScore: 68,
  },
  {
    id: 'p20',
    name: 'Pique Polo',
    price: 105,
    images: [PO.e, PO.a, PO.b],
    colors: ['#ffffff', '#082415', '#b8860b', '#8b0000'],
    matchScore: 77,
  },
  {
    id: 'p21',
    name: 'Utility Jacket',
    price: 340,
    images: [JA.f, JA.g, JA.a],
    colors: ['#8b7355', '#556b2f', '#1a1a1a'],
    matchScore: 73,
  },
  {
    id: 'p22',
    name: 'Wide Leg Pant',
    price: 160,
    images: [PA.f, PA.a, PA.b],
    colors: ['#1a1a1a', '#f5f5dc', '#708090'],
    matchScore: 65,
  },
  {
    id: 'p23',
    name: 'Graphic Sweatshirt',
    price: 115,
    images: [SW.f, SW.g, SW.a],
    colors: ['#f5f5f5', '#1a1a1a', '#6495ed', '#dc143c'],
    matchScore: 71,
  },
  {
    id: 'p24',
    name: 'Linen Polo',
    price: 140,
    images: [PO.a, PO.c, PO.e],
    colors: ['#faebd7', '#add8e6', '#90ee90', '#f5deb3'],
    matchScore: 66,
  },
  {
    id: 'p25',
    name: 'Coach Jacket',
    price: 210,
    images: [JA.g, JA.a, JA.b],
    colors: ['#1a1a1a', '#0000cd', '#8b0000', '#006400'],
    matchScore: 79,
  },
  {
    id: 'p26',
    name: 'Relaxed Fit Chino',
    price: 135,
    images: [PA.a, PA.c, PA.e],
    colors: ['#d2b48c', '#1a1a1a', '#6b8e23'],
    matchScore: 62,
  },
  {
    id: 'p27',
    name: 'Zip-Up Sweatshirt',
    price: 120,
    images: [SW.g, SW.a, SW.c],
    colors: ['#082415', '#4a4a4a', '#8b8b6b', '#c8c8c8'],
    matchScore: 75,
  },
  {
    id: 'p28',
    name: 'Trench Coat',
    price: 490,
    images: [JA.a, JA.d, JA.g, JA.e],
    colors: ['#c19a6b', '#1a1a1a', '#4a4a4a'],
    matchScore: 81,
  },
  {
    id: 'p29',
    name: 'Jogger Pant',
    price: 95,
    images: [PA.b, PA.d, PA.f],
    colors: ['#1a1a1a', '#c8c8c8', '#082415'],
    matchScore: 60,
  },
  {
    id: 'p30',
    name: 'Performance Polo',
    price: 115,
    images: [PO.b, PO.d, PO.a],
    colors: ['#ffffff', '#1a1a1a', '#00008b', '#006400', '#8b0000'],
    matchScore: 69,
  },
  {
    id: 'p31',
    name: 'Denim Jacket',
    price: 260,
    images: [JA.b, JA.e, JA.g],
    colors: ['#4169e1', '#1a3a5c', '#6b8e9f'],
    matchScore: 64,
  },
  {
    id: 'p32',
    name: 'Thermal Sweatshirt',
    price: 105,
    images: [SW.b, SW.d, SW.f],
    colors: ['#8b7355', '#2e4a3e', '#1a1a1a', '#c8a96e'],
    matchScore: 67,
  },
]
