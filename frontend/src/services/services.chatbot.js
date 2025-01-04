import axios from 'axios';
const URL = import.meta.env.VITE_APP_URL;

export const getChat = async (prompt, imgURL, historyMsj) => {
  console.log(historyMsj);
  if (!imgURL) {
    try {
      const response = await axios.post(
        `${URL}/chat/prompt-text`,
        { historyMsj },
        {
          params: { prompt },
        }
      );
      console.log(response.data.response);
      return response.data.response;
    } catch (error) {
      console.log(error);
      return error;
    }
  } else {
    try {
      const response = await axios.post(
        `${URL}/chat/prompt-img`,
        { historyMsj },
        {
          params: { prompt, imgURL },
        }
      );
      console.log(response.data.response);
      return response.data.response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

// Esto es pq el backend esta desplegado en un host gratuitio y cuando se hace la primer petición suele estar demorado
export const initBackend = async () => {
  await axios.get(`${URL}/`).then(response => {
    console.log(response);
  });

  await axios
    .post(
      `${URL}/chat/prompt-text`,
      { historyMsj: {} },
      {
        params: { prompt: 'Hola Mía' },
      }
    )
    .then(response2 => {
      console.log(response2);
    });
};
