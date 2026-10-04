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
//           name:         "Product Name",
//           description:  "Short one-line description of the product.",
//           price:        "₹0",   // the current (discounted) price — shown exactly as written
//           originalPrice: "₹0",  // optional: shown struck through next to the price, Amazon-style.
//                                  // Omit this field entirely for an item with no discount.
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
      { name: "36 Item Giftbox", image: "assets/images/giftbox.jpg", description: "Sold per box", price: "₹600", originalPrice: "₹1,200" },
      { name: "41 Item Giftbox", image: "assets/images/giftbox.jpg", description: "Sold per box", price: "₹720", originalPrice: "₹1,440" },
      { name: "16 Item Giftbox", image: "assets/images/giftbox.jpg", description: "Sold per box", price: "₹260", originalPrice: "₹520" },
    ],
  },
  {
    id: "sparklers",
    name: "Sparklers",
    items: [
      { name: "7cm Electric Sparklers (10 Pcs)", image: "assets/images/7cm-electric.jpg", description: "Sold per box", price: "₹10", originalPrice: "₹20" },
      { name: "7cm Colour Sparklers (10 Pcs)", image: "assets/images/7cm-color.jpeg", description: "Sold per box", price: "₹15", originalPrice: "₹30" },
      { name: "7cm Green Sparklers (10 Pcs)", image: "assets/images/7-Cm-Green-Sparklers.png", description: "Sold per box", price: "₹15", originalPrice: "₹30" },
      { name: "15cm Electric Sparklers (10 Pcs)", image: "assets/images/15-cm-electric-sparklers.jpg", description: "Sold per box", price: "₹55", originalPrice: "₹110" },
      { name: "15cm Colour Sparklers (10 Pcs)", image: "assets/images/15cm-sparkler-colour.webp", description: "Sold per box", price: "₹55", originalPrice: "₹110" },
      { name: "12cm Electric Sparklers (10 Pcs)", image: "assets/images/12cm_electric.jpg", description: "Sold per box", price: "₹25", originalPrice: "₹50" },
      { name: "30cm Electric Sparklers (5 Pcs)", image: "assets/images/30cm_electric.jpg", description: "Sold per box", price: "₹55", originalPrice: "₹110" },
      { name: "30cm Colour Sparklers (5 Pcs)", image: "assets/images/30cm_colour.jpg", description: "Sold per box", price: "₹55", originalPrice: "₹110" },
      { name: "30cm Red Sparklers (5 Pcs)", image: "assets/images/30cm_red.webp", description: "Sold per box", price: "₹60", originalPrice: "₹120" },
      { name: "50cm Electric Sparklers (5 Pcs)", image: "assets/images/50cm-electric.webp", description: "Sold per box", price: "₹190", originalPrice: "₹380" },
      { name: "50cm Crackling Sparklers (5 Pcs)", image: "assets/images/50cm-colour-sparklers.jpg", description: "Sold per box", price: "₹205", originalPrice: "₹410" },
      { name: "50cm Supermix Sparklers (10 Pcs)", image: "assets/images/50cm_supermix.webp", description: "Sold per box", price: "₹230", originalPrice: "₹460" },
      { name: "30cm Green Sparklers", image: "assets/images/30-cm-green-sparklers.jpeg", description: "Sold per box", price: "₹50", originalPrice: "₹100" },
      { name: "15cm Green Sparklers", image: "assets/images/15cm-green-sparkler.jpg", description: "Sold per box", price: "₹50", originalPrice: "₹100" },
      { name: "12cm Colour Sparklers", image: "assets/images/12cm_colour.jpg", description: "Sold per box", price: "₹30", originalPrice: "₹60" },
      { name: "10cm Electric Sparklers", image: "assets/images/10cm-electric.webp", description: "Sold per box", price: "₹20", originalPrice: "₹40" },
      { name: "10cm Colour Sparklers", image: "assets/images/10cm_colour.jpg", description: "Sold per box", price: "₹20", originalPrice: "₹40" },
      { name: "Rotating Sparklers", image: "assets/images/rotating-sparklers.jpg", description: "Sold per box", price: "₹190", originalPrice: "₹380" },
      { name: "Fancy Sparklers", image: "assets/images/fancy_sparklers.webp", description: "Sold per box", price: "₹110", originalPrice: "₹220" },
      { name: "10cm 5-in-1 Mentos", image: "assets/images/10cm_5in1_mentos_sparklers.jpg", description: "Sold per box", price: "₹120", originalPrice: "₹240" },
      { name: "15cm 5-in-1 Sparklers", image: "assets/images/15cm_5in1_sparklers.jpg", description: "Sold per box", price: "₹270", originalPrice: "₹540" },
      { name: "30cm 5-in-1", image: "assets/images/30cm_5in1-sparklers.jpg", description: "Sold per box", price: "₹250", originalPrice: "₹500" },
    ],
  },
  {
    id: "ground-and-flower-pots",
    name: "Ground Chakkars & Flower Pots",
    items: [
      { name: "Ground Chakkar Big (10 Pcs)", image: "assets/images/ground_chakar_big.jpg", description: "Sold per box", price: "₹45", originalPrice: "₹90" },
      { name: "Ground Chakkar Special (10 Pcs)", image: "assets/images/ground-chakker-special.jpg", description: "Sold per box", price: "₹94", originalPrice: "₹188" },
      { name: "Ground Chakkar Deluxe (10 Pcs)", image: "assets/images/ground_chakkar_deluxe.jpg", description: "Sold per box", price: "₹115", originalPrice: "₹230" },
      { name: "Disco Wheel", image: "assets/images/disco wheel.jpg", description: "Sold per box", price: "₹70", originalPrice: "₹140" },
      { name: "Ground Chakkar Deluxe (P)", image: "assets/images/ground_chakkar_deluxe_p.jpeg", description: "Sold per box", price: "₹180", originalPrice: "₹360" },
      { name: "Ground Chakkar Special (P)", image: "assets/images/ground_chakkar_special_p.webp", description: "Sold per box", price: "₹145", originalPrice: "₹290" },
      { name: "Flower Pot Colourkoti (10 Pcs)", image: "assets/images/flower_pots_colour_koti.jpg", description: "Sold per box", price: "₹250", originalPrice: "₹500" },
      { name: "Flower Pot Super Deluxe (2 Pcs)", image: "assets/images/flower_pots_super_deluxe.webp", description: "Sold per box", price: "₹210", originalPrice: "₹420" },
      { name: "Flower Pot Small (10 Pcs)", image: "assets/images/flower_pots_small.jpeg", description: "Sold per box", price: "₹60", originalPrice: "₹120" },
      { name: "Flower Pot Big (10 Pcs)", image: "assets/images/flower_pots_big.jpg", description: "Sold per box", price: "₹75", originalPrice: "₹150" },
      { name: "Flower Pot Special (10 Pcs)", image: "assets/images/flower pot special.jpg", description: "Sold per box", price: "₹100", originalPrice: "₹200" },
      { name: "Flower Pot Asoka (10 Pcs)", image: "assets/images/flower-pots-ashoka.jpg", description: "Sold per box", price: "₹130", originalPrice: "₹260" },
      { name: "Flower Pot Colourkoti Special (10 Pcs)", image: "assets/images/colour-koti-flower-pots-special.jpg", description: "Sold per box", price: "₹170", originalPrice: "₹340" },
      { name: "Flower Pot Deluxe (5 Pcs)", image: "assets/images/flower_pots_deluxe.webp", description: "Sold per box", price: "₹165", originalPrice: "₹330" },
      { name: "Tricolour Series (5 Pcs)", image: "assets/images/tricolor.jpg", description: "Sold per box", price: "₹260", originalPrice: "₹520" },
    ],
  },
  {
    id: "fancy-and-aerial",
    name: "Fancy & Aerial Crackers",
    items: [
      { name: "2\" Fancy", image: "assets/images/2fancy.webp",description: "Sold per piece", price: "₹105", originalPrice: "₹210" },
      { name: "3 1/2\" Fancy Double Ball", image: "assets/images/31_2_fancy_double_ball.webp",description: "Sold per piece", price: "₹540", originalPrice: "₹1,080" },
      { name: "3 1/2\" Fancy", image: "assets/images/31_2_fancy.jpg",description: "Sold per piece", price: "₹300", originalPrice: "₹600" },
      { name: "Chotta Fancy", image: "assets/images/chotta-fancy.jpg", description: "Sold per box", price: "₹45", originalPrice: "₹90" },
      { name: "30 Shot Multicolour", image: "assets/images/30-Shots.jpg", description: "Sold per box", price: "₹440", originalPrice: "₹880" },
      { name: "25 Shot Multicolour", image: "assets/images/25_shot.webp", description: "Sold per box", price: "₹385", originalPrice: "₹770" },
      { name: "60 Shot Multicolour", image: "assets/images/60shots.jpeg", description: "Sold per box", price: "₹880", originalPrice: "₹1,760" },
      { name: "120 Shot Multicolour", image: "assets/images/120-shots-crackers-multicolor.jpeg", description: "Sold per box", price: "₹1,760", originalPrice: "₹3,520" },
      { name: "Sweet 16 Whistling Shots", image: "assets/images/sweet_16_whistling_shots.jpg", description: "Sold per box", price: "₹660", originalPrice: "₹1,320" },
      { name: "12 Shot Rider", image: "assets/images/12_shot_rider.webp", description: "Sold per box", price: "₹135", originalPrice: "₹270" },
      { name: "12 Shot Red & Green", image: "assets/images/12-shots-red-green.jpg", description: "Sold per box", price: "₹210", originalPrice: "₹420" },
      { name: "Fancy (3 Pcs)", image: "assets/images/3pc.png", description: "Sold per box", price: "₹270", originalPrice: "₹540" },
      { name: "Stone Electric (10 Pcs)", image: "assets/images/electric-stones.jpeg", description: "Sold per box", price: "₹15", originalPrice: "₹30" },
      { name: "100W Power", image: "assets/images/100w_power.png", description: "Sold per box", price: "₹55", originalPrice: "₹110" },
      { name: "Kitkat Big", image: "assets/images/kitkat_big.jpeg", description: "Sold per box", price: "₹60", originalPrice: "₹120" },
      { name: "Tip Top (Chiptut) (10 Pcs)", image: "assets/images/chitput.jpeg", description: "Sold per box", price: "₹30", originalPrice: "₹60" },
      { name: "Jee Boom Baa (10 Pcs)", image: "assets/images/jee_boom_baa.webp", description: "Sold per box", price: "₹110", originalPrice: "₹220" },
      { name: "Colour Smoke", image: "assets/images/Colour-Smoke.webp", description: "Sold per box", price: "₹130", originalPrice: "₹260" },
      { name: "Bada Peacock", image: "assets/images/bada_peacock.webp", description: "Sold per box", price: "₹360", originalPrice: "₹720" },
      { name: "Peacock Feather", image: "assets/images/peacock_feather.webp", description: "Sold per box", price: "₹130", originalPrice: "₹260" },
      { name: "Penta Collection (5 Pcs)", image: "assets/images/penta.jpg", description: "Sold per box", price: "₹165", originalPrice: "₹330" },
      { name: "Bambaram Spinner", image: "assets/images/bambaram.webp", description: "Sold per box", price: "₹100", originalPrice: "₹200" },
      { name: "7 Shot (5 Pcs)", image: "assets/images/7shot.webp", description: "Sold per box", price: "₹90", originalPrice: "₹180" },
      { name: "Snake Tablet (10 Box)", image: "assets/images/snake_tablet.webp", description: "Sold per box", price: "₹25", originalPrice: "₹50" },
      { name: "Micky Mouse (5 Pcs)", image: "assets/images/mickey_mouse.webp", description: "Sold per box", price: "₹155", originalPrice: "₹310" },
      { name: "Photoflash (5 Pcs)", image: "assets/images/photo_flash.jpg", description: "Sold per box", price: "₹55", originalPrice: "₹110" },
      { name: "Helicopter (4 Pcs)", image: "assets/images/helicopter.jpg", description: "Sold per box", price: "₹95", originalPrice: "₹190" },
      { name: "Shower (Red, Yellow, White, Green, Silver)", image: "assets/images/shower.jpeg", description: "Sold per box", price: "₹100", originalPrice: "₹200" },
      { name: "Crackling Fountain Avenger (3 Pcs)", image: "assets/images/Crackling-fountain_avengers.jpg", description: "Sold per box", price: "₹270", originalPrice: "₹540" },
      { name: "Tin Bear", image: "assets/images/tin_beer.jpg", description: "Sold per piece", price: "₹100", originalPrice: "₹200" },
      { name: "Money Bank", image: "assets/images/money_bank.jpg", description: "Sold per box", price: "₹180", originalPrice: "₹360" },
      { name: "Popcorn", image: "assets/images/popcorn.jpg", description: "Sold per box", price: "₹130", originalPrice: "₹260" },
      { name: "Butterfly", image: "assets/images/butterfly.jpg", description: "Sold per box", price: "₹80", originalPrice: "₹160" },
      { name: "Power Ranger (5 Pcs)", image: "assets/images/power_ranger.jpg", description: "Sold per box", price: "₹240", originalPrice: "₹480" },
      { name: "Siren (5 Pcs)", image: "assets/images/mini_siren_5.webp", description: "Sold per piece", price: "₹155", originalPrice: "₹310" },
      { name: "Water Queen", image: "assets/images/water_queen.webp", description: "Sold per piece", price: "₹130", originalPrice: "₹260" },
    ],
  },
  {
    id: "sound-crackers",
    name: "Sound Crackers",
    items: [
      { name: "3 1/2\" Lakshmi (5 Pcs)", image: "assets/images/3_1_2_lakshmi.jpg",description: "Sold per packet", price: "₹15", originalPrice: "₹30" },
      { name: "4\" Lakshmi (5 Pcs)", image: "assets/images/4_lakshmi.jpg",description: "Sold per packet", price: "₹25", originalPrice: "₹50" },
      { name: "4\" Special Gold Lakshmi (5 Pcs)", image: "assets/images/4_gold-lakshmi.jpg",description: "Sold per packet", price: "₹45", originalPrice: "₹90" },
      { name: "4\" Deluxe Lakshmi (5 Pcs)", image: "assets/images/4inc-deluxe-lakshimi.webp",description: "Sold per packet", price: "₹45", originalPrice: "₹90" },
      { name: "2 3/4\" Kuruvi (5 Pcs)", image: "assets/images/2_3_4_kuruvi.webp",description: "Sold per packet", price: "₹10", originalPrice: "₹20" },
      { name: "Two Sound (5 Pcs)", image: "assets/images/2_sound.jpg", description: "Sold per packet", price: "₹50", originalPrice: "₹100" },
      { name: "Paper Bomb 1/4 Kg (1 Pc)", image: "assets/images/paper_bomb_1_4_kg.jpg", description: "Sold per box", price: "₹50", originalPrice: "₹100" },
      { name: "Paper Bomb 500g (1 Pc)", image: "assets/images/paper_bomb_1_2_kg.jpg", description: "Sold per box", price: "₹100", originalPrice: "₹200" },
      { name: "Paper Bomb 1 Kg", image: "assets/images/paper_bomb_1_kg.jpeg", description: "Sold per piece", price: "₹200", originalPrice: "₹400" },
      { name: "Lion Gun", image: "assets/images/liongun.webp", description: "Sold per packet", price: "₹90", originalPrice: "₹180" },
      { name: "5\" Jallikattu", image: "assets/images/5_jallikattu.jpg", description: "Sold per packet", price: "₹60", originalPrice: "₹120" },
      { name: "Funnel Bomb", image: "assets/images/funnel_bomb.webp", description: "Sold per box", price: "₹85", originalPrice: "₹170" },
      { name: "Classic Bomb (10 Pcs)", image: "assets/images/classic_bomb.jpeg", description: "Sold per box", price: "₹115", originalPrice: "₹230" },
      { name: "Digital Bomb", image: "assets/images/digital_bomb.jpeg", description: "Sold per box", price: "₹240", originalPrice: "₹480" },
      { name: "Big Bullet", image: "assets/images/big_bullet.jpg", description: "Sold per box", price: "₹50", originalPrice: "₹100" },
      { name: "Red Bijili (50 Pcs)", image: "assets/images/red_bijili.jpg", description: "Sold per bag", price: "₹35", originalPrice: "₹70" },
      { name: "Gold Bijili (100 Pcs)", image: "assets/images/gold_bijili.jpg", description: "Sold per bag", price: "₹70", originalPrice: "₹140" },
      { name: "Micro Fuse", image: "assets/images/micro_fuse.webp", description: "Sold per bag", price: "₹75", originalPrice: "₹150" },
    ],
  },
  {
    id: "novelties-and-matches",
    name: "Novelties & Matches",
    items: [
      { name: "1 1/2\" Twinkling Star (10 Pcs)", image: "assets/images/1-1-2-inchtwinkling-star.webp", description: "Sold per box", price: "₹25", originalPrice: "₹50" },
      { name: "4\" Twinkling Star (10 Pcs)", image: "assets/images/4-twinkling-star.jpg", description: "Sold per box", price: "₹70", originalPrice: "₹140" },
      { name: "Jill Jill (10 Pcs)", image: "assets/images/jil_jil.jpg", description: "Sold per box", price: "₹45", originalPrice: "₹90" },
      { name: "Ultra Pencil", image: "assets/images/ultra_pencil.jpeg", description: "Sold per box", price: "₹70", originalPrice: "₹140" },
      { name: "Pop & Hot Pencil (3 Pcs)", image: "assets/images/pop_and_hot.jpg", description: "Sold per box", price: "₹130", originalPrice: "₹260" },
      { name: "Robin Top 10 Matches", image: "assets/images/ROBIN_TOP_10_matchers.webp", description: "Sold per box", price: "₹180", originalPrice: "₹360" },
      { name: "Classic 5 In 1 Matches", image: "assets/images/Classic-5-in-1_matches.jpg", description: "Sold per box", price: "₹155", originalPrice: "₹310" },
      { name: "Mishmash Colour Matches", image: "assets/images/mishmash_colour_matches.jpg", description: "Sold per box", price: "₹70", originalPrice: "₹140" },
      { name: "Majesty Mega Matches (3 Box)", image: "assets/images/majestic_mega_colour_images.webp", description: "Sold per box", price: "₹205", originalPrice: "₹410" },
      { name: "Rollcap", image: "assets/images/rollcap.webp", description: "Sold per box", price: "₹95", originalPrice: "₹190" },
      { name: "Men In Black Ringcap & Pistol", image: "assets/images/men_in_black.jpg", description: "Sold per box", price: "₹130", originalPrice: "₹260" },
      { name: "Ring Cap (10 Packets)", image: "assets/images/ringcap.webp", description: "Sold per box", price: "₹120", originalPrice: "₹240" },
    ],
  },
];
