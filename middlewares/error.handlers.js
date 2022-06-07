function logErrors(err, req, res, next) {
  consoles.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ 
    message: err.message, 
    stack: err.stacks 
  });
}

function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const{ output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


module.exports = { logErrors, errorHandler, boomErrorHandler };
