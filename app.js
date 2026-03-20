const input = document.getElementById("preguntaInput");
const boton = document.getElementById("buscarBtn");
const resultado = document.getElementById("resultado");
const entrenarBtn = document.getElementById("entrenarBtn");
const entrenamientoDiv = document.getElementById("entrenamiento");
const preguntaEntrenamiento = document.getElementById("preguntaEntrenamiento");
const respuestaEntrenamiento = document.getElementById("respuestaEntrenamiento");
const verificarBtn = document.getElementById("verificarBtn");
const feedback = document.getElementById("feedback");

// Función para normalizar texto (minusculas y sin acentos)
function normalizar(texto) {
  return texto.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Búsqueda flexible
function buscarRespuesta(preguntaUsuario) {
  const texto = normalizar(preguntaUsuario);
  return preguntas.find(item => {
    const pregunta = normalizar(item.pregunta);
    const keywords = item.keywords.map(k => normalizar(k));
    return pregunta.includes(texto) || keywords.some(k => texto.includes(k));
  });
}

// Mostrar respuesta
boton.addEventListener("click", () => {
  const textoUsuario = input.value;
  if (!textoUsuario.trim()) {
    resultado.innerHTML = "<p>Escribe una pregunta.</p>";
    return;
  }
  const coincidencia = buscarRespuesta(textoUsuario);
  if (coincidencia) {
    resultado.innerHTML = `
      <h3>${coincidencia.categoria}</h3>
      <p><strong>Pregunta:</strong> ${coincidencia.pregunta}</p>
      <p>${coincidencia.respuesta_larga}</p>
    `;
  } else {
    resultado.innerHTML = "<p>No encontré una respuesta exacta. Prueba con otra redacción.</p>";
  }
});

// Modo entrenamiento
entrenarBtn.addEventListener("click", () => {
  entrenamientoDiv.style.display = "block";
  resultado.innerHTML = "";
  feedback.innerHTML = "";
  const aleatorio = preguntas[Math.floor(Math.random() * preguntas.length)];
  preguntaEntrenamiento.innerText = "Pregunta de entrenamiento: " + aleatorio.pregunta;
  entrenamientoDiv.dataset.respuestaCorrecta = aleatorio.respuesta_larga;
});

verificarBtn.addEventListener("click", () => {
  const respuestaUsuario = normalizar(respuestaEntrenamiento.value);
  const respuestaCorrecta = normalizar(entrenamientoDiv.dataset.respuestaCorrecta);
  if (respuestaUsuario.length < 20) {
    feedback.innerText = "Intenta escribir una respuesta más completa.";
  } else if (respuestaCorrecta.includes(respuestaUsuario) || respuestaUsuario.includes(respuestaCorrecta)) {
    feedback.innerText = "¡Correcto! Bien hecho.";
  } else {
    feedback.innerText = "Respuesta incorrecta o parcial. Revisa la información en la base de datos.";
  }
});