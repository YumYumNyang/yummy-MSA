const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const customers = [
  {
    id: 5,
    first_name: 'Eom',
    last_name: 'Jungbin',
  },
  {
    id: 6,
    first_name: 'Kwak',
    last_name: 'Hyewon',
  },
];

const clients = [
  {
    id: 1,
    first_name: 'Park',
    last_name: 'Somin',
  },
  {
    id: 2,
    first_name: 'Ki',
    last_name: 'Minji',
  },
];

app.use(bodyParser.json());

app.get('/api/v1/customers', (req, res) => {
  res.json(customers);
}); //customer 리스트를 get

app.get('/api/v1/customers/:id', (req, res) => {
  res.json(customers[req.params.id]);
}); //id로 customer 정보 get

app.get('/api/v1/clients', (req, res) => {
  res.json(clients);
}); // client 리스트 get

app.get('/api/v1/clients/:id', (req, res) => {
  res.json(clients[req.params.id]);
}); //client 정보를 id로 get

app.listen(10000, () => {
  console.log(`Server started!`);
});
