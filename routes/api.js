const express = require("express");
const router = express.Router();
const { getCard } = require("../config/gameData");
const tokens = require("../services/tokens");

// JSON: question data
router.get("/q/:token", (req, res) => {
  const payload = tokens.resolve(req.params.token);
  if (!payload || payload.type !== "question") {
    return res.status(404).json({ error: "Nije pronađeno." });
  }

  const card = getCard(payload.cardId);
  if (!card) {
    return res.status(404).json({ error: "Kartica nije pronađena." });
  }

  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  const pToken = tokens.printToken(card.id);

  const choices = card.choiceOrder.map((type, slot) => ({
    number: slot + 1,
    label: card.responses[type].label,
  }));

  // Pre-formatted text for Shortcuts "Show Alert"
  const choiceLines = choices.map((c) => `  ${c.number}. ${c.label}`).join("\n");
  const display = `${card.chapter}\n\n${card.intro}\n\n${card.question}\n\n${choiceLines}\n\nPreuzmi QR kodove za odgovore, isprintaj i zalijepi ispod ovog QR koda.`;

  res.json({
    type: "question",
    chapter: card.chapter,
    intro: card.intro,
    question: card.question,
    choices,
    display,
    printUrl: `${baseUrl}/p/answers/${pToken}`,
  });
});

// JSON: answer data
router.get("/a/:token", (req, res) => {
  const payload = tokens.resolve(req.params.token);
  if (!payload || payload.type !== "answer") {
    return res.status(404).json({ error: "Nije pronađeno." });
  }

  const card = getCard(payload.cardId);
  if (!card) {
    return res.status(404).json({ error: "Kartica nije pronađena." });
  }

  const slot = payload.slot;
  const type = card.choiceOrder[slot];
  const response = card.responses[type];

  if (!response) {
    return res.status(404).json({ error: "Odgovor nije pronađen." });
  }

  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  const toneLabel = type === "emotional" ? "nježno" : type === "flirty" ? "flirty" : "smiješno";

  // Finale
  if (!card.nextCardId) {
    const display = `${card.chapter} [${toneLabel}]\n\n${response.reaction}\n\n${response.text}\n\n---\n\nStigla si do kraja!\n\nOva sveska je moj mali način da ti kažem koliko mi značiš. Svaka stranica, svaki QR kod, svaka riječ - sve je za tebe.\n\nVolim te.`;

    return res.json({
      type: "finale",
      chapter: card.chapter,
      tone: type,
      reaction: response.reaction,
      text: response.text,
      display,
      finale: true,
    });
  }

  const nextPrintToken = tokens.printToken(card.nextCardId);
  const display = `${card.chapter} [${toneLabel}]\n\n${response.reaction}\n\n${response.text}\n\nPreuzmi QR kod za sljedeću stranicu, isprintaj i zalijepi u svesku.`;

  res.json({
    type: "answer",
    chapter: card.chapter,
    tone: type,
    reaction: response.reaction,
    text: response.text,
    display,
    finale: false,
    printUrl: `${baseUrl}/p/next/${nextPrintToken}`,
  });
});

module.exports = router;
