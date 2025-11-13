document.getElementById("heart").addEventListener("click", function() {
  const heartInner = document.getElementById("heart-inner");
  const message = document.getElementById("message");

  // Si el corazón ya se ha "abierto", mostrar el mensaje
  if (heartInner.style.transform === "rotate(45deg)") {
    message.style.display = "block"; // Mostrar mensaje
  } else {
    // Cambiar la rotación del corazón para simular que se abre
    heartInner.style.transform = "rotate(45deg)";
  }
});
