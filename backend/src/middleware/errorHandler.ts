import type { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => { //_cuz we ar not using it
  console.log("Error:", err.message);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),  // if we are in development to debug it
  });
};

// if status code is 200 and we still hit the error handler that means it's an internal error
// so we set the status code as 500