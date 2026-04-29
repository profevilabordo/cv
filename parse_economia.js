const fs = require('fs');

const input = `1. ¿Qué ciencia social estudia cómo las personas y sociedades toman decisiones ante necesidades ilimitadas y recursos limitados?
   a) Sociología
   b) Psicología
   c) Economía
   d) Historia

2. ¿Cuál es el principal objetivo de la economía según el material?
   a) Maximizar la producción de bienes de lujo
   b) Entender la producción, distribución y consumo de bienes y servicios
   c) Eliminar completamente la escasez
   d) Garantizar la igualdad absoluta de ingresos

3. ¿Qué concepto fundamental en economía se refiere a la tensión entre recursos limitados y deseos humanos ilimitados?
   a) Utilidad
   b) Valor
   c) Escasez
   d) Eficiencia

4. Según el texto, ¿cuál de las siguientes NO es una pregunta fundamental que toda sociedad debe responder ante la escasez?
   a) ¿Qué producir?
   b) ¿Cómo producir?
   c) ¿Para quién producir?
   d) ¿Cuánto producir?

5. ¿Qué es el costo de oportunidad?
   a) El valor total de todos los bienes producidos
   b) El ingreso que se obtiene al trabajar
   c) El valor de la mejor alternativa no elegida al tomar una decisión
   d) El precio de mercado de un bien

6. Si decides estudiar en lugar de trabajar, ¿cuál sería el costo de oportunidad?
   a) El conocimiento adquirido
   b) El tiempo libre que disfrutas
   c) El ingreso que dejaste de ganar
   d) La experiencia laboral inmediata

7. ¿Quiénes son los agentes económicos que demandan bienes y servicios para satisfacer sus necesidades?
   a) Empresas
   b) Estado
   c) Familias/Consumidores
   d) Sector Externo

8. ¿Cuál es el rol principal de las empresas en la economía?
   a) Proveer servicios públicos
   b) Regir la actividad económica
   c) Organizar recursos para producir bienes y servicios
   d) Redistribuir ingresos

9. ¿Qué función cumple el Estado en la economía según el material?
   a) Maximizar sus ganancias
   b) Ofrecer trabajo a todas las familias
   c) Regular la actividad económica y proveer servicios públicos
   d) Ser el principal consumidor de bienes

10. ¿A qué se refiere el "Sector Externo" en economía?
   a) Al mercado de trabajo interno
   b) Al comercio e intercambio con otros países
   c) A la producción de bienes dentro del país
   d) A la distribución de bienes a nivel nacional

11. Las familias son propietarias de los factores de producción. ¿Cuál de los siguientes NO es un factor de producción que las familias ofrezcan?
   a) Trabajo
   b) Capital
   c) Tecnología
   d) Tierra

12. ¿Qué reciben las familias a cambio de ofrecer su trabajo a las empresas?
   a) Rentas
   b) Beneficios
   c) Intereses
   d) Salarios

13. ¿Qué es el ingreso disponible para una familia?
   a) El ingreso total antes de impuestos
   b) El dinero que queda para gastar o ahorrar después de impuestos
   c) Las ganancias obtenidas por inversiones
   d) El valor de los bienes consumidos

14. ¿Cuál es el objetivo principal de las empresas?
   a) Asegurar el bienestar social
   b) Maximizar sus ganancias
   c) Proveer servicios públicos gratuitos
   d) Reducir la producción

15. ¿Qué tipo de empresa se caracteriza por tener menos de 10 empleados y gestión familiar?
   a) Pequeña empresa
   b) Microempresa
   c) Mediana empresa
   d) Gran empresa

16. Una fábrica que transforma materias primas en productos terminados pertenece al sector económico:
   a) Primario
   b) Secundario
   c) Terciario
   d) Cuaternario

17. ¿Qué tipo de empresa vende bienes sin transformarlos?
   a) Empresa industrial
   b) Empresa de servicios
   c) Empresa comercial
   d) Empresa pública

18. ¿Cómo se calcula el beneficio de una empresa?
   a) Ingresos totales + Costos totales
   b) Ingresos totales / Costos totales
   c) Ingresos totales - Costos totales
   d) Costos totales - Ingresos totales

19. ¿Qué son los costos fijos para una empresa?
   a) Gastos que varían con la producción
   b) Gastos que no cambian con la producción
   c) Ingresos por ventas
   d) Materias primas utilizadas

20. Si una empresa tiene ingresos por $50.000 y costos totales por $30.000, ¿cuál es su beneficio?
   a) $20.000
   b) $50.000
   c) $30.000
   d) $80.000

21. ¿Cuál de los siguientes es un ejemplo de bien económico?
   a) El aire
   b) El agua de mar
   c) Un automóvil
   d) La luz solar

22. La utilidad de un bien se refiere a:
   a) Su precio de mercado
   b) Su capacidad para satisfacer una necesidad
   c) Su escasez
   d) Su costo de producción

23. ¿Qué significa que un recurso sea "limitado" en economía?
   a) Que su producción es muy costosa
   b) Que hay suficiente para todos
   c) Que su disponibilidad es menor a la demanda existente
   d) Que no tiene valor

24. ¿Cuál es la principal diferencia entre un bien libre y un bien económico?
   a) El bien libre es intangible y el económico es tangible
   b) El bien libre es abundante y el económico es escaso
   c) El bien libre tiene un precio y el económico no
   d) El bien libre es producido por el Estado y el económico por empresas

25. ¿Qué factor de la producción se refiere a la maquinaria y herramientas utilizadas en la fabricación?
   a) Tierra
   b) Trabajo
   c) Capital
   d) Organización

26. ¿Qué es la Frontera de Posibilidades de Producción (FPP)?
   a) Un gráfico que muestra los precios de los bienes
   b) Un modelo que ilustra las combinaciones máximas de producción de dos bienes con recursos dados
   c) La cantidad total de bienes producidos en una economía
   d) El costo de oportunidad de un bien

27. Un punto *dentro* de la Frontera de Posibilidades de Producción (FPP) indica que la economía está operando:
   a) De forma ineficiente
   b) De forma eficiente
   c) Con pleno empleo de recursos
   d) Con un costo de oportunidad cero

28. ¿Qué concepto económico explica la renuncia a obtener un bien o servicio para obtener otro?
   a) Valor
   b) Utilidad
   c) Escasez
   d) Costo de Oportunidad

29. Si un país decide aumentar la producción de armas, ¿qué implicaría según el concepto de FPP?
   a) Que puede aumentar la producción de todos los bienes
   b) Que deberá disminuir la producción de otros bienes
   c) Que sus recursos son ilimitados
   d) Que el costo de oportunidad es cero

30. ¿Qué agente económico se encarga de la redistribución de ingresos para buscar mayor equidad social?
   a) Empresas
   b) Familias
   c) Estado
   d) Sector Externo

31. La economía se ocupa de estudiar cómo las personas toman decisiones ante la abundancia total de recursos.
   ( ) Verdadero  /  ( ) Falso

32. Las necesidades humanas son ilimitadas, mientras que los recursos para satisfacerlas son limitados.
   ( ) Verdadero  /  ( ) Falso

33. El costo de oportunidad es el valor de la alternativa elegida.
   ( ) Verdadero  /  ( ) Falso

34. Las familias son las principales productoras de bienes y servicios en una economía.
   ( ) Verdadero  /  ( ) Falso

35. Las empresas buscan principalmente maximizar el bienestar social.
   ( ) Verdadero  /  ( ) Falso

36. El Estado, en economía, solo actúa como regulador.
   ( ) Verdadero  /  ( ) Falso

37. Los bienes de capital, como maquinaria, son un ejemplo de factor de producción "tierra".
   ( ) Verdadero  /  ( ) Falso

38. Una empresa individual tiene la responsabilidad limitada al capital aportado.
   ( ) Verdadero  /  ( ) Falso

39. Los costos variables de una empresa dependen del nivel de producción.
   ( ) Verdadero  /  ( ) Falso

40. El beneficio de una empresa se calcula restando los costos totales a los ingresos totales.
   ( ) Verdadero  /  ( ) Falso

41. Un bien es escaso cuando su cantidad disponible es menor que la cantidad deseada.
   ( ) Verdadero  /  ( ) Falso

42. La utilidad de un bien se refiere únicamente a su precio.
   ( ) Verdadero  /  ( ) Falso

43. Los factores de producción son tierra, trabajo, capital y tecnología.
   ( ) Verdadero  /  ( ) Falso

44. La Frontera de Posibilidades de Producción (FPP) muestra las combinaciones de producción que son ineficientes.
   ( ) Verdadero  /  ( ) Falso

45. Un punto fuera de la FPP es alcanzable con los recursos y tecnología actuales.
   ( ) Verdadero  /  ( ) Falso

46. El sector primario se dedica a la prestación de servicios.
   ( ) Verdadero  /  ( ) Falso

47. Una Sociedad Anónima (SA) tiene el capital dividido en acciones.
   ( ) Verdadero  /  ( ) Falso

48. El ingreso disponible es el dinero que una familia tiene antes de pagar impuestos.
   ( ) Verdadero  /  ( ) Falso

49. Las empresas de servicios ofrecen productos tangibles.
   ( ) Verdadero  /  ( ) Falso

50. El sector externo se refiere a las transacciones económicas dentro de las fronteras de un país.
   ( ) Verdadero  /  ( ) Falso

51. La economía es una ciencia social que estudia la toma de decisiones frente a recursos limitados.
   ( ) Verdadero  /  ( ) Falso

52. Los deseos humanos son finitos y limitados.
   ( ) Verdadero  /  ( ) Falso

53. El costo de oportunidad se aplica solo a decisiones financieras importantes.
   ( ) Verdadero  /  ( ) Falso

54. Las empresas ofrecen factores de producción a las familias.
   ( ) Verdadero  /  ( ) Falso

55. El Estado busca maximizar sus ganancias como principal objetivo.
   ( ) Verdadero  /  ( ) Falso

56. Un bien libre es aquel que tiene un precio elevado en el mercado.
   ( ) Verdadero  /  ( ) Falso

57. El capital como factor de producción incluye el dinero y los bienes de inversión.
   ( ) Verdadero  /  ( ) Falso

58. Si una empresa opera *dentro* de su FPP, está utilizando todos sus recursos de manera eficiente.
   ( ) Verdadero  /  ( ) Falso

59. Las empresas industriales transforman materias primas en productos.
   ( ) Verdadero  /  ( ) Falso

60. El valor de un bien está determinado únicamente por su utilidad.
   ( ) Verdadero  /  ( ) Falso

1. Según el material base, ¿cuál es el objetivo principal de la economía como ciencia?
   a) Estudiar la producción, distribución y consumo de bienes y servicios.
   b) Analizar exclusivamente las decisiones de inversión de las grandes corporaciones.
   c) Identificar la forma de eliminar por completo la escasez de recursos.
   d) Predecir el comportamiento futuro de los mercados financieros con certeza absoluta.

2. La tensión entre recursos limitados y necesidades ilimitadas, motor de la actividad económica, se denomina en economía como:
   a) Escasez.
   b) Abundancia.
   c) Marginalidad.
   d) Soberanía.

3. Si un individuo elige invertir su dinero en acciones en lugar de depositarlo en un plazo fijo, ¿cuál de las siguientes opciones representa el costo de oportunidad de esa decisión?
   a) La ganancia potencial que se podría haber obtenido con el plazo fijo.
   b) El monto total invertido en las acciones.
   c) El riesgo asumido al invertir en bolsa.
   d) Los dividendos recibidos de las acciones.

4. ¿Cuál de los siguientes es un ejemplo de un recurso limitado que representa un factor de producción según el material?
   a) El deseo humano de viajar.
   b) El aire que respiramos.
   c) El tiempo disponible para realizar actividades.
   d) La necesidad de educación superior.

5. En el marco de las tres preguntas fundamentales que toda sociedad debe responder ante la escasez, ¿a qué pregunta se refiere la siguiente interrogante: "Con qué recursos y tecnologías"?
   a) ¿Qué producir?
   b) ¿Cómo producir?
   c) ¿Para quién producir?
   d) ¿Cuánto producir?

6. Según el material, ¿cuál es la función principal de las Familias/Consumidores en la economía?
   a) Organizar los recursos para producir bienes y servicios.
   b) Regular la actividad económica y proveer servicios públicos.
   c) Demandar bienes y servicios para satisfacer sus necesidades y ofrecer factores de producción.
   d) Establecer acuerdos comerciales con otros países.

7. Las empresas, al transformar materias primas en productos terminados, se clasifican dentro del sector económico denominado:
   a) Primario.
   b) Secundario.
   c) Terciario.
   d) Cuaternario.

8. ¿Cómo se calcula el beneficio de una empresa según la fórmula presentada en el material?
   a) Ingresos totales divididos por costos totales.
   b) Costos totales menos ingresos totales.
   c) Ingresos totales menos costos totales.
   d) Ingresos totales multiplicados por costos totales.

9. Si una panadería vende 200 panes a $500 cada uno, y sus costos totales ascienden a $65.000, ¿cuál es su beneficio?
   a) La panadería no tiene beneficio, solo cubre costos.
   b) $35.000.
   c) $100.000.
   d) $165.000.

10. El Estado, como agente económico, actúa simultáneamente como regulador, productor, consumidor y redistribuidor. Su objetivo principal es:
   a) Maximizar ganancias para el tesoro público.
   b) Garantizar el bienestar general y corregir fallas de mercado.
   c) Aumentar la producción de bienes de capital.
   d) Fomentar la competencia entre empresas privadas.

11. La economía es la ciencia social que estudia cómo las personas y las sociedades toman decisiones para satisfacer necesidades ilimitadas con recursos que son ilimitados.
   ( ) Verdadero  /  ( ) Falso

12. El costo de oportunidad se refiere al valor de la mejor alternativa que se elige al tomar una decisión.
   ( ) Verdadero  /  ( ) Falso

13. Los agentes económicos incluyen únicamente a las familias y a las empresas.
   ( ) Verdadero  /  ( ) Falso

14. Las microempresas se caracterizan por tener más de 250 empleados y una estructura organizacional compleja.
   ( ) Verdadero  /  ( ) Falso

15. Las empresas de servicios se dedican a la extracción de recursos naturales.
   ( ) Verdadero  /  ( ) Falso

16. El ingreso disponible de una familia es el total de sus ingresos antes de pagar impuestos y contribuciones obligatorias.
   ( ) Verdadero  /  ( ) Falso

17. Los costos variables de una empresa cambian según cuánto se produce.
   ( ) Verdadero  /  ( ) Falso

18. El sector externo representa exclusivamente las importaciones de bienes y servicios.
   ( ) Verdadero  /  ( ) Falso

19. Una Sociedad Anónima (SA) se caracteriza por tener un solo dueño con responsabilidad ilimitada.
   ( ) Verdadero  /  ( ) Falso

20. El Estado, al proveer educación pública gratuita, está actuando como productor de servicios y buscando el bienestar general.
   ( ) Verdadero  /  ( ) Falso`;

const answers1_60 = {
    1: "c", 2: "b", 3: "c", 4: "d", 5: "c", 6: "c", 7: "c", 8: "c", 9: "c", 10: "b",
    11: "c", 12: "d", 13: "b", 14: "b", 15: "b", 16: "b", 17: "c", 18: "c", 19: "b", 20: "a",
    21: "c", 22: "b", 23: "c", 24: "b", 25: "c", 26: "b", 27: "a", 28: "d", 29: "b", 30: "c",
    31: "Falso", 32: "Verdadero", 33: "Falso", 34: "Falso", 35: "Falso", 36: "Falso", 37: "Falso", 38: "Falso", 39: "Verdadero", 40: "Verdadero",
    41: "Verdadero", 42: "Falso", 43: "Verdadero", 44: "Falso", 45: "Falso", 46: "Falso", 47: "Verdadero", 48: "Falso", 49: "Falso", 50: "Falso",
    51: "Verdadero", 52: "Falso", 53: "Falso", 54: "Falso", 55: "Falso", 56: "Falso", 57: "Verdadero", 58: "Falso", 59: "Verdadero", 60: "Falso"
};

const answers61_80 = {
    1: "a", 2: "a", 3: "a", 4: "c", 5: "b", 6: "c", 7: "b", 8: "c", 9: "b", 10: "b",
    11: "Falso", 12: "Falso", 13: "Falso", 14: "Falso", 15: "Falso", 16: "Falso", 17: "Verdadero", 18: "Falso", 19: "Falso", 20: "Verdadero"
};

let lines = input.split('\\n');
let questions = [];
let currentQNum = 0;
let qText = "";
let aOpts = [];
let isTrueFalse = false;
let isSecondPart = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;
    let m = line.match(/^(\\d+)\\.\\s*(.*)/);
    if (m) {
        if (qText) {
            let correctChar = isSecondPart ? answers61_80[currentQNum] : answers1_60[currentQNum];
            let cIndex = -1;
            if (isTrueFalse) {
                aOpts = ["Verdadero", "Falso"];
                cIndex = correctChar === "Verdadero" ? 0 : 1;
            } else {
                let charCode = correctChar.charCodeAt(0) - 97; // a->0, b->1...
                cIndex = charCode;
            }
            questions.push({ q: qText, a: aOpts, c: cIndex });
        }
        currentQNum = parseInt(m[1]);
        if (currentQNum === 1 && questions.length >= 60) {
            isSecondPart = true;
        }
        qText = m[2];
        aOpts = [];
        isTrueFalse = false;
    } else if (line.match(/^[a-d]\)/)) {
        aOpts.push(line.substring(3).trim());
    } else if (line.includes('( ) Verdadero')) {
        isTrueFalse = true;
    } else {
        qText += ' ' + line;
    }
}
if (qText) {
    let correctChar = isSecondPart ? answers61_80[currentQNum] : answers1_60[currentQNum];
    let cIndex = -1;
    if (isTrueFalse) {
        aOpts = ["Verdadero", "Falso"];
        cIndex = correctChar === "Verdadero" ? 0 : 1;
    } else {
        let charCode = correctChar.charCodeAt(0) - 97; // a->0, b->1...
        cIndex = charCode;
    }
    questions.push({ q: qText, a: aOpts, c: cIndex });
}

fs.writeFileSync('c:\\\\Users\\\\verov\\\\OneDrive\\\\.gemini\\\\antigravity\\\\scratch\\\\cv\\\\economia_bank.json', JSON.stringify(questions, null, 2));
