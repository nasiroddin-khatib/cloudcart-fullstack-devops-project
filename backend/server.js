const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const {
  connectDB
} = require("./config/db");

const productRoutes =
  require("./routes/productRoutes");

const orderRoutes =
  require("./routes/orderRoutes");

const savedItemRoutes =
  require("./routes/savedItemRoutes");

const userRoutes =
  require("./routes/userRoutes");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.use(
  "/api/saveditems",
  savedItemRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.get("/", (req, res) => {

  res.send(
    "CloudCart Backend Running"
  );

});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {

  console.log(
    `Server running on port ${PORT}`
  );

});
