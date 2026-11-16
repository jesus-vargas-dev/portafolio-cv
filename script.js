const menuButton = document.querySelector(".menu-toggle");
const menuLabel = menuButton.querySelector(".sr-only");
const navigation = document.querySelector(".site-nav");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");

document.querySelector("#year").textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuLabel.textContent = isExpanded ? "Abrir menú" : "Cerrar menú";
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuLabel.textContent = "Abrir menú";
    navigation.classList.remove("is-open");
  }
});

document.querySelectorAll(".image-open").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = button.dataset.alt;
    lightboxCaption.textContent = button.dataset.alt;
    lightbox.showModal();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
