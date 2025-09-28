import React from 'react'                          // Impor React

const QUESTIONS = [                                // Soal kuis
  {q:'Hook untuk state?', a:['useState','useRef','useMemo'], correct:0}, // Q1
  {q:'Render kondisional sederhana?', a:['v-if','ngIf','ternary ? :'], correct:2}, // Q2
  {q:'Router React?', a:['react-router-dom','vue-router','@angular/router'], correct:0}, // Q3
]                                                  // Tutup array

export default function Quiz(){                    // Halaman Quiz
  const [ans, setAns] = React.useState(Array(QUESTIONS.length).fill(null)) // Jawaban user
  const [done, setDone] = React.useState(false)    // Status selesai

  const score = ans.reduce((s,v,i)=> s + (v===QUESTIONS[i].correct ? 1 : 0), 0) // Hitung skor

  function choose(i, idx){                         // Pilih jawaban
    if(done) return                                // Jangan ubah jika sudah selesai
    const next = ans.slice()                       // Salin array
    next[i] = idx                                  // Set jawaban
    setAns(next)                                   // Simpan
  }                                                // Tutup choose

  return (                                         // UI
    <div className="card">                         {/* Kartu */}
      {QUESTIONS.map((it,i)=> (                    // Map soal
        <div key={i} style={{margin:'8px 0'}}>     {/* Kontainer soal */}
          <b>{i+1}. {it.q}</b>                     {/* Teks soal */}
          <div>                                    {/* Pilihan */}
            {it.a.map((opt,idx)=> (                // Map opsi
              <label key={idx} style={{display:'block'}}> {/* Satu opsi */}
                <input type="radio" name={'q'+i} checked={ans[i]===idx} onChange={()=>choose(i,idx)} /> {/* Radio */}
                {' '}{opt}                         {/* Teks opsi */}
                {done && (                         // Jika selesai, tunjukkan status
                  idx===it.correct ? <span style={pill('#198754')}>benar</span> :
                  ans[i]===idx ? <span style={pill('#dc3545')}>salah</span> : null
                )}                                 {/* Tutup indikator */}
              </label>                             /* Tutup label */
            ))}                                    {/* Tutup map opsi */}
          </div>                                   {/* Tutup pilihan */}
        </div>                                     /* Tutup kontainer soal */
      ))}                                          {/* Tutup map soal */}

      {!done ? (                                   // Jika belum selesai
        <button onClick={()=> setDone(true)}>Selesai</button> // Selesaikan
      ) : (                                        // Jika sudah selesai
        <div style={{display:'flex', gap:8, alignItems:'center'}}> {/* Hasil */}
          <b>Skor: {score}/{QUESTIONS.length}</b>  {/* Tampilkan skor */}
          <button onClick={()=> { setAns(Array(QUESTIONS.length).fill(null)); setDone(false) }}>Ulangi</button> {/* Reset */}
        </div>                                     {/* Tutup hasil */}
      )}                                           {/* Tutup kondisional */}
    </div>                                         /* Tutup kartu */
  )                                                // Tutup return
}                                                  // Tutup Quiz

function pill(bg){                                 // Fungsi gaya label kecil
  return {display:'inline-block', marginLeft:6, padding:'2px 8px', borderRadius:999, background:bg, color:'#fff'} // Kembalikan objek CSS
}                                                  // Tutup pill