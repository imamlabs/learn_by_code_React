import React from 'react'                          // Impor React

function Step1({data,setData}){                    // Komponen step 1
  return (                                         // UI step1
    <div className="card">                         {/* Kartu */}
      <label>Nama</label>                          {/* Label */}
      <input value={data.name} onChange={e=>setData({...data, name:e.target.value})} placeholder="nama lengkap" /> {/* Input */}
    </div>                                         /* Tutup kartu */
  )                                                // Tutup return
}                                                  // Tutup Step1

function Step2({data,setData}){                    // Komponen step 2
  return (                                         // UI step2
    <div className="card">                         {/* Kartu */}
      <label>Email</label>                         {/* Label email */}
      <input value={data.email} onChange={e=>setData({...data, email:e.target.value})} placeholder="email" /> {/* Input */}
      <label>Kota</label>                          {/* Label kota */}
      <input value={data.city} onChange={e=>setData({...data, city:e.target.value})} placeholder="kota" /> {/* Input */}
    </div>                                         /* Tutup kartu */
  )                                                // Tutup return
}                                                  // Tutup Step2

function Step3({data}){                            // Komponen step 3
  return (                                         // UI step3
    <div className="card">                         {/* Kartu */}
      <b>Ringkasan</b>                             {/* Judul */}
      <pre>{JSON.stringify(data, null, 2)}</pre>   {/* Tampilkan JSON */}
    </div>                                         /* Tutup kartu */
  )                                                // Tutup return
}                                                  // Tutup Step3

export default function Wizard(){                  // Halaman Wizard
  const [step, setStep] = React.useState(1)        // State langkah
  const [data, setData] = React.useState({name:'', email:'', city:''}) // State form

  const valid1 = data.name.trim().length >= 3      // Validasi langkah 1
  const valid2 = /@/.test(data.email) && data.city.trim() !== '' // Validasi langkah 2

  function next(){                                  // Fungsi maju
    if((step===1 && !valid1) || (step===2 && !valid2)) return alert('Lengkapi data terlebih dahulu') // Cek
    setStep(step+1)                                  // Step berikutnya
  }                                                 // Tutup next

  function prev(){ setStep(step-1) }                // Fungsi mundur

  function submit(){ alert('Terkirim: '+JSON.stringify(data)) } // Submit akhir

  return (                                          // Kembalikan UI
    <div>                                           {/* Pembungkus */}
      <div style={{display:'flex', gap:8, marginBottom:8}}> {/* Indikator */}
        <span style={dot(step>=1)}>1</span>         {/* Dot 1 */}
        <span style={dot(step>=2)}>2</span>         {/* Dot 2 */}
        <span style={dot(step>=3)}>3</span>         {/* Dot 3 */}
      </div>                                        {/* Tutup indikator */}

      {step===1 && <Step1 data={data} setData={setData} />} {/* Render step1 */}
      {step===2 && <Step2 data={data} setData={setData} />} {/* Render step2 */}
      {step===3 && <Step3 data={data} />}                  {/* Render step3 */}

      <div style={{display:'flex', gap:8}}>        {/* Tombol */}
        <button onClick={prev} disabled={step===1}>Sebelumnya</button> {/* Prev */}
        {step<3 && <button onClick={next}>Berikutnya</button>}         {/* Next */}
        {step===3 && <button onClick={submit}>Kirim</button>}          {/* Submit */}
      </div>                                        {/* Tutup tombol */}
    </div>                                          /* Tutup pembungkus */
  )                                                 // Tutup return
}                                                   // Tutup Wizard

function dot(active){                               // Fungsi gaya titik
  return {                                          // Kembalikan style obj
    width: 28, height: 28,                          // Ukuran lingkaran
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', // Pusatkan
    borderRadius: 999, background: active ? '#0d6efd' : '#e9ecef', color: active ? '#fff':'#333' // Warna
  }                                                 // Tutup style
}                                                   // Tutup dot