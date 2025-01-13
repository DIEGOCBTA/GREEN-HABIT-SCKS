const words = ["SALUD", "FRESCURA", "SABOR", "BIENESTAR", "NUTRICIÓN", "ENERGÍA", "VITALIDAD", "NATURAL", "BRINDAR", "SATISFACER", "SALUDABLE", "NUTRIENTES"];
let index = 0;
const finalWord = "CUIDAR DE TI";
const changingWordElement = document.getElementById("changing-word");

function changeWord() {
    if (index < words.length) {
        changingWordElement.textContent = words[index];
        changingWordElement.style.opacity = 1;
        changingWordElement.style.animation = 'typing 0.5s steps(6) forwards, quickChange 0.5s steps(6) 4s forwards'; // Cambiar un poco más despacio
        index++;
    } else {
        changingWordElement.textContent = finalWord;
        changingWordElement.style.animation = 'blinkGreen 4s ease-in-out forwards'; // Se mantiene fijo en verde

       
    }
}

setInterval(changeWord, 150); // Cambiar cada 150ms para que las palabras cambien rápido y no se "traben"

setTimeout(() => {
    document.querySelector('.solution-text').style.display = 'block';
}, 4500); // Aparece 4.5 segundos después

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('.nav-list a'); // Seleccionar los enlaces del menú

    // Función para manejar el menú dependiendo del tamaño de la pantalla
    const handleMenuDisplay = () => {
        if (window.innerWidth >= 768) {
            navList.style.display = 'flex'; // Mostrar menú en pantallas grandes
        } else {
            navList.style.display = 'none'; // Ocultar menú en pantallas pequeñas
        }
    };

    // Inicializar el estado del menú al cargar la página
    handleMenuDisplay();

    // Mostrar/ocultar menú al hacer clic en el botón hamburguesa
    hamburger.addEventListener('click', () => {
        const isMenuVisible = navList.style.display === 'flex';
        navList.style.display = isMenuVisible ? 'none' : 'flex';
    });

    // Cerrar menú al redimensionar pantalla
    window.addEventListener('resize', handleMenuDisplay);
});

