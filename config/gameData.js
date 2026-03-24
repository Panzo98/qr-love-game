const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "../data/cards.json");

let cards = JSON.parse(fs.readFileSync(FILE, "utf8"));

function save() {
  fs.writeFileSync(FILE, JSON.stringify(cards, null, 2));
}

function getCard(id) { return cards.find(c => c.id === id) || null; }
function getAllCards() { return cards; }
function reload() { cards = JSON.parse(fs.readFileSync(FILE, "utf8")); }

function updateCard(id, data) {
  const i = cards.findIndex(c => c.id === id);
  if (i === -1) return null;
  cards[i] = data;
  save();
  return cards[i];
}

function addCard(card) {
  cards.push(card);
  save();
  return card;
}

function deleteCard(id) {
  const i = cards.findIndex(c => c.id === id);
  if (i === -1) return false;
  cards.splice(i, 1);
  save();
  return true;
}

module.exports = { getCard, getAllCards, reload, updateCard, addCard, deleteCard };
