// ---------------------------------------------------------------------------
// PRODUCT / PRICE LIST DATA
// ---------------------------------------------------------------------------
// Edit ONLY this file to update the price list shown on the website. The
// layout (HTML/CSS/JS) never needs to change when you add, remove, or edit
// items — the site renders this data as a searchable, filterable table,
// grouped by category.
//
// Structure:
//   menuCategories = [
//     {
//       id:   "unique-slug",     // used internally (and as the filter button), keep it short & unique
//       name: "Category Name",   // shown as a table heading and filter button label
//       items: [
//         {
//           name:        "Product Name",
//           description: "Short one-line description of the product.",
//           price:       "₹0",   // shown exactly as written, any format/currency
//         },
//         ...
//       ]
//     },
//     ...
//   ]
//
// This is the real 2026 price list. It's grouped into 6 broad categories
// (rather than the ~17 narrower ones on the original supplier price list) so
// the category filter row on the site stays short — keep new products under
// whichever of these 6 groups fits best, rather than adding new categories,
// unless the list grows enough to justify splitting one out again.
// ---------------------------------------------------------------------------

export const menuCategories = [
  {
    id: "giftbox",
    name: "Giftbox",
    items: [
      { name: "36 Item Giftbox", description: "Sold per box", price: "₹600" },
      { name: "41 Item Giftbox", description: "Sold per box", price: "₹720" },
      { name: "16 Item Giftbox", description: "Sold per box", price: "₹260" },
    ],
  },
  {
    id: "sparklers",
    name: "Sparklers",
    items: [
      { name: "7cm Electric Sparklers (10 Pcs)", description: "Sold per box", price: "₹10" },
      { name: "7cm Colour Sparklers (10 Pcs)", description: "Sold per box", price: "₹15" },
      { name: "7cm Green Sparklers (10 Pcs)", description: "Sold per box", price: "₹15" },
      { name: "15cm Electric Sparklers (10 Pcs)", description: "Sold per box", price: "₹55" },
      { name: "15cm Colour Sparklers (10 Pcs)", description: "Sold per box", price: "₹55" },
      { name: "12cm Electric Sparklers (10 Pcs)", description: "Sold per box", price: "₹25" },
      { name: "30cm Electric Sparklers (5 Pcs)", description: "Sold per box", price: "₹55" },
      { name: "30cm Colour Sparklers (5 Pcs)", description: "Sold per box", price: "₹55" },
      { name: "30cm Red Sparklers (5 Pcs)", description: "Sold per box", price: "₹60" },
      { name: "50cm Electric Sparklers (5 Pcs)", description: "Sold per box", price: "₹190" },
      { name: "50cm Crackling Sparklers (5 Pcs)", description: "Sold per box", price: "₹205" },
      { name: "50cm Supermix Sparklers (10 Pcs)", description: "Sold per box", price: "₹230" },
      { name: "30cm Green Sparklers", description: "Sold per box", price: "₹50" },
      { name: "15cm Green Sparklers", description: "Sold per box", price: "₹50" },
      { name: "12cm Colour Sparklers", description: "Sold per box", price: "₹30" },
      { name: "10cm Electric Sparklers", description: "Sold per box", price: "₹20" },
      { name: "10cm Colour Sparklers", description: "Sold per box", price: "₹20" },
      { name: "Rotating Sparklers", description: "Sold per box", price: "₹190" },
      { name: "Fancy Sparklers", description: "Sold per box", price: "₹110" },
      { name: "10cm 5-in-1 Mentos", description: "Sold per box", price: "₹120" },
      { name: "15cm 5-in-1 Sparklers", description: "Sold per box", price: "₹270" },
      { name: "30cm 5-in-1", description: "Sold per box", price: "₹250" },
    ],
  },
  {
    id: "ground-and-flower-pots",
    name: "Ground Chakkars & Flower Pots",
    items: [
      { name: "Ground Chakkar Big (10 Pcs)", description: "Sold per box", price: "₹45" },
      { name: "Ground Chakkar Special (10 Pcs)", description: "Sold per box", price: "₹94" },
      { name: "Ground Chakkar Deluxe (10 Pcs)", description: "Sold per box", price: "₹115" },
      { name: "Disco Wheel", description: "Sold per box", price: "₹70" },
      { name: "Ground Chakkar Deluxe (P)", description: "Sold per box", price: "₹180" },
      { name: "Ground Chakkar Special (P)", description: "Sold per box", price: "₹145" },
      { name: "Flower Pot Colourkoti (10 Pcs)", description: "Sold per box", price: "₹250" },
      { name: "Flower Pot Super Deluxe (2 Pcs)", description: "Sold per box", price: "₹210" },
      { name: "Flower Pot Small (10 Pcs)", description: "Sold per box", price: "₹60" },
      { name: "Flower Pot Big (10 Pcs)", description: "Sold per box", price: "₹75" },
      { name: "Flower Pot Special (10 Pcs)", description: "Sold per box", price: "₹100" },
      { name: "Flower Pot Asoka (10 Pcs)", description: "Sold per box", price: "₹130" },
      { name: "Flower Pot Colourkoti Special (10 Pcs)", description: "Sold per box", price: "₹170" },
      { name: "Flower Pot Deluxe (5 Pcs)", description: "Sold per box", price: "₹165" },
      { name: "Tricolour Series (5 Pcs)", description: "Sold per box", price: "₹260" },
    ],
  },
  {
    id: "fancy-and-aerial",
    name: "Fancy & Aerial Crackers",
    items: [
      { name: "2\" Fancy", description: "Sold per piece", price: "₹105" },
      { name: "3 1/2\" Fancy Double Ball", description: "Sold per piece", price: "₹540" },
      { name: "3 1/2\" Fancy", description: "Sold per piece", price: "₹300" },
      { name: "Chotta Fancy", description: "Sold per box", price: "₹45" },
      { name: "30 Shot Multicolour", description: "Sold per box", price: "₹440" },
      { name: "25 Shot Multicolour", description: "Sold per box", price: "₹385" },
      { name: "60 Shot Multicolour", description: "Sold per box", price: "₹880" },
      { name: "120 Shot Multicolour", description: "Sold per box", price: "₹1,760" },
      { name: "Sweet 16 Whistling Shots", description: "Sold per box", price: "₹660" },
      { name: "12 Shot Rider", description: "Sold per box", price: "₹135" },
      { name: "12 Shot Red & Green", description: "Sold per box", price: "₹210" },
      { name: "Fancy (3 Pcs)", description: "Sold per box", price: "₹270" },
      { name: "Stone Electric (10 Pcs)", description: "Sold per box", price: "₹15" },
      { name: "100W Power", description: "Sold per box", price: "₹55" },
      { name: "Kitkat Big", description: "Sold per box", price: "₹60" },
      { name: "Tip Top (Chiptut) (10 Pcs)", description: "Sold per box", price: "₹30" },
      { name: "Jee Boom Baa (10 Pcs)", description: "Sold per box", price: "₹110" },
      { name: "Colour Smoke", description: "Sold per box", price: "₹130" },
      { name: "Bada Peacock", description: "Sold per box", price: "₹360" },
      { name: "Peacock Feather", description: "Sold per box", price: "₹130" },
      { name: "Penta Collection (5 Pcs)", description: "Sold per box", price: "₹165" },
      { name: "Bambaram Spinner", description: "Sold per box", price: "₹100" },
      { name: "7 Shot (5 Pcs)", description: "Sold per box", price: "₹90" },
      { name: "Snake Tablet (10 Box)", description: "Sold per box", price: "₹25" },
      { name: "Micky Mouse (5 Pcs)", description: "Sold per box", price: "₹155" },
      { name: "Photoflash (5 Pcs)", description: "Sold per box", price: "₹55" },
      { name: "Helicopter (4 Pcs)", description: "Sold per box", price: "₹95" },
      { name: "Shower (Red, Yellow, White, Green, Silver)", description: "Sold per box", price: "₹100" },
      { name: "Crackling Fountain Avenger (3 Pcs)", description: "Sold per box", price: "₹270" },
      { name: "Tin Bear", description: "Sold per piece", price: "₹100" },
      { name: "Money Bank", description: "Sold per box", price: "₹180" },
      { name: "Popcorn", description: "Sold per box", price: "₹130" },
      { name: "Butterfly", description: "Sold per box", price: "₹80" },
      { name: "Power Ranger (5 Pcs)", description: "Sold per box", price: "₹240" },
      { name: "Siren (5 Pcs)", description: "Sold per piece", price: "₹155" },
      { name: "Water Queen", description: "Sold per piece", price: "₹130" },
    ],
  },
  {
    id: "sound-crackers",
    name: "Sound Crackers",
    items: [
      { name: "3 1/2\" Lakshmi (5 Pcs)", description: "Sold per packet", price: "₹15" },
      { name: "4\" Lakshmi (5 Pcs)", description: "Sold per packet", price: "₹25" },
      { name: "4\" Special Gold Lakshmi (5 Pcs)", description: "Sold per packet", price: "₹45" },
      { name: "4\" Deluxe Lakshmi (5 Pcs)", description: "Sold per packet", price: "₹45" },
      { name: "2 3/4\" Kuruvi (5 Pcs)", description: "Sold per packet", price: "₹10" },
      { name: "Two Sound (5 Pcs)", description: "Sold per packet", price: "₹50" },
      { name: "Paper Bomb 1/4 Kg (1 Pc)", description: "Sold per box", price: "₹50" },
      { name: "Paper Bomb 500g (1 Pc)", description: "Sold per box", price: "₹100" },
      { name: "Paper Bomb 1 Kg", description: "Sold per piece", price: "₹200" },
      { name: "Lion Gun", description: "Sold per packet", price: "₹90" },
      { name: "5\" Jallikattu", description: "Sold per packet", price: "₹60" },
      { name: "Funnel Bomb", description: "Sold per box", price: "₹85" },
      { name: "Classic Bomb (10 Pcs)", description: "Sold per box", price: "₹115" },
      { name: "Digital Bomb", description: "Sold per box", price: "₹240" },
      { name: "Big Bullet", description: "Sold per box", price: "₹50" },
      { name: "Red Bijili (50 Pcs)", description: "Sold per bag", price: "₹35" },
      { name: "Gold Bijili (100 Pcs)", description: "Sold per bag", price: "₹70" },
      { name: "Micro Fuse", description: "Sold per bag", price: "₹75" },
    ],
  },
  {
    id: "novelties-and-matches",
    name: "Novelties & Matches",
    items: [
      { name: "1 1/2\" Twinkling Star (10 Pcs)", description: "Sold per box", price: "₹25" },
      { name: "4\" Twinkling Star (10 Pcs)", description: "Sold per box", price: "₹70" },
      { name: "Jill Jill (10 Pcs)", description: "Sold per box", price: "₹45" },
      { name: "Ultra Pencil", description: "Sold per box", price: "₹70" },
      { name: "Pop & Hot Pencil (3 Pcs)", description: "Sold per box", price: "₹130" },
      { name: "Robin Top 10 Matches", description: "Sold per box", price: "₹180" },
      { name: "Classic 5 In 1 Matches", description: "Sold per box", price: "₹155" },
      { name: "Mishmash Colour Matches", description: "Sold per box", price: "₹70" },
      { name: "Majesty Mega Matches (3 Box)", description: "Sold per box", price: "₹205" },
      { name: "Rollcap", description: "Sold per box", price: "₹95" },
      { name: "Men In Black Ringcap & Pistol", description: "Sold per box", price: "₹130" },
      { name: "Ring Cap (10 Packets)", description: "Sold per box", price: "₹120" },
    ],
  },
];
