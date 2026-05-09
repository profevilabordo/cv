const fs = require('fs');

const data = {
  "materia": "Marco Jurídico",
  "unidad": 2,
  "titulo": "Contratos y Sociedades Comerciales",
  "emoji": "⚖️",
  "color_primario": "#3B82F6",
  "color_secundario": "#2563EB",
  "bloques": [
    {
      "id": "A",
      "titulo": "Teoría General de los Contratos",
      "emoji": "📜",
      "color": "#3B82F6",
      "umbral": {
        "preguntas_disparadoras": [
          {
            "emoji": "🤔",
            "texto": "¿Alguna vez hiciste un acuerdo con alguien y te falló? ¿Cómo lo resolvieron?",
            "pista": "Pensá en cuando prestaste algo, compraste algo usado o hiciste un trabajo a medias."
          },
          {
            "emoji": "📝",
            "texto": "¿Creés que todos los contratos tienen que estar firmados en un papel para valer?",
            "pista": "Pensá qué pasa cuando comprás un alfajor en el quiosco."
          }
        ],
        "situaciones_conecta": [
          { "emoji": "🛒", "label": "Comprar en el súper" },
          { "emoji": "💻", "label": "Bajar una App" },
          { "emoji": "🤝", "label": "Prestar plata" },
          { "emoji": "📱", "label": "Pagar abono" }
        ],
        "termometro_pregunta": "¿Qué tan seguro te sentís si te toca firmar un contrato hoy?"
      },
      "mapa": {
        "ruta_paradas": [
          { "title": "Concepto", "emoji": "💡", "desc": "Qué es un contrato" },
          { "title": "Elementos", "emoji": "🧱", "desc": "Qué partes lo forman" },
          { "title": "Clasificación", "emoji": "🗂️", "desc": "Tipos de contratos" },
          { "title": "Obligaciones", "emoji": "⚖️", "desc": "Qué debe hacer cada uno" },
          { "title": "Efectos", "emoji": "💥", "desc": "Consecuencias legales" },
          { "title": "Extinción", "emoji": "🔚", "desc": "Cómo se terminan" }
        ],
        "panoramica_bloques": [
          { "id": "A", "title": "Teoría General", "emoji": "📜", "color": "#3B82F6", "active": true },
          { "id": "B", "title": "Contratos en Particular", "emoji": "🤝", "color": "#10B981", "active": false },
          { "id": "C", "title": "Sociedades", "emoji": "🏢", "color": "#F59E0B", "active": false }
        ],
        "mapa_mental": {
          "centro": { "title": "El Contrato", "emoji": "📜" },
          "ramas": [
            { "title": "Elementos", "emoji": "🧱", "items": ["Esenciales", "Naturales", "Accidentales"] },
            { "title": "Efectos", "emoji": "💥", "items": ["Entre las partes", "Terceros", "Buena fe"] },
            { "title": "Fin", "emoji": "🔚", "items": ["Cumplimiento", "Rescisión", "Resolución", "Nulidad"] }
          ]
        }
      },
      "nucleo": {
        "bloque_info": {
          "titulo": "Teoría General de los Contratos",
          "emoji": "📜",
          "color": "#3B82F6",
          "paginas": ["3", "11"]
        },
        "n1_ordenar_cronologicamente": { "consigna": "Ordená los pasos lógicos de vida de un contrato", "items": ["Negociación de cláusulas", "Consentimiento (oferta y aceptación)", "Ejecución (efectos y obligaciones)", "Extinción (cumplimiento o resolución)"], "orden_correcto": [0, 1, 2, 3] },
        "n2_clasificador": { 
          "consigna": "Clasificá estos contratos según quién hace el sacrificio económico", 
          "categorias": [
            { "id": "c1", "name": "Onerosos", "color": "#10B981" },
            { "id": "c2", "name": "Gratuitos", "color": "#3B82F6" }
          ], 
          "items": [
            { "id": "i1", "text": "Compraventa de PC", "cat": "c1" },
            { "id": "i2", "text": "Donación de un lote", "cat": "c2" },
            { "id": "i3", "text": "Alquiler de local", "cat": "c1" },
            { "id": "i4", "text": "Préstamo de uso (comodato) sin cargo", "cat": "c2" }
          ] 
        },
        "n3_completar_mapa": { "blanks": [] },
        "n4_verdadero_falso": { 
          "afirmaciones": [
            { "texto": "Todos los contratos deben hacerse por escrito o no son válidos.", "esVerdadera": false, "explicacion": "Falso. La regla general es que son NO FORMALES, salvo excepciones como la venta de inmuebles." },
            { "texto": "El consentimiento requiere oferta y aceptación libres, sin dolo ni violencia.", "esVerdadera": true, "explicacion": "Correcto. El consentimiento viciado puede anular el contrato." },
            { "texto": "El objeto del contrato puede ser ilícito si ambas partes están de acuerdo.", "esVerdadera": false, "explicacion": "Falso. El objeto siempre debe ser lícito." }
          ] 
        },
        "n5_relacionar_columnas": { 
          "pares": [
            { "izquierda": "Rescisión", "derecha": "Ambas partes acuerdan terminarlo sin culpa de nadie" },
            { "izquierda": "Resolución", "derecha": "Termina por el incumplimiento de una parte" },
            { "izquierda": "Nulidad", "derecha": "Termina por un vicio de origen (ej: un menor firmó)" },
            { "izquierda": "Revocación", "derecha": "Decisión unilateral autorizada por ley (ej: mandato)" }
          ] 
        },
        "n6_palabra_intrusa": { 
          "grupos": [
            {
              "emoji": "🧱",
              "pregunta": "¿Cuál NO es un elemento ESENCIAL del contrato?",
              "explicacion": "El Plazo es un elemento accidental, no es esencial para que el contrato exista.",
              "paginas": "4",
              "palabras": [
                { "text": "Consentimiento", "es_intrusa": false },
                { "text": "Objeto", "es_intrusa": false },
                { "text": "Plazo", "es_intrusa": true },
                { "text": "Causa", "es_intrusa": false }
              ]
            }
          ] 
        },
        "n7_defini_con_tus_palabras": { 
          "conceptos": [
            { "titulo": "Obligación de Medios", "pista": "Pensá en el trabajo de un médico o un técnico de reparación." },
            { "titulo": "Obligación de Resultado", "pista": "Pensá en el trabajo de un albañil construyendo una pared." }
          ] 
        },
        "n8_causa_efecto": { 
          "causas": ["Incumplimiento grave", "Vicio oculto", "Circunstancia extraordinaria imprevisible"], 
          "efectos": ["Pacto comisorio (resolución)", "Garantía de vicios redhibitorios", "Teoría de la imprevisión"] 
        },
        "n9_ordenar_proceso": { "pasos_en_orden_correcto": [] },
        "n10_comparador": {
          "concepto_a": { "nombre": "Bilateral", "emoji": "⚖️", "color": "#3B82F6" },
          "concepto_b": { "nombre": "Unilateral", "emoji": "👤", "color": "#10B981" }
        }
      },
      "senales": { 
        "conceptos_clave": [
          { "termino": "Pacta sunt servanda", "definicion": "El contrato es obligatorio para las partes como si fuera la ley." },
          { "termino": "Capacidad", "definicion": "Aptitud legal para contratar (regla: mayores de 18 con discernimiento)." }
        ], 
        "semaforo_conceptos": [
          { "emoji": "🟢", "titulo": "Libertad", "desc": "Para contratar y elegir la forma (salvo excepciones)." },
          { "emoji": "🟡", "titulo": "Cuidado", "desc": "Las partes deben actuar con Buena Fe siempre." },
          { "emoji": "🔴", "titulo": "Prohibido", "desc": "Objeto ilícito, violar la ley o engañar." }
        ], 
        "postits_conceptos": [
          "El contrato crea relaciones jurídicas patrimoniales.",
          "Solo obliga a las partes, no a terceros."
        ] 
      },
      "sabias": { 
        "flip_cards": [
          { "front": "¿Sabías que la mayoría de los contratos no están escritos?", "back": "Comprar el pan, tomar el colectivo o bajar una app son contratos, y se perfeccionan de forma oral o por tu conducta." }
        ], 
        "linea_de_tiempo": [], 
        "encuesta": { "pregunta": "¿Leés los términos y condiciones (contrato de adhesión) antes de aceptarlos?", "opciones": ["Siempre", "A veces", "Nunca"] } 
      },
      "cruces": { 
        "puentes": [
          { "emoji": "💻", "titulo": "Informática", "texto": "Al desarrollar un software, si garantizas que funcione perfectamente, firmas una obligación de RESULTADO. Si solo prestas soporte técnico horas por mes, es de MEDIOS." },
          { "emoji": "🔌", "titulo": "Electrónica", "texto": "Si armás un equipo a medida para un cliente, es locación de obra (resultado). Si vas a revisar la máquina para ver por qué falla, es locación de servicios (medios)." }
        ], 
        "telarana": [] 
      },
      "relectura": { 
        "tribunal": { "titulo_debate": "Teoría de la imprevisión", "contexto": "Un contrato se volvió carísimo de cumplir por una hiperinflación inesperada.", "roles": ["El que debe pagar", "El que debe cobrar", "El juez"] }, 
        "tesis": { "consigna": "Escribí por qué la 'Buena Fe' es el principio más importante." }, 
        "critica": { "consigna": "Revisá tus apuntes y marcá qué contrato firmaste hoy sin darte cuenta." } 
      },
      "emocional": { "_nota": "Automático" },
      "autotest": { 
        "preguntas": [
          {
            "pregunta": "¿Qué ocurre si un elemento esencial falta en el contrato?",
            "opciones": ["Se le agrega después", "El contrato es nulo", "Se puede rescindir", "El juez lo perdona"],
            "correcta": 1,
            "explicacion": "Si falta un elemento esencial (consentimiento, objeto, causa, capacidad), el contrato es nulo de origen."
          },
          {
            "pregunta": "¿Qué extinción ocurre por acuerdo mutuo sin que haya incumplimiento?",
            "opciones": ["Resolución", "Nulidad", "Rescisión bilateral", "Revocación"],
            "correcta": 2,
            "explicacion": "La rescisión bilateral (o distracto) ocurre cuando ambas partes acuerdan ponerle fin."
          }
        ] 
      },
      "cierre": { 
        "glosario": ["Contrato", "Resolución", "Rescisión", "Nulidad", "Pacta sunt servanda"], 
        "recursos": ["Código Civil y Comercial, Libro III"] 
      }
    },
    {
      "id": "B",
      "titulo": "Contratos en Particular",
      "emoji": "🤝",
      "color": "#10B981",
      "umbral": {
        "preguntas_disparadoras": [
          {
            "emoji": "🏢",
            "texto": "¿Notaste que muchos comercios locales son en realidad franquicias (ej: Grido, Mostaza)?",
            "pista": "Pensá en por qué el dueño del local de tu barrio no puede cambiar la receta del helado."
          }
        ],
        "situaciones_conecta": [
          { "emoji": "🍔", "label": "Comprar Franquicia" },
          { "emoji": "💳", "label": "Usar Tarjeta" },
          { "emoji": "🚗", "label": "Leasing" },
          { "emoji": "📦", "label": "Distribución" }
        ],
        "termometro_pregunta": "¿Conocés la diferencia entre alquiler de cosas y locación de servicios?"
      },
      "mapa": {
        "ruta_paradas": [
          { "title": "Compraventa", "emoji": "🛒", "desc": "Transferir cosas por dinero" },
          { "title": "Locación de Cosas", "emoji": "🏠", "desc": "Alquiler de uso" },
          { "title": "Obra y Servicios", "emoji": "🛠️", "desc": "Trabajo y resultados" },
          { "title": "Bancarios", "emoji": "🏦", "desc": "Mutuos y cuentas" },
          { "title": "Empresariales", "emoji": "💼", "desc": "Franquicia, Leasing, etc." }
        ],
        "panoramica_bloques": [
          { "id": "A", "title": "Teoría General", "emoji": "📜", "color": "#3B82F6", "active": false },
          { "id": "B", "title": "Contratos en Particular", "emoji": "🤝", "color": "#10B981", "active": true },
          { "id": "C", "title": "Sociedades", "emoji": "🏢", "color": "#F59E0B", "active": false }
        ],
        "mapa_mental": {
          "centro": { "title": "Contratos", "emoji": "🤝" },
          "ramas": [
            { "title": "Tradicionales", "emoji": "🛒", "items": ["Compraventa", "Locación (Alquiler)"] },
            { "title": "Laborales", "emoji": "🛠️", "items": ["Locación Obra", "Locación Servicios"] },
            { "title": "Modernos", "emoji": "💼", "items": ["Leasing", "Franquicia", "Distribución"] }
          ]
        }
      },
      "nucleo": {
        "bloque_info": {
          "titulo": "Contratos en Particular",
          "emoji": "🤝",
          "color": "#10B981",
          "paginas": ["12", "20"]
        },
        "n1_ordenar_cronologicamente": { "consigna": "Ordená", "items": [], "orden_correcto": [] },
        "n2_clasificador": { 
          "consigna": "Clasificá las obligaciones del contrato de Locación (Alquiler)", 
          "categorias": [
            { "id": "c1", "name": "Locador (Dueño)", "color": "#F59E0B" },
            { "id": "c2", "name": "Locatario (Inquilino)", "color": "#10B981" }
          ], 
          "items": [
            { "id": "i1", "text": "Pagar impuestos e inmobiliario", "cat": "c1" },
            { "id": "i2", "text": "Pagar el canon o alquiler mes a mes", "cat": "c2" },
            { "id": "i3", "text": "Entregar la cosa en buen estado", "cat": "c1" },
            { "id": "i4", "text": "Hacer las reparaciones menores del uso", "cat": "c2" }
          ] 
        },
        "n3_completar_mapa": { "blanks": [] },
        "n4_verdadero_falso": { 
          "afirmaciones": [
            { "texto": "El Leasing permite a la empresa alquilar equipamiento con opción a comprarlo al final.", "esVerdadera": true, "explicacion": "Correcto. El Leasing es locación con opción a compra." },
            { "texto": "En la Franquicia, el franquiciado puede cambiar la marca y logo a su gusto.", "esVerdadera": false, "explicacion": "Falso. El franquiciante mantiene el control estricto sobre el know-how y la marca." }
          ] 
        },
        "n5_relacionar_columnas": { 
          "pares": [
            { "izquierda": "Franquicia", "derecha": "Alquiler de marca y sistema probado (ej. Grido)" },
            { "izquierda": "Distribución", "derecha": "Compra para revender en una zona determinada" },
            { "izquierda": "Concesión", "derecha": "Organización exclusiva (ej. concesionarias de autos)" },
            { "izquierda": "Leasing", "derecha": "Alquiler de bien tecnológico con opción a compra" }
          ] 
        },
        "n6_palabra_intrusa": { 
          "grupos": [
            {
              "emoji": "🏦",
              "pregunta": "¿Cuál NO es un contrato bancario típico?",
              "explicacion": "El Comodato es un préstamo de uso gratuito entre partes, no bancario.",
              "paginas": "16",
              "palabras": [
                { "text": "Cuenta corriente", "es_intrusa": false },
                { "text": "Comodato", "es_intrusa": true },
                { "text": "Apertura de crédito", "es_intrusa": false },
                { "text": "Préstamo (Mutuo)", "es_intrusa": false }
              ]
            }
          ] 
        },
        "n7_defini_con_tus_palabras": { 
          "conceptos": [
            { "titulo": "Leasing", "pista": "Alquiler con derecho a compra." },
            { "titulo": "Diferencia Obra vs. Servicio", "pista": "Resultado vs. Medios" }
          ] 
        },
        "n8_causa_efecto": { "causas": [], "efectos": [] },
        "n9_ordenar_proceso": { "pasos_en_orden_correcto": [] },
        "n10_comparador": {
          "concepto_a": { "nombre": "Locación de Obra", "emoji": "🏗️", "color": "#10B981" },
          "concepto_b": { "nombre": "Locación de Servicios", "emoji": "⚙️", "color": "#3B82F6" }
        }
      },
      "senales": { 
        "conceptos_clave": [
          { "termino": "Know-how", "definicion": "El 'saber hacer' que se transmite en la franquicia." },
          { "termino": "Evicción", "definicion": "Garantía en la compraventa si un tercero reclama la cosa." }
        ], 
        "semaforo_conceptos": [
          { "emoji": "🔴", "titulo": "Ojo", "desc": "Diferenciar bien locación de servicios de contrato laboral (dependencia)." }
        ], 
        "postits_conceptos": [
          "El Leasing es ideal para empresas de tecnología.",
          "La compraventa comercial debe ser onerosa."
        ] 
      },
      "sabias": { 
        "flip_cards": [
          { "front": "¿Por qué las automotrices no venden sus propios autos?", "back": "Porque usan el contrato de Concesión: transfieren el riesgo de venta y postventa a otra empresa (la concesionaria)." }
        ], 
        "linea_de_tiempo": [], 
        "encuesta": { "pregunta": "¿Qué contrato moderno te parece más útil para iniciar tu negocio?", "opciones": ["Franquicia", "Leasing", "Distribución"] } 
      },
      "cruces": { 
        "puentes": [
          { "emoji": "💻", "titulo": "Informática", "texto": "Si fundás una software factory y necesitás servidores de alto costo, el LEASING te salva la vida: los alquilás y si en 3 años querés quedártelos, pagás el valor residual." }
        ], 
        "telarana": [] 
      },
      "relectura": { 
        "tribunal": { "titulo_debate": "Vicios Ocultos", "contexto": "Compró una PC y a los 3 meses se quemó la placa.", "roles": ["Vendedor", "Comprador", "Perito técnico"] }, 
        "tesis": { "consigna": "" }, 
        "critica": { "consigna": "" } 
      },
      "emocional": { "_nota": "Automático" },
      "autotest": { 
        "preguntas": [
          {
            "pregunta": "¿En qué contrato el objeto central es garantizar un RESULTADO terminado?",
            "opciones": ["Locación de servicios", "Locación de obra", "Depósito bancario", "Cuenta corriente"],
            "correcta": 1,
            "explicacion": "La locación de obra obliga a entregar un resultado material o intelectual terminado."
          },
          {
            "pregunta": "¿Qué debe transmitir el franquiciante además de la marca?",
            "opciones": ["La propiedad del local", "Las acciones de su empresa", "El know-how y la asistencia técnica", "Sus empleados directos"],
            "correcta": 2,
            "explicacion": "La franquicia incluye la transmisión de manuales, procesos operativos y soporte (know-how)."
          }
        ] 
      },
      "cierre": { 
        "glosario": ["Leasing", "Franquicia", "Evicción", "Vicios Redhibitorios"], 
        "recursos": [] 
      }
    },
    {
      "id": "C",
      "titulo": "Sociedades Comerciales",
      "emoji": "🏢",
      "color": "#F59E0B",
      "umbral": {
        "preguntas_disparadoras": [
          {
            "emoji": "👥",
            "texto": "¿Alguna vez pensaste en armar un proyecto o empresa con amigos?",
            "pista": "Pensá en por qué es mejor tener un papel firmado que de palabra."
          }
        ],
        "situaciones_conecta": [
          { "emoji": "💡", "label": "Tener una idea" },
          { "emoji": "💵", "label": "Poner capital" },
          { "emoji": "💼", "label": "Abrir sociedad" }
        ],
        "termometro_pregunta": "¿Qué tanta responsabilidad te gustaría asumir si tu empresa quiebra?"
      },
      "mapa": {
        "ruta_paradas": [
          { "title": "Concepto", "emoji": "🏢", "desc": "Qué es una sociedad" },
          { "title": "Personalidad", "emoji": "👤", "desc": "Sujeto de derecho" },
          { "title": "Tipos", "emoji": "🗂️", "desc": "SRL, SA, Colectiva" },
          { "title": "Órganos SA", "emoji": "⚙️", "desc": "Directorio y Asamblea" }
        ],
        "panoramica_bloques": [
          { "id": "A", "title": "Teoría General", "emoji": "📜", "color": "#3B82F6", "active": false },
          { "id": "B", "title": "Contratos en Particular", "emoji": "🤝", "color": "#10B981", "active": false },
          { "id": "C", "title": "Sociedades", "emoji": "🏢", "color": "#F59E0B", "active": true }
        ],
        "mapa_mental": {
          "centro": { "title": "Sociedades", "emoji": "🏢" },
          "ramas": [
            { "title": "Personas", "emoji": "👥", "items": ["Soc. Colectiva (SC)"] },
            { "title": "Mixtas", "emoji": "🧩", "items": ["SRL", "Capital e Industria"] },
            { "title": "Capital", "emoji": "💰", "items": ["Soc. Anónima (SA)"] }
          ]
        }
      },
      "nucleo": {
        "bloque_info": {
          "titulo": "Sociedades Comerciales",
          "emoji": "🏢",
          "color": "#F59E0B",
          "paginas": ["21", "28"]
        },
        "n1_ordenar_cronologicamente": { "consigna": "Ordená", "items": [], "orden_correcto": [] },
        "n2_clasificador": { 
          "consigna": "Clasificá la responsabilidad de los socios", 
          "categorias": [
            { "id": "c1", "name": "Responsabilidad Limitada", "color": "#10B981" },
            { "id": "c2", "name": "Resp. Ilimitada / Solidaria", "color": "#EF4444" }
          ], 
          "items": [
            { "id": "i1", "text": "Socios de SRL", "cat": "c1" },
            { "id": "i2", "text": "Accionistas de SA", "cat": "c1" },
            { "id": "i3", "text": "Socio en Sociedad Colectiva", "cat": "c2" },
            { "id": "i4", "text": "Socios capitalistas en Soc. de Capital e Industria", "cat": "c2" }
          ] 
        },
        "n3_completar_mapa": { "blanks": [] },
        "n4_verdadero_falso": { 
          "afirmaciones": [
            { "texto": "La sociedad tiene un patrimonio y persona jurídica distinta a la de los socios.", "esVerdadera": true, "explicacion": "Correcto. Nace un nuevo sujeto de derecho independiente." },
            { "texto": "Las cuotas de la SRL cotizan libremente en la Bolsa de Valores.", "esVerdadera": false, "explicacion": "Falso. Eso ocurre con las acciones de la SA (Sociedad Anónima)." }
          ] 
        },
        "n5_relacionar_columnas": { 
          "pares": [
            { "izquierda": "Directorio", "derecha": "Órgano de administración diaria en la SA" },
            { "izquierda": "Asamblea", "derecha": "Órgano de gobierno donde votan los accionistas" },
            { "izquierda": "Sindicatura", "derecha": "Órgano de control y fiscalización en la SA" }
          ] 
        },
        "n6_palabra_intrusa": { 
          "grupos": [
            {
              "emoji": "🏢",
              "pregunta": "¿Qué tipo de sociedad es más usada en Argentina para PyMEs?",
              "explicacion": "La Colectiva y Comandita son raras. La SRL es la más común por su resp. limitada.",
              "paginas": "26",
              "palabras": [
                { "text": "SRL", "es_intrusa": false },
                { "text": "SA", "es_intrusa": false },
                { "text": "SAS", "es_intrusa": false },
                { "text": "Sociedad Colectiva", "es_intrusa": true }
              ]
            }
          ] 
        },
        "n7_defini_con_tus_palabras": { 
          "conceptos": [
            { "titulo": "Inoponibilidad de Persona Jurídica", "pista": "Teoría del velo, ¿qué pasa si se usa la sociedad para estafar?" }
          ] 
        },
        "n8_causa_efecto": { "causas": [], "efectos": [] },
        "n9_ordenar_proceso": { "pasos_en_orden_correcto": [] },
        "n10_comparador": {
          "concepto_a": { "nombre": "SRL", "emoji": "🏢", "color": "#3B82F6" },
          "concepto_b": { "nombre": "SA", "emoji": "🏙️", "color": "#F59E0B" }
        }
      },
      "senales": { 
        "conceptos_clave": [
          { "termino": "Personalidad Jurídica", "definicion": "La sociedad es sujeto de derecho distinto de los socios." },
          { "termino": "Capital e Industria", "definicion": "Uno aporta plata, el otro solo su trabajo." }
        ], 
        "semaforo_conceptos": [
          { "emoji": "🔴", "titulo": "Cuidado", "desc": "En la Soc. Colectiva respondés con tu casa y auto por las deudas." }
        ], 
        "postits_conceptos": [
          "Para un emprendimiento, la SRL es mejor.",
          "Las SA dividen capital en Acciones."
        ] 
      },
      "sabias": { 
        "flip_cards": [
          { "front": "¿Sabías que los bienes de la SRL no son tuyos, aunque seas el dueño?", "back": "La SRL tiene patrimonio propio. Si compra una PC, la factura y la PC son de la sociedad, no tuyas." }
        ], 
        "linea_de_tiempo": [], 
        "encuesta": { "pregunta": "Si abrieras un negocio con 3 compañeros, ¿qué formarías?", "opciones": ["SRL", "SA", "De palabra"] } 
      },
      "cruces": { 
        "puentes": [
          { "emoji": "🔌", "titulo": "Electrónica & Info", "texto": "Formar una SRL los protege si el emprendimiento técnico sale mal. Sus ahorros personales no se tocan." }
        ], 
        "telarana": [] 
      },
      "relectura": { 
        "tribunal": { "titulo_debate": "Fraude societario", "contexto": "Creó la sociedad para evadir, ¿corremos el velo?", "roles": ["Juez", "Abogado", "Acreedor"] }, 
        "tesis": { "consigna": "" }, 
        "critica": { "consigna": "" } 
      },
      "emocional": { "_nota": "Automático" },
      "autotest": { 
        "preguntas": [
          {
            "pregunta": "¿Cuál es la característica principal de la Sociedad Colectiva (SC)?",
            "opciones": ["Responsabilidad limitada", "Capital en acciones", "Responsabilidad solidaria e ilimitada", "No necesita capital"],
            "correcta": 2,
            "explicacion": "En la SC los socios responden con su propio patrimonio por las deudas sociales."
          },
          {
            "pregunta": "¿Qué representan las 'acciones' en una Sociedad Anónima?",
            "opciones": ["Los bienes muebles", "Partes del capital social", "Los empleados", "Las deudas"],
            "correcta": 1,
            "explicacion": "El capital de la SA se divide en títulos llamados acciones, libremente transmisibles."
          }
        ] 
      },
      "cierre": { 
        "glosario": ["SRL", "SA", "Personalidad Jurídica", "Asamblea", "Directorio"], 
        "recursos": ["Ley General de Sociedades 19.550"] 
      }
    }
  ]
};

fs.writeFileSync('datos/eeso206_5a6b_marco_juridico_u2.json', JSON.stringify(data, null, 2));
console.log('JSON File generated successfully!');
