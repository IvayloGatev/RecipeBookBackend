import express from "express";
import recipesRouter from "./src/routes/recipes.route.js";
import errorHarndler from "./src/services/error-handler.service.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use(express.json());
app.use("/api/recipes", recipesRouter);
app.use(errorHarndler);

const port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});
