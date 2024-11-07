// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json()); // For parsing JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a sample schema and model
const ItemSchema = new mongoose.Schema({
   name: String,
   value: Number
});
const Item = mongoose.model('Item', ItemSchema);

// Sample API endpoint to get items
app.get('/api/items', async (req, res) => {
   try {
      const items = await Item.find();
      res.json(items);
   } catch (error) {
      res.status(500).json({ message: 'Error retrieving items', error });
   }
});

// API endpoint to add an item
app.post('/api/items', async (req, res) => {
   try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.status(201).json(newItem);
   } catch (error) {
      res.status(400).json({ message: 'Error creating item', error });
   }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
