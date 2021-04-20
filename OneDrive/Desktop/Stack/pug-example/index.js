const express = require("express")
const movieTimes = require("./movieTimes")

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  // response.render('index', { title: 'My Dynamic Content'})
  response.render('index', { movieTimes })
})

app.get('/showtimes/:id', (request, response) => {
  const movie = movieTimes.find((movie) => { return movie.id === Number(request.params.id)})
  return response.render('showtimes', { movie })
  })

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on 1337...') //eslint-disable-line no-console
})