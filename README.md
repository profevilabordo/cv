# 📓 Campus Cuaderno Vivo

Plataforma de actividades interactivas para alumnos de nivel secundario.

**2 escuelas · 14 asignaturas · 10 secciones pedagógicas · 25+ actividades por unidad**

## 🚀 Cómo funciona

- `index.html` → Hub principal con todas las materias
- `unidad.html` → Motor universal que renderiza cualquier unidad
- `datos/*.json` → Contenido específico de cada unidad

El motor lee el JSON por URL: `unidad.html?datos=datos/economia_u1.json`

## 📁 Estructura

```
campus-cuaderno-vivo/
  index.html
  unidad.html
  datos/
    economia_u1.json
    eetp602_4a_fund_gestion_u1.json
    ...más unidades
```

## 🎓 Escuelas

- **EETP N°602 "Gral José de San Martín"** — 7 asignaturas
- **EESO N°206 "Rosa Turner de Estrugamou"** — 7 asignaturas

## 📐 Secciones pedagógicas

Cada unidad tiene 10 secciones interactivas:

1. 🚪 **UMBRAL** — Activar conocimientos previos
2. 🗺️ **MAPA** — Vista general de la unidad
3. ⚛️ **NÚCLEO** — 10 actividades interactivas
4. 🚦 **SEÑALES** — Conceptos clave
5. ✨ **SABÍAS** — Datos curiosos
6. 🔀 **CRUCES** — Conexiones interdisciplinarias
7. 📖 **RELECTURA** — Pensamiento crítico
8. 🫶 **EMOCIONAL** — Metacognición
9. 📝 **AUTOTEST** — Evaluación con nota
10. 🔚 **CIERRE** — Glosario y recursos
