import express from "express";
import recipesRouter from "./src/routes/recipes.route.js";
import errorHarndler from "./src/services/error-handler.service.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();
const swaggerDocument = YAML.load("./src/configs/openapi.yaml")

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/recipes", recipesRouter);
app.use(errorHarndler);

app.all("*", function (req, res) {
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});

export default app;
