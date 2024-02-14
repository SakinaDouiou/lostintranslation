document.addEventListener('DOMContentLoaded', function() {
  const texteBob = document.getElementById('texteBob');
  const texteCharlotte = document.getElementById('texteCharlotte');
  const charlotteBlanc = document.getElementById('charlotteBlanc');
  const bobBlanc = document.getElementById('bobBlanc');

  texteBob.addEventListener('mouseover', function() {
    charlotteBlanc.style.opacity = '0.97';
    texteCharlotte.style.opacity = '1'; // Opacité de texteCharlotte à 1 au survol de texteBob
  });

  texteBob.addEventListener('mouseout', function() {
    charlotteBlanc.style.opacity = '0';
    texteCharlotte.style.opacity = '0'; // Réinitialisation de l'opacité de texteCharlotte
  });

  texteCharlotte.addEventListener('mouseover', function() {
    bobBlanc.style.opacity = '0.97';
    texteBob.style.opacity = '1';
  });

  texteCharlotte.addEventListener('mouseout', function() {
    bobBlanc.style.opacity = '0';
    texteBob.style.opacity = '0';
  });






const textes = document.querySelectorAll('.tout');
const totalDuration = 3500; // Durée totale de l'animation en millisecondes
const animationDuration = totalDuration / textes.length; // Durée de chaque texte en millisecondes

let index = 0;

function toggleVisibility() {
  textes.forEach((texte, i) => {
    if (i === index) {
      texte.style.visibility = 'visible';
    } else {
      texte.style.visibility = 'hidden';
    }
  });

  index = (index + 1) % textes.length;
}

// Augmenter l'intervalle pour ralentir l'animation
setInterval(toggleVisibility, animationDuration);






// Fonction pour vérifier si l'URL actuelle contient une ancre spécifique
function checkAnchor() {
    // Obtenez l'ancre actuelle dans l'URL
    const currentAnchor = window.location.hash;

    // Vérifiez si l'ancre existe dans l'URL
    if (currentAnchor) {
        // Sélectionnez tous les liens de navigation
        const navLinks = document.querySelectorAll('#vertical a');

        // Parcourez chaque lien et modifiez sa couleur si son href correspond à l'ancre actuelle
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentAnchor) {
                link.style.color = 'black'; // Changez la couleur en noir
            } else {
                link.style.color = 'rgba(255, 255, 255, 0.7)'; // Rétablissez la couleur par défaut
            }
        });
    }
}

// Appelez la fonction une fois lors du chargement de la page pour vérifier l'ancre initiale
checkAnchor();

// Ajoutez un écouteur d'événements pour détecter les changements d'ancre
window.addEventListener('hashchange', checkAnchor);


});
