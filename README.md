# 📓 Campus Cuaderno Vivo

Plataforma de actividades interactivas para alumnos de nivel secundario.

**2 escuelas · 14 asignaturas · 10 secciones pedagógicas · 25+ actividades por unidad**

---

## 🚀 Cómo funciona

- `index.html` → Hub principal con todas las materias y sistema de autenticación
- `unidad.html` → Motor universal que renderiza cualquier unidad dinámicamente
- `datos/*.json` → Contenido específico de cada unidad (estructura pedagógica completa)

El motor lee el JSON por URL: `unidad.html?datos=datos/economia_u1.json`

---

## 📁 Estructura de Archivos
```
campus-cuaderno-vivo/
├── index.html                          # Hub principal + login
├── unidad.html                         # Motor de renderizado universal
├── generar-pdf.html                    # Generador PDF para alumnos
├── generar-pdf-docente.html            # Generador PDF para docentes (con respuestas)
├── generar-evaluacion.html             # Generador de evaluaciones A/B/C
├── panel-docente.html                  # Panel de seguimiento de progreso
├── favicon.svg                         # Ícono del sitio
├── README.md                           # Documentación del proyecto
├── INSTRUCCIONES_PARA_ia.txt           # Instrucciones para generar JSON con IA
├── CHECKLIST_INFALTABLE_INDEX.md       # Checklist de elementos críticos del index
│
├── datos/                              # Contenido pedagógico (JSON)
│   ├── eetp602_4a_fund_gestion_u1.json
│   ├── eetp602_4a_fund_gestion_u2.json
│   ├── eetp602_4a_fund_gestion_u3.json
│   ├── eetp602_5a_org_gestion_u1.json
│   ├── ... (más unidades)
│   └── eeso206_5d_admin3_u3.json
│
└── pdfs/                               # PDFs estáticos (generados previamente)
    ├── eetp602_4a_fund_gestion_u1.pdf
    ├── eetp602_4a_fund_gestion_u2.pdf
    └── ... (más PDFs)
```

---

## 🔄 Flujo de Información

### 1️⃣ **Autenticación (index.html)**
```
Usuario ingresa → Valida clave dinámica → Guarda en sessionStorage
                                       ↓
                          Clave = "campusvvb" + (día_del_año × 27)
                                       ↓
                          Si coincide: muestra el campus
                          Si no: muestra error
```

**Variables de sesión:**
- `campus_auth` → Clave validada (solo sessionStorage, NUNCA localStorage)
- `is_docente` → Flag de acceso docente (código 1126)
- `alumno_codigo` → Código de ciudad del alumno (desde Supabase)

---

### 2️⃣ **Carga de Contenido (index.html → unidad.html)**
```
index.html lee array de escuelas (hardcoded)
         ↓
Renderiza tarjetas por materia
         ↓
Cada tarjeta tiene 3 botones de unidad
         ↓
Click en unidad → redirige a:
unidad.html?datos=datos/[escuela]_[curso]_[materia]_u[N].json
         ↓
unidad.html hace fetch() del JSON
         ↓
Renderiza las 10 secciones pedagógicas
```

---

### 3️⃣ **Estructura del JSON**

Cada archivo JSON tiene esta estructura:
```json
{
  "id": "eetp602_4a_fund_gestion_u1",
  "materia": "Fundamentos de Gestión",
  "unidad": 1,
  "titulo": "Introducción a la Administración",
  "emoji": "📋",
  "color_primario": "#6366F1",
  "color_secundario": "#8B5CF6",
  
  "umbral": { /* Actividades de conexión */ },
  "mapa": { /* Vista previa de la unidad */ },
  "nucleo": { /* 10 actividades interactivas */ },
  "senales": { /* Conceptos clave */ },
  "sabias": { /* Datos curiosos */ },
  "cruces": { /* Conexiones interdisciplinarias */ },
  "relectura": { /* Pensamiento crítico */ },
  "autotest": { /* 6 preguntas multiple choice */ },
  "cierre": { /* Glosario y recursos */ }
}
```

**Campo crítico:** El `"id"` debe coincidir exactamente con el nombre del archivo (sin `.json`)

---

### 4️⃣ **Renderizado Dinámico (unidad.html)**
```
fetch(archivo.json)
     ↓
Parsea JSON y lo guarda en variable global D
     ↓
Sistema de pestañas (10 secciones)
     ↓
Cada pestaña llama a su función de renderizado:
- rUmbral() → Renderiza sección UMBRAL
- rMapa() → Renderiza sección MAPA
- rNucleo() → Renderiza 10 actividades interactivas
- rSenales() → Renderiza conceptos clave
- etc.
     ↓
Todo el estado de interacción se guarda en objeto S
(respuestas, progreso, tarjetas volteadas, etc.)
     ↓
Cada interacción llama a render() para actualizar la vista
```

---

### 5️⃣ **Generación de PDFs**

**Para alumnos (generar-pdf.html):**
```
Recibe URL: ?datos=datos/economia_u1.json
          ↓
Carga el JSON con fetch()
          ↓
Genera PDF con jsPDF:
- Título y metadata
- Actividades con espacios para escribir
- Sin respuestas
          ↓
Descarga: economia_u1_actividades.pdf
```

**Para docentes (generar-pdf-docente.html):**
```
Recibe URL: ?datos=datos/economia_u1.json
          ↓
Carga el JSON con fetch()
          ↓
Genera PDF compacto:
- Todo el contenido sin espacios
- Respuestas correctas visibles
- Conceptos clave destacados
          ↓
Descarga: economia_u1_docente.pdf
```

---

### 6️⃣ **Progreso del Alumno (Supabase)**

**Tablas en Supabase:**
- `alumnos` → Datos de identificación (apellido, nombre, ciudad)
- `progreso` → Qué actividades completó cada alumno
- `sesiones` → Registro de accesos

**Flujo de sincronización:**
```
Alumno ingresa con clave dinámica
         ↓
Modal solicita código de ciudad
         ↓
Valida contra tabla "alumnos"
         ↓
Si coincide: guarda progreso en tabla "progreso"
         ↓
Al cargar unidad: sincroniza checkmarks desde Supabase
```

---

## 🎓 Escuelas y Materias

### EETP N°602 "Gral José de San Martín" (7 asignaturas)
- Fundamentos de Gestión — 4to "A"
- Organización y Gestión — 5to "A"
- Procesos Productivos — 5to "A"
- Marco Jurídico — 5to "A"
- Organización y Gestión Comercial — 6to "A"
- Economía — 6to "B"
- Marco Jurídico — 6to "B"

### EESO N°206 "Rosa Turner de Estrugamou" (7 asignaturas)
- Economía — 3ro "A"
- Derecho — 4to "C"
- Derecho — 4to "D"
- Economía — 4to "D"
- Orientación en Contextos Laborales — 5to "D"
- Administración III — 5to "D"

---

## 📐 Secciones Pedagógicas (10 por unidad)

1. 🚪 **UMBRAL** — Activar conocimientos previos
2. 🗺️ **MAPA** — Vista general de la unidad
3. ⚛️ **NÚCLEO** — 10 actividades interactivas (el corazón)
4. 🚦 **SEÑALES** — Conceptos clave imperdibles
5. ✨ **SABÍAS** — Datos curiosos que vuelan la cabeza
6. 🔀 **CRUCES** — Conexiones interdisciplinarias
7. 📖 **RELECTURA** — Pensamiento crítico de alto nivel
8. 🫶 **EMOCIONAL** — Metacognición (reflexión personal)
9. 📝 **AUTOTEST** — Evaluación con nota automática
10. 🔚 **CIERRE** — Glosario y recursos para profundizar

---

## 🛠️ Herramientas Disponibles

### 📄 PDF Alumnos — Cuaderno imprimible
- Carga el JSON de cualquier unidad
- Genera PDF con actividades y espacios para escribir
- Ideal para clases sin celulares

### 🎓 PDF Docente — Hoja de ruta
- Carga el JSON de cualquier unidad
- Genera PDF compacto con respuestas
- Incluye conceptos clave y glosario

### 📊 Criterios de Evaluación
- Muestra rúbricas y criterios por sección
- Ayuda a planificar la evaluación

### 💬 Tu Voz Cuenta
- Formulario de feedback para alumnos
- Link directo a encuesta externa

---

## ⚙️ Configuración Técnica

### Variables de Entorno (Supabase)
```javascript
const SUPABASE_URL = "https://ygafevogfxwupmgwksto.supabase.co"
const SUPABASE_ANON_KEY = "[clave-anonima]"
```

### Sistema de Autenticación
```javascript
// Clave dinámica diaria
function getTodayPassword() {
  var dayNum = getDayOfYear();
  return "campusvvb" + (dayNum * 27);
}

// Código docente fijo
const TEACHER_CODE = "1126";
```

### Almacenamiento Permitido
- ✅ `sessionStorage` → Para autenticación y estado de sesión
- ❌ `localStorage` → **PROHIBIDO** para datos de usuario (causa inestabilidad)

---

## 🚦 Reglas Críticas

1. **NUNCA usar localStorage para datos de usuario** — Solo sessionStorage
2. **El campo `"id"` en el JSON debe coincidir con el nombre del archivo** (sin .json)
3. **No reconstruir archivos de memoria** — Siempre solicitar el archivo existente antes de editarlo
4. **Consultar CHECKLIST_INFALTABLE_INDEX.md** antes de modificar index.html
5. **IDs en arrays empiezan en 0** — No en 1
6. **Metadata en nivel raíz del JSON** — No anidada bajo "unidad"

---

## 🔧 Cómo Correr Localmente
```bash
# 1. Clonar el repo
git clone [url-del-repo]
cd campus-cuaderno-vivo

# 2. Levantar servidor local
python3 -m http.server

# 3. Abrir en navegador
http://localhost:8000
```

**Importante:** No abrir los archivos HTML directamente desde el sistema de archivos. Usar **siempre** un servidor local para que `fetch()` funcione correctamente.

---

## 📝 Cómo Crear una Nueva Unidad

1. Usar la plantilla JSON base
2. Completar con contenido siguiendo `INSTRUCCIONES_PARA_ia.txt`
3. Guardar como: `datos/[escuela]_[curso]_[materia]_u[N].json`
4. Asegurar que el campo `"id"` coincida con el nombre del archivo
5. Agregar la ruta del archivo al array de `archivos` en `index.html`
6. Probar cargando la unidad en el navegador

---

## 🎨 Paleta de Colores

- **Fondo:** `#0F172A` (slate-900)
- **Tarjetas:** `#1E293B` (slate-800)
- **Primario:** `#6366F1` (violeta)
- **Secundario:** `#EC4899` (rosa)
- **Acento:** `#F59E0B` (ámbar)
- **Éxito:** `#10B981` (verde)
- **Error:** `#EF4444` (rojo)

---

## 📧 Contacto

**Profe Verónica**
Email: profevilabordo@gmail.com

---

## 📄 Licencia

Proyecto educativo de uso interno.
