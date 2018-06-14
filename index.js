require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const massive = require("massive");
const products_controller = require ('./products_controller');

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/products", products_controller.getAll);
app.get("/api/product/:id", products_controller.getOne);
app.put("/api/product/:id", products_controller.upDate);
app.post("/api/product", products_controller.create);
app.delete("/api/product/:id", products_controller.delete);

const port = process.env.Port || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
