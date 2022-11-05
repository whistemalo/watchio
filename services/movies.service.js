const boom = require('@hapi/boom');
const { randUuid } = require('@ngneat/falso');
const movieSchema = require('../models/movie.model');



class MoviesService {
  constructor() {
    this.movies = [];
    this.generator();
  }

  generator() {
    const limite = 100;
    for (let i = 0; i < limite; i++) {
      this.movies.push({
        id: randUuid(),
        title: `Movie ${i}`,
        year: 2000 + i,
        cover: `http://lorempixel.com/400/200/cats/${i}/`,
        description: `Movie description ${i}`,
        duration: 120 + i,
        contentRating: 'PG',
      });
    }
  }

  async getMovies() {
    console.log(await movieSchema.find().count());
    const  movies = movieSchema.find()
    return movies;
  }

  async getMovie(movieId ) {
    const movie = await movieSchema.findOne({_id: movieId })
    if (!movie) {
      throw boom.notFound('Movie not found');
    }
    return movie;
  }

  async createMovie(movie ) {
    const newMovie = await movieSchema.create(movie);
    return newMovie;
  }

  async deleteMovie(movieId) {
    const movie = await movieSchema.findOneAndDelete({_id: movieId })
    if (!movie) {
      throw boom.notFound('Movie not found');
    }
    return movie;
  }

  async updateMovie( movieId, changes) {
    const movie = await movieSchema.findOne({_id: movieId })
    if (!movie) {
      throw boom.notFound('Movie not found');
    }
    const updatedMovie = await movieSchema.updateOne({_id: movieId }, changes);

    return updatedMovie;
  }

  async getMoviByName(movieName) {
    const movie = await movieSchema.findOne({title: movieName })
    if (!movie) {
      throw boom.notFound('Movie not found');
    }
    return movie;
  }

  async getMoviesByCategory(category) {
    const movies = await movieSchema.find({ listed_in: category });
    if (!movies) {
      throw boom.notFound('Movie not found');
    }
    return movies;
  }

}

module.exports = MoviesService;
