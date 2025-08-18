function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-260px"; // cerrar
  } else {
    menu.style.left = "0px"; // abrir
  }
}

// Cerrar el menú si haces clic fuera de él
document.addEventListener("click", function(e) {
  const menu = document.getElementById("side-menu");
  const icon = document.querySelector(".menu-icon");

  if (menu && icon && !menu.contains(e.target) && !icon.contains(e.target)) {
    menu.style.left = "-260px";
  }
});

// Animación de entrada en cada página
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Animación al hacer clic en enlaces del menú
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    // Solo aplica a enlaces internos (html de tu sitio)
    if (this.href.includes(window.location.origin)) {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      setTimeout(() => {
        window.location.href = this.href;
      }, 300); // tiempo antes de cambiar (coincide con el fade)
    }
  });
});
