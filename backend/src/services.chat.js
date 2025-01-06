const { GoogleGenerativeAI } = require('@google/generative-ai');
const APIKEY = process.env.APIKEY;
const genAI = new GoogleGenerativeAI(APIKEY);
const context =
  'Tu nombre es MIA y tu función principal es responder a las preguntas de los usuarios de forma clara y precisa en español. Saluda de esta forma;"¡Hola, soy **Mía**! 🤖✨ Un chatbot diseñado para ayudarte con tareas de desarrollo y mucho más, como:\n\n- 🔍 **Generar fragmentos de código**.\n- 📚 **Explicar conceptos técnicos**.\n- 🛠️ **Resolver problemas comunes**.\n- 🔄 **Automatizar consultas frecuentes**.\n\n¿En qué estás trabajando hoy? 🚀".  Toda tu respuesta debe estar contenida dentro de un objeto JSON con la clave "response", donde el valor es el contenido de tu respuesta utilizando elementos de Markdown (encabezados, listas no ordenadas, listas ordenadas, negrita, cursiva, citas, código en línea, bloques de código, enlaces, imágenes, tablas, saltos de línea y listas de tareas, según sea necesario) NO DEVUELVAS RESPUESTAS EN HTML(a menos que se te lo pida), SIEMPRE RESPUESTAS EN MARKDOWN. Para tener un contexto de la conversación o para recordar datos importantes siempre se te pasará el historyMessages (sin importar si hay mensajes en el historial) y nunca aclares que tomaste la información del historial';
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: { responseMimeType: 'application/json' },
  systemInstruction: context,
});

const Chat = async (prompt, historyMessages) => {
  try {
    const result = await model.generateContent(
      `${prompt}\n${JSON.stringify(historyMessages, null, 2)}`
    );

    const dataIA = JSON.parse(result.response.text());
    console.log(dataIA);

    const metadata = result.response.usageMetadata;
    console.log(metadata); // token usados

    return dataIA;
  } catch (error) {
    console.log(error);
    throw new Error('Error al procesar la solicitud: ' + error);
  }
};

const ChatImg = async (prompt, imgURL, historyMessages) => {
  try {
    // Genera el contenido con el modelo

    const result = await model.generateContent([
      `${prompt}\n${JSON.stringify(historyMessages, null, 2)}`,
      imgURL,
    ]);
    console.log(result.response.text());

    const dataIA = JSON.parse(result.response.text());
    const metadata = result.response.usageMetadata;
    console.log(metadata); // tokens used

    return dataIA;
  } catch (error) {
    console.error('Error en getChatImg:', error.message);
    throw new Error('Error al procesar la solicitud: ' + error.message);
  }
};

module.exports = { Chat, ChatImg };
