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
    const { prompt, imgURL } = req.query;

    const dataIA = await getChatImg(prompt, imgURL);

    res.status(200).json(dataIA);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
