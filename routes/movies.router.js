const express = require('express');
 const validationHandler = require('../middlewares/validator.handler');
 const MoviesService = require('../services/movies.service');
 const {
   createShowSchema,
   updateShowSchema,
   getShowSchema,
    getShowByTitleSchema,
    getShowByCategorySchema

 } = require('../schemas/movies.schema');

 const service = new MoviesService();

 const router = express.Router();
 // const service = new MoviesService();

 router.get('/', async (req, res, next) => {
   try {
     const movies = await service.getMovies();
     res.status(200).json({
       data: movies,
       message: 'movies listed',
     });
   } catch (error) {
     next(error);
   }
 });

 router.get(
   '/:show_id',
   validationHandler(getShowSchema, 'params'),
   async (req, res, next) => {
     try {
       const { show_id } = req.params;
       const movie = await service.getMovie(show_id);
       res.status(200).json({
         message: 'movie retrieved',
         data: movie,
       });
     } catch (error) {
       next(error);
     }
   }
 );

 router.post(
   '/',
   validationHandler(createShowSchema, 'body'),
   async (req, res, next) => {
     try {
       const body = req.body;
       const createdMovieId = await service.createMovie(body);
       res.status(201).json({
         message: 'movie created',
         data: createdMovieId,
       });
     } catch (error) {
       next(error);
     }
   }
 );

 router.put(
   '/:show_id',
   validationHandler(getShowSchema, 'params'),
   validationHandler(updateShowSchema, 'body'),
   async (req, res, next) => {
     try {
       const { show_id } = req.params;
       const body = req.body;
       const updatedMovieId = await service.updateMovie(show_id, body);
       res.status(200).json({
         message: 'movie updated',
         data: updatedMovieId,
       });
     } catch (error) {
       next(error);
     }
   }
 );

 router.delete(
   '/:show_id',
   validationHandler(getShowSchema, 'params'),
   async (req, res, next) => {
     try {
       const { show_id } = req.params;
       const deletedMovieId = await service.deleteMovie(show_id);
       res.status(200).json({
         message: 'movie deleted',
         data: deletedMovieId,
       });
     } catch (error) {
       next(error);
     }
   }
 );

 router.get('/search/title/:title',
 validationHandler(getShowByTitleSchema, 'params'),
 async (req, res, next) => {
   try {
     const { title } = req.params;
     const movie = await service.getMoviByName(title);
     res.status(200).json({
       message: 'movies retrieved',
       data: movie,
     });
   } catch (error) {
     next(error);
   }
 });

 router.get('/search/category/:listed_in',
  validationHandler(getShowByCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { listed_in } = req.params;
      const movie = await service.getMovieByCategory(listed_in);
      res.status(200).json({
        message: 'movie retrieved',
        data: movie,
      });
    } catch (error) {
      next(error);
    }
  });





module.exports = router;




