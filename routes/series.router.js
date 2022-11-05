const express = require("express");
const SeriesService = require('../services/series.service');
const validationHandler = require('../middlewares/validator.handler');
const {
  createShowSchema,
  updateShowSchema,
  getShowSchema,
  getShowByTitleSchema,
  getShowByCategorySchema,
} = require('../schemas/movies.schema');

const router = express.Router();
const service = new SeriesService();

router.get('/', async (req, res, next) => {
  try {
    const series = await service.getSeries();
    res.status(200).json({
      data: series,
      message: 'series listed',
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
      console.log(show_id);
      const serie = await service.getSerie(show_id);
      res.status(200).json({
        message: 'series listed',
        data: serie,
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
      const serieCreated = await service.createSerie(body);
      res.status(201).json({
        message: 'movie created',
        data: serieCreated,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:serieId',
  validationHandler(getShowSchema, 'params'),
  async (req, res, next) => {
    const { serieId } = req.params;
    try {
      const deletedSerieId = await service.deleteSerie(serieId);
      res.status(200).json({ deletedSerieId });
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
      const updatedSerieId = await service.updateSerie(show_id, body);
      res.status(200).json({
        message: 'serie updated',
        data: updatedSerieId,
      });
    } catch (error) {
      next(error);
    }
  });
 router.get(
   '/search/title/:title',
   validationHandler(getShowByTitleSchema, 'params'),
   async (req, res, next) => {
     try {
       const { title } = req.params;
       const movie = await service.getSerieByTitle(title);
       res.status(200).json({
         message: 'movies retrieved',
         data: movie,
       });
     } catch (error) {
       next(error);
     }
   }
 );
router.get(
  '/search/category/:listed_in',
  validationHandler(getShowByCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { listed_in } = req.params;
      const movie = await service.GET(listed_in);
      res.status(200).json({
        message: 'movie retrieved',
        data: movie,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;



