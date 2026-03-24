const express = require("express");
const router = express.Router();
const { getCard } = require("../config/gameData");
const tokens = require("../services/tokens");

router.get("/:token", (req, res) => {
  const payload = tokens.resolve(req.params.token);
  if (!payload || payload.type !== "question") {
    return res.status(404).send("Stranica nije pronađena.");
  }

  const card = getCard(payload.cardId);
  if (!card) {
    return res.status(404).send("Kartica nije pronađena.");
  }

  const choices = card.choiceOrder.map((type, slot) => ({
    token: tokens.answerToken(card.id, slot),
    label: card.responses[type].label,
  }));

  const pToken = tokens.printToken(card.id);

  res.render("question", {
    card,
    choices,
    answersPrintUrl: `/p/answers/${pToken}`,
  });
});

module.exports = router;
