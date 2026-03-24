const express = require("express");
const router = express.Router();
const { getCard } = require("../config/gameData");
const tokens = require("../services/tokens");

router.get("/:token", (req, res) => {
  const payload = tokens.resolve(req.params.token);
  if (!payload || payload.type !== "answer") {
    return res.status(404).send("Stranica nije pronađena.");
  }

  const card = getCard(payload.cardId);
  const slot = payload.slot;

  if (!card) {
    return res.status(404).send("Kartica nije pronađena.");
  }

  const type = card.choiceOrder[slot];
  const response = card.responses[type];

  if (!response) {
    return res.status(404).send("Odgovor nije pronađen.");
  }

  // Finale — no next card
  if (!card.nextCardId) {
    return res.render("finale", { card, response, type });
  }

  // Print token points to the NEXT card's ID (for generating its question QR)
  const nextPrintToken = tokens.printToken(card.nextCardId);

  res.render("answer", {
    card,
    response,
    type,
    nextQrPrintUrl: `/p/next/${nextPrintToken}`,
  });
});

module.exports = router;
