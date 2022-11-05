const moviesRouter = require('../routes/movies.router');
const seriesRouter = require('../routes/series.router');

function routerAPI(app) {
  app.use('/api/movies', moviesRouter);
  app.use('/api/series', seriesRouter);
}

module.exports = routerAPI;
