
// On récupère tous rectangles (les images pour toi)
// Puis tous les boutons (titres)
const photo = document.querySelectorAll(".photo");
const titleButtons = document.querySelectorAll(".titleButton");

// On les affiche dans la console (optionnel)
console.log(photo);
console.log(photo[0]);
console.log(titleButtons);
console.log(titleButtons[0]);


// On parcours tous les boutons de 0 à NOMBRE DE BOUTONS, un par un
for (let titleIndex = 0; titleIndex < titleButtons.length; titleIndex++) {
  // Pour chaque bouton, on rajoute un eventListener qui écoute le passage de la souris sur le bouton
  titleButtons[titleIndex].addEventListener("mouseover", () => {
    // Je parcours mon tableau rectangles
    for (
      let photoIndex = 0; 
      photoIndex < photo.length; 
      photoIndex++
     ) {
      // Si ce n'est pas l'image que je veux afficher
      // Je lui retire la classe inView
      if (photoIndex != titleIndex) {
        photo[photoIndex].classList.remove("inView");
      }
    }
    // Puis j'affiche celui qui est à la même position dans le tableau rectangle que le bouton que je regarde
    photo[titleIndex].classList.add("inView");
  });
}