// data.js
const preguntas = [
  {
    categoria: "Protocolo",
    pregunta: "¿Qué es una moción de orden?",
    keywords: ["mocion", "orden", "protocolo"],
    respuesta_larga: "La moción de orden es una herramienta parlamentaria fundamental que permite a un delegado solicitar al presidente del comité que intervenga cuando percibe una irregularidad en la conducción del debate, un error en la aplicación de las reglas o cualquier situación que interrumpa el orden establecido. Su uso correcto requiere levantar la mano y esperar a ser reconocido, pronunciando la moción claramente y explicando brevemente la situación. Estratégicamente, entender cuándo y cómo usar esta moción puede reforzar la autoridad de un delegado y demostrar dominio del procedimiento, lo que incrementa su credibilidad ante evaluadores y colegas, sobre todo en la etapa Regional 01-02 donde se valoran la precisión y el respeto al protocolo."
  },
  {
    categoria: "Documentación",
    pregunta: "¿Cómo se redacta una hoja de posición?",
    keywords: ["hoja", "posicion", "documento"],
    respuesta_larga: "La hoja de posición es un documento que resume la postura oficial de un país sobre un tema específico y sirve como guía estratégica durante el debate. Debe contener una introducción clara que defina la posición nacional, antecedentes del problema, argumentos diplomáticos bien estructurados y posibles soluciones que el país apoyaría. Es importante redactarla en tercera persona, usando lenguaje formal y preciso, evitando afirmaciones vagas o subjetivas. Para destacar en Regional 01-02, la hoja debe incluir referencias concretas a tratados internacionales o resoluciones previas y demostrar coherencia con la política exterior del país, lo que muestra preparación y capacidad de análisis profundo."
  },
  {
    categoria: "Estrategia de Debate",
    pregunta: "¿Qué hacer si nadie apoya mi hoja de resolución?",
    keywords: ["resolucion", "apoyo", "estrategia"],
    respuesta_larga: "Si un delegado se encuentra en la situación de que su hoja de resolución no recibe apoyo, lo primero es mantener la calma y analizar objetivamente las razones del rechazo, ya sea por falta de claridad, conflicto de intereses o insuficiente fundamentación. Se recomienda iniciar negociaciones bilaterales discretas con otros delegados para identificar puntos de consenso y ajustar la propuesta. Además, presentar argumentos sólidos y bien estructurados en intervenciones cortas puede captar la atención de los moderadores y los evaluadores. Estrategicamente, es crucial demostrar flexibilidad sin comprometer la posición nacional y buscar aliados clave para que, mediante enmiendas o acuerdos, la resolución gane tracción dentro del comité."
  },
  {
    categoria: "Logística Regional 01-02",
    pregunta: "¿Cuál es la diferencia entre la etapa Distrital y la Regional?",
    keywords: ["distrital", "regional", "evaluadores"],
    respuesta_larga: "La etapa Distrital suele enfocarse en el aprendizaje inicial de procedimientos, comprensión de reglas y desarrollo de habilidades básicas de negociación, mientras que la etapa Regional exige un mayor nivel de preparación, análisis estratégico y dominio de protocolo. En Regional 01-02, los evaluadores buscan precisión en la oratoria, conocimiento profundo del tema, capacidad de persuasión y la habilidad para manejar situaciones críticas como caucus no moderados o mociones complejas. Por ello, los delegados deben presentar documentos de trabajo bien estructurados, argumentos sólidos y demostraciones claras de liderazgo y negociación para avanzar al MINUME."
  },
  {
    categoria: "Etiqueta y Poder",
    pregunta: "¿Cómo proyectar autoridad en la mesa de negociación?",
    keywords: ["autoridad", "lenguaje corporal", "protocolo"],
    respuesta_larga: "Proyectar autoridad en un comité de MUN implica no solo hablar con claridad y convicción, sino también mantener una postura segura, contacto visual adecuado y gestos que refuercen el mensaje. El lenguaje corporal debe transmitir confianza sin ser agresivo, mientras que el tono de voz debe variar según la intención de la intervención para captar atención y enfatizar puntos clave. Además, vestimenta formal y presentación pulcra refuerzan la percepción de profesionalismo. Estrategicamente, un delegado que combina presencia física, dominio de reglas y un discurso bien fundamentado logra mayor influencia en la toma de decisiones y en la percepción de los evaluadores."
  },
  {
    categoria: "Protocolo",
    pregunta: "¿Cómo se usa la tercera persona correctamente en intervenciones?",
    keywords: ["tercera persona", "oratoria", "protocolo"],
    respuesta_larga: "Usar la tercera persona en las intervenciones es esencial para mantener la formalidad y la neutralidad diplomática. Los delegados deben referirse a su país como 'el país que represento' o 'mi delegación' y evitar expresiones en primera persona que puedan parecer subjetivas o emocionales. Esta práctica transmite profesionalismo y coherencia con el protocolo de MUN, además de facilitar la comprensión por parte de otros delegados y evaluadores. Estrategicamente, dominar la tercera persona permite enfatizar la posición nacional de manera objetiva, reforzando la credibilidad y proyectando autoridad durante el debate, especialmente en etapas competitivas como Regional 01-02."
  },
  {
    categoria: "Documentación",
    pregunta: "¿Qué estructura debe tener un proyecto de resolución?",
    keywords: ["proyecto", "resolucion", "estructura"],
    respuesta_larga: "Un proyecto de resolución debe estructurarse en encabezado, preámbulo y cláusulas operativas. El encabezado identifica el comité, país y número de proyecto. El preámbulo establece el contexto y fundamentos legales o históricos, citando resoluciones previas y tratados relevantes. Las cláusulas operativas detallan las acciones propuestas, medidas de implementación y responsabilidades asignadas, redactadas de manera clara, precisa y ordenada. Estrategicamente, cada cláusula debe reflejar la posición del país y ser negociable en partes clave, de modo que facilite consensos y alianzas con otros delegados, aumentando las probabilidades de adopción del documento durante la etapa Regional 01-02."
  },
  {
    categoria: "Estrategia de Debate",
    pregunta: "¿Cómo dominar un caucus no moderado?",
    keywords: ["caucus", "no moderado", "estrategia"],
    respuesta_larga: "Dominar un caucus no moderado requiere preparación, iniciativa y habilidades de negociación activa. Un delegado debe moverse entre grupos de trabajo, escuchar propuestas de otros, identificar oportunidades de alianza y ofrecer enmiendas o soluciones que atraigan apoyos. Es importante mantener la diplomacia, registrar acuerdos y asegurarse de que los puntos clave de su país se discutan y se incorporen en cualquier borrador de resolución. Estrategicamente, liderar de manera visible pero respetuosa en un caucus no moderado permite que un delegado construya influencia, fomente cooperación y aumente las probabilidades de que sus ideas sean incorporadas en el resultado final del comité."
  },
  {
    categoria: "Logística Regional 01-02",
    pregunta: "¿Qué buscan los evaluadores para pasar al MINUME?",
    keywords: ["evaluadores", "criterios", "minume"],
    respuesta_larga: "Los evaluadores en la etapa Regional buscan delegados que demuestren dominio absoluto del tema asignado, precisión en el uso del protocolo, claridad en la oratoria y capacidad de negociación. Esperan que los documentos presentados, como hojas de posición y proyectos de resolución, estén correctamente estructurados, sean coherentes y reflejen un análisis profundo. Además, valoran la habilidad de manejar situaciones críticas, como mociones complejas o desacuerdos en caucus no moderados, así como la proactividad para formar alianzas estratégicas. Estrategicamente, un delegado que combina preparación académica, habilidades interpersonales y presencia diplomática tiene alta probabilidad de avanzar al MINUME, destacando sobre otros competidores."
  },
  {
    categoria: "Etiqueta y Poder",
    pregunta: "¿Cuál es la importancia del lenguaje corporal en MUN?",
    keywords: ["lenguaje corporal", "etiqueta", "autoridad"],
    respuesta_larga: "El lenguaje corporal es un componente clave de la comunicación no verbal que complementa la oratoria y refuerza la autoridad de un delegado. Una postura recta, gestos medidos, contacto visual adecuado y expresiones faciales coherentes transmiten confianza, profesionalismo y control de la situación. Ignorar el lenguaje corporal puede hacer que un discurso convincente parezca débil o inseguro. Estrategicamente, usar el lenguaje corporal para enfatizar puntos importantes, mostrar interés en la intervención de otros y proyectar seguridad permite influir positivamente en evaluadores y delegados, aumentando la eficacia de la negociación y la probabilidad de apoyo a las propuestas del país representado."
  }
];

