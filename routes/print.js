const express = require("express");
const router = express.Router();
const { getCard } = require("../config/gameData");
const tokens = require("../services/tokens");
const { composeAnswersPrint, composeQuestionPrint } = require("../services/printComposer");

// Print 3 answer QR codes for a card (used on question page)
router.get("/answers/:token", async (req, res) => {
  const payload = tokens.resolve(req.params.token);
  if (!payload || payload.type !== "print") {
    return res.status(404).send("Stranica nije pronađena.");
  }

  const card = getCard(payload.cardId);
  if (!card) return res.status(404).send("Kartica nije pronađena.");

  try {
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";
    const png = await composeAnswersPrint(card, baseUrl);
    res.set("Content-Type", "image/png");
    res.set("Content-Disposition", `inline; filename="answers-${card.id}.png"`);
    res.send(png);
  } catch (err) {
    console.error("Print error:", err);
    res.status(500).send("Greška pri generisanju slike.");
  }
});

// Print single QR code for next question (used on answer page)
router.get("/next/:token", async (req, res) => {
  const payload = tokens.resolve(req.params.token);
  if (!payload || payload.type !== "print") {
    return res.status(404).send("Stranica nije pronađena.");
  }

  try {
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";
    const png = await composeQuestionPrint(payload.cardId, baseUrl);
    res.set("Content-Type", "image/png");
    res.set("Content-Disposition", `inline; filename="next-q.png"`);
    res.send(png);
  } catch (err) {
    console.error("Print error:", err);
    res.status(500).send("Greška pri generisanju slike.");
  }
});

module.exports = router;
