const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { getAllCards, updateCard, addCard, deleteCard } = require("../config/gameData");
const tokens = require("../services/tokens");

const photosDir = path.join(__dirname, "../public/photos");
const audioDir = path.join(__dirname, "../public/audio");

// Optional basic-auth protection (set ADMIN_PASSWORD in .env)
const PASS = process.env.ADMIN_PASSWORD;
if (PASS) {
  router.use((req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
      res.setHeader("WWW-Authenticate", 'Basic realm="Admin"');
      return res.status(401).send("Unauthorized");
    }
    const decoded = Buffer.from((auth.split(" ")[1] || ""), "base64").toString();
    const pass = decoded.split(":").slice(1).join(":");
    if (pass !== PASS) {
      res.setHeader("WWW-Authenticate", 'Basic realm="Admin"');
      return res.status(401).send("Unauthorized");
    }
    next();
  });
}

// ── Main admin panel ─────────────────────────────────────────────────────
router.get("/", (req, res) => {
  const enriched = getAllCards().map(c => ({
    ...c,
    qToken: tokens.questionToken(c.id),
  }));
  res.render("admin", { cards: enriched });
});

// ── Upload page ───────────────────────────────────────────────────────────
router.get("/upload", (req, res) => {
  const slots = Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    const jpg = fs.existsSync(path.join(photosDir, `${n}.jpg`));
    const png = fs.existsSync(path.join(photosDir, `${n}.png`));
    return { n, exists: jpg || png, file: jpg ? `${n}.jpg` : png ? `${n}.png` : null };
  });
  const audioExists = fs.existsSync(path.join(audioDir, "playground.mp3"));
  res.render("admin-upload", { slots, audioExists, message: req.query.msg || null });
});

// ── JSON API ──────────────────────────────────────────────────────────────
router.get("/api/cards", (req, res) => {
  res.json(getAllCards().map(c => ({ ...c, qToken: tokens.questionToken(c.id) })));
});

router.post("/api/card/:id", express.json(), (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { qToken, ...data } = req.body;
  const updated = updateCard(req.params.id, data);
  if (!updated) return res.status(404).json({ error: "Not found" });
  tokens.reinit();
  res.json({ ok: true, card: { ...updated, qToken: tokens.questionToken(updated.id) } });
});

router.post("/api/card", express.json(), (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { qToken, ...data } = req.body;
  const card = addCard(data);
  tokens.reinit();
  res.json({ ok: true, card: { ...card, qToken: tokens.questionToken(card.id) } });
});

router.delete("/api/card/:id", (req, res) => {
  const ok = deleteCard(req.params.id);
  if (!ok) return res.status(404).json({ error: "Not found" });
  tokens.reinit();
  res.json({ ok: true });
});

// ── Photo upload ──────────────────────────────────────────────────────────
const photoUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, photosDir),
    filename: (req, file, cb) => {
      const slot = parseInt(req.body.slot, 10);
      if (!slot || slot < 1 || slot > 10) return cb(new Error("Neispravan slot"));
      cb(null, `${slot}${path.extname(file.originalname).toLowerCase() || ".jpg"}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) return cb(new Error("Samo slike"));
    cb(null, true);
  },
}).single("photo");

router.post("/upload-photo", (req, res) => {
  photoUpload(req, res, (err) => {
    if (err) return res.redirect(`/admin/upload?msg=${encodeURIComponent("Greška: " + err.message)}`);
    res.redirect("/admin/upload?msg=Slika+uploadovana+%E2%9C%93");
  });
});

// ── Audio upload ──────────────────────────────────────────────────────────
const audioUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, audioDir),
    filename: (req, file, cb) => cb(null, "playground.mp3"),
  }),
  limits: { fileSize: 30 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("audio/")) return cb(new Error("Samo audio"));
    cb(null, true);
  },
}).single("audio");

router.post("/upload-audio", (req, res) => {
  audioUpload(req, res, (err) => {
    if (err) return res.redirect(`/admin/upload?msg=${encodeURIComponent("Greška: " + err.message)}`);
    res.redirect("/admin/upload?msg=Muzika+uploadovana+%E2%9C%93");
  });
});

module.exports = router;
