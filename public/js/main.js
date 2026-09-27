import { menuCategories } from "./products-data.js";

function renderMenu() {
  const container = document.getElementById("menu-grid");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  menuCategories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "mb-12 last:mb-0";

    const heading = document.createElement("h3");
    heading.className = "mb-6 text-2xl font-bold text-espresso-800";
    heading.id = `category-${category.id}`;
    heading.textContent = category.name;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";
    grid.setAttribute("role", "list");
    grid.setAttribute("aria-labelledby", heading.id);

    category.items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "card";
      card.setAttribute("role", "listitem");

      const media = document.createElement("div");
      media.className =
        "flex aspect-[4/3] items-center justify-center bg-spice-50 text-6xl";
      if (item.image) {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.loading = "lazy";
        img.className = "h-full w-full object-cover";
        media.replaceChildren(img);
        media.className = "aspect-[4/3] overflow-hidden";
      } else {
        media.setAttribute("role", "img");
        media.setAttribute("aria-label", `Placeholder image for ${item.name}`);
        media.textContent = item.emoji || "🍪";
      }
      card.appendChild(media);

      const body = document.createElement("div");
      body.className = "flex flex-1 flex-col gap-2 p-5";

      const title = document.createElement("h4");
      title.className = "text-lg font-semibold text-espresso-800";
      title.textContent = item.name;
      body.appendChild(title);

      const desc = document.createElement("p");
      desc.className = "flex-1 text-sm text-espresso-600";
      desc.textContent = item.description;
      body.appendChild(desc);

      const price = document.createElement("p");
      price.className = "mt-2 text-lg font-bold text-spice-600";
      price.textContent = item.price;
      body.appendChild(price);

      card.appendChild(body);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    fragment.appendChild(section);
  });

  container.replaceChildren(fragment);
}

function setupMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function setupFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupMobileNav();
  setupFooterYear();
});
