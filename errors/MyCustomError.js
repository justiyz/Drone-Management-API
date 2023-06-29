// MyCustomError.js

class MyCustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode || 500;
      this.name = 'MyCustomError'; // Optional: Set a custom error name
    }
  }
  
  module.exports = MyCustomError;
  