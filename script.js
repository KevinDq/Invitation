document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".screen");
    const main = document.querySelector(".main");
    const restartButton = document.getElementById("restart-button");
    const menuButton = document.getElementById('menu-btn');
    menuButton.addEventListener("click", toggleMenu);
  
  function toggleMenu() {
    const menuList = document.getElementById('menu') // Cibler le 1er élément
    menuList.classList.toggle('toggle'); // Ajouter ou retirer la classe
    menuButton.classList.toggle('toggle'); // Ajouter ou retirer la classe
  }
    

    let currentIndex = 0;
    let interval;
  
    const scrollSections = () => {
      currentIndex++;
      if (currentIndex < sections.length) {
        main.style.transform = `translateY(-${currentIndex * 100}vh)`;
      } else {
        clearInterval(interval);
        restartButton.style.display = "block"; // Affiche le bouton avec l'icône
        menuButton.style.display = "block"; // Affiche le bouton avec l'icône
      }
    };
  
    interval = setInterval(scrollSections, 6000);
  
    restartButton.addEventListener("click", () => {
      currentIndex = 0;
      main.style.transform = `translateY(0)`;
      restartButton.style.display = "none";
      menuButton.style.display = "none";
      interval = setInterval(scrollSections, 6000);
    });
  });
  
  // Récupération du paramètre "name" dans l'URL
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || 'Invité';

  // Affichage du message personnalisé
  document.getElementById('personal-message').textContent = `${name} !`;
  document.getElementById('personal-message-two').textContent = `${name}`;  
  
  