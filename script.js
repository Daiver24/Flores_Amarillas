// Lista de nombres permitidos
const allowedUsers = ["Mari", "Andrea", "Mishel", "Airam", "Keitty", "Lizeth", "Yerelci", "Meli"];

// Manejador del formulario de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    // Verificar si el nombre está en la lista de usuarios permitidos
    if (allowedUsers.includes(username)) {
        showMessage(username);
    } else {
        errorMessage.textContent = "Nombre no reconocido. Inténtalo de nuevo.";
    }
});

// Función para mostrar el mensaje personalizado
function showMessage(username) {
    // Ocultar la sección de login
    document.getElementById("loginSection").style.display = "none";

    // Mostrar la sección del mensaje
    const messageSection = document.getElementById("messageSection");
    messageSection.style.display = "block";

    // Personalizar el título y el mensaje
    const personalizedTitle = document.getElementById("personalizedTitle");
    const personalMessage = document.getElementById("personalMessage");

    personalizedTitle.textContent = `Feliz día, ${username}, te quiero mucho`;
    personalMessage.innerHTML = `Querida ${username},<br>Quiero que sepas lo especial que eres para mí. 
    Cada día contigo es un regalo, y me siento afortunado de tenerte en mi vida.<br> 
    Gracias por ser como eres, por tu apoyo incondicional y por compartir momentos que atesoro en mi corazón. Te quiero muchísimo.<br>
    Siempre estaré aquí para ti, y nunca olvides lo importante que eres para mí.`;
}
