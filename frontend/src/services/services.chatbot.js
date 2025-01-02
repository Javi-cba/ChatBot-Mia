import axios from 'axios';
const URL = import.meta.env.VITE_APP_URL;

export const getBackend = async () => {
  axios.get(`${URL}/`).then((response) => {
    console.log(response);
  });
};
export const getChat = async (prompt, imgURL) => {
  if (!imgURL) {
    try {
      const response = await axios.post(`${URL}/chat/prompt-text`, null, {
        params: { prompt },
      });
      console.log(response.data.response);
      return response.data.response;
    } catch (error) {
      console.log(error);
      return error;
    }
  } else {
    try {
      const response = await axios.post(`${URL}/chat/prompt-img`, null, {
        params: { prompt, imgURL },
      });
      console.log(response.data.response);
      return response.data.response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};
