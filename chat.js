const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const trainBtn = document.getElementById("trainBtn");
const chatWindow = document.getElementById("chatWindow");

// ====================== Respuestas mundanas / saludos extendidas ======================
const respuestasGenerales = [
  // Saludos
  { triggers: ["hola", "buenas", "hey", "hi", "buen día"], 
    respuesta: "¡Hola! 👋 Soy tu asistente MUN. Puedes preguntarme sobre protocolo, documentos oficiales o estrategias de debate. ¿Con qué quieres empezar hoy?" 
  },
  { triggers: ["adios", "chau", "nos vemos", "hasta luego"], 
    respuesta: "¡Hasta luego! Espero que sigas practicando y que tu preparación para la etapa Regional sea excelente. 💪" 
  },
  { triggers: ["gracias", "muchas gracias", "thanks"], 
    respuesta: "¡De nada! 😊 Siempre estoy aquí para ayudarte a aprender y practicar para tu comité." 
  },
  { triggers: ["como estas", "qué tal", "cómo va"], 
    respuesta: "Estoy bien, gracias por preguntar. 😄 ¿Listo para entrenar tus habilidades diplomáticas hoy?" 
  },

  // Preguntas sobre el chat
  { triggers: ["qué es este chat", "para qué sirve", "cómo funciona"], 
    respuesta: "Este chatbot es tu asistente educativo para Modelos de Naciones Unidas. Te ayuda a entender protocolo, redactar documentos oficiales, practicar estrategias de debate y prepararte para la etapa Regional 01-02. Solo escribe tu pregunta o activa el modo entrenamiento y te daré una respuesta detallada." 
  },
  { triggers: ["cómo usar entrenamiento", "modo entrenamiento", "quiero practicar"], 
    respuesta: "El modo entrenamiento te permite practicar con preguntas aleatorias de MUN. Responde como si estuvieras en el comité, y recibirás retroalimentación inmediata sobre tu respuesta, para que puedas mejorar y ganar confianza." 
  },
  { triggers: ["qué puedo preguntar", "qué preguntas hacer", "ideas de preguntas"], 
    respuesta: "Puedes preguntarme sobre reglas de protocolo (mociones, tiempos de oratoria, dudas parlamentarias), redacción de documentos oficiales (hoja de posición, documento de trabajo, proyecto de resolución), estrategias para destacar en el comité, diferencias entre la etapa Distrital y Regional, y consejos de etiqueta y lenguaje corporal." 
  },
  { triggers: ["no entiendo", "no sé qué hacer", "ayuda"], 
    respuesta: "No te preocupes, estoy aquí para guiarte. 😌 Intenta preguntarme sobre un tema específico de MUN, o activa el modo entrenamiento para practicar con preguntas aleatorias y aprender paso a paso." 
  },
  { triggers: ["qué es moción", "mocion de orden", "mocion de privilegio"], 
    respuesta: "Una moción es una acción formal que un delegado puede presentar durante el debate para cambiar el orden o llamar la atención de la mesa. Por ejemplo, la moción de orden permite corregir procedimientos y la moción de privilegio solicita atención a un derecho especial del delegado. Siempre se presenta respetando los tiempos de oratoria y en tercera persona." 
  },
  { triggers: ["cómo escribir hoja de posición", "hoja de posición"], 
    respuesta: "La hoja de posición es un documento clave donde presentas la postura de tu país sobre un tema. Debe incluir introducción del país, posición en cada subtema, soluciones propuestas y referencias. Es tu carta de presentación ante el comité y debe estar clara, concisa y bien estructurada." 
  },
  { triggers: ["qué es documento de trabajo", "documento de trabajo"], 
    respuesta: "El Documento de Trabajo es un borrador colaborativo donde los delegados proponen ideas y soluciones antes de redactar el proyecto de resolución. Incluye objetivos, antecedentes, análisis y propuestas preliminares. Sirve para organizar la discusión y lograr consensos." 
  },
  { triggers: ["qué es proyecto de resolución", "proyecto de resolución"], 
    respuesta: "El Proyecto de Resolución es el documento final que refleja las decisiones acordadas en el comité. Debe seguir el formato oficial MINERD, con encabezado, preámbulo y cláusulas operativas, y debe ser claro, coherente y respaldado por evidencia." 
  },
  { triggers: ["qué diferencia hay distrital regional", "distrital vs regional"], 
    respuesta: "La etapa Distrital es más introductoria y se centra en aprendizaje básico de procedimientos y debate. La Regional exige mayor profundidad en análisis, redacción y estrategia, además de cumplir con criterios específicos de los evaluadores para avanzar al MINUME. Prepararse para Regional implica dominar reglas, documentos y habilidades diplomáticas." 
  },
  { triggers: ["errores comunes", "qué no hacer", "errores en comité"], 
    respuesta: "Entre los errores más comunes están: no respetar los tiempos de oratoria, hablar fuera de turno, redactar documentos incompletos, no formar alianzas estratégicas, y descuidar el lenguaje corporal. Evitarlos te dará ventaja y proyectará confianza ante el comité." 
  },
  { triggers: ["cómo proyectar autoridad", "lenguaje corporal", "vestimenta"], 
    respuesta: "Para proyectar autoridad en la mesa, mantén postura erguida, contacto visual, tono de voz claro y pausado. Usa vestimenta formal adecuada al comité y evita gestos nerviosos. La confianza se transmite tanto con palabras como con gestos." 
  },
  { triggers: ["puedo equivocarme", "y si me equivoco", "errores"], 
    respuesta: "Equivocarse es parte del aprendizaje. Lo importante es mantener la calma, corregir de manera respetuosa y continuar participando. Cada error es una oportunidad para mejorar y aprender a desenvolverse mejor en futuras sesiones." 
  }
];

// ====================== Funciones existentes ======================
function normalizar(texto) {
  return texto.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buscarRespuesta(preguntaUsuario) {
  const texto = normalizar(preguntaUsuario);
  return preguntas.find(item => {
    const pregunta = normalizar(item.pregunta);
    const keywords = item.keywords.map(k => normalizar(k));
    return pregunta.includes(texto) || keywords.some(k => texto.includes(k));
  });
}

function mostrarMensaje(texto, tipo) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.classList.add(tipo === "user" ? "user-message" : "bot-message");
  div.innerText = texto;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// ====================== Enviar pregunta ======================
sendBtn.addEventListener("click", () => {
  const textoUsuario = userInput.value;
  if (!textoUsuario.trim()) return;

  mostrarMensaje(textoUsuario, "user");

  // 1️⃣ Revisar respuestas generales primero
  const general = respuestaGeneral(textoUsuario);
  if (general) {
    mostrarMensaje(general, "bot");
  } else {
    // 2️⃣ Buscar en base de datos MUN
    const respuesta = buscarRespuesta(textoUsuario);
    if (respuesta) {
      mostrarMensaje(respuesta.respuesta_larga, "bot");
    } else {
      mostrarMensaje("❗ No encontré una respuesta exacta. Intenta otra redacción.", "bot");
    }
  }

  userInput.value = "";
});

// ====================== Modo Entrenamiento ======================
trainBtn.addEventListener("click", () => {
  const aleatorio = preguntas[Math.floor(Math.random() * preguntas.length)];
  mostrarMensaje("🤖 Entrenamiento: " + aleatorio.pregunta, "bot");
  const respuestaUsuario = prompt("Escribe tu respuesta:");
  if (!respuestaUsuario) return;
  const correcta = normalizar(aleatorio.respuesta_larga);
  const usuarioNorm = normalizar(respuestaUsuario);
  if (correcta.includes(usuarioNorm) || usuarioNorm.includes(correcta)) {
    mostrarMensaje("✅ ¡Correcto! Bien hecho.", "bot");
  } else {
    mostrarMensaje("❌ Respuesta incorrecta o parcial. Revisa la base de datos.", "bot");
  }
});