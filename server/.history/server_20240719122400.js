const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

let goal = 1000; // Example goal value

app.use(cors());
app.use(bodyParser.json());

app.post('/api/donate', (req, res) => {
  const { amount } = req.body;
  // Handle donation logic here
  res.status(200).send({ message: 'Donation received' });
});

app.post('/api/update-goal', (req, res) => {
  const { goal: newGoal } = req.body;
  goal = newGoal;
  res.status(200).send({ message: 'Goal updated successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
