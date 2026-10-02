import { menuCategories } from "./products-data.js";
import { businessInfo } from "./business-info-data.js";
import { faqItems } from "./faq-data.js";

const priceListState = {
  query: "",
  categoryId: "all",
};

// Order builder state — persists across search/filter re-renders since it
// lives outside renderMenu(). Keyed by product name (unique across the
// catalog), value is { qty, price } where price is the parsed unit price.
const cart = new Map();

function parsePrice(priceStr) {
  return parseInt(priceStr.replace(/[₹,]/g, ""), 10);
}

function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function getCartTotals() {
  let items = 0;
  let total = 0;
  cart.forEach(({ qty, price }) => {
    items += qty;
    total += qty * price;
  });
  return { items, total };
}

function renderCartSummary() {
  const bar = document.getElementById("cart-summary");
  if (!bar) return;

  const { items, total } = getCartTotals();

  if (items === 0) {
    bar.classList.add("hidden");
    return;
  }

  bar.classList.remove("hidden");
  const countEl = document.getElementById("cart-summary-count");
  const totalEl = document.getElementById("cart-summary-total");
  if (countEl) countEl.textContent = `${items} item${items === 1 ? "" : "s"} selected`;
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function setupCartSummary() {
  const clearBtn = document.getElementById("cart-clear");
  if (!clearBtn) return;

  clearBtn.addEventListener("click", () => {
    cart.clear();
    renderCartSummary();
    renderMenu();
  });
}

function getCartLines() {
  return Array.from(cart.entries()).map(([name, { qty, price }]) => ({
    name,
    qty,
    price,
    lineTotal: qty * price,
  }));
}

function renderCheckoutModal() {
  const itemsContainer = document.getElementById("checkout-items");
  const totalEl = document.getElementById("checkout-total");
  if (!itemsContainer || !totalEl) return;

  const lines = getCartLines();
  const { total } = getCartTotals();

  const fragment = document.createDocumentFragment();
  lines.forEach(({ name, qty, price, lineTotal }) => {
    const row = document.createElement("div");
    row.className = "flex items-start justify-between gap-4 border-b border-spice-50 py-3 last:border-b-0";

    const info = document.createElement("div");
    const nameEl = document.createElement("p");
    nameEl.className = "font-semibold text-espresso-800";
    nameEl.textContent = name;
    const qtyEl = document.createElement("p");
    qtyEl.className = "text-sm text-espresso-600";
    qtyEl.textContent = `${qty} × ${formatPrice(price)}`;
    info.append(nameEl, qtyEl);

    const lineTotalEl = document.createElement("p");
    lineTotalEl.className = "flex-shrink-0 font-bold text-spice-600";
    lineTotalEl.textContent = formatPrice(lineTotal);

    row.append(info, lineTotalEl);
    fragment.appendChild(row);
  });

  itemsContainer.replaceChildren(fragment);
  totalEl.textContent = formatPrice(total);
}

function buildWhatsAppMessage() {
  const lines = getCartLines();
  const { total } = getCartTotals();

  const itemLines = lines
    .map((line, index) => `${index + 1}. ${line.name} — Qty: ${line.qty} — ${formatPrice(line.lineTotal)}`)
    .join("\n");

  return `Hi Fourfold Crackers! I'd like to order:\n\n${itemLines}\n\nTotal: ${formatPrice(total)}`;
}

function setupCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  const openBtn = document.getElementById("cart-checkout");
  const closeBtn = document.getElementById("checkout-close");
  const printBtn = document.getElementById("checkout-print");
  const whatsappBtn = document.getElementById("checkout-whatsapp");
  if (!modal || !openBtn) return;

  openBtn.addEventListener("click", () => {
    renderCheckoutModal();
    modal.showModal();
  });

  closeBtn?.addEventListener("click", () => modal.close());

  // Clicking the backdrop (outside the modal's own box) closes it.
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  printBtn?.addEventListener("click", () => window.print());

  whatsappBtn?.addEventListener("click", () => {
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/919345363963?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

function getFilteredCategories() {
  const query = priceListState.query.trim().toLowerCase();

  return menuCategories
    .filter((category) => priceListState.categoryId === "all" || category.id === priceListState.categoryId)
    .map((category) => ({
      ...category,
      items: query
        ? category.items.filter((item) => item.name.toLowerCase().includes(query))
        : category.items,
    }))
    .filter((category) => category.items.length > 0);
}

function categoryButtonClass(isActive) {
  return isActive
    ? "rounded-full border border-spice-500 bg-spice-500 px-4 py-2 text-sm font-semibold text-cream-50 transition-colors"
    : "rounded-full border border-spice-100 bg-white px-4 py-2 text-sm font-semibold text-espresso-700 transition-colors hover:border-spice-300 hover:bg-spice-50";
}

function renderCategoryFilters() {
  const container = document.getElementById("category-filters");
  if (!container) return;

  const categories = [{ id: "all", name: "All" }, ...menuCategories.map(({ id, name }) => ({ id, name }))];

  const fragment = document.createDocumentFragment();
  categories.forEach(({ id, name }) => {
    const isActive = id === priceListState.categoryId;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = name;
    button.dataset.categoryId = id;
    button.setAttribute("aria-pressed", String(isActive));
    button.className = categoryButtonClass(isActive);

    button.addEventListener("click", () => {
      if (priceListState.categoryId === id) return;
      priceListState.categoryId = id;

      container.querySelectorAll("button").forEach((btn) => {
        const active = btn.dataset.categoryId === id;
        btn.setAttribute("aria-pressed", String(active));
        btn.className = categoryButtonClass(active);
      });

      renderMenu();
    });

    fragment.appendChild(button);
  });

  container.replaceChildren(fragment);
}

function setupPriceListSearch() {
  const input = document.getElementById("price-search");
  if (!input) return;

  input.addEventListener("input", () => {
    priceListState.query = input.value;
    renderMenu();
  });
}

function renderMenu() {
  const container = document.getElementById("price-list");
  if (!container) return;

  const categories = getFilteredCategories();

  if (categories.length === 0) {
    const empty = document.createElement("p");
    empty.className = "py-12 text-center text-espresso-600";
    empty.textContent = "No products found — try a different search.";
    container.replaceChildren(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "mb-12 last:mb-0";

    const heading = document.createElement("h3");
    heading.className =
      "sticky top-[73px] md:top-[81px] z-10 mb-4 bg-cream-50 py-2 text-lg font-bold text-espresso-800 sm:text-2xl";
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
      nameCell.append(item.name);

      const mobileDesc = document.createElement("span");
      mobileDesc.className = "mt-1 block text-xs font-normal text-espresso-600 sm:hidden";
      mobileDesc.textContent = item.description;
      nameCell.appendChild(mobileDesc);
      row.appendChild(nameCell);

      const descCell = document.createElement("td");
      descCell.textContent = item.description;
      descCell.className = "hidden sm:table-cell px-5 py-4 align-top text-sm text-espresso-600";
      row.appendChild(descCell);

      const priceCell = document.createElement("td");
      priceCell.className = "whitespace-nowrap px-3 sm:px-5 py-3 sm:py-4 align-top text-right";

      const priceRow = document.createElement("div");
      priceRow.className = "flex items-center justify-end gap-1.5";

      const stepper = document.createElement("div");
      stepper.className = "qty-stepper";

      const minusBtn = document.createElement("button");
      minusBtn.type = "button";
      minusBtn.className = "qty-btn";
      minusBtn.setAttribute("aria-label", `Decrease quantity for ${item.name}`);
      minusBtn.textContent = "−";

      const qtyDisplay = document.createElement("span");
      qtyDisplay.className = "w-5 text-center text-sm font-semibold text-espresso-800";

      const plusBtn = document.createElement("button");
      plusBtn.type = "button";
      plusBtn.className = "qty-btn";
      plusBtn.setAttribute("aria-label", `Increase quantity for ${item.name}`);
      plusBtn.textContent = "+";

      stepper.append(minusBtn, qtyDisplay, plusBtn);

      const priceWrap = document.createElement("div");
      priceWrap.className = "flex w-20 flex-col items-end";

      const currentPrice = document.createElement("span");
      currentPrice.className = "font-bold text-spice-600";
      currentPrice.textContent = item.price;
      priceWrap.appendChild(currentPrice);

      if (item.originalPrice) {
        const originalPrice = document.createElement("span");
        originalPrice.className = "text-xs text-espresso-600/60 line-through";
        originalPrice.textContent = item.originalPrice;
        priceWrap.appendChild(originalPrice);
      }

      priceRow.append(stepper, priceWrap);
      priceCell.appendChild(priceRow);
      row.appendChild(priceCell);

      const unitPrice = parsePrice(item.price);

      function syncRow() {
        const qty = cart.get(item.name)?.qty ?? 0;
        qtyDisplay.textContent = String(qty);
      }

      function updateQty(nextQty) {
        const qty = Math.max(0, nextQty);
        if (qty === 0) {
          cart.delete(item.name);
        } else {
          cart.set(item.name, { qty, price: unitPrice });
        }
        syncRow();
        renderCartSummary();
      }

      minusBtn.addEventListener("click", () => updateQty((cart.get(item.name)?.qty ?? 0) - 1));
      plusBtn.addEventListener("click", () => updateQty((cart.get(item.name)?.qty ?? 0) + 1));

      syncRow();

      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    scrollWrap.appendChild(table);
    section.appendChild(scrollWrap);
    fragment.appendChild(section);
  });

  container.replaceChildren(fragment);
}

function buildInfoCard({ icon, title, lines }) {
  const card = document.createElement("div");
  card.className = "info-card";

  const heading = document.createElement("h3");
  heading.className = "flex items-center gap-2 text-lg font-semibold text-espresso-800";
  heading.innerHTML = `<span aria-hidden="true">${icon}</span> ${title}`;
  card.appendChild(heading);

  lines.forEach((line) => {
    const p = document.createElement("p");
    p.className = "text-sm text-espresso-600";
    p.textContent = line;
    card.appendChild(p);
  });

  return card;
}

function renderBusinessInfo() {
  const grid = document.getElementById("business-info-grid");
  if (!grid) return;

  const cards = [
    businessInfo.deliveryAreas,
    businessInfo.howToOrder,
    businessInfo.orderPolicy,
    { ...businessInfo.paymentMethods, lines: [businessInfo.paymentMethods.lines.join(" · ")] },
    businessInfo.hours,
  ];

  const gridFragment = document.createDocumentFragment();
  cards.forEach((data) => gridFragment.appendChild(buildInfoCard(data)));
  grid.replaceChildren(gridFragment);
}

function renderFAQ() {
  const container = document.getElementById("faq-list");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  faqItems.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "faq-item";
    wrapper.dataset.open = "false";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "faq-question";
    button.id = `faq-toggle-${index}`;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `faq-panel-${index}`);

    const questionText = document.createElement("span");
    questionText.textContent = item.question;
    button.appendChild(questionText);

    const icon = document.createElement("span");
    icon.className = "faq-icon text-2xl leading-none";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "+";
    button.appendChild(icon);

    const panel = document.createElement("div");
    panel.id = `faq-panel-${index}`;
    panel.className = "px-5 pb-4 text-sm text-espresso-600";
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", button.id);
    panel.hidden = true;
    panel.textContent = item.answer;

    button.addEventListener("click", () => {
      const isOpen = wrapper.dataset.open === "true";

      container.querySelectorAll(".faq-item").forEach((otherItem) => {
        otherItem.dataset.open = "false";
        const otherButton = otherItem.querySelector(".faq-question");
        const otherPanel = otherItem.querySelector("[role='region']");
        otherButton.setAttribute("aria-expanded", "false");
        otherPanel.hidden = true;
      });

      if (!isOpen) {
        wrapper.dataset.open = "true";
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
    });

    wrapper.appendChild(button);
    wrapper.appendChild(panel);
    fragment.appendChild(wrapper);
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
  renderCategoryFilters();
  renderMenu();
  setupPriceListSearch();
  setupCartSummary();
  setupCheckoutModal();
  renderBusinessInfo();
  renderFAQ();
  setupMobileNav();
  setupFooterYear();
});
