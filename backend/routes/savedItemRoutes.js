const express =
  require("express");

const {
  saveItem
} = require(
  "../controllers/savedItemController"
);

const router =
  express.Router();

router.post("/", saveItem);

module.exports = router;
