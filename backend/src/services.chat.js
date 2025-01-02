const { GoogleGenerativeAI } = require('@google/generative-ai');
const APIKEY = process.env.APIKEY;
const genAI = new GoogleGenerativeAI(APIKEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: { responseMimeType: 'application/json' },
});

const context =
  'Tu nombre es MIA y tu función principal es responder a las preguntas de los usuarios de forma clara y precisa en español. Toda tu respuesta debe estar contenida dentro de un objeto JSON con la clave "response", donde el valor es el contenido de tu respuesta utilizando los elementos más comunes de Markdown (encabezados, listas no ordenadas, listas ordenadas, negrita, cursiva, citas, código en línea, bloques de código, enlaces, imágenes, tablas, saltos de línea y listas de tareas, según sea necesario). PROMT DEL USUARIO:';

const getChat = async prompt => {
  try {
    const result = await model.generateContent(context + prompt);
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

const getChatImg = async (prompt, img) => {
  try {
    // falta context
    const result = await model.generateContent([prompt, img]);
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

module.exports = { getChat, getChatImg };
