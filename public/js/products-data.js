// ---------------------------------------------------------------------------
// PRODUCT / PRICE LIST DATA
// ---------------------------------------------------------------------------
// Edit ONLY this file to update the price list shown on the website. The
// layout (HTML/CSS/JS) never needs to change when you add, remove, or edit
// items.
//
// Structure:
//   menuCategories = [
//     {
//       id:   "unique-slug",     // used internally, keep it short & unique
//       name: "Category Name",   // shown as a heading on the site
//       items: [
//         {
//           name:        "Product Name",
//           description: "Short one-line description of the product.",
//           price:       "₹0",         // shown exactly as written, any format/currency
//           image:       null,         // optional: path to an image, e.g. "images/sparklers-1.jpg"
//           emoji:       "🎇"          // shown as a placeholder when no image is set
//         },
//         ...
//       ]
//     },
//     ...
//   ]
//
// All values below are PLACEHOLDERS — replace with your real product names,
// descriptions, and prices whenever you're ready. No other file needs to change.
// ---------------------------------------------------------------------------

export const menuCategories = [
  {
    id: "sparklers",
    name: "Sparklers",
    items: [
      {
        name: "Electric Sparklers (10 cm)",
        description: "Bright, smokeless sparklers — box of 10 pieces.",
        price: "₹50",
        image: null,
        emoji: "🎇",
      },
      {
        name: "Electric Sparklers (30 cm)",
        description: "Longer-lasting sparklers for extended sparkle time — box of 10.",
        price: "₹120",
        image: null,
        emoji: "✨",
      },
      {
        name: "Colour Sparklers",
        description: "Sparklers that burn in vivid colours — box of 10 pieces.",
        price: "₹150",
        image: null,
        emoji: "🎆",
      },
    ],
  },
  {
    id: "ground-chakkars",
    name: "Ground Chakkars",
    items: [
      {
        name: "Classic Ground Chakkar",
        description: "Traditional spinning wheel with vibrant sparks — pack of 5.",
        price: "₹100",
        image: null,
        emoji: "🌀",
      },
      {
        name: "Deluxe Twin Chakkar",
        description: "Double-layer chakkar for a bigger spinning display — pack of 5.",
        price: "₹180",
        image: null,
        emoji: "🌀",
      },
      {
        name: "Mini Chakkar",
        description: "Compact chakkar, great for kids and small spaces — pack of 10.",
        price: "₹90",
        image: null,
        emoji: "🌀",
      },
    ],
  },
  {
    id: "aerial-fireworks",
    name: "Aerial Fireworks",
    items: [
      {
        name: "Sky Shot Rockets",
        description: "Classic rockets that burst into colour high in the sky — pack of 5.",
        price: "₹250",
        image: null,
        emoji: "🚀",
      },
      {
        name: "Colour Fountain Rocket",
        description: "Rockets with a colourful fountain effect before the burst — pack of 5.",
        price: "₹300",
        image: null,
        emoji: "🎆",
      },
      {
        name: "Multi-Shot Sky Shells",
        description: "25-shot aerial repeater with a grand multicolour finale.",
        price: "₹650",
        image: null,
        emoji: "🎇",
      },
    ],
  },
  {
    id: "sound-crackers",
    name: "Sound Crackers",
    items: [
      {
        name: "Lakshmi Crackers (Chain)",
        description: "Traditional chain crackers for a festive burst of sound.",
        price: "₹200",
        image: null,
        emoji: "🧨",
      },
      {
        name: "Deluxe Sound Bombs",
        description: "Loud, high-impact sound crackers — pack of 10.",
        price: "₹220",
        image: null,
        emoji: "💥",
      },
      {
        name: "Two Sound Crackers",
        description: "Double-bang crackers for extra festive noise — pack of 10.",
        price: "₹180",
        image: null,
        emoji: "🧨",
      },
    ],
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes & Combo Packs",
    items: [
      {
        name: "Family Diwali Combo Box",
        description: "A curated mix of sparklers, chakkars, and aerial fireworks.",
        price: "₹1,500",
        image: null,
        emoji: "🎁",
      },
      {
        name: "Grand Festival Gift Hamper",
        description: "Our biggest assortment box for a full evening of celebration.",
        price: "₹3,000",
        image: null,
        emoji: "🎁",
      },
      {
        name: "Kids Special Combo",
        description: "Sparklers and fountains only — no loud crackers, perfect for kids.",
        price: "₹500",
        image: null,
        emoji: "🎈",
      },
    ],
  },
];
