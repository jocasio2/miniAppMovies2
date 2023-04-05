const express = require ('express');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const port = 8080;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/movies', function(req, res) {
    knex
      .select('*')
      .from('movies')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  });

  app.get('/authors', function(req, res) {
    knex
      .select('author')
      .from('movies')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  });

  app.post('/movies', function(req, res){
    let movie = req.body;
  
    knex.insert(movie)
      .into('movies')
      .then(data => res.status(200).send("Insert into Movies was successful!"))
      .catch(err => res.status(404).json(err))
  })

  app.put('/movies/:id', function(req, res){
    let movieId = req.params.id
    knex('movies').where('id', movieId)
    .update({
        title: req.body.title, 
        author: req.body.author
    })
    .then(data => res.send('Movie Updated Correctly'))
    .catch(err => res.status(404).json(err))
  })

  app.patch('/movies/:id', function(req, res){
    let movieId = req.params.id
    knex('movies').where('id', movieId)
    .update({
        title: req.body.title, 
        author: req.body.author
    })
    .then(data => res.send('Movie Updated Correctly'))
    .catch(err => res.status(404).json(err))
  })

  app.delete('/movies/:id', function(req, res){
    let movieId = req.params.id
    knex('movies').where('id', movieId)
    .del()
    .then(data => res.status(200).send("Delete movie was successful!"))
    .catch(err => res.status(404).json(err))
  })

app.listen(port, () => console.log(`Listening on ${port}`))