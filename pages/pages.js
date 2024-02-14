document.addEventListener('DOMContentLoaded', function() {




function checkAnchor() {
    const currentAnchor = window.location.hash;

    if (currentAnchor) {
        const navLinks = document.querySelectorAll('#vertical a');

        navLinks.forEach(link => {
            link.style.color = 'rgba(0, 0, 0, 0.5)';
            link.parentNode.style.color = 'rgba(0, 0, 0, 0.5)';
        });
    } else {
        const navLinks = document.querySelectorAll('#vertical a');

        navLinks.forEach(link => {
            link.style.color = 'rgba(255, 255, 255, 0.7)';
            link.parentNode.style.color = 'rgba(255, 255, 255, 0.7)';
        });
    }
}

function checkScroll() {
    if (window.scrollY > 200) {
        const navLinks = document.querySelectorAll('#vertical a');

        navLinks.forEach(link => {
            link.style.color = 'rgba(0, 0, 0, 0.5)';
            link.parentNode.style.color = 'rgba(0, 0, 0, 0.5)';
        });
    } else {
        checkAnchor(); // Revert to the original color if there's no scroll
    }
}

checkAnchor(); // Initial check
window.addEventListener('hashchange', checkAnchor);
window.addEventListener('scroll', checkScroll);






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
            link.style.color = 'rgba(0, 0, 0, 0.5)'; // Changez la couleur en noir avec opacité
            link.parentNode.style.color = 'rgba(0, 0, 0, 0.5)'; // Changez également la couleur du parent li
        });
    } else {
        // Si aucune ancre n'est présente dans l'URL, réinitialisez les styles des liens de navigation
        const navLinks = document.querySelectorAll('#vertical a');
        navLinks.forEach(link => {
            link.style.color = ''; // Réinitialisez la couleur du lien
            link.parentNode.style.color = ''; // Réinitialisez la couleur du parent li
        });
    }
}

// Appelez la fonction une fois lors du chargement de la page pour vérifier l'ancre initiale
checkAnchor();

// Ajoutez un écouteur d'événements pour détecter les changements d'ancre
window.addEventListener('hashchange', checkAnchor);

// Ajoutez un écouteur d'événements pour détecter le défilement de la page
window.addEventListener('scroll', () => {
    // Vérifiez si la position de défilement est en haut de la page
    if (window.scrollY === 0) {
        // Si la position de défilement est en haut, réinitialisez les styles des liens de navigation
        const navLinks = document.querySelectorAll('#vertical a');
        navLinks.forEach(link => {
            link.style.color = ''; // Réinitialisez la couleur du lien
            link.parentNode.style.color = ''; // Réinitialisez la couleur du parent li
        });
    }
});














    const links = document.querySelectorAll("#vertical > ul > li > a");

    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");

        sections.forEach(function (section) {
            const top = section.offsetTop;
            const bottom = top + section.clientHeight;
            const id = section.getAttribute("id");
            const link = document.querySelector(`#vertical a[href="#${id}"]`);

            if (window.scrollY >= top && window.scrollY < bottom) {
                links.forEach(function (link) {
                    link.parentElement.classList.remove("active");
                });
                link.parentElement.classList.add("active");
                link.style.fontSize = "5vh"; // Changement de la taille de police lorsque vous êtes sur l'ancre
            } else {
                link.style.fontSize = ""; // Réinitialisation de la taille de police lorsque vous n'êtes pas sur l'ancre
            }
        });

        if (window.scrollY === 0) {
            links.forEach(function (link) {
                link.parentElement.classList.remove("active");
                link.style.fontSize = ""; // Réinitialisation de la taille de police lorsque vous êtes en haut de la page
            });
        }
    });





});
