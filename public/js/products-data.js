// ---------------------------------------------------------------------------
// PRODUCT / PRICE LIST DATA
// ---------------------------------------------------------------------------
// Edit ONLY this file to update the menu shown on the website. The layout
// (HTML/CSS/JS) never needs to change when you add, remove, or edit items.
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
//           price:       "$0.00",      // shown exactly as written, any format
//           image:       null,         // optional: path to an image, e.g. "images/classic-1.jpg"
//           emoji:       "🍘"          // shown as a placeholder when no image is set
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
    id: "classic",
    name: "Classic Crackers",
    items: [
      {
        name: "Original Rice Crackers",
        description: "Light, crispy rice crackers with a hint of sea salt.",
        price: "$3.50",
        image: null,
        emoji: "🍘",
      },
      {
        name: "Multigrain Crisps",
        description: "A wholesome blend of grains, baked until golden and crunchy.",
        price: "$4.00",
        image: null,
        emoji: "🌾",
      },
      {
        name: "Pepper & Herb Crackers",
        description: "Classic crackers with a subtle kick of black pepper and herbs.",
        price: "$3.75",
        image: null,
        emoji: "🫓",
      },
    ],
  },
  {
    id: "spiced",
    name: "Spiced",
    items: [
      {
        name: "Fiery Chilli Mix",
        description: "Bold, spicy snack mix for those who love the heat.",
        price: "$4.50",
        image: null,
        emoji: "🌶️",
      },
      {
        name: "Masala Crunch",
        description: "A traditional blend of aromatic spices in every bite.",
        price: "$4.25",
        image: null,
        emoji: "🧂",
      },
      {
        name: "Garlic Pepper Bites",
        description: "Roasted garlic and cracked pepper for a punchy flavour.",
        price: "$4.00",
        image: null,
        emoji: "🧄",
      },
    ],
  },
  {
    id: "sweet",
    name: "Sweet",
    items: [
      {
        name: "Honey Glazed Crisps",
        description: "A delicate sweetness with a satisfying crunch.",
        price: "$4.75",
        image: null,
        emoji: "🍯",
      },
      {
        name: "Jaggery & Sesame Bites",
        description: "Traditional jaggery sweetness paired with toasted sesame.",
        price: "$5.00",
        image: null,
        emoji: "🍬",
      },
      {
        name: "Coconut Sugar Crackers",
        description: "Subtly sweet crackers finished with a touch of coconut sugar.",
        price: "$4.50",
        image: null,
        emoji: "🥥",
      },
    ],
  },
  {
    id: "savory-mixtures",
    name: "Savory Mixtures",
    items: [
      {
        name: "House Special Mixture",
        description: "Our signature blend of crunchy savoury snacks.",
        price: "$5.50",
        image: null,
        emoji: "🥣",
      },
      {
        name: "Peanut & Curry Leaf Mix",
        description: "Roasted peanuts tossed with crisp curry leaves.",
        price: "$5.25",
        image: null,
        emoji: "🥜",
      },
      {
        name: "Tangy Tomato Sticks",
        description: "Crunchy sticks with a zesty, tangy tomato coating.",
        price: "$4.75",
        image: null,
        emoji: "🍅",
      },
    ],
  },
];
