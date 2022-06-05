const errorHarndler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "An error occured."
  res.status(status).send(message);
  next(err);
};

export default errorHarndler;
