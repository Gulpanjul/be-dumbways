import cors from "cors";

const corsMiddleware = cors({
  origin: ["http://localhost:5173", "kilau.ai"],
  credentials: true,
});
