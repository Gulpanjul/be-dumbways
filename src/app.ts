import express from "express";
import routerProduct  from "./routes/products";
import routerUser from "./routes/user";

const app = express();
app.use(express.json());

app.use("/api/v1", routerProduct, routerUser);

app.listen(process.env.PORT, () => {
	console.log("server is running");
});
