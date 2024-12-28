const { GoogleGenerativeAI } = require('@google/generative-ai');
const { get } = require('mongoose');
const APIKEY = process.env.APIKEY;
const genAI = new GoogleGenerativeAI(APIKEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: { responseMimeType: 'application/json' },
});

const getChat = async (prompt) => {
  try {
    const context =
      'TE LLAMAS MIA Y ERES UN ASISTENTE PARA MIS CLIENTES Y TE ENCARGAS DE RESPONDER A SUS PREGUNTAS en español. TU RESPUESTA DEBE SER SOOLO TEXTO: {"response": "TU RESPUESTA AQUI..."} ';
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
