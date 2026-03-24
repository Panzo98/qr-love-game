const sharp = require("sharp");
const { generateQR } = require("./qrGenerator");
const tokens = require("./tokens");

/**
 * 3 answer QR codes side by side (for question page)
 * 640x300 px, labels 1 / 2 / 3
 */
async function composeAnswersPrint(card, baseUrl) {
  const W = 640, H = 300, QR = 160, QR_Y = 40, LABEL_Y = 215;

  const n = (card.choiceOrder || []).length || 3;
  const qrBuffers = await Promise.all(
    Array.from({ length: n }, (_, slot) => {
      const tok = tokens.answerToken(card.id, slot);
      return generateQR(`${baseUrl}/a/${tok}`);
    })
  );

  const resized = await Promise.all(
    qrBuffers.map((buf) =>
      sharp(buf).resize(QR, QR, { fit: "fill" }).png().toBuffer()
    )
  );

  const spacing = (W - n * QR) / (n + 1);
  const positions = Array.from({ length: n }, (_, i) =>
    Math.round(spacing + i * (QR + spacing))
  );

  const labels = positions
    .map((x, i) => `<text x="${x + QR / 2}" y="${LABEL_Y}" text-anchor="middle" class="l">${i + 1}</text>`)
    .join("");

  const svg = `<svg width="${W}" height="${H}">
    <style>.l { font: bold 24px sans-serif; fill: #000; }</style>
    ${labels}
  </svg>`;

  return sharp({
    create: { width: W, height: H, channels: 3, background: { r: 255, g: 255, b: 255 } },
  })
    .composite([
      { input: Buffer.from(svg), top: 0, left: 0 },
      ...resized.map((buf, i) => ({ input: buf, top: QR_Y, left: positions[i] })),
    ])
    .threshold(128)
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/**
 * Single question QR code centered (for answer page → next question)
 * 400x280 px
 */
async function composeQuestionPrint(nextCardId, baseUrl) {
  const W = 400, H = 280, QR = 200;

  const tok = tokens.questionToken(nextCardId);
  const qrBuf = await generateQR(`${baseUrl}/q/${tok}`);
  const resized = await sharp(qrBuf).resize(QR, QR, { fit: "fill" }).png().toBuffer();

  const left = Math.round((W - QR) / 2);

  const svg = `<svg width="${W}" height="${H}">
    <style>.t { font: bold 16px sans-serif; fill: #000; }</style>
    <text x="${W / 2}" y="24" text-anchor="middle" class="t">Skeniraj za nastavak</text>
  </svg>`;

  return sharp({
    create: { width: W, height: H, channels: 3, background: { r: 255, g: 255, b: 255 } },
  })
    .composite([
      { input: Buffer.from(svg), top: 0, left: 0 },
      { input: resized, top: 50, left },
    ])
    .threshold(128)
    .png({ compressionLevel: 9 })
    .toBuffer();
}

module.exports = { composeAnswersPrint, composeQuestionPrint };
