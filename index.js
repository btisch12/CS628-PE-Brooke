const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
