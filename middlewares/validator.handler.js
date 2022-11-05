const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  //creacion de un mideelware de forma dinamica
  return function (req, res, next) {
    const { error } = schema.validate(req[property], { abortEarly: false });
    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validatorHandler;
