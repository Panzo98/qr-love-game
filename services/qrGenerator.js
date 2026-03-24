const QRCode = require("qrcode");

const cache = new Map();

async function generateQR(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const buffer = await QRCode.toBuffer(url, {
    errorCorrectionLevel: "M",
    width: 160,
    margin: 2,
    color: { dark: "#000000", light: "#ffffff" },
  });

  cache.set(url, buffer);
  return buffer;
}

function clearCache() {
  cache.clear();
}

module.exports = { generateQR, clearCache };
