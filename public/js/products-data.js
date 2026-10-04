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

const rawMenuCategories = [
  {
    id: "giftbox",
    name: "Giftbox",
    items: [
      { name: "36 Item Giftbox", image: "assets/images/giftbox.jpg", description: "Sold per box", price: "₹600", originalPrice: "₹1,200" , affiliatePrice: "₹650", affiliateOriginalPrice: "₹1,300" },
      { name: "41 Item Giftbox", image: "assets/images/giftbox.jpg", description: "Sold per box", price: "₹720", originalPrice: "₹1,440" , affiliatePrice: "₹780", affiliateOriginalPrice: "₹1,560" },
      { name: "16 Item Giftbox", image: "assets/images/giftbox.jpg", description: "Sold per box", price: "₹260", originalPrice: "₹520" , affiliatePrice: "₹260", affiliateOriginalPrice: "₹520" },
    ],
  },
  {
    id: "sparklers",
    name: "Sparklers",
    items: [
      { name: "7cm Electric Sparklers (10 Pcs)", image: "assets/images/7cm-electric.jpg", description: "Sold per box", price: "₹10", originalPrice: "₹20" , affiliatePrice: "₹15", affiliateOriginalPrice: "₹30" },
      { name: "7cm Colour Sparklers (10 Pcs)", image: "assets/images/7cm-color.jpeg", description: "Sold per box", price: "₹15", originalPrice: "₹30" , affiliatePrice: "₹20", affiliateOriginalPrice: "₹40" },
      { name: "7cm Green Sparklers (10 Pcs)", image: "assets/images/7-Cm-Green-Sparklers.png", description: "Sold per box", price: "₹15", originalPrice: "₹30" , affiliatePrice: "₹20", affiliateOriginalPrice: "₹40" },
      { name: "15cm Electric Sparklers (10 Pcs)", image: "assets/images/15-cm-electric-sparklers.jpg", description: "Sold per box", price: "₹55", originalPrice: "₹110" , affiliatePrice: "₹60", affiliateOriginalPrice: "₹120" },
      { name: "15cm Colour Sparklers (10 Pcs)", image: "assets/images/15cm-sparkler-colour.webp", description: "Sold per box", price: "₹55", originalPrice: "₹110" , affiliatePrice: "₹60", affiliateOriginalPrice: "₹120" },
      { name: "12cm Electric Sparklers (10 Pcs)", image: "assets/images/12cm_electric.jpg", description: "Sold per box", price: "₹25", originalPrice: "₹50" , affiliatePrice: "₹30", affiliateOriginalPrice: "₹60" },
      { name: "30cm Electric Sparklers (5 Pcs)", image: "assets/images/30cm_electric.jpg", description: "Sold per box", price: "₹55", originalPrice: "₹110" , affiliatePrice: "₹60", affiliateOriginalPrice: "₹120" },
      { name: "30cm Colour Sparklers (5 Pcs)", image: "assets/images/30cm_colour.jpg", description: "Sold per box", price: "₹55", originalPrice: "₹110" , affiliatePrice: "₹60", affiliateOriginalPrice: "₹120" },
      { name: "30cm Red Sparklers (5 Pcs)", image: "assets/images/30cm_red.webp", description: "Sold per box", price: "₹60", originalPrice: "₹120" , affiliatePrice: "₹65", affiliateOriginalPrice: "₹130" },
      { name: "50cm Electric Sparklers (5 Pcs)", image: "assets/images/50cm-electric.webp", description: "Sold per box", price: "₹190", originalPrice: "₹380" , affiliatePrice: "₹210", affiliateOriginalPrice: "₹420" },
      { name: "50cm Crackling Sparklers (5 Pcs)", image: "assets/images/50cm-colour-sparklers.jpg", description: "Sold per box", price: "₹205", originalPrice: "₹410" , affiliatePrice: "₹225", affiliateOriginalPrice: "₹450" },
      { name: "50cm Supermix Sparklers (10 Pcs)", image: "assets/images/50cm_supermix.webp", description: "Sold per box", price: "₹230", originalPrice: "₹460" , affiliatePrice: "₹255", affiliateOriginalPrice: "₹510" },
      { name: "30cm Green Sparklers", image: "assets/images/30-cm-green-sparklers.jpeg", description: "Sold per box", price: "₹50", originalPrice: "₹100" , affiliatePrice: "₹55", affiliateOriginalPrice: "₹110" },
      { name: "15cm Green Sparklers", image: "assets/images/15cm-green-sparkler.jpg", description: "Sold per box", price: "₹50", originalPrice: "₹100" , affiliatePrice: "₹55", affiliateOriginalPrice: "₹110" },
      { name: "12cm Colour Sparklers", image: "assets/images/12cm_colour.jpg", description: "Sold per box", price: "₹30", originalPrice: "₹60" , affiliatePrice: "₹35", affiliateOriginalPrice: "₹70" },
      { name: "10cm Electric Sparklers", image: "assets/images/10cm-electric.webp", description: "Sold per box", price: "₹20", originalPrice: "₹40" , affiliatePrice: "₹25", affiliateOriginalPrice: "₹50" },
      { name: "10cm Colour Sparklers", image: "assets/images/10cm_colour.jpg", description: "Sold per box", price: "₹20", originalPrice: "₹40" , affiliatePrice: "₹25", affiliateOriginalPrice: "₹50" },
      { name: "Rotating Sparklers", image: "assets/images/rotating-sparklers.jpg", description: "Sold per box", price: "₹190", originalPrice: "₹380" , affiliatePrice: "₹210", affiliateOriginalPrice: "₹420" },
      { name: "Fancy Sparklers", image: "assets/images/fancy_sparklers.png", description: "Sold per box", price: "₹110", originalPrice: "₹220" , affiliatePrice: "₹120", affiliateOriginalPrice: "₹240" },
      { name: "10cm 5-in-1 Mentos", image: "assets/images/10cm_5in1_mentos_sparklers.jpg", description: "Sold per box", price: "₹120", originalPrice: "₹240" , affiliatePrice: "₹130", affiliateOriginalPrice: "₹260" },
      { name: "15cm 5-in-1 Sparklers", image: "assets/images/15cm_5in1_sparklers.jpg", description: "Sold per box", price: "₹270", originalPrice: "₹540" , affiliatePrice: "₹295", affiliateOriginalPrice: "₹590" },
      { name: "30cm 5-in-1", image: "assets/images/30cm_5in1-sparklers.jpg", description: "Sold per box", price: "₹250", originalPrice: "₹500" , affiliatePrice: "₹275", affiliateOriginalPrice: "₹550" },
    ],
  },
  {
    id: "ground-and-flower-pots",
    name: "Ground Chakkars & Flower Pots",
    items: [
      { name: "Ground Chakkar Big (10 Pcs)", image: "assets/images/ground_chakar_big.jpg", description: "Sold per box", price: "₹45", originalPrice: "₹90" , affiliatePrice: "₹50", affiliateOriginalPrice: "₹100" },
      { name: "Ground Chakkar Special (10 Pcs)", image: "assets/images/ground-chakker-special.jpg", description: "Sold per box", price: "₹94", originalPrice: "₹188" , affiliatePrice: "₹100", affiliateOriginalPrice: "₹200" },
      { name: "Ground Chakkar Deluxe (10 Pcs)", image: "assets/images/ground_chakkar_deluxe.jpg", description: "Sold per box", price: "₹115", originalPrice: "₹230" , affiliatePrice: "₹125", affiliateOriginalPrice: "₹250" },
      { name: "Disco Wheel", image: "assets/images/disco wheel.jpg", description: "Sold per box", price: "₹70", originalPrice: "₹140" , affiliatePrice: "₹75", affiliateOriginalPrice: "₹150" },
      { name: "Ground Chakkar Deluxe (P)", image: "assets/images/ground_chakkar_deluxe_p.jpeg", description: "Sold per box", price: "₹180", originalPrice: "₹360" , affiliatePrice: "₹200", affiliateOriginalPrice: "₹400" },
      { name: "Ground Chakkar Special (P)", image: "assets/images/ground_chakkar_special_p.webp", description: "Sold per box", price: "₹145", originalPrice: "₹290" , affiliatePrice: "₹160", affiliateOriginalPrice: "₹320" },
      { name: "Flower Pot Colourkoti (10 Pcs)", image: "assets/images/flower_pots_colour_koti.jpg", description: "Sold per box", price: "₹250", originalPrice: "₹500" , affiliatePrice: "₹260", affiliateOriginalPrice: "₹520" },
      { name: "Flower Pot Super Deluxe (2 Pcs)", image: "assets/images/flower_pots_super_deluxe.webp", description: "Sold per box", price: "₹210", originalPrice: "₹420" , affiliatePrice: "₹230", affiliateOriginalPrice: "₹460" },
      { name: "Flower Pot Small (10 Pcs)", image: "assets/images/flower_pots_small.jpeg", description: "Sold per box", price: "₹60", originalPrice: "₹120" , affiliatePrice: "₹65", affiliateOriginalPrice: "₹130" },
      { name: "Flower Pot Big (10 Pcs)", image: "assets/images/flower_pots_big.jpg", description: "Sold per box", price: "₹75", originalPrice: "₹150" , affiliatePrice: "₹80", affiliateOriginalPrice: "₹160" },
      { name: "Flower Pot Special (10 Pcs)", image: "assets/images/flower pot special.jpg", description: "Sold per box", price: "₹100", originalPrice: "₹200" , affiliatePrice: "₹110", affiliateOriginalPrice: "₹220" },
      { name: "Flower Pot Asoka (10 Pcs)", image: "assets/images/flower-pots-ashoka.jpg", description: "Sold per box", price: "₹130", originalPrice: "₹260" , affiliatePrice: "₹145", affiliateOriginalPrice: "₹290" },
      { name: "Flower Pot Colourkoti Special (10 Pcs)", image: "assets/images/colour-koti-flower-pots-special.jpg", description: "Sold per box", price: "₹170", originalPrice: "₹340" , affiliatePrice: "₹180", affiliateOriginalPrice: "₹360" },
      { name: "Flower Pot Deluxe (5 Pcs)", image: "assets/images/flower_pots_deluxe.webp", description: "Sold per box", price: "₹165", originalPrice: "₹330" , affiliatePrice: "₹180", affiliateOriginalPrice: "₹360" },
      { name: "Tricolour Series (5 Pcs)", image: "assets/images/tricolor.jpg", description: "Sold per box", price: "₹260", originalPrice: "₹520" , affiliatePrice: "₹290", affiliateOriginalPrice: "₹580" },
    ],
  },
  {
    id: "fancy-and-aerial",
    name: "Fancy & Aerial Crackers",
    items: [
      { name: "2\" Fancy", image: "assets/images/2fancy.webp",description: "Sold per piece", price: "₹105", originalPrice: "₹210" },
      { name: "3 1/2\" Fancy Double Ball", image: "assets/images/31_2_fancy_double_ball.webp",description: "Sold per piece", price: "₹540", originalPrice: "₹1,080" },
      { name: "3 1/2\" Fancy", image: "assets/images/31_2_fancy.jpg",description: "Sold per piece", price: "₹300", originalPrice: "₹600" },
      { name: "Chotta Fancy", image: "assets/images/chotta-fancy.jpg", description: "Sold per box", price: "₹45", originalPrice: "₹90" , affiliatePrice: "₹50", affiliateOriginalPrice: "₹100" },
      { name: "30 Shot Multicolour", image: "assets/images/30-Shots.jpg", description: "Sold per box", price: "₹440", originalPrice: "₹880" , affiliatePrice: "₹455", affiliateOriginalPrice: "₹910" },
      { name: "25 Shot Multicolour", image: "assets/images/25_shot.webp", description: "Sold per box", price: "₹385", originalPrice: "₹770" , affiliatePrice: "₹400", affiliateOriginalPrice: "₹800" },
      { name: "60 Shot Multicolour", image: "assets/images/60shots.jpeg", description: "Sold per box", price: "₹880", originalPrice: "₹1,760" , affiliatePrice: "₹910", affiliateOriginalPrice: "₹1,820" },
      { name: "120 Shot Multicolour", image: "assets/images/120-shots-crackers-multicolor.jpeg", description: "Sold per box", price: "₹1,760", originalPrice: "₹3,520" , affiliatePrice: "₹1,820", affiliateOriginalPrice: "₹3,640" },
      { name: "Sweet 16 Whistling Shots", image: "assets/images/sweet_16_whistling_shots.jpg", description: "Sold per box", price: "₹660", originalPrice: "₹1,320" , affiliatePrice: "₹700", affiliateOriginalPrice: "₹1,400" },
      { name: "12 Shot Rider", image: "assets/images/12_shot_rider.webp", description: "Sold per box", price: "₹135", originalPrice: "₹270" , affiliatePrice: "₹150", affiliateOriginalPrice: "₹300" },
      { name: "12 Shot Red & Green", image: "assets/images/12-shots-red-green.jpg", description: "Sold per box", price: "₹210", originalPrice: "₹420" , affiliatePrice: "₹230", affiliateOriginalPrice: "₹460" },
      { name: "Fancy (3 Pcs)", image: "assets/images/3pc.png", description: "Sold per box", price: "₹270", originalPrice: "₹540" , affiliatePrice: "₹300", affiliateOriginalPrice: "₹600" },
      { name: "Stone Electric (10 Pcs)", image: "assets/images/electric-stones.jpeg", description: "Sold per box", price: "₹15", originalPrice: "₹30" , affiliatePrice: "₹20", affiliateOriginalPrice: "₹40" },
      { name: "100W Power", image: "assets/images/100w_power.png", description: "Sold per box", price: "₹55", originalPrice: "₹110" , affiliatePrice: "₹60", affiliateOriginalPrice: "₹120" },
      { name: "Kitkat Big", image: "assets/images/kitkat_big.jpeg", description: "Sold per box", price: "₹60", originalPrice: "₹120" , affiliatePrice: "₹65", affiliateOriginalPrice: "₹130" },
      { name: "Tip Top (Chiptut) (10 Pcs)", image: "assets/images/chitput.jpeg", description: "Sold per box", price: "₹30", originalPrice: "₹60" , affiliatePrice: "₹35", affiliateOriginalPrice: "₹70" },
      { name: "Jee Boom Baa (10 Pcs)", image: "assets/images/jee_boom_baa.webp", description: "Sold per box", price: "₹110", originalPrice: "₹220" , affiliatePrice: "₹120", affiliateOriginalPrice: "₹240" },
      { name: "Colour Smoke", image: "assets/images/Colour-Smoke.webp", description: "Sold per box", price: "₹130", originalPrice: "₹260" , affiliatePrice: "₹145", affiliateOriginalPrice: "₹290" },
      { name: "Bada Peacock", image: "assets/images/bada_peacock.webp", description: "Sold per box", price: "₹360", originalPrice: "₹720" , affiliatePrice: "₹390", affiliateOriginalPrice: "₹780" },
      { name: "Peacock Feather", image: "assets/images/peacock_feather.webp", description: "Sold per box", price: "₹130", originalPrice: "₹260" , affiliatePrice: "₹145", affiliateOriginalPrice: "₹290" },
      { name: "Penta Collection (5 Pcs)", image: "assets/images/penta.jpg", description: "Sold per box", price: "₹165", originalPrice: "₹330" , affiliatePrice: "₹175", affiliateOriginalPrice: "₹350" },
      { name: "Bambaram Spinner", image: "assets/images/bambaram.webp", description: "Sold per box", price: "₹100", originalPrice: "₹200" , affiliatePrice: "₹110", affiliateOriginalPrice: "₹220" },
      { name: "7 Shot (5 Pcs)", image: "assets/images/7shot.webp", description: "Sold per box", price: "₹90", originalPrice: "₹180" , affiliatePrice: "₹100", affiliateOriginalPrice: "₹200" },
      { name: "Snake Tablet (10 Box)", image: "assets/images/snake_tablet.webp", description: "Sold per box", price: "₹25", originalPrice: "₹50" , affiliatePrice: "₹30", affiliateOriginalPrice: "₹60" },
      { name: "Micky Mouse (5 Pcs)", image: "assets/images/mickey_mouse.webp", description: "Sold per box", price: "₹155", originalPrice: "₹310" , affiliatePrice: "₹170", affiliateOriginalPrice: "₹340" },
      { name: "Photoflash (5 Pcs)", image: "assets/images/photo_flash.jpg", description: "Sold per box", price: "₹55", originalPrice: "₹110" , affiliatePrice: "₹60", affiliateOriginalPrice: "₹120" },
      { name: "Helicopter (4 Pcs)", image: "assets/images/helicopter.jpg", description: "Sold per box", price: "₹95", originalPrice: "₹190" , affiliatePrice: "₹100", affiliateOriginalPrice: "₹200" },
      { name: "Shower (Red, Yellow, White, Green, Silver)", image: "assets/images/shower.jpeg", description: "Sold per box", price: "₹100", originalPrice: "₹200" , affiliatePrice: "₹110", affiliateOriginalPrice: "₹220" },
      { name: "Crackling Fountain Avenger (3 Pcs)", image: "assets/images/Crackling-fountain_avengers.jpg", description: "Sold per box", price: "₹270", originalPrice: "₹540" , affiliatePrice: "₹295", affiliateOriginalPrice: "₹590" },
      { name: "Tin Bear", image: "assets/images/tin_beer.jpg", description: "Sold per piece", price: "₹100", originalPrice: "₹200" , affiliatePrice: "₹110", affiliateOriginalPrice: "₹220" },
      { name: "Money Bank", image: "assets/images/money_bank.jpg", description: "Sold per box", price: "₹180", originalPrice: "₹360" , affiliatePrice: "₹200", affiliateOriginalPrice: "₹400" },
      { name: "Popcorn", image: "assets/images/popcorn.jpg", description: "Sold per box", price: "₹130", originalPrice: "₹260" , affiliatePrice: "₹145", affiliateOriginalPrice: "₹290" },
      { name: "Butterfly", image: "assets/images/butterfly.jpg", description: "Sold per box", price: "₹80", originalPrice: "₹160" , affiliatePrice: "₹85", affiliateOriginalPrice: "₹170" },
      { name: "Power Ranger (5 Pcs)", image: "assets/images/power_ranger.jpg", description: "Sold per box", price: "₹240", originalPrice: "₹480" , affiliatePrice: "₹265", affiliateOriginalPrice: "₹530" },
      { name: "Siren (5 Pcs)", image: "assets/images/mini_siren_5.webp", description: "Sold per piece", price: "₹155", originalPrice: "₹310" , affiliatePrice: "₹170", affiliateOriginalPrice: "₹340" },
      { name: "Water Queen", image: "assets/images/water_queen.webp", description: "Sold per piece", price: "₹130", originalPrice: "₹260" , affiliatePrice: "₹145", affiliateOriginalPrice: "₹290" },
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
      { name: "Two Sound (5 Pcs)", image: "assets/images/2_sound.jpg", description: "Sold per packet", price: "₹50", originalPrice: "₹100" , affiliatePrice: "₹60", affiliateOriginalPrice: "₹120" },
      { name: "Paper Bomb 1/4 Kg (1 Pc)", image: "assets/images/paper_bomb_1_4_kg.jpg", description: "Sold per box", price: "₹50", originalPrice: "₹100" , affiliatePrice: "₹60", affiliateOriginalPrice: "₹120" },
      { name: "Paper Bomb 500g (1 Pc)", image: "assets/images/paper_bomb_1_2_kg.jpg", description: "Sold per box", price: "₹100", originalPrice: "₹200" , affiliatePrice: "₹120", affiliateOriginalPrice: "₹240" },
      { name: "Paper Bomb 1 Kg", image: "assets/images/paper_bomb_1_kg.jpeg", description: "Sold per piece", price: "₹200", originalPrice: "₹400" , affiliatePrice: "₹240", affiliateOriginalPrice: "₹480" },
      { name: "Lion Gun", image: "assets/images/liongun.webp", description: "Sold per packet", price: "₹90", originalPrice: "₹180" , affiliatePrice: "₹100", affiliateOriginalPrice: "₹200" },
      { name: "5\" Jallikattu", image: "assets/images/5_jallikattu.jpg", description: "Sold per packet", price: "₹60", originalPrice: "₹120" },
      { name: "Funnel Bomb", image: "assets/images/funnel_bomb.webp", description: "Sold per box", price: "₹85", originalPrice: "₹170" , affiliatePrice: "₹90", affiliateOriginalPrice: "₹180" },
      { name: "Classic Bomb (10 Pcs)", image: "assets/images/classic_bomb.jpeg", description: "Sold per box", price: "₹115", originalPrice: "₹230" , affiliatePrice: "₹125", affiliateOriginalPrice: "₹250" },
      { name: "Digital Bomb", image: "assets/images/digital_bomb.jpeg", description: "Sold per box", price: "₹240", originalPrice: "₹480" , affiliatePrice: "₹260", affiliateOriginalPrice: "₹520" },
      { name: "Big Bullet", image: "assets/images/big_bullet.jpg", description: "Sold per box", price: "₹50", originalPrice: "₹100" , affiliatePrice: "₹55", affiliateOriginalPrice: "₹110" },
      { name: "Red Bijili (50 Pcs)", image: "assets/images/red_bijili.jpg", description: "Sold per bag", price: "₹35", originalPrice: "₹70" , affiliatePrice: "₹40", affiliateOriginalPrice: "₹80" },
      { name: "Gold Bijili (100 Pcs)", image: "assets/images/gold_bijili.jpg", description: "Sold per bag", price: "₹70", originalPrice: "₹140" , affiliatePrice: "₹75", affiliateOriginalPrice: "₹150" },
      { name: "Micro Fuse", image: "assets/images/micro_fuse.webp", description: "Sold per bag", price: "₹75", originalPrice: "₹150" , affiliatePrice: "₹80", affiliateOriginalPrice: "₹160" },
    ],
  },
  {
    id: "novelties-and-matches",
    name: "Novelties & Matches",
    items: [
      { name: "1 1/2\" Twinkling Star (10 Pcs)", image: "assets/images/1-1-2-inchtwinkling-star.webp", description: "Sold per box", price: "₹25", originalPrice: "₹50" },
      { name: "4\" Twinkling Star (10 Pcs)", image: "assets/images/4-twinkling-star.jpg", description: "Sold per box", price: "₹70", originalPrice: "₹140" },
      { name: "Jill Jill (10 Pcs)", image: "assets/images/jil_jil.jpg", description: "Sold per box", price: "₹45", originalPrice: "₹90" , affiliatePrice: "₹50", affiliateOriginalPrice: "₹100" },
      { name: "Ultra Pencil", image: "assets/images/ultra_pencil.jpeg", description: "Sold per box", price: "₹70", originalPrice: "₹140" , affiliatePrice: "₹75", affiliateOriginalPrice: "₹150" },
      { name: "Pop & Hot Pencil (3 Pcs)", image: "assets/images/pop_and_hot.jpg", description: "Sold per box", price: "₹130", originalPrice: "₹260" , affiliatePrice: "₹145", affiliateOriginalPrice: "₹290" },
      { name: "Robin Top 10 Matches", image: "assets/images/ROBIN_TOP_10_matchers.webp", description: "Sold per box", price: "₹180", originalPrice: "₹360" , affiliatePrice: "₹210", affiliateOriginalPrice: "₹420" },
      { name: "Classic 5 In 1 Matches", image: "assets/images/Classic-5-in-1_matches.jpg", description: "Sold per box", price: "₹155", originalPrice: "₹310" , affiliatePrice: "₹170", affiliateOriginalPrice: "₹340" },
      { name: "Mishmash Colour Matches", image: "assets/images/mishmash_colour_matches.jpg", description: "Sold per box", price: "₹70", originalPrice: "₹140" , affiliatePrice: "₹80", affiliateOriginalPrice: "₹160" },
      { name: "Majesty Mega Matches (3 Box)", image: "assets/images/majestic_mega_colour_images.webp", description: "Sold per box", price: "₹205", originalPrice: "₹410" , affiliatePrice: "₹220", affiliateOriginalPrice: "₹440" },
      { name: "Rollcap", image: "assets/images/rollcap.webp", description: "Sold per box", price: "₹95", originalPrice: "₹190" , affiliatePrice: "₹105", affiliateOriginalPrice: "₹210" },
      { name: "Men In Black Ringcap & Pistol", image: "assets/images/men_in_black.jpg", description: "Sold per box", price: "₹130", originalPrice: "₹260" , affiliatePrice: "₹145", affiliateOriginalPrice: "₹290" },
      { name: "Ring Cap (10 Packets)", image: "assets/images/ringcap.webp", description: "Sold per box", price: "₹120", originalPrice: "₹240" , affiliatePrice: "₹130", affiliateOriginalPrice: "₹260" },
    ],
  },
  {
    id: "combos",
    name: "Combos",
    items: [
      {
        name: "Adult Combo - ₹3,000",
        image: "assets/images/combo-images/adult_combo_3000.png",
        description: "Action-packed 20-item sound & high-thrill fireworks package.",
        price: "₹2,999",
        originalPrice: "₹6,620",
        itemsList: [
          { sno: 1, name: "3 1/2\" Lakshmi (5 Pcs)", qty: "10 Packets" },
          { sno: 2, name: "4\" Lakshmi (5 Pcs)", qty: "10 Packets" },
          { sno: 3, name: "4\" Special Gold Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 4, name: "4\" Deluxe Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 5, name: "2 3/4\" Kuruvi (5 Pcs)", qty: "15 Packets" },
          { sno: 6, name: "Two Sound (5 Pcs)", qty: "5 Packets" },
          { sno: 7, name: "Paper Bomb 1/4 Kg (1 Pc)", qty: "1 Box" },
          { sno: 8, name: "Paper Bomb 500g (1 Pc)", qty: "3 Boxes" },
          { sno: 9, name: "Paper Bomb 1 Kg", qty: "2 Pieces" },
          { sno: 10, name: "Lion Gun", qty: "1 Packet" },
          { sno: 11, name: "5\" Jallikattu", qty: "1 Packet" },
          { sno: 12, name: "Funnel Bomb", qty: "1 Box" },
          { sno: 13, name: "Classic Bomb (10 Pcs)", qty: "2 Boxes" },
          { sno: 14, name: "Digital Bomb", qty: "1 Box" },
          { sno: 15, name: "Big Bullet", qty: "2 Boxes" },
          { sno: 16, name: "Red Bijili (50 Pcs)", qty: "1 Bag" },
          { sno: 17, name: "Gold Bijili (100 Pcs)", qty: "1 Bag" },
          { sno: 18, name: "100W Power", qty: "1 Box" },
          { sno: 19, name: "2\" Fancy", qty: "2 Pieces" },
          { sno: 20, name: "12 Shot Rider", qty: "1 Box" },
        ],
      },
      {
        name: "Adult Combo - ₹4,000",
        image: "assets/images/combo-images/adult_combo_4000.png",
        description: "Deluxe 28-item bumper sound & mega-aerial celebration pack.",
        price: "₹3,999",
        originalPrice: "₹8,830",
        itemsList: [
          { sno: 1, name: "3 1/2\" Lakshmi (5 Pcs)", qty: "10 Packets" },
          { sno: 2, name: "4\" Lakshmi (5 Pcs)", qty: "10 Packets" },
          { sno: 3, name: "4\" Special Gold Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 4, name: "4\" Deluxe Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 5, name: "2 3/4\" Kuruvi (5 Pcs)", qty: "15 Packets" },
          { sno: 6, name: "Two Sound (5 Pcs)", qty: "5 Packets" },
          { sno: 7, name: "Paper Bomb 1/4 Kg (1 Pc)", qty: "1 Box" },
          { sno: 8, name: "Paper Bomb 500g (1 Pc)", qty: "3 Boxes" },
          { sno: 9, name: "Paper Bomb 1 Kg", qty: "2 Pieces" },
          { sno: 10, name: "Lion Gun", qty: "1 Packet" },
          { sno: 11, name: "5\" Jallikattu", qty: "1 Packet" },
          { sno: 12, name: "Funnel Bomb", qty: "1 Box" },
          { sno: 13, name: "Classic Bomb (10 Pcs)", qty: "2 Boxes" },
          { sno: 14, name: "Digital Bomb", qty: "1 Box" },
          { sno: 15, name: "Big Bullet", qty: "2 Boxes" },
          { sno: 16, name: "Red Bijili (50 Pcs)", qty: "1 Bag" },
          { sno: 17, name: "Gold Bijili (100 Pcs)", qty: "1 Bag" },
          { sno: 18, name: "100W Power", qty: "1 Box" },
          { sno: 19, name: "2\" Fancy", qty: "2 Pieces" },
          { sno: 20, name: "12 Shot Rider", qty: "1 Box" },
          { sno: 21, name: "Kitkat Big", qty: "1 Box" },
          { sno: 22, name: "Tip Top (Chiptut) (10 Pcs)", qty: "1 Box" },
          { sno: 23, name: "Penta Collection (5 Pcs)", qty: "1 Box" },
          { sno: 24, name: "7 Shot (5 Pcs)", qty: "1 Box" },
          { sno: 25, name: "Crackling Fountain Avenger (3 Pcs)", qty: "1 Box" },
          { sno: 26, name: "Tin Bear", qty: "1 Piece" },
          { sno: 27, name: "Money Bank", qty: "1 Box" },
          { sno: 28, name: "12 Shot Red & Green", qty: "1 Box" },
        ],
      },
      {
        name: "Newly Married Couple Combo - ₹4,000",
        image: "assets/images/combo-images/newly_married_couple_combo_4000.png",
        description: "Romantic & sparkling fireworks package with 41 items for newly married couples.",
        price: "₹3,999",
        originalPrice: "₹8,916",
        itemsList: [
          { sno: 1, name: "2\" Fancy", qty: "1 Piece" },
          { sno: 2, name: "Flower Pot Colourkoti (10 Pcs)", qty: "1 Box" },
          { sno: 3, name: "3 1/2\" Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 4, name: "Kitkat Big", qty: "1 Box" },
          { sno: 5, name: "3 Pic Fancy", qty: "1 Box" },
          { sno: 6, name: "Flower Pot Super Deluxe (2 Pcs)", qty: "1 Box" },
          { sno: 7, name: "4\" Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 8, name: "Tip Top (Chiptut) (10 Pcs)", qty: "1 Box" },
          { sno: 9, name: "3 1/2\" Fancy", qty: "1 Piece" },
          { sno: 10, name: "Ground Chakkar Big (10 Pcs)", qty: "1 Box" },
          { sno: 11, name: "4\" Special Gold Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 12, name: "Jee Boom Baa (10 Pcs)", qty: "1 Box" },
          { sno: 13, name: "Chotta Fancy", qty: "1 Box" },
          { sno: 14, name: "4\" Deluxe Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 15, name: "Ground Chakkar Special (10 Pcs)", qty: "1 Box" },
          { sno: 16, name: "Bada Peacock", qty: "1 Box" },
          { sno: 17, name: "30 Shot Multicolour", qty: "1 Box" },
          { sno: 18, name: "Flower Pot Small (10 Pcs)", qty: "1 Box" },
          { sno: 19, name: "2 3/4 Kuruvi (5 Pcs)", qty: "5 Packets" },
          { sno: 20, name: "Peacock Feather", qty: "1 Box" },
          { sno: 21, name: "Ground Chakkar Deluxe (10 Pcs)", qty: "1 Box" },
          { sno: 22, name: "Bambaram Spinner", qty: "1 Box" },
          { sno: 23, name: "Paper Bomb 1/4 Kg (1 Pc)", qty: "1 Box" },
          { sno: 24, name: "Flower Pot Big (10 Pcs)", qty: "1 Box" },
          { sno: 25, name: "Paper Bomb 500gm (1 Pc)", qty: "1 Box" },
          { sno: 26, name: "Snake Tablet (10 Boxes)", qty: "1 Box" },
          { sno: 27, name: "Paper Bomb 500gm (1 Pc)", qty: "1 Box" },
          { sno: 28, name: "1 1/2\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 29, name: "4\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 30, name: "Jill Jill (10 Pcs)", qty: "1 Box" },
          { sno: 31, name: "7cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 32, name: "7cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 33, name: "7cm Green Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 34, name: "15cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 35, name: "15cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 36, name: "Ground Chakkar Big (10 Pcs)", qty: "1 Box" },
          { sno: 37, name: "Ground Chakkar Special (10 Pcs)", qty: "1 Box" },
          { sno: 38, name: "12cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 39, name: "30cm Electric Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 40, name: "Lion Gun", qty: "1 Packet" },
          { sno: 41, name: "Funnel Bomb", qty: "1 Box" },
        ],
      },
      {
        name: "Newly Married Couple Combo - ₹5,000",
        image: "assets/images/combo-images/newly_married_couple_combo_5000.png",
        description: "Grand celebration hamper for couples with 51 items including aerials, bombs & fountains.",
        price: "₹4,999",
        originalPrice: "₹11,126",
        itemsList: [
          { sno: 1, name: "2\" Fancy", qty: "1 Piece" },
          { sno: 2, name: "Flower Pot Colourkoti (10 Pcs)", qty: "1 Box" },
          { sno: 3, name: "3 1/2\" Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 4, name: "Kitkat Big", qty: "1 Box" },
          { sno: 5, name: "3 Pic Fancy", qty: "1 Box" },
          { sno: 6, name: "Flower Pot Super Deluxe (2 Pcs)", qty: "1 Box" },
          { sno: 7, name: "4\" Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 8, name: "Tip Top (Chiptut) (10 Pcs)", qty: "1 Box" },
          { sno: 9, name: "3 1/2\" Fancy", qty: "1 Piece" },
          { sno: 10, name: "Ground Chakkar Big (10 Pcs)", qty: "1 Box" },
          { sno: 11, name: "4\" Special Gold Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 12, name: "Jee Boom Baa (10 Pcs)", qty: "1 Box" },
          { sno: 13, name: "Chotta Fancy", qty: "1 Box" },
          { sno: 14, name: "4\" Deluxe Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 15, name: "Ground Chakkar Special (10 Pcs)", qty: "1 Box" },
          { sno: 16, name: "Bada Peacock", qty: "1 Box" },
          { sno: 17, name: "30 Shot Multicolour", qty: "1 Box" },
          { sno: 18, name: "Flower Pot Small (10 Pcs)", qty: "1 Box" },
          { sno: 19, name: "2 3/4 Kuruvi (5 Pcs)", qty: "5 Packets" },
          { sno: 20, name: "Peacock Feather", qty: "1 Box" },
          { sno: 21, name: "Ground Chakkar Deluxe (10 Pcs)", qty: "1 Box" },
          { sno: 22, name: "Bambaram Spinner", qty: "1 Box" },
          { sno: 23, name: "Paper Bomb 1/4 Kg (1 Pc)", qty: "1 Box" },
          { sno: 24, name: "Flower Pot Big (10 Pcs)", qty: "1 Box" },
          { sno: 25, name: "Paper Bomb 500gm (1 Pc)", qty: "1 Box" },
          { sno: 26, name: "Snake Tablet (10 Boxes)", qty: "1 Box" },
          { sno: 27, name: "Paper Bomb 500gm (1 Pc)", qty: "1 Box" },
          { sno: 28, name: "1 1/2\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 29, name: "4\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 30, name: "Jill Jill (10 Pcs)", qty: "1 Box" },
          { sno: 31, name: "7cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 32, name: "7cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 33, name: "7cm Green Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 34, name: "15cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 35, name: "15cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 36, name: "Ground Chakkar Big (10 Pcs)", qty: "1 Box" },
          { sno: 37, name: "Ground Chakkar Special (10 Pcs)", qty: "1 Box" },
          { sno: 38, name: "12cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 39, name: "30cm Electric Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 40, name: "Lion Gun", qty: "1 Packet" },
          { sno: 41, name: "Funnel Bomb", qty: "1 Box" },
          { sno: 42, name: "Ground Chakkar Deluxe (10 Pcs)", qty: "1 Box" },
          { sno: 43, name: "Classic Bomb (10 Pcs)", qty: "1 Box" },
          { sno: 44, name: "Photoflash (5 Pcs)", qty: "1 Box" },
          { sno: 45, name: "Digital Bomb", qty: "1 Box" },
          { sno: 46, name: "Flower Pot Asoka (10 Pcs)", qty: "1 Box" },
          { sno: 47, name: "30cm Colour Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 48, name: "30cm Red Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 49, name: "50cm Electric Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 50, name: "Big Bullet", qty: "1 Box" },
          { sno: 51, name: "Helicopter (4 Pcs)", qty: "1 Box" },
        ],
      },
      {
        name: "Family Combo - ₹3,000",
        image: "assets/images/combo-images/family_combo_3000.png",
        description: "Bumper 33-item family celebration package suitable for all age groups.",
        price: "₹2,999",
        originalPrice: "₹6,828",
        itemsList: [
          { sno: 1, name: "3 1/2\" Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 2, name: "Flower Pot Colourkoti (10 Pcs)", qty: "1 Box" },
          { sno: 3, name: "2\" Fancy", qty: "1 Piece" },
          { sno: 4, name: "Flower Pot Super Deluxe (2 Pcs)", qty: "1 Box" },
          { sno: 5, name: "4\" Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 6, name: "Ground Chakkar Big (10 Pcs)", qty: "1 Box" },
          { sno: 7, name: "4\" Special Gold Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 8, name: "Ground Chakkar Special (10 Pcs)", qty: "1 Box" },
          { sno: 9, name: "4\" Deluxe Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 10, name: "Flower Pot Small (10 Pcs)", qty: "1 Box" },
          { sno: 11, name: "3 1/2\" Fancy", qty: "1 Piece" },
          { sno: 12, name: "Flower Pot Special (10 Pcs)", qty: "1 Box" },
          { sno: 13, name: "2 3/4\" Kuruvi (5 Pcs)", qty: "5 Packets" },
          { sno: 14, name: "Ground Chakkar Deluxe (10 Pcs)", qty: "1 Box" },
          { sno: 15, name: "Chotta Fancy", qty: "1 Box" },
          { sno: 16, name: "Disco Wheel", qty: "1 Box" },
          { sno: 17, name: "Paper Bomb 1/4 Kg (1 Pc)", qty: "2 Boxes" },
          { sno: 18, name: "Flower Pot Big (10 Pcs)", qty: "1 Box" },
          { sno: 19, name: "30 Shot Multicolour", qty: "1 Box" },
          { sno: 20, name: "Flower Pot Asoka (10 Pcs)", qty: "1 Box" },
          { sno: 21, name: "Lion Gun", qty: "1 Packet" },
          { sno: 22, name: "1 1/2\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 23, name: "4\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 24, name: "Jill Jill (10 Pcs)", qty: "1 Box" },
          { sno: 25, name: "7cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 26, name: "7cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 27, name: "7cm Green Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 28, name: "15cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 29, name: "15cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 30, name: "12cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 31, name: "30cm Electric Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 32, name: "100W Power", qty: "1 Box" },
          { sno: 33, name: "Kitkat Big", qty: "1 Box" },
        ],
      },
      {
        name: "Family Combo - ₹4,000",
        image: "assets/images/combo-images/family_combo_4000.png",
        description: "Deluxe family bumper pack with 42 items for complete celebration.",
        price: "₹3,999",
        originalPrice: "₹8,938",
        itemsList: [
          { sno: 1, name: "3 1/2\" Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 2, name: "Flower Pot Colourkoti (10 Pcs)", qty: "1 Box" },
          { sno: 3, name: "2\" Fancy", qty: "1 Piece" },
          { sno: 4, name: "Flower Pot Super Deluxe (2 Pcs)", qty: "1 Box" },
          { sno: 5, name: "4\" Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 6, name: "Ground Chakkar Big (10 Pcs)", qty: "1 Box" },
          { sno: 7, name: "4\" Special Gold Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 8, name: "Ground Chakkar Special (10 Pcs)", qty: "1 Box" },
          { sno: 9, name: "4\" Deluxe Lakshmi (5 Pcs)", qty: "5 Packets" },
          { sno: 10, name: "Flower Pot Small (10 Pcs)", qty: "1 Box" },
          { sno: 11, name: "3 1/2\" Fancy", qty: "1 Piece" },
          { sno: 12, name: "Flower Pot Special (10 Pcs)", qty: "1 Box" },
          { sno: 13, name: "2 3/4 Kuruvi (5 Pcs)", qty: "5 Packets" },
          { sno: 14, name: "Ground Chakkar Deluxe (10 Pcs)", qty: "1 Box" },
          { sno: 15, name: "Chotta Fancy", qty: "1 Box" },
          { sno: 16, name: "Disco Wheel", qty: "1 Box" },
          { sno: 17, name: "Paper Bomb 1/4 Kg (1 Pc)", qty: "2 Boxes" },
          { sno: 18, name: "Flower Pot Big (10 Pcs)", qty: "1 Box" },
          { sno: 19, name: "30 Shot Multicolour", qty: "1 Box" },
          { sno: 20, name: "Flower Pot Asoka (10 Pcs)", qty: "1 Box" },
          { sno: 21, name: "Lion Gun", qty: "1 Packet" },
          { sno: 22, name: "1 1/2\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 23, name: "4\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 24, name: "Jill Jill (10 Pcs)", qty: "1 Box" },
          { sno: 25, name: "7cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 26, name: "7cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 27, name: "7cm Green Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 28, name: "15cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 29, name: "15cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 30, name: "12cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 31, name: "30cm Electric Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 32, name: "100W Power", qty: "1 Box" },
          { sno: 33, name: "Kitkat Big", qty: "1 Box" },
          { sno: 34, name: "5\" Jallikattu", qty: "5 Packets" },
          { sno: 35, name: "Tip Top (Chiptut) (10 Pcs)", qty: "1 Box" },
          { sno: 36, name: "Jee Boom Baa (10 Pcs)", qty: "1 Box" },
          { sno: 37, name: "Funnel Bomb", qty: "1 Box" },
          { sno: 38, name: "30cm Colour Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 39, name: "30cm Red Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 40, name: "Bada Peacock", qty: "1 Box" },
          { sno: 41, name: "Red Bijili (50 Pcs)", qty: "1 Bag" },
          { sno: 42, name: "10cm Electric Sparklers", qty: "1 Box" },
        ],
      },
      {
        name: "Kids Combo - ₹2,000",
        image: "assets/images/combo-images/kids_combo.png",
        description: "Safe & colorful 28-item fireworks pack specially curated for kids.",
        price: "₹1,999",
        originalPrice: "₹4,398",
        itemsList: [
          { sno: 1, name: "Chotta Fancy", qty: "1 Box" },
          { sno: 2, name: "Flower Pot Small (10 Pcs)", qty: "1 Box" },
          { sno: 3, name: "Flower Pot Big (10 Pcs)", qty: "1 Box" },
          { sno: 4, name: "Flower Pot Special (10 Pcs)", qty: "1 Box" },
          { sno: 5, name: "Ground Chakkar Big (10 Pcs)", qty: "1 Box" },
          { sno: 6, name: "Ground Chakkar Special (10 Pcs)", qty: "1 Box" },
          { sno: 7, name: "Disco Wheel", qty: "1 Box" },
          { sno: 8, name: "Ultra Pencil", qty: "1 Box" },
          { sno: 9, name: "1 1/2\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 10, name: "Jill Jill (10 Pcs)", qty: "1 Box" },
          { sno: 11, name: "Red Bijili (50 Pcs)", qty: "2 Bags" },
          { sno: 12, name: "Kitkat Big", qty: "1 Box" },
          { sno: 13, name: "Tip Top (Chiptut) (10 Pcs)", qty: "1 Box" },
          { sno: 14, name: "Jee Boom Baa (10 Pcs)", qty: "1 Box" },
          { sno: 15, name: "Money Bank", qty: "1 Box" },
          { sno: 16, name: "Butterfly", qty: "1 Box" },
          { sno: 17, name: "Water Queen", qty: "1 Pcs" },
          { sno: 18, name: "Men In Black Ringcap & Pistol", qty: "1 Box" },
          { sno: 19, name: "Ring Cap (10 Packets)", qty: "1 Box" },
          { sno: 20, name: "7cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 21, name: "15cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 22, name: "15cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 23, name: "30cm Red Sparklers (5 Pcs)", qty: "1 Box" },
          { sno: 24, name: "50cm Supermix Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 25, name: "15cm Green Sparklers", qty: "1 Box" },
          { sno: 26, name: "10cm Colour Sparklers", qty: "1 Box" },
          { sno: 27, name: "Mishmash Colour Matches", qty: "1 Box" },
          { sno: 28, name: "Fancy Sparklers", qty: "1 Box" },
        ],
      },
      {
        name: "Fancy Combo - ₹3,000",
        image: "assets/images/combo-images/fancy_combo.png",
        description: "Exclusive fancy crackers collection with 25 items featuring visual effects, aerials & sparklers.",
        price: "₹2,999",
        originalPrice: "₹6,680",
        itemsList: [
          { sno: 1, name: "2\" Fancy", qty: "1 Piece" },
          { sno: 2, name: "Chotta Fancy", qty: "1 Box" },
          { sno: 3, name: "30 Shot Multicolour", qty: "1 Box" },
          { sno: 4, name: "12 Shot Rider", qty: "1 Box" },
          { sno: 5, name: "12 Shot Red & Green", qty: "1 Box" },
          { sno: 6, name: "Two Sound (5 Pcs)", qty: "5 Packets" },
          { sno: 7, name: "Tricolour Series (5 Pcs)", qty: "1 Box" },
          { sno: 8, name: "Bada Peacock", qty: "1 Box" },
          { sno: 9, name: "Peacock Feather", qty: "1 Box" },
          { sno: 10, name: "Penta Collection (5 Pcs)", qty: "1 Box" },
          { sno: 11, name: "7 Shot (5 Pcs)", qty: "1 Box" },
          { sno: 12, name: "Helicopter (4 Pcs)", qty: "1 Box" },
          { sno: 13, name: "Shower (5 Colours)", qty: "1 Box" },
          { sno: 14, name: "Crackling Fountain Avenger (3 Pcs)", qty: "1 Box" },
          { sno: 15, name: "Tin Bear", qty: "1 Piece" },
          { sno: 16, name: "1 1/2\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 17, name: "4\" Twinkling Star (10 Pcs)", qty: "1 Box" },
          { sno: 18, name: "Jill Jill (10 Pcs)", qty: "1 Box" },
          { sno: 19, name: "7cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 20, name: "7cm Colour Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 21, name: "7cm Green Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 22, name: "15cm Electric Sparklers (10 Pcs)", qty: "1 Box" },
          { sno: 23, name: "Paper Bomb 1/4 Kg (1 Pc)", qty: "1 Box" },
          { sno: 24, name: "Paper Bomb 500gm (1 Pc)", qty: "1 Box" },
          { sno: 25, name: "Paper Bomb 1 Kg", qty: "1 Piece" },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// DYNAMIC CONTEXT-AWARE PRICE RESOLVER
// ---------------------------------------------------------------------------
// When window.IS_AFFILIATE is true, items automatically shift prices based on:
// 1. Explicit per-item `affiliatePrice` / `affiliateOriginalPrice` if present.
// 2. Global `AFFILIATE_PRICE_MULTIPLIER` fallback if specified (e.g. 1.15 for +15%).
// ---------------------------------------------------------------------------

export const AFFILIATE_PRICE_MULTIPLIER = 1.0;

function formatRupees(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function parseRupees(priceStr) {
  return parseInt(String(priceStr).replace(/[₹,]/g, ""), 10);
}

function resolveItemForContext(item) {
  const isAffiliate = Boolean(window.IS_AFFILIATE);
  if (!isAffiliate) return item;

  // 1. Explicit per-item affiliate price override if defined
  if (item.affiliatePrice) {
    return {
      ...item,
      price: item.affiliatePrice,
      originalPrice: item.affiliateOriginalPrice ?? item.originalPrice,
    };
  }

  // 2. Dynamic multiplier fallback if multiplier != 1.0
  if (AFFILIATE_PRICE_MULTIPLIER !== 1.0) {
    const basePrice = parseRupees(item.price);
    if (!isNaN(basePrice)) {
      const adjustedPrice = Math.round(basePrice * AFFILIATE_PRICE_MULTIPLIER);
      return {
        ...item,
        price: formatRupees(adjustedPrice),
        originalPrice: item.originalPrice
          ? formatRupees(Math.round(parseRupees(item.originalPrice) * AFFILIATE_PRICE_MULTIPLIER))
          : item.originalPrice,
      };
    }
  }

  return item;
}

export function getMenuCategories() {
  const isAffiliate = Boolean(window.IS_AFFILIATE);
  return rawMenuCategories
    .filter((category) => !isAffiliate || category.id !== "combos")
    .map((category) => ({
      ...category,
      items: category.items.map(resolveItemForContext),
    }));
}

export const menuCategories = new Proxy([], {
  get(target, prop) {
    const resolved = getMenuCategories();
    const value = Reflect.get(resolved, prop);
    return typeof value === "function" ? value.bind(resolved) : value;
  },
});
