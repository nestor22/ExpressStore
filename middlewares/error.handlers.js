function logErrors(err, res, res, next) {
  consoles.error(err);
  next(err);
}

function errorHandler(err, res, res, next) {
  console.error(err);
  res.status(500).json({ 
    message: err.message, 
    stack: err.stacks 
  });
}



module.exports = { logErrors, errorHandler };
