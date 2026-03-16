# 📓 Campus Cuaderno Vivo

**Plataforma educativa interactiva para nivel secundario**

Sistema modular de aprendizaje activo con 10 secciones pedagógicas por unidad, diseñado para estudiantes de 15-18 años.

---

## 🏗️ Arquitectura del Sistema

### Modelo de Renderizado Universal

El campus utiliza un **motor de renderizado dinámico** que separa completamente la presentación de los datos:

```
unidad.html (motor) + datos/[archivo].json (contenido) = Experiencia completa
```

**Flujo de carga:**
1. `unidad.html` recibe parámetro URL: `?datos=datos/economia_u1.json`
2. `fetch()` asíncrono carga el JSON
3. Motor renderiza componentes según estructura de datos
4. Estado local (`S`) maneja interacciones del usuario

### Estructura de Directorios

```
campus-cuaderno-vivo/
│
├── index.html              # Hub principal con menú de materias
├── unidad.html             # Motor universal de renderizado
├── generar-pdf.html        # Generador PDF para alumnos
├── generar-pdf-docente.html # Generador PDF con respuestas
├── generar-evaluacion.html # Generador de evaluaciones (A/B/C)
├── panel-docente.html      # Panel de seguimiento en tiempo real
│
├── datos/                  # Archivos JSON de contenido
│   ├── [escuela]_[curso]_[materia]_u[N].json
│   └── ...
│
├── pdfs/                   # PDFs estáticos por unidad
│   ├── [materia]_u[N].pdf
│   └── ...
│
└── README.md              # Esta documentación
```

---

## 🔐 Sistema de Autenticación

### Autenticación Dual

**1. Contraseña Dinámica (Estudiantes)**
```javascript
function getTodayPassword() {
  var dayNum = getDayOfYear();
  var code = dayNum * 27;
  return "campusvvb" + code;
}
```
- Rotación diaria automática
- Sin base de datos de usuarios
- Validación en `index.html` y `unidad.html`

**2. Código Docente Estático**
```javascript
// En index.html
if (input === "1126") {
  sessionStorage.setItem("campus_auth", "1126");
  sessionStorage.setItem("is_docente", "true");
}
```

### Persistencia de Sesión
```javascript
sessionStorage.setItem("campus_auth", password);
sessionStorage.setItem("is_docente", "true/false");
sessionStorage.setItem("alumno_codigo", codigoCiudad);
```

⚠️ **CRÍTICO:** No usar `localStorage` — causa problemas de sincronización con Supabase.

---

## 📚 Estructura de Datos (JSON)

### Esquema General

```json
{
  "id": "string",              // DEBE coincidir con nombre de archivo (sin .json)
  "materia": "string",
  "unidad": "number",
  "titulo": "string",
  "emoji": "string",
  "color_primario": "#HEX",
  "color_secundario": "#HEX",
  
  "umbral": { },           // Sección 1
  "mapa": { },             // Sección 2
  "nucleo_a": { },         // Sección 3A (Organización)
  "nucleo_b": { },         // Sección 3B (Relaciones)
  "nucleo_c": { },         // Sección 3C (Síntesis)
  "senales": { },          // Sección 4
  "sabias": { },           // Sección 5
  "cruces": { },           // Sección 6
  "relectura": { },        // Sección 7
  "emocional": { },        // Sección 8 (fija, no requiere datos)
  "autotest": { },         // Sección 9
  "cierre": { }            // Sección 10
}
```

### Campo `id` Crítico

```javascript
// El campo "id" DEBE coincidir exactamente con el nombre del archivo
// Correcto:
"id": "eetp602_4a_fund_gestion_u1"  // en archivo eetp602_4a_fund_gestion_u1.json

// Incorrecto:
"id": "eetp602_4a_fund_gestion_u1.json"  // ❌ No incluir .json
"id": "fund_gestion_u1"                  // ❌ Debe ser nombre completo
```

Este campo es usado por Supabase para sincronizar el progreso del alumno.

---

## 🎯 Secciones Pedagógicas

### 1. UMBRAL — Activación de Conocimientos Previos

**Componentes:**
- Preguntas disparadoras con pistas revelables
- Situaciones cotidianas conectables
- Termómetro de saberes (slider 0-100)

**Implementación:**
```javascript
// Estado local para revelar pistas
S["u1_" + i] = true/false

// Selección de situación
S.u2s = índice_seleccionado
S.u2t = "texto del alumno"

// Valor del termómetro
S.u3v = número (0-100)
```

---

### 2. MAPA — Vista Previa de la Unidad

**Componentes:**
- Ruta visual con 5 paradas (progresión lineal)
- Vista panorámica con 3 bloques temáticos (A, B, C)
- Mapa mental con centro + 4 ramas

**Progresión en Ruta:**
```javascript
S.m1 = {
  a: null,          // Parada activa (null o ID)
  v: {},            // Paradas visitadas {id: true}
  nx: 1             // Próximo número en secuencia
}
```

---

### 3. NÚCLEO — 10 Actividades Interactivas

El núcleo se divide en **3 bloques** con diferentes niveles cognitivos:

#### **NÚCLEO A: Organización de Información**

**N1 - Ordenar Cronológicamente**
```json
"n1_ordenar_cronologicamente": {
  "consigna": "Ordená los eventos...",
  "items": [
    {"id": 1, "text": "Evento X", "emoji": "📅"}
  ],
  "orden_correcto": [3, 1, 4, 2, 5]  // IDs en orden correcto
}
```

**N2 - Clasificador de Conceptos**
```json
"n2_clasificador": {
  "consigna": "Clasificá cada concepto...",
  "categorias": [
    {"name": "Micro", "emoji": "🔵", "color": "#3B82F6"},
    {"name": "Macro", "emoji": "🔴", "color": "#EF4444"}
  ],
  "items": [
    {"id": 0, "text": "Inflación", "categoria_correcta": 1}
  ]
}
```

**N3 - Completar el Mapa**
```json
"n3_completar_mapa": {
  "blanks": [
    {
      "id": "b1",
      "texto_antes": "El agente económico principal es el ____",
      "respuesta_correcta": "estado",
      "pista": "E_____"
    }
  ]
}
```

**N4 - Verdadero o Falso**
```json
"n4_verdadero_falso": {
  "afirmaciones": [
    {
      "texto": "La oferta sube cuando baja el precio",
      "correcto": false,
      "explicacion": "Es al revés: a mayor precio, mayor oferta."
    }
  ]
}
```

#### **NÚCLEO B: Relaciones y Análisis**

**N5 - Relacionar Columnas**
```json
"n5_relacionar_columnas": {
  "pares": [
    {
      "izquierda": "Adam Smith",
      "derecha": "Mano invisible",
      "emoji": "✋"
    }
  ]
}
```
*Nota: La columna derecha se mezcla automáticamente al cargar.*

**N6 - Palabra Intrusa**
```json
"n6_palabra_intrusa": {
  "grupos": [
    {
      "pregunta": "¿Cuál NO es un factor productivo?",
      "emoji": "🏭",
      "palabras": [
        {"text": "Tierra", "es_intrusa": false},
        {"text": "Trabajo", "es_intrusa": false},
        {"text": "Dinero", "es_intrusa": true},
        {"text": "Capital", "es_intrusa": false}
      ],
      "explicacion": "El dinero es medio de cambio, no factor productivo."
    }
  ]
}
```

**N7 - Definí con tus Palabras**
```json
"n7_defini_con_tus_palabras": {
  "conceptos": [
    {
      "termino": "Escasez",
      "pista": "¿Qué relación hay entre recursos y necesidades?",
      "palabras_clave": ["limitado", "recursos", "necesidades", "insuficiente", "falta"]
    }
  ]
}
```
*Sistema de scoring automático: busca palabras clave en respuesta libre.*

**N8 - Causa → Efecto**
```json
"n8_causa_efecto": {
  "causas": [
    {"id": 1, "text": "Sube el dólar", "emoji": "💵"}
  ],
  "efectos": [
    {"id": 10, "text": "Aumentan precios importados", "emoji": "📈", "causa_id": 1}
  ]
}
```

#### **NÚCLEO C: Síntesis y Comparación**

**N9 - Ordenar el Proceso**
```json
"n9_ordenar_proceso": {
  "consigna": "Ordená los pasos del método científico",
  "pasos_en_orden_correcto": [
    {"id": 1, "text": "Observación", "emoji": "👁️"},
    {"id": 2, "text": "Hipótesis", "emoji": "💡"},
    {"id": 3, "text": "Experimento", "emoji": "🔬"}
  ]
}
```
*Importante: Los pasos ya vienen en orden correcto. El motor los mezcla al renderizar.*

**N10 - Comparador**
```json
"n10_comparador": {
  "concepto_a": {
    "nombre": "Capitalismo",
    "emoji": "🏢",
    "color": "#3B82F6"
  },
  "concepto_b": {
    "nombre": "Socialismo",
    "emoji": "🤝",
    "color": "#EF4444"
  }
}
```
*Actividad abierta: el alumno completa similitudes y diferencias.*

---

### 4. SEÑALES — Conceptos Clave Imperdibles

**Componentes:**
- 4 conceptos clave con definición + importancia
- Semáforo de autoevaluación (🟢🟡🔴)
- Post-its para reformular con palabras propias

```json
"senales": {
  "conceptos_clave": [
    {
      "termino": "PIB",
      "emoji": "💰",
      "color": "#10B981",
      "definicion": "Valor total de bienes y servicios...",
      "importancia": "Sin entender el PIB, no se puede analizar..."
    }
  ],
  "semaforo_conceptos": ["PIB", "Inflación", "Desempleo", "Balanza"],
  "postits_conceptos": ["PIB", "Inflación", "Desempleo", "Balanza"]
}
```

---

### 5. SABÍAS — Datos Curiosos

**Componentes:**
- Flip cards (frente/dorso)
- Línea de tiempo histórica
- Encuesta interactiva

```json
"sabias": {
  "flip_cards": [
    {
      "emoji": "💎",
      "frente": "El primer banco...",
      "dorso": "En 1472 en Italia... [dato sorprendente]",
      "color": "#6366F1"
    }
  ],
  "linea_de_tiempo": [
    {"year": "1776", "text": "Adam Smith publica...", "emoji": "📚"}
  ],
  "encuesta": {
    "pregunta": "¿Qué dato te sorprendió más?",
    "opciones": [
      {"emoji": "💎", "text": "El primer banco", "votos_iniciales": 45}
    ]
  }
}
```

---

### 6. CRUCES — Conexiones Interdisciplinarias

**NUEVO: Exposición entre estudiantes**

Los alumnos no solo ven conexiones, sino que **exponen un tema** a sus compañeros.

```json
"cruces": {
  "exposicion_estudiantes": {
    "consigna": "Elegí un tema y preparalo para exponer en 5 minutos",
    "temas_disponibles": [
      {
        "id": 1,
        "titulo": "La economía en la Revolución Industrial",
        "materias_vinculadas": ["Historia", "Geografía"],
        "emoji": "🏭",
        "color": "#3B82F6",
        "guia": "Investigá: ¿cómo cambió la producción? ¿Qué rol tuvo el carbón?"
      }
    ]
  },
  "puentes": [
    {
      "materia": "Historia",
      "emoji": "📜",
      "color": "#F59E0B",
      "conexion": "La Revolución Industrial transformó...",
      "pregunta": "¿Cómo se relaciona con la economía actual?",
      "vinculo": "Unidad 3 - Revoluciones del siglo XVIII"
    }
  ],
  "telarana": [
    {
      "target": "Matemática",
      "emoji": "📊",
      "color": "#6366F1",
      "desc": "Análisis de gráficos de oferta y demanda"
    }
  ]
}
```

---

### 7. RELECTURA — Pensamiento Crítico

**Componentes:**
- Tribunal (elegir rol y argumentar)
- Tesis (formular postura con evidencias)
- Crítica (fortalezas/debilidades/preguntas/propuestas)

```json
"relectura": {
  "tribunal": {
    "titulo_debate": "¿El Estado debe intervenir en la economía?",
    "contexto": "Prepará argumentos según tu rol...",
    "roles": [
      {
        "id": "fiscal",
        "label": "Fiscal",
        "emoji": "⚖️",
        "color": "#EF4444",
        "desc": "Defendés la intervención estatal"
      }
    ]
  },
  "tesis": {
    "consigna": "Formulá una tesis sobre el tema y respaldala con evidencias"
  },
  "critica": {
    "consigna": "Analizá críticamente el texto: fortalezas, debilidades, preguntas"
  }
}
```

---

### 8. EMOCIONAL — Metacognición

**No requiere contenido en JSON** — es una sección fija con:
- Escala emocional (😎→🫣)
- Diario reflexivo (antes/durante/después)

---

### 9. AUTOTEST — Evaluación con Nota

**ACTUALIZADO: 15 preguntas** (anteriormente 6)

```json
"autotest": {
  "preguntas": [
    {
      "pregunta": "¿Qué es el PIB?",
      "opciones": [
        "Producto Interno Bruto",
        "Programa de Inversión Bancaria",
        "Precio de Inversión Bursátil",
        "Préstamo Internacional Bilateral"
      ],
      "correcta": 0,  // Índice 0-3
      "explicacion": "PIB = Producto Interno Bruto, mide la producción total"
    }
  ],
  "banco_respuestas_docente": [
    {
      "nucleo": "a",
      "actividad": "n1_ordenar_cronologicamente",
      "respuesta_modelo": "El orden correcto es: [1] Observación..."
    }
  ]
}
```

**Sistema de Calificación:**
```javascript
// Cálculo automático
var score = correctas / total * 100;

// Criterios
≥90% → 🏆 EXCELENTE (verde)
≥70% → 🎉 Muy bien (azul)
≥50% → 👍 Aprobado (amarillo)
<50% → 📚 Repasar (rojo)
```

**Campo `banco_respuestas_docente`:**
- Usado en `generar-pdf-docente.html` para mostrar respuestas modelo
- Permite al docente tener una "hoja de ruta" con todas las respuestas correctas
- Estructura: `nucleo` (a/b/c) + `actividad` + `respuesta_modelo`

---

### 10. CIERRE — Reflexión y Recursos

**Componentes:**
- Reflexión final (3 prompts)
- Glosario completo (8+ términos)
- Recursos para profundizar (5 recursos)

```json
"cierre": {
  "glosario": [
    {
      "termino": "Inflación",
      "emoji": "📈",
      "definicion": "Aumento generalizado y sostenido de precios",
      "categoria": "Indicadores"
    }
  ],
  "recursos": [
    {
      "tipo": "📖 Libro",
      "title": "Economía para todos",
      "desc": "Introducción clara al tema",
      "nivel": "Introductorio",
      "color": "#6366F1"
    }
  ]
}
```

---

## 🔧 Tecnologías Utilizadas

### Frontend
- **HTML5** + **Vanilla JavaScript** (ES5)
- **CSS3** con variables y gradientes
- Sin frameworks (performance y simplicidad)

### Backend
- **Supabase** (PostgreSQL + Realtime)
  - Tablas: `alumnos`, `progreso`, `sesiones`
  - API REST + Realtime subscriptions

### Hosting
- **GitHub** (repositorio)
- **Vercel** (deployment automático)

### Generación de PDFs
- **jsPDF** (biblioteca JavaScript)
- Fuentes: Space Grotesk, DM Sans

---

## 🗄️ Base de Datos (Supabase)

### Tabla `alumnos`
```sql
CREATE TABLE alumnos (
  id SERIAL PRIMARY KEY,
  codigo VARCHAR(10) UNIQUE NOT NULL,  -- Código de ciudad
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  escuela VARCHAR(50),
  curso VARCHAR(10),
  materias TEXT[]  -- Array de IDs de materias
);
```

### Tabla `progreso`
```sql
CREATE TABLE progreso (
  id SERIAL PRIMARY KEY,
  alumno_codigo VARCHAR(10) REFERENCES alumnos(codigo),
  unidad_id VARCHAR(100),  -- Debe coincidir con campo "id" del JSON
  seccion VARCHAR(50),
  completado BOOLEAN DEFAULT false,
  puntaje INTEGER,
  timestamp TIMESTAMP DEFAULT NOW()
);
```

### Tabla `sesiones`
```sql
CREATE TABLE sesiones (
  id SERIAL PRIMARY KEY,
  alumno_codigo VARCHAR(10),
  timestamp TIMESTAMP DEFAULT NOW(),
  unidad_id VARCHAR(100)
);
```

### Realtime Habilitado
```javascript
// En panel-docente.html
supabase
  .channel('progreso-changes')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'progreso' },
    payload => actualizarPanel(payload)
  )
  .subscribe();
```

---

## 📄 Generadores de PDF

### 1. `generar-pdf.html` (Alumnos)

**Características:**
- Cuaderno imprimible con espacios para escribir
- Para clases sin acceso a dispositivos
- Lee estructura de `nucleo_a`, `nucleo_b`, `nucleo_c`

**Lógica de renderizado:**
```javascript
// Recorre los 3 núcleos
['nucleo_a', 'nucleo_b', 'nucleo_c'].forEach(nucleo => {
  if (data[nucleo]) {
    // Renderiza cada actividad con espacios en blanco
  }
});
```

### 2. `generar-pdf-docente.html` (Docentes)

**Características:**
- Contenido compacto sin espacios para escribir
- Respuestas correctas visibles
- Conceptos clave + glosario
- Lee `autotest.banco_respuestas_docente`

**Campo especial:**
```json
"autotest": {
  "banco_respuestas_docente": [
    {
      "nucleo": "a",
      "actividad": "n1_ordenar_cronologicamente",
      "respuesta_modelo": "Orden: 1→3→2→5→4 porque..."
    }
  ]
}
```

### 3. `generar-evaluacion.html` (Evaluaciones)

**ACTUALIZADO: 15 preguntas del autotest**

**Características:**
- Genera 3 variantes (A, B, C) con preguntas mezcladas
- Extrae preguntas de `autotest.preguntas` (ahora 15)
- Restringido a docentes (requiere código `1126`)
- Formato para imprimir en 1 hoja (A4)

**Flujo:**
```javascript
// Mezcla las 15 preguntas
var mezcladas = shuffle(autotest.preguntas);

// Divide en 3 variantes de 5 preguntas cada una
var varianteA = mezcladas.slice(0, 5);
var varianteB = mezcladas.slice(5, 10);
var varianteC = mezcladas.slice(10, 15);
```

---

## 🎨 Sistema de Colores

### Paleta Principal
```css
--indigo: #6366F1;
--purple: #8B5CF6;
--pink: #EC4899;
--blue: #3B82F6;
--green: #10B981;
--yellow: #F59E0B;
--orange: #F97316;
--red: #EF4444;
--teal: #14B8A6;
```

### Por Sección
```javascript
var TABS = [
  {k: "umbral",    color: "#F59E0B"},  // Naranja
  {k: "mapa",      color: "#0EA5E9"},  // Cyan
  {k: "nucleo",    color: "#6366F1"},  // Índigo
  {k: "senales",   color: "#F97316"},  // Naranja fuerte
  {k: "sabias",    color: "#EC4899"},  // Rosa
  {k: "cruces",    color: "#14B8A6"},  // Teal
  {k: "relectura", color: "#7C3AED"},  // Violeta
  {k: "emocional", color: "#EC4899"},  // Rosa
  {k: "autotest",  color: "#F59E0B"},  // Naranja
  {k: "cierre",    color: "#6366F1"}   // Índigo
];
```

---

## 🚀 Workflow de Desarrollo

### 1. Crear Contenido
```bash
# Crear archivo JSON siguiendo convención de nombres
datos/eetp602_5a_economia_u2.json
```

### 2. Validar Estructura
```javascript
// El campo "id" DEBE coincidir con el nombre del archivo
{
  "id": "eetp602_5a_economia_u2",  // ✅ Correcto
  ...
}
```

### 3. Probar Localmente
```bash
# Levantar servidor local (fetch() no funciona con file://)
python3 -m http.server

# Abrir en navegador
http://localhost:8000/unidad.html?datos=datos/eetp602_5a_economia_u2.json
```

### 4. Deploy
```bash
# Commit y push a GitHub
git add .
git commit -m "Agregar economía U2"
git push origin main

# Vercel detecta el push y despliega automáticamente
```

### 5. Probar en Producción
```bash
# Siempre en modo incógnito para evitar caché
# Verificar URL en Vercel:
https://campus-cuaderno-vivo.vercel.app/unidad.html?datos=datos/eetp602_5a_economia_u2.json
```

---

## 🐛 Debugging

### Problemas Comunes

**1. "No se pudo cargar los datos"**
```javascript
// Verificar:
// ✓ Servidor local corriendo
// ✓ Ruta del archivo correcta
// ✓ JSON válido (usar jsonlint.com)
```

**2. Progreso no se guarda en Supabase**
```javascript
// Verificar:
// ✓ Campo "id" del JSON coincide con nombre de archivo
// ✓ Alumno autenticado (sessionStorage.getItem("alumno_codigo"))
// ✓ Conexión a Supabase activa
```

**3. Panel docente no actualiza en vivo**
```javascript
// Verificar:
// ✓ Realtime habilitado en tabla "progreso" (Supabase dashboard)
// ✓ Canal de suscripción activo
// ✓ Consola sin errores de WebSocket
```

**4. PDF no genera correctamente**
```javascript
// Verificar:
// ✓ jsPDF cargado (CDN activo)
// ✓ JSON tiene estructura completa de núcleos a/b/c
// ✓ Campo banco_respuestas_docente presente (PDF docente)
```

---

## 📊 Estadísticas del Campus

- **2 escuelas**
- **14 asignaturas**
- **10 secciones pedagógicas** por unidad
- **25+ actividades** por unidad (10 núcleo + 15 distribuidas)
- **15 preguntas** por autotest
- **3 variantes** de evaluación (A/B/C)
- **~40 estudiantes** por curso promedio

---

## 🔒 Seguridad

### Datos Sensibles
```javascript
// ⚠️ TODO: Mover a variables de entorno de Vercel
const SUPABASE_URL = "https://ygafevogfxwupmgwksto.supabase.co";
const SUPABASE_ANON_KEY = "[CLAVE_PÚBLICA]";
```

**Plan futuro:**
1. Crear variables en Vercel dashboard
2. Usar `process.env.SUPABASE_URL` en código
3. Eliminar claves del código fuente

### Autenticación
- ✅ Contraseña diaria rotativa
- ✅ Sin almacenamiento de contraseñas en DB
- ✅ sessionStorage (limpieza automática al cerrar)
- ❌ No hay hash/encriptación (innecesario para scope actual)

---

## 🎓 Convenciones de Código

### Nomenclatura de Archivos JSON
```
[escuela]_[curso]_[materia]_u[número].json

Ejemplos:
✅ eetp602_4a_fund_gestion_u1.json
✅ eeso206_3a_economia_u2.json
❌ economia_unidad1.json  (falta escuela/curso)
❌ EETP602_4A_ECONOMIA_U1.JSON  (mayúsculas)
```

### Nomenclatura de Variables de Estado
```javascript
// Global
var D = null;     // Datos JSON cargados
var CT = 0;       // Current Tab (índice de sección activa)
var S = {};       // State (estado de todas las interacciones)

// Por actividad
S.n1 = { nx: 1, dn: false, pl: {} };  // Núcleo 1
S.u2s = 3;                             // Umbral 2, selección
S.m1 = { a: null, v: {} };            // Mapa 1, activo/visitados
```

### Estructura de Funciones de Renderizado
```javascript
function rUmbral() {
  return secHeader(...) + '<div class="sb">' + ... + '</div>';
}

function rU1() {  // Actividad específica
  var items = D.umbral.preguntas_disparadoras;
  var h = "";
  // ... lógica de renderizado
  return h;
}
```

---

## 📞 Contacto

**Desarrolladora:** Prof. Verónica  
**Email alumnos:** profevilabordo@gmail.com  
**GitHub:** [campus-cuaderno-vivo](https://github.com/usuario/campus-cuaderno-vivo)  
**Deploy:** [Vercel](https://campus-cuaderno-vivo.vercel.app)

---

## 📝 Changelog

### Última actualización: Marzo 2026

**Cambios recientes:**
- ✅ Núcleos divididos en A/B/C (organización pedagógica)
- ✅ CRUCES: agregada sección de exposición entre estudiantes
- ✅ AUTOTEST: expandido de 6 a 15 preguntas
- ✅ Generador de evaluaciones: 3 variantes con mezcla de preguntas
- ✅ Panel docente: actualización en tiempo real con Supabase Realtime
- ✅ Campo `banco_respuestas_docente` en autotest

**Pendientes:**
- ⏳ Migrar claves de Supabase a variables de entorno de Vercel
- ⏳ Sistema de notificaciones para docentes (email/SMS)
- ⏳ Exportar progreso a CSV para análisis externo
- ⏳ PWA offline-first con Service Workers

---

## 🤝 Contribuciones

Para agregar contenido nuevo:
1. Seguir estructura de JSON documentada arriba
2. Validar con JSONLint antes de commitear
3. Probar localmente con servidor HTTP
4. Push a rama `develop` primero
5. Merge a `main` solo después de testing

---

## 📜 Licencia

**Uso educativo interno** - EETP N°602 y EESO N°206  
Desarrollado por Prof. Verónica para sus cursos de nivel secundario.

---

*Este README es un documento vivo. Última edición: Marzo 2026*
