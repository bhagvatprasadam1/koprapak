const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

const inputPath = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\73fe3679-e958-4ab7-bebe-545d1550f77a\\kopra_pak_banner_1793252164214.jpg';
const outputPath = 'c:\\Users\\user\\Desktop\\Manish\\kopra-pak\\public\\images\\kopra-pak-footer-illustration.png';
const outputPathDist = 'c:\\Users\\user\\Desktop\\Manish\\kopra-pak\\dist\\images\\kopra-pak-footer-illustration.png';

console.log('Reading JPEG...');
const jpegData = fs.readFileSync(inputPath);
const rawImage = jpeg.decode(jpegData, { useTArray: true });
const { width, height, data } = rawImage;

console.log(`Image dimensions: ${width}x${height}`);

// Create a PNG with same dimensions
const png = new PNG({ width, height });

// We want to detect background pixels.
// Since the illustration is on a pure white background, let's use a flood fill from all perimeter pixels
// that are near-white (r > 220, g > 220, b > 220).
const isBg = new Uint8Array(width * height);
const visited = new Uint8Array(width * height);

function isNearWhite(idx) {
  const r = data[idx * 4];
  const g = data[idx * 4 + 1];
  const b = data[idx * 4 + 2];
  return r >= 225 && g >= 225 && b >= 225;
}

const queue = [];

// Seed from borders
for (let x = 0; x < width; x++) {
  // top row
  let idx = x;
  if (isNearWhite(idx)) {
    visited[idx] = 1;
    isBg[idx] = 1;
    queue.push(idx);
  }
  // bottom row
  idx = (height - 1) * width + x;
  if (isNearWhite(idx)) {
    visited[idx] = 1;
    isBg[idx] = 1;
    queue.push(idx);
  }
}

for (let y = 0; y < height; y++) {
  // left col
  let idx = y * width;
  if (!visited[idx] && isNearWhite(idx)) {
    visited[idx] = 1;
    isBg[idx] = 1;
    queue.push(idx);
  }
  // right col
  idx = y * width + (width - 1);
  if (!visited[idx] && isNearWhite(idx)) {
    visited[idx] = 1;
    isBg[idx] = 1;
    queue.push(idx);
  }
}

// Also seed from inside the text cartouche if it's near-white so the background of the text is also transparent
// Or if the user wants transparency everywhere except the drawn elements:
// Actually, in the original image (media_1793251455423_63e3e547.jpg), the entire space surrounding all figures is transparent!
console.log(`Starting flood fill from ${queue.length} seeds...`);

let head = 0;
while (head < queue.length) {
  const curr = queue[head++];
  const cx = curr % width;
  const cy = Math.floor(curr / width);

  const neighbors = [
    [cx + 1, cy],
    [cx - 1, cy],
    [cx, cy + 1],
    [cx, cy - 1]
  ];

  for (const [nx, ny] of neighbors) {
    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
      const nidx = ny * width + nx;
      if (!visited[nidx]) {
        visited[nidx] = 1;
        if (isNearWhite(nidx)) {
          isBg[nidx] = 1;
          queue.push(nidx);
        }
      }
    }
  }
}

console.log(`Flood fill completed. Background pixels found: ${queue.length}`);

// Also check any near-white pixels that have brightness > 248 anywhere,
// so small isolated background pockets (e.g. between thalis and text frame, or between smoke and woman)
// are also made transparent!
for (let i = 0; i < width * height; i++) {
  const r = data[i * 4];
  const g = data[i * 4 + 1];
  const b = data[i * 4 + 2];
  // If brightness is very high (>= 245) and not inside the coconut meat (we check coconut meat is surrounded)
  // Let's check brightness
  const minVal = Math.min(r, g, b);
  const maxVal = Math.max(r, g, b);
  // Pure white/near-white isolated pockets
  if (minVal >= 246 && (maxVal - minVal) < 15) {
    isBg[i] = 1;
  }
}

// Now write to PNG data
for (let i = 0; i < width * height; i++) {
  const srcIdx = i * 4;
  const dstIdx = i * 4;

  const r = data[srcIdx];
  const g = data[srcIdx + 1];
  const b = data[srcIdx + 2];

  if (isBg[i]) {
    // Pure background pixel -> transparent
    png.data[dstIdx] = r;
    png.data[dstIdx + 1] = g;
    png.data[dstIdx + 2] = b;
    png.data[dstIdx + 3] = 0;
  } else {
    // Check if this pixel is on the border of background (feathering/anti-aliasing)
    // If it's very light (e.g. r > 220), soften the alpha
    const brightness = (r + g + b) / 3;
    if (brightness > 220) {
      // Calculate how close it is to white
      const alpha = Math.max(0, Math.min(255, Math.round((255 - brightness) * 4)));
      png.data[dstIdx] = r;
      png.data[dstIdx + 1] = g;
      png.data[dstIdx + 2] = b;
      png.data[dstIdx + 3] = alpha;
    } else {
      png.data[dstIdx] = r;
      png.data[dstIdx + 1] = g;
      png.data[dstIdx + 2] = b;
      png.data[dstIdx + 3] = 255;
    }
  }
}

console.log('Writing PNG outputs...');
const buffer = PNG.sync.write(png);
fs.writeFileSync(outputPath, buffer);
if (fs.existsSync('c:\\Users\\user\\Desktop\\Manish\\kopra-pak\\dist\\images')) {
  fs.writeFileSync(outputPathDist, buffer);
}
console.log('Done! Successfully created transparent PNG at: ' + outputPath);
