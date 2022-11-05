function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err.stack)
  next(err)
}

function errorHandler (err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    error: err.message,
    stack: err.stack
  })
}

function boomErrorHandler (err, req, res, next) {
  console.log('boomErrorHandler');
  if (!err.isBoom) {
    next(err)
  }
  res.status(err.output.statusCode).json(err.output.payload)
}

module.exports = {logErrors,errorHandler,boomErrorHandler}
