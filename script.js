// Sélectionne tous les boutons "filter-button"
const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Sélectionne la liste correspondante
    const filterList = button.nextElementSibling;

    // Basculer l'affichage de la liste
    const isActive = filterList.style.display === "block";
    filterList.style.display = isActive ? "none" : "block";

    // Basculer la transformation du chevron
    button.classList.toggle("active");
  });
});
