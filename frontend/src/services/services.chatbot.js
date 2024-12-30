import axios from 'axios';

const URL = import.meta.env.VITE_APP_URL;

export const getChat = async prompt => {
  try {
    const response = await axios.post(`${URL}/chat/prompt-text`, null, {
      params: { prompt },
    });
    return response.data.response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
