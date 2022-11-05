const moviesRouter = require('../routes/movies.router');
const seriesRouter = require('../routes/series.router');
const videoRouter = require('../routes/video.router');

function routerAPI(app) {
  app.use('/api/movies', moviesRouter);
  app.use('/api/series', seriesRouter);
  app.use('/api/video', videoRouter);
}

module.exports = routerAPI;
