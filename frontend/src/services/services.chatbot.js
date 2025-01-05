import axios from 'axios';
import { message } from 'antd';
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
      message.error('Error al procesar la solicitud: ' + error.message);
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
      message.error('Error al procesar la solicitud: ' + error.message);
    }
  }
};
