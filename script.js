document.getElementById("moreBtn").addEventListener("click", function () {
  const extra = document.getElementById("extraInfo");
  extra.classList.toggle("hidden");
  this.textContent = extra.classList.contains("hidden") 
    ? "Dlaczego nie wynajmujemy?" 
    : "Ukryj powód";
});
