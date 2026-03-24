const crypto = require("crypto");
const { getAllCards } = require("../config/gameData");

// Deterministic tokens — same card ID always gives same token.
// Change TOKEN_SECRET in .env to rotate all tokens if needed.
const SECRET = process.env.TOKEN_SECRET || "qrlove-dev-secret";

const tokenMap = new Map();
const questionTokens = new Map();
const answerTokens = new Map();
const printTokens = new Map();

function tok(...parts) {
  return crypto
    .createHmac("sha256", SECRET)
    .update(parts.join(":"))
    .digest("base64url")
    .slice(0, 10);
}

function init() {
  tokenMap.clear();
  questionTokens.clear();
  answerTokens.clear();
  printTokens.clear();

  for (const card of getAllCards()) {
    const qTok = tok("q", card.id);
    tokenMap.set(qTok, { type: "question", cardId: card.id });
    questionTokens.set(card.id, qTok);

    if (card.type !== "photo") {
      const n = (card.choiceOrder || []).length;
      for (let s = 0; s < n; s++) {
        const aTok = tok("a", card.id, s);
        tokenMap.set(aTok, { type: "answer", cardId: card.id, slot: s });
        answerTokens.set(`${card.id}:${s}`, aTok);
      }
    }

    const pTok = tok("p", card.id);
    tokenMap.set(pTok, { type: "print", cardId: card.id });
    printTokens.set(card.id, pTok);
  }
}

function reinit() { init(); }
function resolve(token) { return tokenMap.get(token) || null; }
function questionToken(id) { return questionTokens.get(id); }
function answerToken(id, slot) { return answerTokens.get(`${id}:${slot}`); }
function printToken(id) { return printTokens.get(id); }

module.exports = { init, reinit, resolve, questionToken, answerToken, printToken };
