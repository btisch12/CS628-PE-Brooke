const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'recipeDB';
let db, recipesCollection;

client.connect().then(() => {
  db = client.db(dbName);
  recipesCollection = db.collection('recipes');
});

// Get all recipes
router.get('/', async (req, res) => {
  const recipes = await recipesCollection.find({}).toArray();
  res.json(recipes);
});

// Get single recipe by ID
router.get('/:id', async (req, res) => {
  const recipe = await recipesCollection.findOne({ _id: new ObjectId(req.params.id) });
  res.json(recipe);
});

// Add a new recipe
router.post('/', async (req, res) => {
  const newRecipe = req.body;
  const result = await recipesCollection.insertOne(newRecipe);
  res.json(result);
});

// Update a recipe
router.put('/:id', async (req, res) => {
  const updatedRecipe = req.body;
  const result = await recipesCollection.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: updatedRecipe }
  );
  res.json(result);
});

// Delete a recipe
router.delete('/:id', async (req, res) => {
  const result = await recipesCollection.deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

module.exports = router;
