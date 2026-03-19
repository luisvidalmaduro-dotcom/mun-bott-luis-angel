const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const trainBtn = document.getElementById("trainBtn");
const chatWindow = document.getElementById("chatWindow");

// Normalizar texto
function normalizar(texto) {
  return texto.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Buscar respuesta flexible
function buscarRespuesta(preguntaUsuario) {
  const texto = normalizar(preguntaUsuario);
  return preguntas.find(item => {
    const pregunta = normalizar(item.pregunta);
    const keywords = item.keywords.map(k => normalizar(k));
    return pregunta.includes(texto) || keywords.some(k => texto.includes(k));
  });
}

// Mostrar mensaje en la ventana de chat
function mostrarMensaje(texto, tipo) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.classList.add(tipo === "user" ? "user-message" : "bot-message");
  div.innerText = texto;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Enviar pregunta
sendBtn.addEventListener("click", () => {
  const textoUsuario = userInput.value;
  if (!textoUsuario.trim()) return;
  mostrarMensaje(textoUsuario, "user");
  const respuesta = buscarRespuesta(textoUsuario);
  if (respuesta) {
    mostrarMensaje(respuesta.respuesta_larga, "bot");
  } else {
    mostrarMensaje("No encontré una respuesta exacta. Intenta con otra redacción.", "bot");
  }
  userInput.value = "";
});

// Modo entrenamiento
trainBtn.addEventListener("click", () => {
  const aleatorio = preguntas[Math.floor(Math.random() * preguntas.length)];
  mostrarMensaje("Entrenamiento: " + aleatorio.pregunta, "bot");
  const respuestaUsuario = prompt("Escribe tu respuesta:");
  if (!respuestaUsuario) return;
  const correcta = normalizar(aleatorio.respuesta_larga);
  const usuarioNorm = normalizar(respuestaUsuario);
  if (correcta.includes(usuarioNorm) || usuarioNorm.includes(correcta)) {
    mostrarMensaje("¡Correcto! Bien hecho.", "bot");
  } else {
    mostrarMensaje("Respuesta incorrecta o parcial. Revisa la información en la base de datos.", "bot");
  }
});