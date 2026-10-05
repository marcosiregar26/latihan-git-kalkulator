// index.js
const { tambah, kurang, kali, bagi } = require("./kalkulator");

console.log("=== APLIKASI KALKULATOR ===");
console.log("Hasil 10 + 5 =", tambah(10, 5));
console.log("Hasil 10 - 5 =", kurang(10, 5));
console.log("Hasil 10 * 5 =", kali(10, 5));
console.log("Hasil 10 / 5 =", bagi(10, 5));