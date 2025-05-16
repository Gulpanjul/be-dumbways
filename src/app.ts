import express from "express";
import router from "./routes/transfer-points";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// global error handler
app.use((err: any, req: any, res: any, next: any) => {
	console.log(err);
	res
		.status(err.status || 500)
		.json({ error: err.message || "internal server error" });
});

app.use("/api/v1", router);

app.listen(PORT, () => {
	console.log("server is running");
});
