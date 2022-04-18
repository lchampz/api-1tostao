import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./config/routes.mjs";

const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(cors());
app.use(routes);

app.listen(3030, () => {
  console.log("Running...");
});
