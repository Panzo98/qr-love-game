const express = require("express");
const router = express.Router();
const { getAllCards } = require("../config/gameData");
const tokens = require("../services/tokens");

router.get("/", (req, res) => {
  const cards = getAllCards().map((card) => ({
    ...card,
    qToken: tokens.questionToken(card.id),
    aTokens: [0, 1, 2].map((s) => tokens.answerToken(card.id, s)),
    pToken: tokens.printToken(card.id),
  }));
  res.render("preview", { cards });
});

module.exports = router;
