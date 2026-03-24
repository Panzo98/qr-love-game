const express = require("express");
const router = express.Router();

// Instructions page
router.get("/", (req, res) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  res.render("shortcut", { baseUrl });
});

/**
 * Generate a shortcuts:// import URL.
 * This uses Apple's x-callback URL scheme to create a shortcut
 * with pre-filled actions via the "shortcuts://import-shortcut" scheme.
 *
 * Unfortunately Apple removed direct plist import in iOS 16+.
 * Instead, we provide a simple "open in shortcuts" link that
 * redirects to a shared iCloud shortcut link (once created).
 *
 * For now, we provide the manual setup + API endpoints.
 */

module.exports = router;
