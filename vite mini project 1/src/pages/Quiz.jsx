import React from 'react'                          // Import modul React agar bisa memakai JSX & Hooks

const QUESTIONS = [                                // Deklarasi konstanta array berisi daftar soal
  {q:'Hook untuk state?', a:['useState','useRef','useMemo'], correct:0}, // Objek soal #1: pertanyaan, opsi jawaban, index jawaban benar
  {q:'Render kondisional sederhana?', a:['v-if','ngIf','ternary ? :'], correct:2}, // Objek soal #2
  {q:'Router React?', a:['react-router-dom','vue-router','@angular/router'], correct:0}, // Objek soal #3
]                                                  // Penutup array QUESTIONS

export default function Quiz(){                    // Komponen utama "Quiz" diekspor sebagai default
  const [ans, setAns] = React.useState(            // State "ans": menampung jawaban setiap soal (index opsi)
    Array(QUESTIONS.length).fill(null)             // Inisialisasi: array sepanjang jumlah soal, terisi null (belum menjawab)
  )                                                // Tutup pemanggilan useState untuk "ans"

  const [done, setDone] = React.useState(false)    // State "done": apakah kuis sudah diselesaikan

  const score = ans.reduce(                        // Hitung skor saat ini berdasar jawaban
    (s,v,i)=> s + (v === QUESTIONS[i].correct ? 1 : 0), // Tambahkan 1 untuk setiap jawaban yang cocok dengan kunci
    0                                              // Nilai awal akumulator
  )                                                // Tutup reduce

  function choose(i, idx){                         // Fungsi event handler saat pengguna memilih jawaban
    if (done) return                               // Jika kuis sudah selesai, abaikan perubahan jawaban
    const next = ans.slice()                       // Salin array "ans" agar tidak mengubah state secara langsung (immutability)
    next[i] = idx                                  // Tetapkan jawaban untuk soal ke-i dengan index opsi yang dipilih
    setAns(next)                                   // Simpan state "ans" yang baru
  }                                                // Tutup fungsi choose

  return (                                         // Mulai bagian render UI (JSX)
    <div className="card">                         {/* Kontainer kartu untuk seluruh kuis */}
      {QUESTIONS.map((it,i)=> (                    // Loop setiap soal dan render blok soal
        <div key={i} style={{margin:'8px 0'}}>     {/* Kontainer tiap soal; beri margin vertikal */}
          <b>{i+1}. {it.q}</b>                     {/* Tampilkan nomor + teks pertanyaan */}
          <div>                                    {/* Kontainer daftar opsi */}
            {it.a.map((opt,idx)=> (                // Loop setiap opsi jawaban untuk soal ini
              <label key={idx} style={{display:'block'}}> {/* Label untuk satu opsi; display block agar tiap opsi baris baru */}
                <input                             
                  type="radio"                      // Input tipe radio (hanya satu boleh dipilih per-soal)
                  name={'q'+i}                      // Name digabung index soal agar opsi dalam satu grup eksklusif
                  checked={ans[i] === idx}          // Radio diberi tanda centang bila state ans untuk soal ini sama dengan index opsi
                  onChange={()=> choose(i,idx)}     // Saat nilai berubah, panggil handler choose(i, idx)
                />                                  {/* Tutup elemen input */}
                {' '}{opt}                         {/* Spasi lalu teks opsi */}
                {done && (                         // Jika kuis sudah selesai, tampilkan indikator benar/salah
                  idx === it.correct               // Jika opsi ini adalah jawaban benar
                    ? <span style={pill('#198754')}>benar</span>   // Tampilkan label hijau "benar"
                    : (ans[i] === idx              // Jika bukan jawaban benar, tapi ini yang dipilih user
                        ? <span style={pill('#dc3545')}>salah</span> // Tampilkan label merah "salah"
                        : null)                    // Jika bukan jawaban benar dan tidak dipilih, jangan tampilkan apa-apa
                )}                                 {/* Tutup blok indikator benar/salah */}
              </label>                             {/* Tutup label satu opsi */}
            ))}                                    {/* Tutup map opsi untuk sebuah soal */}
          </div>                                   {/* Tutup kontainer opsi */}
        </div>                                     {/* Tutup kontainer satu soal */}
      ))}                                          {/* Tutup map seluruh soal */}

      {!done ? (                                   // Jika kuis BELUM selesai, tampilkan tombol "Selesai"
        <button onClick={()=> setDone(true)}>Selesai</button> // Klik: ubah status done menjadi true
      ) : (                                        // Jika kuis SUDAH selesai, tampilkan ringkasan & tombol ulangi
        <div style={{display:'flex', gap:8, alignItems:'center'}}> {/* Baris ringkasan hasil */}
          <b>Skor: {score}/{QUESTIONS.length}</b>  {/* Tampilkan skor: jumlah benar / total soal */}
          <button
            onClick={() => {                        // Handler tombol Ulangi: reset state
              setAns(Array(QUESTIONS.length).fill(null)) // Reset semua jawaban ke null
              setDone(false)                         // Kembali ke mode pengerjaan
            }}
          >
            Ulangi                                  {/* Teks tombol */}
          </button>                                 {/* Tutup tombol Ulangi */}
        </div>                                     {/* Tutup kontainer hasil */}
      )}                                           {/* Tutup percabangan kondisi done */}
    </div>                                         {/* Tutup kartu utama */}
  )                                                // Tutup return JSX
}                                                  // Tutup definisi komponen Quiz

function pill(bg){                                 // Utility untuk membuat gaya "badge/pill" kecil
  return {                                         // Kembalikan objek style inline
    display:'inline-block',                        // Tampilkan sebagai inline-block agar bisa diberi padding
    marginLeft:6,                                  // Jarak ke kiri kecil dari teks sebelumnya
    padding:'2px 8px',                             // Ruang dalam badge
    borderRadius:999,                              // Sudut sangat membulat (angka besar → lingkar)
    background:bg,                                 // Warna latar badge (parameter bg)
    color:'#fff'                                   // Warna teks putih agar kontras
  }                                                // Tutup objek style
}                                                  // Tutup fungsi pill
