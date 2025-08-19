function toggleMenu() {
  const menu = document.getElementById("side-menu");
  menu.classList.toggle("open");
}

// Cerrar el menú si haces clic fuera de él (pero no en sus enlaces)
document.addEventListener("click", function(e) {
  const menu = document.getElementById("side-menu");
  const icon = document.querySelector(".menu-icon");

  if (menu && icon && !menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove("open");
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
