const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
  // get all species from the database
  db('recipes')
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get('/api/ingredients', (req, res) => {
  // get all animals from the database
  // include species name
  db('ingredients as i')
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// create animal
server.post('/api/recipe', (req, res) => {
  db('recipes').insert(req.body)
    .then(ids => {
      const id = ids[0];

      db('recipes')
        .where({ id })
        .first()
        .then(animal => {
          res.status(201).json(animal);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// remove species
server.delete('/api/recipe/:id', (req, res) => {
  db('recipe')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
