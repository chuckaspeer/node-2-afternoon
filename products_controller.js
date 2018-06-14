module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, pric, imag_url } = req.body; //destructureing
    dbInstance
      .create_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong!" });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req; //destructuring
    dbInstance
      .read_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong!" });
        console.log(err);
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_products()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong!" });
        console.log(err);
      });
  },
  upDate: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req; // destructuring
    dbInstance
      .upDate_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong!" });
        console.log(err);
      });
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req; //destructuring
    dbInstance
      .delete_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong!" });
        console.log(err);
      });
  }
};
