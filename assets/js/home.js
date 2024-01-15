const spanPanierCount = document.querySelector(".spanPanier");
spanPanierCount.innerHTML = "";

const buttonAjoutPanier = document.querySelector(".btnAjoutPanier");
let count = 1;

const panierAnimation = document.querySelector(".panierAnimation");

buttonAjoutPanier.addEventListener("click", () => {
	spanPanierCount.innerHTML = count++;
	panierAnimation.classList.add("active");

	setTimeout(() => {
		panierAnimation.classList.remove("active");
	}, 1000);
});
