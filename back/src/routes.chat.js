require('dotenv').config();
const express = require('express');
const router = express.Router();
const { getChat, getChatImg } = require('./services.chat');

router.post('/prompt-text', async (req, res) => {
  try {
    const prompt = req.query.prompt;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    const dataIA = await getChat(prompt);

    res.status(200).json(dataIA);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/prompt-img', async (req, res) => {
  try {
    const prompt = 'GENERA UN ANUNCIO PARA MI PRODUCTO, en español. ';
    const img =
      'https://resizer.glanacion.com/resizer/v2/las-lineas-del-nuevo-mercedes-benz-c300-amg-line-AI6T3YVF4FDCDHZUWNJS7GX6PY.jpg?auth=61170afca992fde3aef8db44cc448bc31d03703b00767ab5381f3b62f6aa19b7&width=1200&quality=70&smart=false&height=800';

    const dataIA = await getChatImg(prompt, img);

    res.status(200).json(dataIA);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
