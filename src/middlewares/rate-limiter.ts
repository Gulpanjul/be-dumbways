import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "terlalu banyak request, ulangi dalam beberapa saat",
});

export default limiter;
