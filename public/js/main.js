import { menuCategories } from "./products-data.js";

function renderMenu() {
  const container = document.getElementById("price-list");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  menuCategories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "mb-12 last:mb-0";

    const heading = document.createElement("h3");
    heading.className = "mb-4 text-2xl font-bold text-espresso-800";
    heading.id = `category-${category.id}`;
    heading.textContent = category.name;
    section.appendChild(heading);

    const scrollWrap = document.createElement("div");
    scrollWrap.className =
      "overflow-x-auto rounded-2xl border border-spice-100 bg-white shadow-sm";

    const table = document.createElement("table");
    table.className = "w-full border-collapse text-left";
    table.setAttribute("aria-labelledby", heading.id);

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.className = "border-b border-spice-100 bg-spice-50";
    [
      { label: "Product", hideOnMobile: false, align: "" },
      { label: "Description", hideOnMobile: true, align: "" },
      { label: "Price", hideOnMobile: false, align: "text-right" },
    ].forEach(({ label, hideOnMobile, align }) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = label;
      th.className = [
        "px-3 sm:px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-espresso-700",
        hideOnMobile ? "hidden sm:table-cell" : "",
        align,
      ]
        .filter(Boolean)
        .join(" ");
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    category.items.forEach((item) => {
      const row = document.createElement("tr");
      row.className = "border-b border-spice-50 last:border-b-0 even:bg-spice-50/40";

      const nameCell = document.createElement("th");
      nameCell.scope = "row";
      nameCell.className = "px-3 sm:px-5 py-3 sm:py-4 align-top font-semibold text-espresso-800";
      nameCell.textContent = item.name;

      const mobileDesc = document.createElement("span");
      mobileDesc.className = "mt-1 block text-xs font-normal text-espresso-500 sm:hidden";
      mobileDesc.textContent = item.description;
      nameCell.appendChild(mobileDesc);
      row.appendChild(nameCell);

      const descCell = document.createElement("td");
      descCell.textContent = item.description;
      descCell.className = "hidden sm:table-cell px-5 py-4 align-top text-sm text-espresso-600";
      row.appendChild(descCell);

      const priceCell = document.createElement("td");
      priceCell.textContent = item.price;
      priceCell.className =
        "whitespace-nowrap px-3 sm:px-5 py-3 sm:py-4 align-top text-right font-bold text-spice-600";
      row.appendChild(priceCell);

      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    scrollWrap.appendChild(table);
    section.appendChild(scrollWrap);
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
