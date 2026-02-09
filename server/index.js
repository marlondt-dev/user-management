const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let users = [
  { id: 1, name: "Marlon", lastName: "Torres", birthDate: "1995-12-24" },
  { id: 2, name: "Maybelline", lastName: "Mejía", birthDate: "1996-02-05" },
  { id: 3, name: "Norma", lastName: "Torres", birthDate: "1975-06-07" },
  { id: 4, name: "Oscar", lastName: "Guerrero", birthDate: "1997-06-30" },
  { id: 5, name: "Danna", lastName: "Marroquín", birthDate: "2023-12-28" },
];

let nextId = 6;

app.get('/api/users/1/users', (req, res) => {
  res.json(users);
});

app.post('/api/users/1/users', (req, res) => {
  const newUser = req.body;
  newUser.id = nextId;
  nextId++;
  users.push(newUser);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`My server is running on port ${PORT}`);
});
