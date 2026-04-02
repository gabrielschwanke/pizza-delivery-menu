document.addEventListener("DOMContentLoaded", () => {
  const CONFIG = {
    storeName: "Venezza Delivery",
    slogan: "Sabor que conquista!",
    whatsappNumber: "5511999999999", // coloque aqui o número real com DDI + DDD
    whatsappDisplay: "(11) 99999-9999",
    businessHours: "Segunda a domingo • 18h às 23h",
    deliveryAreas: "Centro e bairros próximos",
    deliveryFee: 0, // ex.: 5 para R$ 5,00 | deixe 0 se não quiser cobrar
    minOrder: 0 // ex.: 30 para pedido mínimo de R$ 30,00
  };

  const MENU = [
    {
      id: "calabresa",
      categoria: "salgadas",
      nome: "Calabresa",
      descricao: "Mussarela, calabresa e cebola",
      preco: 45
    },
    {
      id: "mussarela",
      categoria: "salgadas",
      nome: "Mussarela",
      descricao: "Mussarela e orégano",
      preco: 40
    },
    {
      id: "coracao",
      categoria: "salgadas",
      nome: "Coração",
      descricao: "Coração de frango e mussarela",
      preco: 50
    },
    {
      id: "bacon",
      categoria: "salgadas",
      nome: "Bacon",
      descricao: "Bacon, mussarela e tomate",
      preco: 50
    },
    {
      id: "napolitana",
      categoria: "salgadas",
      nome: "Napolitana",
      descricao: "Presunto, mussarela, tomate e catupiry",
      preco: 55
    },
    {
      id: "strogonoff",
      categoria: "salgadas",
      nome: "Strogonoff de Carne",
      descricao: "Creme de leite, molho, champignon e batata palha",
      preco: 60
    },
    {
      id: "frango-catupiry",
      categoria: "salgadas",
      nome: "Frango com Catupiry",
      descricao: "Frango desfiado com catupiry",
      preco: 50
    },
    {
      id: "alho-oleo",
      categoria: "salgadas",
      nome: "Alho e Óleo",
      descricao: "Alho temperado e toque de orégano",
      preco: 40
    },
    {
      id: "pepperoni",
      categoria: "salgadas",
      nome: "Pepperoni",
      descricao: "Pepperoni e mussarela",
      preco: 55
    },
    {
      id: "iscas-fritas",
      categoria: "salgadas",
      nome: "Iscas Fritas",
      descricao: "Cobertura especial da casa",
      preco: 60
    },
    {
      id: "lombinho-abacaxi",
      categoria: "salgadas",
      nome: "Lombinho com Abacaxi",
      descricao: "Lombinho, mussarela e abacaxi",
      preco: 50
    },
    {
      id: "quatro-queijos",
      categoria: "salgadas",
      nome: "4 Queijos",
      descricao: "Mix especial de queijos",
      preco: 50
    },
    {
      id: "bolonhesa",
      categoria: "salgadas",
      nome: "Bolonhesa",
      descricao: "Molho bolonhesa e mussarela",
      preco: 50
    },
    {
      id: "vegetariana",
      categoria: "salgadas",
      nome: "Vegetariana",
      descricao: "Legumes selecionados e mussarela",
      preco: 55
    },
    {
      id: "sonho-de-valsa",
      categoria: "doces",
      nome: "Sonho de Valsa",
      descricao: "Chocolate com cobertura especial",
      preco: 50
    },
    {
      id: "ouro-branco",
      categoria: "doces",
      nome: "Ouro Branco",
      descricao: "Chocolate e bombom Ouro Branco",
      preco: 50
    },
    {
      id: "banana-nevada",
      categoria: "doces",
      nome: "Banana Nevada",
      descricao: "Banana com toque doce da casa",
      preco: 50
    },
    {
      id: "banoffee",
      categoria: "doces",
      nome: "Banoffee",
      descricao: "Banana, doce e cobertura cremosa",
      preco: 60
    },
    {
      id: "romeu-julieta",
      categoria: "doces",
      nome: "Romeu e Julieta",
      descricao: "Queijo com goiabada",
      preco: 40
    },
    {
      id: "california",
      categoria: "doces",
      nome: "Califórnia",
      descricao: "Combinação doce especial",
      preco: 55
    }
  ];

  const STORAGE_KEYS = {
    cart: "venezza-cart",
    name: "venezza-name",
    address: "venezza-address",
    orderType: "venezza-order-type",
    payment: "venezza-payment",
    needChange: "venezza-need-change",
    changeAmount: "venezza-change-amount",
    notes: "venezza-notes"
  };

  const state = {
    currentCategory: "salgadas",
    cart: getStoredCart(),
    toastTimer: null
  };

  const elements = {
    filters: document.getElementById("filters"),
    menuGrid: document.getElementById("menuGrid"),
    cartItems: document.getElementById("cartItems"),
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
    currentYear: document.getElementById("currentYear")
  };

  init();

  function init() {
    applyConfigToUI();
    hydrateForm();
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
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]");
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
    elements.cartItems.addEventListener("click", handleCartActions);
    elements.checkoutBtn.addEventListener("click", sendToWhatsApp);
    elements.clearCartBtn.addEventListener("click", clearCart);

    [
      elements.customerName,
      elements.customerAddress,
      elements.orderNotes,
      elements.changeAmount
    ].forEach((field) => {
      field.addEventListener("input", persistForm);
    });

    [elements.orderType, elements.paymentMethod, elements.needChange].forEach((field) => {
      field.addEventListener("change", persistForm);
    });

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
    elements.customerAddress.value = localStorage.getItem(STORAGE_KEYS.address) || "";
    elements.orderType.value = localStorage.getItem(STORAGE_KEYS.orderType) || "Delivery";
    elements.paymentMethod.value = localStorage.getItem(STORAGE_KEYS.payment) || "Pix";
    elements.needChange.value = localStorage.getItem(STORAGE_KEYS.needChange) || "Não";
    elements.changeAmount.value = localStorage.getItem(STORAGE_KEYS.changeAmount) || "";
    elements.orderNotes.value = localStorage.getItem(STORAGE_KEYS.notes) || "";
  }

  function persistForm() {
    localStorage.setItem(STORAGE_KEYS.name, elements.customerName.value);
    localStorage.setItem(STORAGE_KEYS.address, elements.customerAddress.value);
    localStorage.setItem(STORAGE_KEYS.orderType, elements.orderType.value);
    localStorage.setItem(STORAGE_KEYS.payment, elements.paymentMethod.value);
    localStorage.setItem(STORAGE_KEYS.needChange, elements.needChange.value);
    localStorage.setItem(STORAGE_KEYS.changeAmount, elements.changeAmount.value);
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
    elements.changeAmountGroup.classList.toggle("hidden", !isCash || !needsChange);

    if (!isCash) {
      elements.needChange.value = "Não";
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
      currency: "BRL"
    });
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

  function renderMenu() {
    const filteredItems = MENU.filter(
      (item) => item.categoria === state.currentCategory
    );

    elements.menuGrid.innerHTML = filteredItems
      .map(
        (item) => `
          <article class="menu-card">
            <span class="menu-card__tag">
              ${item.categoria === "salgadas" ? "Pizza salgada" : "Pizza doce"}
            </span>

            <div class="menu-card__top">
              <div>
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
              </div>

              <span class="price">${formatPrice(item.preco)}</span>
            </div>

            <button class="btn btn--primary add-btn" data-id="${item.id}" type="button">
              Adicionar ao pedido
            </button>
          </article>
        `
      )
      .join("");
  }

  function renderCart() {
    if (state.cart.length === 0) {
      elements.cartItems.innerHTML = `
        <div class="cart-empty">
          Seu pedido está vazio. Adicione um sabor para começar.
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
          `
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

  function handleAddToCart(event) {
    const addButton = event.target.closest(".add-btn");
    if (!addButton) return;

    addToCart(addButton.dataset.id);
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

  function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const existingItem = state.cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.qtd += 1;
    } else {
      state.cart.push({
        id: product.id,
        nome: product.nome,
        preco: product.preco,
        qtd: 1
      });
    }

    renderCart();
    showToast(`${product.nome} adicionado ao pedido`);
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
      lines.push(`• ${item.qtd}x ${item.nome} — ${formatPrice(item.preco * item.qtd)}`);
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
