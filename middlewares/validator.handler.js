
const boom = require('boom');

function validateHanders(schema, property){
  return (req, res, next) => { 
    const data = req[property];
    const {error} = schema.validate(data);
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}


module.exports = validateHanders
