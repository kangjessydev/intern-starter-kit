require('dotenv').config();
const fs = require('fs');
const path = require('path');

/**
 * SKINCLUV INGREDIENT ENGINE
 * 
 * Target: Integrasi Google Gemini API untuk membaca komposisi produk perawatan kulit dari gambar.
 * Output: JSON Object murni (baca spesifikasi di file README.md).
 */

async function analyzeIngredientsImage(imageName) {
  try {
    const imagePath = path.join(__dirname, '../test-images', imageName);
    console.log(`[Skincluv Backend] Memproses: ${imageName}...\n`);
    
    // ==========================================
    // [YOUR CODE STARTS HERE]
    // ==========================================
    
    // Hint:
    // 1. Inisialisasi GoogleGenerativeAI SDK.
    // 2. Load file gambar dan konversi ke base64 (format part Gemini).
    // 3. Buat System Prompt (Prompt Engineering) untuk memaksa AI bertindak sebagai Dokter Kulit dan mengembalikan JSON.
    // 4. Panggil model 'gemini-2.5-flash' dan parse text responsenya menjadi Object.
    // 5. Print JSON Output-nya secara utuh ke terminal.
    
    // ==========================================
    // [YOUR CODE ENDS HERE]
    // ==========================================

  } catch (error) {
    console.error("\n[System Error]", error.message);
  }
}

// Menjalankan simulasi
analyzeIngredientsImage('ingredients_test_001.jpg');
