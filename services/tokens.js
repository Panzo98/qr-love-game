const crypto = require("crypto");
const { getAllCards } = require("../config/gameData");

// token → { cardId, slot? }   and   reverse lookups
const tokenMap = new Map();      // token → payload
const questionTokens = new Map(); // cardId → token
const answerTokens = new Map();   // "cardId:slot" → token
const printTokens = new Map();    // cardId → token

function makeToken() {
  return crypto.randomBytes(6).toString("base64url"); // 8 chars, URL-safe
}

function init() {
  if (tokenMap.size > 0) return; // already initialized

  const cards = getAllCards();
  for (const card of cards) {
    // Question token
    const qTok = makeToken();
    tokenMap.set(qTok, { type: "question", cardId: card.id });
    questionTokens.set(card.id, qTok);

    // Answer tokens (one per slot)
    for (let slot = 0; slot < 3; slot++) {
      const aTok = makeToken();
      tokenMap.set(aTok, { type: "answer", cardId: card.id, slot });
      answerTokens.set(`${card.id}:${slot}`, aTok);
    }

    // Print token
    const pTok = makeToken();
    tokenMap.set(pTok, { type: "print", cardId: card.id });
    printTokens.set(card.id, pTok);
  }
}

function resolve(token) {
  return tokenMap.get(token) || null;
}

function questionToken(cardId) {
  return questionTokens.get(cardId);
}

function answerToken(cardId, slot) {
  return answerTokens.get(`${cardId}:${slot}`);
}

function printToken(cardId) {
  return printTokens.get(cardId);
}

module.exports = { init, resolve, questionToken, answerToken, printToken };
