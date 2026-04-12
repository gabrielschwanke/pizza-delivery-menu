document.addEventListener("DOMContentLoaded", () => {
  const CONFIG = {
    storeName: "Venezza Delivery",
    slogan: "Sabor que conquista!",
    whatsappNumber: "5553991142090", // coloque aqui o número real com DDI + DDD
    whatsappDisplay: "(53) 99114-2090",
    businessHours: "De segunda a segunda, das 20h às 00h.",
    address: "Rua Pereira Passos, 437 - Areal, Pelotas",
    deliveryAreas: "Centro e bairros próximos",
    deliveryFee: 0, // ex.: 5 para R$ 5,00 
    minOrder: 0, // ex.: 30 para pedido mínimo de R$ 30,00
  };

  const MENU = [
     {
      id: "iscas-fritas",
      categoria: "salgadas",
      nome: "Iscas Fritas",
      descricao:
        "Iscas com fritas carne de rês, molho especial mussarela e fritas",
      preco: 60,
      imagem: "./img/pizzas/pizzafritas.png",
    },
    
    {
      id: "calabresa",
      categoria: "salgadas",
      nome: "Calabresa",
      descricao: "Mussarela, calabresa e cebola",
      preco: 45,
      imagem: "./img/pizzas/calabresa.png",
    },
    {
      id: "mussarela",
      categoria: "salgadas",
      nome: "Mussarela",
      descricao: "Mussarela e orégano",
      preco: 40,
      imagem: "./img/pizzas/mussarela.jpeg",
    },
    {
      id: "coracao",
      categoria: "salgadas",
      nome: "Coração",
      descricao: "Coraçãozinho, mussare e aquele molho especial da casa",
      preco: 50,
      imagem: "./img/pizzas/coracao.jpeg",
    },
    {
      id: "bacon",
      categoria: "salgadas",
      nome: "Bacon",
      descricao: "Bacon, mussarela e tomate",
      preco: 50,
      imagem: "./img/pizzas/bacon.png",
    },
    {
      id: "napolitana",
      categoria: "salgadas",
      nome: "Napolitana",
      descricao: "Presunto, mussarela, tomate e catupiry",
      preco: 55,
      imagem: "./img/pizzas/napolitana.png",
    },
    {
      id: "strogonoff",
      categoria: "salgadas",
      nome: "Strogonoff de Carne",
      descricao:
        "Molho especial da casa, mussarela, frango, creme de leite e batata palha",
      preco: 60,
      imagem: "./img/pizzas/strogonoff.jpeg",
    },
    {
      id: "frango-catupiry",
      categoria: "salgadas",
      nome: "Frango com Catupiry",
      descricao: "Frango desfiado com catupiry",
      preco: 50,
      imagem: "./img/pizzas/frangocatupiry.png",
    },
    {
      id: "alho-oleo",
      categoria: "salgadas",
      nome: "Alho e Óleo",
      descricao: "Alho temperado e toque de orégano",
      preco: 40,
      imagem: "./img/pizzas/alhoeoleo.jpeg",
    },
    {
      id: "pepperoni",
      categoria: "salgadas",
      nome: "Pepperoni",
      descricao: "Pepperoni e mussarela",
      preco: 55,
      imagem: "./img/pizzas/peperone.jpeg",
    },

    {
      id: "lombinho-abacaxi",
      categoria: "salgadas",
      nome: "Lombinho com Abacaxi",
      descricao: "Lombinho, mussarela e abacaxi",
      preco: 50,
      imagem: "./img/pizzas/lombinhoeabacaxi.jpeg",
    },
    {
      id: "quatro-queijos",
      categoria: "salgadas",
      nome: "4 Queijos",
      descricao: "Mix especial de queijos",
      preco: 50,
      imagem: "./img/pizzas/4queijos.png",
    },
    {
      id: "bolonhesa",
      categoria: "salgadas",
      nome: "Bolonhesa",
      descricao: "Molho bolonhesa e mussarela",
      preco: 50,
      imagem: "./img/pizzas/bolonhesa.jpeg",
    },
    {
      id: "vegetariana",
      categoria: "salgadas",
      nome: "Vegetariana",
      descricao:
        "Brócolis, champions, ervilha, milho, molho especial e mussarela",
      preco: 55,
      imagem: "./img/pizzas/vegetariana.jpeg",
    },
    {
      id: "sonho-de-valsa",
      categoria: "doces",
      nome: "Sonho de Valsa",
      descricao: "Chocolate e bombom Sonho de Valsa",
      preco: 50,
      imagem: "./img/pizzas/pizzasonhodevalsa.png",
    },
    {
      id: "ouro-branco",
      categoria: "doces",
      nome: "Ouro Branco",
      descricao: "Chocolate e bombom Ouro Branco",
      preco: 50,
      imagem: "./img/pizzas/ouro-branco.jpeg",
    },
    {
      id: "banana-nevada",
      categoria: "doces",
      nome: "Banana Nevada",
      descricao:
        "Creme de ninho, banana e leite condensado com toque doce da casa",
      preco: 50,
      imagem: "./img/pizzas/banana-nevada.jpeg",
    },
    {
      id: "banoffee",
      categoria: "doces",
      nome: "Banoffee",
      descricao: "Banana, doce e cobertura cremosa",
      preco: 60,
      imagem: "./img/pizzas/banoffee.jpeg",
    },
    {
      id: "romeu-julieta",
      categoria: "doces",
      nome: "Romeu e Julieta",
      descricao: "Queijo com goiabada",
      preco: 40,
      imagem: "./img/pizzas/romeuejulieta.png",
    },
    {
      id: "california",
      categoria: "doces",
      nome: "Califórnia",
      descricao:
        "Pêssego, figo, abacaxi, catupiry e mussarela, combinação doce especial",
      preco: 55,
      imagem: "./img/pizzas/california.jpeg",
    },

    {
      id: "esfiha-calabresa",
      categoria: "esfihas-salgadas",
      nome: "Calabresa",
      descricao: "Esfiha recheada com calabresa e tempero especial",
      preco: 8,
      imagem: "./img/esfihas/esfihacalabresa.png",
    },
    {
      id: "esfiha-frango-requeijao",
      categoria: "esfihas-salgadas",
      nome: "Frango com Requeijão",
      descricao: "Esfiha recheada com frango desfiado e requeijão",
      preco: 8,
      imagem: "./img/esfihas/frangorequeijao.png",
    },
    {
      id: "esfiha-carne-moida",
      categoria: "esfihas-salgadas",
      nome: "Tradicional Carne Moída",
      descricao: "Esfiha tradicional recheada com carne moída temperada",
      preco: 8,
      imagem: "./img/esfihas/esfihacarne.png",
    },
    {
      id: "esfiha-peperoni",
      categoria: "esfihas-salgadas",
      nome: "Peperoni",
      descricao: "Esfiha recheada com peperoni e toque especial da casa",
      preco: 8,
      imagem: "./img/esfihas/esfihapeperone.png",
    },
    {
      id: "esfiha-4-queijos",
      categoria: "esfihas-salgadas",
      nome: "4 Queijos",
      descricao: "Esfiha recheada com mix especial de quatro queijos",
      preco: 8,
      imagem: "./img/esfihas/esfiha4queijos.png",
    },
    {
      id: "esfiha-bacon",
      categoria: "esfihas-salgadas",
      nome: "Bacon",
      descricao: "Esfiha recheada com bacon e queijo",
      preco: 8,
      imagem: "./img/esfihas/esfihabacon.png",
    },
    {
      id: "esfiha-brocolis-bacon-catupiry",
      categoria: "esfihas-salgadas",
      nome: "Brócolis c/ Bacon e Catupiry",
      descricao: "Esfiha com brócolis, bacon e catupiry",
      preco: 8,
      imagem: "./img/esfihas/esfihabrocolis.png",
    },
    {
      id: "esfiha-presunto-queijo",
      categoria: "esfihas-salgadas",
      nome: "Presunto e Queijo",
      descricao: "Esfiha recheada com presunto e queijo",
      preco: 8,
      imagem: "./img/esfihas/esfihapresunto.png",
    },
    {
      id: "esfiha-doritos-cheddar",
      categoria: "esfihas-salgadas",
      nome: "Doritos e Cheddar",
      descricao: "Esfiha com cheddar cremoso e crocância especial",
      preco: 8,
      imagem: "./img/esfihas/esfihadoritos.png",
    },
    {
      id: "esfiha-costela",
      categoria: "esfihas-salgadas",
      nome: "Costela",
      descricao: "Esfiha recheada com costela desfiada e temperada",
      preco: 8,
      imagem: "./img/esfihas/esfihacostela.png",
    },
    {
      id: "esfiha-ouro-branco",
      categoria: "esfihas-doces",
      nome: "Ouro Branco",
      descricao: "Esfiha doce com chocolate e bombom Ouro Branco",
      preco: 8,
      imagem: "./img/esfihas/esfihaourobranco.png",
    },
    {
      id: "esfiha-sonho-de-valsa",
      categoria: "esfihas-doces",
      nome: "Sonho de Valsa",
      descricao: "Esfiha doce com chocolate e bombom Sonho de Valsa",
      preco: 8,
      imagem: "./img/esfihas/esfihasonho.png",
    },
    {
      id: "esfiha-pacoca-doce-de-leite",
      categoria: "esfihas-doces",
      nome: "Paçoca c/ Doce de Leite",
      descricao: "Esfiha doce com paçoca e doce de leite",
      preco: 8,
      imagem: "./img/esfihas/pacoca.png",
    },
    {
      id: "esfiha-chocolate-preto",
      categoria: "esfihas-doces",
      nome: "Chocolate Preto",
      descricao: "Esfiha doce com cobertura de chocolate preto",
      preco: 7,
      imagem: "./img/esfihas/chocolatepreto.png",
    },
    {
      id: "esfiha-chocolate-branco",
      categoria: "esfihas-doces",
      nome: "Chocolate Branco",
      descricao: "Esfiha doce com cobertura de chocolate branco",
      preco: 7,
      imagem: "./img/esfihas/esfihachocolatebranco.png",
    },
    {
      id: "esfiha-banoffee",
      categoria: "esfihas-doces",
      nome: "Banoffe",
      descricao: "Esfiha doce com banana e cobertura cremosa",
      preco: 8,
      imagem: "./img/esfihas/esfihabanoffe.png",
    },

    {
      id: "pastel-salgado",
      categoria: "pasteis",
      nome: "",
      descricao: "Escolha o sabor no card antes de adicionar ao pedido.",
      imagem: "./img/pastel/pastel2.png",
      rotulo: "Pastéis Salgados e Doces",
      sabores: [
        {
          tipo: "Salgado",
          nome: "Tradicional",
          descricao: "Carne, ovo e queijo",
          preco: 15,
        },
        {
          tipo: "Salgado",
          nome: "Aquele Pastel",
          descricao: "Calabresa, ovo, carne moída e queijo",
          preco: 17,
        },
        {
          tipo: "Salgado",
          nome: "Frango com Catupiry",
          descricao: "Frango, mussarela e catupiry",
          preco: 15,
        },
        {
          tipo: "Salgado",
          nome: "Franbacon",
          descricao: "Frango, mussarela e bacon",
          preco: 17,
        },
        {
          tipo: "Salgado",
          nome: "Strogonoff de Frango",
          descricao: "Frango, mussarela e creme de leite",
          preco: 17,
        },
        {
          tipo: "Salgado",
          nome: "Calabresa",
          descricao: "Calabresa e queijo",
          preco: 15,
        },
        {
          tipo: "Salgado",
          nome: "Presunto e Queijo",
          descricao: "Presunto e mussarela",
          preco: 15,
        },
        {
          tipo: "Salgado",
          nome: "4 Queijos",
          descricao: "Mussarela, catupiry, provolone e cheddar",
          preco: 17,
        },
        {
          tipo: "Salgado",
          nome: "Pizza",
          descricao: "Presunto, queijo, tomate e orégano",
          preco: 15,
        },
        {
          tipo: "Doce",
          nome: "Banana com Doce de Leite",
          descricao: "Banana com doce de leite",
          preco: 16,
        },
        {
          tipo: "Doce",
          nome: "Romeu e Julieta",
          descricao: "Queijo com goiabada",
          preco: 15,
        },
        {
          tipo: "Doce",
          nome: "Chocolate Branco",
          descricao: "Recheio cremoso de chocolate branco",
          preco: 16,
        },
        {
          tipo: "Doce",
          nome: "Chocolate Preto",
          descricao: "Recheio cremoso de chocolate preto",
          preco: 16,
        }
      ],
    },
  
    {
      id: "combo-espetacular",
      categoria: "combo",
      nome: "Combo Espetacular",
      descricao:
        "Combo com 4 pastéis 11x11 cm, 4 esfihas e 1 porção de batata frita (300g). Escolha os sabores e informe nas observações ou pelo WhatsApp ao finalizar o pedido.",
      preco: 80,
      imagem: "./img/combo.png",
    },
  ];

  const PIZZA_CATEGORIES = ["salgadas", "doces"];

  const STORAGE_KEYS = {
    cart: "venezza-cart",
    name: "venezza-name",
    address: "venezza-address",
    orderType: "venezza-order-type",
    payment: "venezza-payment",
    needChange: "venezza-need-change",
    changeAmount: "venezza-change-amount",
    notes: "venezza-notes",
  };

  const state = {
    currentCategory: "salgadas",
    cart: getStoredCart(),
    toastTimer: null,
  };

  const elements = {
    filters: document.getElementById("filters"),
    menuGrid: document.getElementById("menuGrid"),
    cartItems: document.getElementById("cartItems"),
    orderForm: document.getElementById("orderForm"),
    orderSubtotal: document.getElementById("orderSubtotal"),
    deliveryFeeRow: document.getElementById("deliveryFeeRow"),
    deliveryFeeValue: document.getElementById("deliveryFeeValue"),
    orderTotal: document.getElementById("orderTotal"),
    mobileTotal: document.getElementById("mobileTotal"),
    cartCount: document.getElementById("cartCount"),
    mobileCartCount: document.getElementById("mobileCartCount"),
    checkoutBtn: document.getElementById("checkoutBtn"),
    clearCartBtn: document.getElementById("clearCartBtn"),
    customerName: document.getElementById("customerName"),
    customerAddress: document.getElementById("customerAddress"),
    orderType: document.getElementById("orderType"),
    paymentMethod: document.getElementById("paymentMethod"),
    cashChangeGroup: document.getElementById("cashChangeGroup"),
    needChange: document.getElementById("needChange"),
    changeAmountGroup: document.getElementById("changeAmountGroup"),
    changeAmount: document.getElementById("changeAmount"),
    orderNotes: document.getElementById("orderNotes"),
    floatingWhatsApp: document.getElementById("floatingWhatsApp"),
    addressGroup: document.getElementById("addressGroup"),
    toast: document.getElementById("toast"),
    currentYear: document.getElementById("currentYear"),
  };

  init();

  function init() {
    applyConfigToUI();
    hydrateForm();
    if (window.CustomSelect) {
      window.CustomSelect.initAll(document);
    }

    syncOrderFormCustomSelects();

    bindEvents();
    toggleAddressField();
    toggleCashFields();
    updateFloatingWhatsApp();
    renderMenu();
    renderCart();
    updateCheckoutState();
  }

  function getStoredCart() {
    try {
      const stored = JSON.parse(
        localStorage.getItem(STORAGE_KEYS.cart) || "[]",
      );
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  }

  function applyConfigToUI() {
    document.querySelectorAll("[data-store-name]").forEach((el) => {
      el.textContent = CONFIG.storeName;
    });

    document.querySelectorAll("[data-store-slogan]").forEach((el) => {
      el.textContent = CONFIG.slogan;
    });

    document.querySelectorAll("[data-business-hours]").forEach((el) => {
      el.textContent = CONFIG.businessHours;
    });

    document.querySelectorAll("[data-address]").forEach((el) => {
      el.textContent = CONFIG.address;
    });

    document.querySelectorAll("[data-delivery-areas]").forEach((el) => {
      el.textContent = CONFIG.deliveryAreas;
    });

    document.querySelectorAll("[data-whatsapp-display]").forEach((el) => {
      el.textContent = CONFIG.whatsappDisplay;
    });

    document.querySelectorAll("[data-min-order-label]").forEach((el) => {
      el.textContent =
        CONFIG.minOrder > 0
          ? `A partir de ${formatPrice(CONFIG.minOrder)}`
          : "Sem pedido mínimo";
    });

    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }
  }

  function bindEvents() {
    elements.filters.addEventListener("click", handleCategoryChange);
    elements.menuGrid.addEventListener("click", handleAddToCart);
    elements.menuGrid.addEventListener("change", handleFlavorChange);
    elements.menuGrid.addEventListener(
      "custom-select:change",
      handleCustomSelectChange,
    );
    elements.orderForm.addEventListener(
      "custom-select:change",
      handleOrderFormCustomSelectChange,
    );

    elements.cartItems.addEventListener("click", handleCartActions);
    elements.checkoutBtn.addEventListener("click", sendToWhatsApp);
    elements.clearCartBtn.addEventListener("click", clearCart);

    [
      elements.customerName,
      elements.customerAddress,
      elements.orderNotes,
      elements.changeAmount,
    ].forEach((field) => {
      field.addEventListener("input", persistForm);
    });

    [elements.orderType, elements.paymentMethod, elements.needChange].forEach(
      (field) => {
        field.addEventListener("change", persistForm);
      },
    );

    elements.orderType.addEventListener("change", () => {
      toggleAddressField();
      renderCart();
    });

    elements.paymentMethod.addEventListener("change", () => {
      toggleCashFields();
    });

    elements.needChange.addEventListener("change", () => {
      toggleCashFields();
    });
  }

  function hydrateForm() {
    elements.customerName.value = localStorage.getItem(STORAGE_KEYS.name) || "";
    elements.customerAddress.value =
      localStorage.getItem(STORAGE_KEYS.address) || "";
    elements.orderType.value =
      localStorage.getItem(STORAGE_KEYS.orderType) || "Delivery";
    elements.paymentMethod.value =
      localStorage.getItem(STORAGE_KEYS.payment) || "Pix";
    elements.needChange.value =
      localStorage.getItem(STORAGE_KEYS.needChange) || "Não";
    elements.changeAmount.value =
      localStorage.getItem(STORAGE_KEYS.changeAmount) || "";
    elements.orderNotes.value = localStorage.getItem(STORAGE_KEYS.notes) || "";
  }

  function syncCustomSelectValue(input, value) {
    if (!input) return;

    input.value = value;

    const customSelect = input.closest("[data-custom-select]");
    if (!customSelect) return;

    const options = customSelect.querySelectorAll(".custom-select__option");
    const label = customSelect.querySelector(".custom-select__label");

    const selectedOption = [...options].find(
      (option) => (option.dataset.value ?? "") === value,
    );

    if (!selectedOption) return;

    options.forEach((option) => {
      option.classList.remove("is-selected", "is-focused");
      option.setAttribute("aria-selected", "false");
    });

    selectedOption.classList.add("is-selected");
    selectedOption.setAttribute("aria-selected", "true");

    if (label) {
      label.textContent =
        selectedOption.dataset.label ?? selectedOption.textContent.trim();
    }
  }

  function syncOrderFormCustomSelects() {
    syncCustomSelectValue(
      elements.orderType,
      elements.orderType.value || "Delivery",
    );
    syncCustomSelectValue(
      elements.paymentMethod,
      elements.paymentMethod.value || "Pix",
    );
    syncCustomSelectValue(
      elements.needChange,
      elements.needChange.value || "Não",
    );
  }

  function handleOrderFormCustomSelectChange(event) {
  const customSelect = event.target.closest("[data-custom-select]");
  if (!customSelect) return;

  const nativeInput = customSelect.querySelector(".custom-select__native");
  if (!nativeInput) return;

  persistForm();

  if (nativeInput.id === "orderType") {
    toggleAddressField();
    renderCart();
  }

  if (nativeInput.id === "paymentMethod") {
    toggleCashFields();
  }

  if (nativeInput.id === "needChange") {
    toggleCashFields();
  }
}


  function persistForm() {
    localStorage.setItem(STORAGE_KEYS.name, elements.customerName.value);
    localStorage.setItem(STORAGE_KEYS.address, elements.customerAddress.value);
    localStorage.setItem(STORAGE_KEYS.orderType, elements.orderType.value);
    localStorage.setItem(STORAGE_KEYS.payment, elements.paymentMethod.value);
    localStorage.setItem(STORAGE_KEYS.needChange, elements.needChange.value);
    localStorage.setItem(
      STORAGE_KEYS.changeAmount,
      elements.changeAmount.value,
    );
    localStorage.setItem(STORAGE_KEYS.notes, elements.orderNotes.value);
  }

  function persistCart() {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
  }

  function sanitizeWhatsAppNumber(value) {
    return String(value).replace(/\D/g, "");
  }

  function updateFloatingWhatsApp() {
    const number = sanitizeWhatsAppNumber(CONFIG.whatsappNumber);
    elements.floatingWhatsApp.href = `https://wa.me/${number}`;
  }

  function toggleAddressField() {
    const isDelivery = elements.orderType.value === "Delivery";
    elements.addressGroup.classList.toggle("hidden", !isDelivery);
  }

function toggleCashFields() {
  const isCash = elements.paymentMethod.value === "Dinheiro";
  const needsChange = elements.needChange.value === "Sim";

  elements.cashChangeGroup.classList.toggle("hidden", !isCash);
  elements.changeAmountGroup.classList.toggle(
    "hidden",
    !isCash || !needsChange,
  );

  if (!isCash) {
    syncCustomSelectValue(elements.needChange, "Não");
    elements.changeAmount.value = "";
    persistForm();
  }

  if (isCash && !needsChange) {
    elements.changeAmount.value = "";
    persistForm();
  }
}


  function formatPrice(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function isPizza(item) {
    return Boolean(item) && PIZZA_CATEGORIES.includes(item.categoria);
  }

  function getAllPizzaFlavors() {
    return MENU.filter((item) => isPizza(item));
  }

  function getPizzaCategoryName(category) {
    return category === "doces" ? "Doce" : "Salgada";
  }

  function getTwoFlavorsPrice(firstPizza, secondPizzaId) {
    if (!firstPizza) return 0;

    if (!secondPizzaId) {
      return firstPizza.preco;
    }

    const secondPizza = getProductById(secondPizzaId);

    if (!secondPizza || !isPizza(secondPizza)) {
      return firstPizza.preco;
    }

    return Math.max(firstPizza.preco, secondPizza.preco);
  }

  function renderPizzaSecondFlavorCustomSelect(item, allPizzaFlavors) {
    return `
    <div class="menu-card__variant">
      <label class="menu-card__variant-label">
        2º sabor (opcional)
      </label>

      <div
        class="custom-select pizza-second-flavor"
        data-custom-select
        data-product-id="${item.id}"
      >
        <input
          type="hidden"
          class="custom-select__native pizza-second-flavor-input"
          value=""
        />

        <button
          type="button"
          class="custom-select__trigger"
          aria-label="Selecionar segundo sabor"
        >
          <span class="custom-select__label">Apenas 1 sabor</span>
          <span class="custom-select__arrow">⌄</span>
        </button>

        <div class="custom-select__dropdown">
          <button
            type="button"
            class="custom-select__option is-selected"
            data-value=""
            data-label="Apenas 1 sabor"
            aria-selected="true"
          >
            Apenas 1 sabor
          </button>

          ${allPizzaFlavors
            .filter((pizza) => pizza.id !== item.id)
            .map(
              (pizza) => `
                <button
                  type="button"
                  class="custom-select__option"
                  data-value="${pizza.id}"
                  data-label="${pizza.nome} (${getPizzaCategoryName(
                    pizza.categoria,
                  )}) — ${formatPrice(pizza.preco)}"
                  aria-selected="false"
                >
                  ${pizza.nome} (${getPizzaCategoryName(
                    pizza.categoria,
                  )}) — ${formatPrice(pizza.preco)}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      <small class="menu-card__hint">
        Em pizzas de 2 sabores, será cobrado o valor do sabor mais caro.
      </small>

      <div class="menu-card__flavor-price" id="pizza-price-${item.id}">
        ${formatPrice(item.preco)}
      </div>
    </div>
  `;
  }

  function renderProductFlavorCustomSelect(item) {
    return `
    <div class="menu-card__variant">
      <label class="menu-card__variant-label">
        Escolha o sabor
      </label>

      <div
        class="custom-select product-flavor-select"
        data-custom-select
        data-product-id="${item.id}"
      >
        <input
          type="hidden"
          class="custom-select__native product-flavor-input"
          value="${item.sabores[0].nome}"
        />

        <button
          type="button"
          class="custom-select__trigger"
          aria-label="Selecionar sabor"
        >
          <span class="custom-select__label">
            ${item.sabores[0].nome} — ${formatPrice(item.sabores[0].preco)}
          </span>
          <span class="custom-select__arrow">⌄</span>
        </button>

        <div class="custom-select__dropdown">
          ${item.sabores
            .map(
              (sabor, index) => `
                <button
                  type="button"
                  class="custom-select__option ${index === 0 ? "is-selected" : ""}"
                  data-value="${sabor.nome}"
                  data-label="(${sabor.tipo}) ${sabor.nome} — ${formatPrice(sabor.preco)}"
                  aria-selected="${index === 0 ? "true" : "false"}"
                >
                  (${sabor.tipo}) ${sabor.nome} — ${formatPrice(sabor.preco)}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="menu-card__flavor-price" id="flavor-price-${item.id}">
        ${formatPrice(item.sabores[0].preco)}
      </div>
    </div>
  `;
  }

  function getProductById(productId) {
    return MENU.find((item) => item.id === productId);
  }

  function getCartSubtotal() {
    return state.cart.reduce((total, item) => total + item.preco * item.qtd, 0);
  }

  function getDeliveryFee() {
    return elements.orderType.value === "Delivery" ? CONFIG.deliveryFee : 0;
  }

  function getOrderTotal() {
    return getCartSubtotal() + getDeliveryFee();
  }

  function getCartItemsCount() {
    return state.cart.reduce((total, item) => total + item.qtd, 0);
  }

  function slugify(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function getCategoryLabel(item) {
    if (item.rotulo) return item.rotulo;

    const labels = {
      salgadas: "Pizza salgada",
      doces: "Pizza doce",
      "esfihas-salgadas": "Esfiha salgada",
      "esfihas-doces": "Esfiha doce",
      pasteis: "Pastel",
      combo: "combo",
    };

    return labels[item.categoria] || "Item do cardápio";
  }

  function getItemAlt(item) {
    if (item.categoria === "pasteis") {
      return item.nome;
    }

    if (item.categoria === "salgadas" || item.categoria === "doces") {
      return `Pizza ${item.nome}`;
    }

    if (
      item.categoria === "esfihas-salgadas" ||
      item.categoria === "esfihas-doces"
    ) {
      return `Esfiha ${item.nome}`;
    }

    return item.nome;
  }

  function getItemPriceLabel(item) {
    if (item.categoria === "pasteis") {
      return "";
    }

    if (!item.sabores || item.sabores.length === 0) {
      return formatPrice(item.preco);
    }

    const prices = item.sabores.map((sabor) => sabor.preco);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    if (minPrice === maxPrice) {
      return formatPrice(minPrice);
    }

    return `${formatPrice(minPrice)} a ${formatPrice(maxPrice)}`;
  }

  function getFlavorByName(product, flavorName) {
    if (!product.sabores) return null;
    return product.sabores.find((sabor) => sabor.nome === flavorName) || null;
  }

  function getOrderItemName(product, selectedFlavor = null) {
    if (selectedFlavor) {
      return `${product.nome} - ${selectedFlavor.nome}`;
    }

    if (product.categoria === "salgadas" || product.categoria === "doces") {
      return `Pizza - ${product.nome}`;
    }

    if (
      product.categoria === "esfihas-salgadas" ||
      product.categoria === "esfihas-doces"
    ) {
      return `Esfiha - ${product.nome}`;
    }

    if (product.categoria === "combo") {
      return `Combo - ${product.nome}`;
    }

    return product.nome;
  }

  function renderMenu() {
    const filteredItems = MENU.filter(
      (item) => item.categoria === state.currentCategory,
    );

    const allPizzaFlavors = getAllPizzaFlavors();

    elements.menuGrid.innerHTML = filteredItems
      .map((item) => {
        const hasFlavors =
          Array.isArray(item.sabores) && item.sabores.length > 0;

        const isPizzaItem = isPizza(item);

        return `
        <article class="menu-card">
          <img
            src="${item.imagem}"
            alt="${getItemAlt(item)}"
            class="menu-card__image"
            loading="lazy"
          />

          <span class="menu-card__tag">
            ${getCategoryLabel(item)}
          </span>

          <div class="menu-card__top">
            <div>
              <h3>${item.nome}</h3>
              <p>${item.descricao}</p>
            </div>

            ${
              getItemPriceLabel(item)
                ? `<span class="price">${getItemPriceLabel(item)}</span>`
                : ""
            }
          </div>

         ${hasFlavors ? renderProductFlavorCustomSelect(item) : ""}

          ${isPizzaItem ? renderPizzaSecondFlavorCustomSelect(item, allPizzaFlavors) : ""}

          <button class="btn btn--primary add-btn" data-id="${item.id}" type="button">
            Adicionar ao pedido
          </button>
        </article>
      `;
      })
      .join("");

    if (window.CustomSelect) {
      window.CustomSelect.initAll(elements.menuGrid);
    }
  }

  function renderCart() {
    if (state.cart.length === 0) {
      elements.cartItems.innerHTML = `
        <div class="cart-empty">
          Seu pedido está vazio. Adicione um item para começar.

        </div>
      `;
    } else {
      elements.cartItems.innerHTML = state.cart
        .map(
          (item) => `
            <div class="cart-item">
              <div class="cart-item__top">
                <div>
                  <div class="cart-item__name">${item.nome}</div>
                  <div class="cart-item__sub">${formatPrice(item.preco)} cada</div>
                </div>
                <strong>${formatPrice(item.preco * item.qtd)}</strong>
              </div>

              <div class="cart-item__actions">
                <div class="qty-controls">
                  <button class="qty-btn decrease-btn" data-id="${item.id}" type="button" aria-label="Diminuir quantidade">
                    −
                  </button>
                  <strong>${item.qtd}</strong>
                  <button class="qty-btn increase-btn" data-id="${item.id}" type="button" aria-label="Aumentar quantidade">
                    +
                  </button>
                </div>

                <button class="remove-btn remove-btn-item" data-id="${item.id}" type="button">
                  Remover
                </button>
              </div>
            </div>
          `,
        )
        .join("");
    }

    const subtotal = getCartSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = getOrderTotal();
    const itemsCount = getCartItemsCount();

    elements.orderSubtotal.textContent = formatPrice(subtotal);
    elements.deliveryFeeValue.textContent = formatPrice(deliveryFee);
    elements.deliveryFeeRow.classList.toggle("hidden", deliveryFee <= 0);
    elements.orderTotal.textContent = formatPrice(total);
    elements.mobileTotal.textContent = formatPrice(total);
    elements.cartCount.textContent = itemsCount;
    elements.mobileCartCount.textContent = itemsCount;

    persistCart();
    updateCheckoutState();
  }

  function updateCheckoutState() {
    const isCartEmpty = state.cart.length === 0;
    elements.checkoutBtn.disabled = isCartEmpty;
    elements.clearCartBtn.disabled = isCartEmpty;
  }

  function handleCategoryChange(event) {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    state.currentCategory = button.dataset.category;

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("is-active");
    });

    button.classList.add("is-active");
    renderMenu();
  }

  function handleCustomSelectChange(event) {
    const pizzaSelect = event.target.closest(".pizza-second-flavor");

    if (pizzaSelect) {
      const productId = pizzaSelect.dataset.productId;
      const firstPizza = getProductById(productId);
      if (!firstPizza) return;

      const secondFlavorId = event.detail.value;
      const finalPrice = getTwoFlavorsPrice(firstPizza, secondFlavorId);

      const priceElement = document.getElementById(
        `pizza-price-${firstPizza.id}`,
      );
      if (priceElement) {
        priceElement.textContent = formatPrice(finalPrice);
      }

      return;
    }

    const flavorSelect = event.target.closest(".product-flavor-select");

    if (flavorSelect) {
      const productId = flavorSelect.dataset.productId;
      const product = getProductById(productId);
      if (!product || !product.sabores) return;

      const selectedFlavor = getFlavorByName(product, event.detail.value);
      if (!selectedFlavor) return;

      const priceElement = document.getElementById(
        `flavor-price-${product.id}`,
      );
      if (priceElement) {
        priceElement.textContent = formatPrice(selectedFlavor.preco);
      }
    }
  }

  function handleFlavorChange(event) {
    const select = event.target.closest(".product-flavor");
    if (!select) return;

    const product = getProductById(select.dataset.productId);
    if (!product || !product.sabores) return;

    const selectedFlavor = getFlavorByName(product, select.value);
    if (!selectedFlavor) return;

    const priceElement = document.getElementById(`flavor-price-${product.id}`);
    if (priceElement) {
      priceElement.textContent = formatPrice(selectedFlavor.preco);
    }
  }

  function handleAddToCart(event) {
    const addButton = event.target.closest(".add-btn");
    if (!addButton) return;

    const card = addButton.closest(".menu-card");
    const flavorInput = card?.querySelector(".product-flavor-input");
    const selectedFlavor = flavorInput ? flavorInput.value : null;

    const secondFlavorInput = card?.querySelector(".pizza-second-flavor-input");
    const secondFlavorId = secondFlavorInput ? secondFlavorInput.value : null;

    addToCart(addButton.dataset.id, selectedFlavor, secondFlavorId);
  }

  function handleCartActions(event) {
    const increaseButton = event.target.closest(".increase-btn");
    const decreaseButton = event.target.closest(".decrease-btn");
    const removeButton = event.target.closest(".remove-btn-item");

    if (increaseButton) {
      increaseItem(increaseButton.dataset.id);
      return;
    }

    if (decreaseButton) {
      decreaseItem(decreaseButton.dataset.id);
      return;
    }

    if (removeButton) {
      removeItem(removeButton.dataset.id);
    }
  }

  function addToCart(
    productId,
    selectedFlavorName = null,
    secondFlavorId = null,
  ) {
    const product = getProductById(productId);
    if (!product) return;

    let cartId = product.id;
    let cartName = getOrderItemName(product);
    let cartPrice = product.preco;

    if (isPizza(product) && secondFlavorId) {
      const secondPizza = getProductById(secondFlavorId);

      if (
        secondPizza &&
        isPizza(secondPizza) &&
        secondPizza.id !== product.id
      ) {
        const orderedFlavors = [product, secondPizza].sort((a, b) =>
          a.nome.localeCompare(b.nome, "pt-BR"),
        );

        cartId = `pizza-2-sabores-${orderedFlavors
          .map((item) => item.id)
          .join("-")}`;

        cartName = `Pizza 2 sabores - ${orderedFlavors[0].nome} / ${orderedFlavors[1].nome}`;
        cartPrice = Math.max(product.preco, secondPizza.preco);
      }
    } else if (Array.isArray(product.sabores) && product.sabores.length > 0) {
      const selectedFlavor = getFlavorByName(
        product,
        selectedFlavorName || product.sabores[0].nome,
      );

      if (!selectedFlavor) return;

      cartId = `${product.id}-${slugify(selectedFlavor.nome)}`;
      cartName = getOrderItemName(product, selectedFlavor);
      cartPrice = selectedFlavor.preco;
    }

    const existingItem = state.cart.find((item) => item.id === cartId);

    if (existingItem) {
      existingItem.qtd += 1;
    } else {
      state.cart.push({
        id: cartId,
        nome: cartName,
        preco: cartPrice,
        qtd: 1,
      });
    }

    renderCart();
    showToast(`${cartName} adicionado ao pedido`);
  }

  function increaseItem(productId) {
    const item = state.cart.find((product) => product.id === productId);
    if (!item) return;

    item.qtd += 1;
    renderCart();
  }

  function decreaseItem(productId) {
    const item = state.cart.find((product) => product.id === productId);
    if (!item) return;

    item.qtd -= 1;

    if (item.qtd <= 0) {
      state.cart = state.cart.filter((product) => product.id !== productId);
    }

    renderCart();
  }

  function removeItem(productId) {
    state.cart = state.cart.filter((product) => product.id !== productId);
    renderCart();
    showToast("Item removido do pedido");
  }

  function clearCart() {
    if (state.cart.length === 0) return;

    const confirmed = window.confirm("Deseja limpar todo o pedido?");
    if (!confirmed) return;

    state.cart = [];
    renderCart();
    showToast("Pedido limpo com sucesso");
  }

  function validateOrder() {
    if (state.cart.length === 0) {
      alert("Seu pedido está vazio. Adicione pelo menos um item.");
      return false;
    }

    const customerName = elements.customerName.value.trim();
    const customerAddress = elements.customerAddress.value.trim();
    const orderType = elements.orderType.value;
    const paymentMethod = elements.paymentMethod.value;
    const needChange = elements.needChange.value;
    const changeAmount = elements.changeAmount.value.trim();
    const subtotal = getCartSubtotal();

    if (!customerName) {
      alert("Por favor, informe seu nome antes de finalizar.");
      elements.customerName.focus();
      return false;
    }

    if (CONFIG.minOrder > 0 && subtotal < CONFIG.minOrder) {
      alert(`O pedido mínimo é de ${formatPrice(CONFIG.minOrder)}.`);
      return false;
    }

    if (orderType === "Delivery" && !customerAddress) {
      alert("Por favor, informe seu bairro/endereço para delivery.");
      elements.customerAddress.focus();
      return false;
    }

    if (paymentMethod === "Dinheiro" && needChange === "Sim" && !changeAmount) {
      alert("Informe o valor para troco.");
      elements.changeAmount.focus();
      return false;
    }

    return true;
  }

  function buildWhatsAppMessage() {
    const customerName = elements.customerName.value.trim();
    const customerAddress = elements.customerAddress.value.trim();
    const orderNotes = elements.orderNotes.value.trim();
    const orderType = elements.orderType.value;
    const paymentMethod = elements.paymentMethod.value;
    const needChange = elements.needChange.value;
    const changeAmount = elements.changeAmount.value.trim();

    const subtotal = getCartSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = getOrderTotal();

    const lines = [];
    lines.push(`Olá, ${CONFIG.storeName}! Quero fazer um pedido:`);
    lines.push("");

    state.cart.forEach((item) => {
      lines.push(
        `• ${item.qtd}x ${item.nome} — ${formatPrice(item.preco * item.qtd)}`,
      );
    });

    lines.push("");
    lines.push(`Subtotal: ${formatPrice(subtotal)}`);

    if (deliveryFee > 0) {
      lines.push(`Taxa de entrega: ${formatPrice(deliveryFee)}`);
    }

    lines.push(`Total do pedido: ${formatPrice(total)}`);
    lines.push(`Tipo do pedido: ${orderType}`);
    lines.push(`Forma de pagamento: ${paymentMethod}`);

    if (paymentMethod === "Dinheiro") {
      lines.push(`Precisa de troco: ${needChange}`);
      if (needChange === "Sim" && changeAmount) {
        lines.push(`Troco para: R$ ${changeAmount}`);
      }
    }

    lines.push(`Nome do cliente: ${customerName}`);

    if (orderType === "Delivery" && customerAddress) {
      lines.push(`Endereço/Bairro: ${customerAddress}`);
    }

    if (orderNotes) {
      lines.push(`Observações: ${orderNotes}`);
    }

    lines.push("");
    lines.push("Aguardo a confirmação do pedido. Obrigado!");

    return lines.join("\n");
  }

  function sendToWhatsApp() {
    if (!validateOrder()) return;

    persistForm();

    const message = buildWhatsAppMessage();
    const number = sanitizeWhatsAppNumber(CONFIG.whatsappNumber);
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  }

  function showToast(message) {
    clearTimeout(state.toastTimer);

    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");

    state.toastTimer = setTimeout(() => {
      elements.toast.classList.remove("is-visible");
    }, 2200);
  }
});
