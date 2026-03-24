const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const photosDir = path.join(__dirname, "../public/photos");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, photosDir),
  filename: (req, file, cb) => {
    const slot = parseInt(req.body.slot, 10);
    if (!slot || slot < 1 || slot > 10) return cb(new Error("Neispravan slot"));
    const ext = path.extname(file.originalname).toLowerCase() || ".jpg";
    cb(null, `${slot}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) return cb(new Error("Samo slike"));
    cb(null, true);
  },
});

router.get("/", (req, res) => {
  const slots = Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    const jpg = fs.existsSync(path.join(photosDir, `${n}.jpg`));
    const png = fs.existsSync(path.join(photosDir, `${n}.png`));
    return { n, exists: jpg || png, file: jpg ? `${n}.jpg` : png ? `${n}.png` : null };
  });

  const audioExists = fs.existsSync(path.join(__dirname, "../public/audio/playground.mp3"));

  res.render("admin", { slots, audioExists, message: req.query.msg || null });
});

router.post("/upload-photo", (req, res, next) => {
  upload.single("photo")(req, res, (err) => {
    if (err) return res.redirect(`/admin?msg=Greška: ${encodeURIComponent(err.message)}`);
    res.redirect("/admin?msg=Slika uploadovana ✓");
  });
});

router.post("/upload-audio", (req, res) => {
  const audioUpload = multer({
    storage: multer.diskStorage({
      destination: path.join(__dirname, "../public/audio"),
      filename: (req, file, cb) => cb(null, "playground.mp3"),
    }),
    limits: { fileSize: 30 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.startsWith("audio/")) return cb(new Error("Samo audio fajlovi"));
      cb(null, true);
    },
  }).single("audio");

  audioUpload(req, res, (err) => {
    if (err) return res.redirect(`/admin?msg=Greška: ${encodeURIComponent(err.message)}`);
    res.redirect("/admin?msg=Muzika uploadovana ✓");
  });
});

module.exports = router;
