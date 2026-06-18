(function () {
  function closeAllCustomSelects(except = null) {
    document
      .querySelectorAll("[data-custom-select].is-open")
      .forEach((select) => {
        if (select !== except) {
          select.classList.remove("is-open");
        }
      });
  }

  function setSelectedOption(customSelect, option, dispatchEvent = true) {
    const nativeInput = customSelect.querySelector(".custom-select__native");
    const label = customSelect.querySelector(".custom-select__label");
    const options = customSelect.querySelectorAll(".custom-select__option");

    const value = option.dataset.value ?? "";
    const text = option.dataset.label ?? option.textContent.trim();

    if (nativeInput) {
      nativeInput.value = value;
    }

    if (label) {
      label.textContent = text;
    }

    options.forEach((item) => {
      item.classList.remove("is-selected", "is-focused");
      item.setAttribute("aria-selected", "false");
    });

    option.classList.add("is-selected");
    option.setAttribute("aria-selected", "true");

    customSelect.classList.remove("is-open");

    if (dispatchEvent) {
      customSelect.dispatchEvent(
        new CustomEvent("custom-select:change", {
          bubbles: true,
          detail: {
            value,
            label: text,
          },
        }),
      );
    }
  }

  function focusOption(customSelect, index) {
    const options = [
      ...customSelect.querySelectorAll(".custom-select__option"),
    ];
    if (!options.length) return;

    const safeIndex = Math.max(0, Math.min(index, options.length - 1));

    options.forEach((item) => item.classList.remove("is-focused"));
    options[safeIndex].classList.add("is-focused");
    options[safeIndex].scrollIntoView({ block: "nearest" });
  }

  function getFocusedIndex(customSelect) {
    const options = [
      ...customSelect.querySelectorAll(".custom-select__option"),
    ];
    return options.findIndex((item) => item.classList.contains("is-focused"));
  }

  function openCustomSelect(customSelect) {
    closeAllCustomSelects(customSelect);
    customSelect.classList.add("is-open");

    const selected =
      customSelect.querySelector(".custom-select__option.is-selected") ||
      customSelect.querySelector(".custom-select__option");

    if (selected) {
      const options = [
        ...customSelect.querySelectorAll(".custom-select__option"),
      ];
      const index = options.indexOf(selected);
      focusOption(customSelect, index >= 0 ? index : 0);
    }
  }

  function toggleCustomSelect(customSelect) {
    if (customSelect.classList.contains("is-open")) {
      customSelect.classList.remove("is-open");
      return;
    }

    openCustomSelect(customSelect);
  }

  function setupCustomSelect(customSelect) {
    if (!customSelect || customSelect.dataset.customSelectReady === "true")
      return;

    const trigger = customSelect.querySelector(".custom-select__trigger");
    const options = customSelect.querySelectorAll(".custom-select__option");

    if (!trigger || !options.length) return;

    trigger.addEventListener("click", function () {
      toggleCustomSelect(customSelect);
    });

    trigger.addEventListener("keydown", function (event) {
      if (
        event.key === "ArrowDown" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        openCustomSelect(customSelect);
      }

      if (event.key === "Escape") {
        customSelect.classList.remove("is-open");
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", function () {
        setSelectedOption(customSelect, option, true);
      });

      option.addEventListener("mouseenter", function () {
        options.forEach((item) => item.classList.remove("is-focused"));
        option.classList.add("is-focused");
      });
    });

    customSelect.addEventListener("keydown", function (event) {
      if (!customSelect.classList.contains("is-open")) return;

      const optionsList = [
        ...customSelect.querySelectorAll(".custom-select__option"),
      ];
      let focusedIndex = getFocusedIndex(customSelect);

      if (event.key === "ArrowDown") {
        event.preventDefault();
        focusOption(customSelect, focusedIndex + 1);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        focusOption(customSelect, focusedIndex - 1);
      }

      if (event.key === "Enter") {
        event.preventDefault();
        if (focusedIndex >= 0 && optionsList[focusedIndex]) {
          setSelectedOption(customSelect, optionsList[focusedIndex], true);
        }
      }

      if (event.key === "Escape") {
        event.preventDefault();
        customSelect.classList.remove("is-open");
      }
    });

    const initialSelected =
      customSelect.querySelector(".custom-select__option.is-selected") ||
      customSelect.querySelector(".custom-select__option");

    if (initialSelected) {
      setSelectedOption(customSelect, initialSelected, false);
    }

    customSelect.dataset.customSelectReady = "true";
  }

  function initAllCustomSelects(root = document) {
    root.querySelectorAll("[data-custom-select]").forEach(setupCustomSelect);
  }

  document.addEventListener("click", function (event) {
    const clickedInside = event.target.closest("[data-custom-select]");
    if (!clickedInside) {
      closeAllCustomSelects();
    }
  });

  window.CustomSelect = {
    initAll: initAllCustomSelects,
    closeAll: closeAllCustomSelects,
  };
})();
