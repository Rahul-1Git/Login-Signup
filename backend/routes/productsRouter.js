const express = require("express");
const ensureAuthenticated = require("../middleware/auth");
const router = express.Router();

// POST
router.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
  ]);
});

module.exports = router;
