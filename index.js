import express from "express";
import recipesRouter from "./src/routes/recipes.route.js";
import errorHarndler from "./src/services/error-handler.service.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use(express.json());
app.use("/images", express.static('./src/images'));
app.use("/api/recipes", recipesRouter);
app.use(errorHarndler);

app.all('*', function(req, res) {
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});

export default app;
