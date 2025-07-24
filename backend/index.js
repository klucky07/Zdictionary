const express = require('express');
const cors = require('cors');
const { wordsData } = require('./data/words');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { Word } = require('./models/data');
require('dotenv').config(); // this loads .env variables


app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.post('/data',async(req, res) => {
     await Word.deleteMany();
    const result= await Word.insertMany(wordsData);

    res.status(201).json({ message: 'Data inserted successfully', data: result });

})
app.get('/', async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.put('/data', async (req, res) => {
  const { word, meaning } = req.body;   
    try {
    const existingWord = await Word.findOne({ word });
    if (existingWord) {
      return res.status(400).json({ message: 'Word already exists' });
    }

    const newWord = await Word.create({ word, meaning });
    return res.status(201).json({ message: 'Word added successfully', data: newWord });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});