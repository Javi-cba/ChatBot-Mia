const { GoogleGenerativeAI } = require('@google/generative-ai');
const APIKEY = process.env.APIKEY;
const genAI = new GoogleGenerativeAI(APIKEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: { responseMimeType: 'application/json' },
});

const context =
  'Tu nombre es MIA y tu función principal es responder a las preguntas de los usuarios de forma clara y precisa en español. Toda tu respuesta debe estar contenida dentro de un objeto JSON con la clave "response", donde el valor es el contenido de tu respuesta utilizando elementos de Markdown (encabezados, listas no ordenadas, listas ordenadas, negrita, cursiva, citas, código en línea, bloques de código, enlaces, imágenes, tablas, saltos de línea y listas de tareas, según sea necesario) NO DEVUELVAS RESPUESTAS EN HTML(a menos que se te lo pida), SIEMPRE RESPUESTAS EN MARKDOWN. PROMT ACTUAL DEL USUARIO:';

const getChat = async (prompt, historyMsj) => {
  try {
    const history = historyString(historyMsj);
    const result = await model.generateContent(context + prompt + history);

    const dataIA = JSON.parse(result.response.text());

    const metadata = result.response.usageMetadata;
    console.log(metadata); // token usados

    return dataIA;
  } catch (error) {
    console.log(error);
    throw new Error('Error al procesar la solicitud: ' + error);
  }
};

const getChatImg = async (prompt, img, historyMsj) => {
  try {
    const history = historyString(historyMsj);
    const result = await model.generateContent([
      context + prompt + history,
      img,
    ]);
    console.log(result.response.text());
    const dataIA = JSON.parse(result.response.text());

    const metadata = result.response.usageMetadata;
    console.log(metadata); // token usados

    return dataIA;
  } catch (error) {
    console.log(error);
    throw new Error('Error al procesar la solicitud: ' + error);
  }
};

const historyString = historyMsj => {
  let history = '';
  if (historyMsj) {
    history =
      'Este es el historial de mensajes, por si lo necesitas (no aclares que tomaste la información del historial):' +
      JSON.stringify(historyMsj, null, 2);
  }
  console.log(historyMsj);
  return history;
};
module.exports = { getChat, getChatImg };
