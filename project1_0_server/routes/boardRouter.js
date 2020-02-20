const express = require("express");
const router = express.Router();

router.post("/insert", (req, res) => {
  const nick = req.body.nick;
  const comments = req.body.comments;
  res.json({ message: nick });
});

module.exports = router;
