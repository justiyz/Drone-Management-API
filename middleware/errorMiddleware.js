

const errorMiddleware = (err, req, res, next) => {
    // Check if the error is an instance of MyCustomError
    if (err instanceof MyCustomError) {
      // Custom error handling for MyCustomError
      res.status(err.statusCode).json({ error: err.message });
    } else {
      // Default error handling for other errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = errorMiddleware;
  