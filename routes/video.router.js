const express = require('express');
const validationHandler = require('../middlewares/validator.handler');
const videoService = require('../services/video.service');

const { getShowSchema } = require('../schemas/movies.schema');

const router = express.Router();

const service = new videoService();

router.get(
  '/:show_id',
  validationHandler(getShowSchema, 'params'),
  async (req, res, next) => {
    try {
      const range = req.headers.range;
      if (!range) {
        res.status(400).send('Requires Range header');
      }
      const { show_id } = req.params;
      const { headers, videoStream } = await service.getVideo(show_id, range);
      res.writeHead(206, headers);
      videoStream.pipe(res);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;


