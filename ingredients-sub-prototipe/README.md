# 🧪 Uji Proyek Intern: Skincluv Ingredient Engine

Selamat datang di tes magang Backend Developer untuk proyek **Skincluv**!
Tugas kamu adalah membangun *core engine* berbasis AI untuk membaca komposisi produk perawatan kulit (*skincare*) dari sebuah foto dan memberikan analisis medisnya.

## 🎯 Objektif
Aplikasi ini harus bisa menerima input berupa gambar komposisi *skincare*, mengirimkannya ke Google Gemini API, dan mengembalikan hasil analisis spesifik untuk **kulit sensitif** dalam format **JSON murni**.

## 📋 Requirement & Tugas Kamu
Kamu harus melengkapi file `src/index.js` dengan menuliskan kodemu di bagian yang telah disediakan berdasarkan *Hint* yang ada di dalamnya.

1. **Wajib Node.js:** Proyek ini dikhususkan menggunakan *stack* JavaScript dengan *runtime* **Node.js**. Gunakan file *skeleton* `src/index.js` bawaan. Dilarang keras menaruh API Key langsung di dalam kode (gunakan `.env`).
2. **Aturan Penggunaan AI:** Kamu **DIPERBOLEHKAN** menggunakan AI berbasis *browser* (seperti ChatGPT atau Claude versi *web*) sebagai tempat bertanya dan belajar. Namun, kamu **DILARANG KERAS** menggunakan *AI Coding Agent / Autocomplete* (seperti Cursor, Claude Code, GitHub Copilot, dsb.) yang bisa menuliskan atau mengedit kode secara otomatis di kodemu.
3. **Integrasi SDK:** Gunakan library resmi `@google/generative-ai` untuk menembak API. Model yang wajib digunakan adalah **`gemini-2.5-flash`**.
4. **Kecerdasan Validasi (Edge Cases):** Programmu harus memiliki *Prompt* yang cerdas untuk membedakan kondisi gambar. Kolom `"status_validasi"` harus diisi **"gagal"** jika AI mendeteksi:
   - Gambar adalah komposisi makanan/minuman (bukan *skincare*).
   - Gambar produk tapi tidak menampilkan teks daftar komposisi.
   - Gambar sama sekali tidak nyambung (contoh: foto kucing, pemandangan).
   - Teks komposisi **tidak bisa dibaca sama sekali** (karena foto terlalu *blur*, terlalu gelap/silau, atau teks terpotong parah).
5. **Struktur Data Output (API Contract):** Frontend bergantung pada format *keys* yang konsisten. Jika validasi sukses, AI harus mengembalikan struktur JSON persis seperti di bawah ini (tanpa basa-basi atau awalan markdown):
   ```json
   {
     "status_validasi": "sukses / gagal",
     "analisis_produk": {
       "nama_bahan_terdeteksi": ["Bahan A", "Bahan B"],
       "cocok_untuk_kulit_sensitif": true,
       "bahan_berisiko": [
         {
           "nama_bahan": "Nama Bahan Berbahaya",
           "efek_samping": "Alasan medis singkat"
         }
       ],
       "rekomendasi_alternatif": "Saran alternatif yang aman."
     }
   }
   ```
6. **Error Handling:** Jika API gagal/sibuk (biasanya error 503) atau internet putus, program tidak boleh *crash*. Berikan pesan log error via `try/catch`.

## 🖼️ Gambar Testing
Kami sudah menyediakan **3 gambar** di dalam folder `test-images` yang bisa kamu gunakan langsung untuk menguji programmu. Namun, untuk memastikan *Prompt* buatanmu benar-benar cerdas dan bisa mendeteksi *edge cases* (foto makanan, kucing, foto blur, dll), kamu sangat disarankan untuk **menggunakan gambarmu sendiri atau mencari gambar dari internet** untuk pengujian tambahan.

## 🛠️ Cara Setup
1. Pastikan kamu sudah menginstall Node.js di komputer.
2. Buka terminal di folder ini dan jalankan:
   ```bash
   npm install
   ```
3. Salin file `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
4. Dapatkan API Key secara gratis dari [Google AI Studio](https://aistudio.google.com/) dan masukkan kodenya ke dalam file `.env`.
5. Mulai selesaikan *TODO* di dalam file `src/index.js`.
6. Untuk mengetes kode program buatanmu:
   ```bash
   npm start
   ```

Selamat bereksplorasi dan *good luck*! 🔥
