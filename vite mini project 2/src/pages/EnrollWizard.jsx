import React from 'react'                                   // Impor React

function Step1({data,setData}){                              // Langkah 1
  return (                                                   // UI step1
    <div className="card">                                   {/* Kartu */}
      <label>Nama Lengkap</label>                            {/* Label */}
      <input value={data.name} onChange={e=>setData({...data, name:e.target.value})} placeholder="nama anda" /> {/* Input */}
    </div>                                                   /* Tutup kartu */
  )                                                          // Tutup return
}                                                            // Tutup Step1

function Step2({data,setData}){                              // Langkah 2
  return (                                                   // UI step2
    <div className="card">                                   {/* Kartu */}
      <label>Email</label>                                   {/* Label */}
      <input value={data.email} onChange={e=>setData({...data, email:e.target.value})} placeholder="email" /> {/* Input */}
      <label>Program</label>                                 {/* Label */}
      <select value={data.program} onChange={e=>setData({...data, program:e.target.value})}> {/* Select */}
        <option value="">- pilih -</option>                  {/* Placeholder */}
        <option value="frontend">Frontend</option>           {/* Opsi */}
        <option value="backend">Backend</option>             {/* Opsi */}
        <option value="fullstack">Fullstack</option>         {/* Opsi */}
      </select>                                              {/* Tutup select */}
    </div>                                                   /* Tutup kartu */
  )                                                          // Tutup return
}                                                            // Tutup Step2

function Step3({data}){                                      // Langkah 3
  return (                                                   // UI ringkasan
    <div className="card">                                   {/* Kartu */}
      <b>Ringkasan</b>                                       {/* Judul */}
      <pre>{JSON.stringify(data, null, 2)}</pre>             {/* JSON pretty */}
    </div>                                                   /* Tutup kartu */
  )                                                          // Tutup return
}                                                            // Tutup Step3

export default function EnrollWizard(){                      // Halaman Wizard
  const [step, setStep] = React.useState(1)                  // Langkah saat ini
  const [data, setData] = React.useState({name:'', email:'', program:''}) // Data form

  const valid1 = data.name.trim().length >= 3                // Validasi langkah 1
  const valid2 = /@/.test(data.email) && !!data.program      // Validasi langkah 2

  function next(){                                           // Maju langkah
    if((step===1 && !valid1) || (step===2 && !valid2)) return alert('Lengkapi data dulu') // Cek valid
    setStep(step+1)                                          // Step++
  }                                                          // Tutup next
  function prev(){ setStep(step-1) }                         // Mundur step
  function submit(){                                         // Submit akhir
    alert('Terkirim: '+JSON.stringify(data))                 // Tampilkan hasil
  }                                                          // Tutup submit

  return (                                                   // UI wizard
    <div>                                                    {/* Kontainer */}
      <div className="row" style={{marginBottom:8}}>         {/* Indikator */}
        <Dot active={step>=1}>1</Dot>                        {/* Titik 1 */}
        <Dot active={step>=2}>2</Dot>                        {/* Titik 2 */}
        <Dot active={step>=3}>3</Dot>                        {/* Titik 3 */}
      </div>                                                 {/* Tutup indikator */}

      {step===1 && <Step1 data={data} setData={setData}/>}   {/* Step1 */}
      {step===2 && <Step2 data={data} setData={setData}/>}   {/* Step2 */}
      {step===3 && <Step3 data={data}/>}                     {/* Step3 */}

      <div className="row">                                  {/* Tombol */}
        <button className="btn ghost" onClick={prev} disabled={step===1}>Sebelumnya</button> {/* Prev */}
        {step<3 && <button className="btn" onClick={next}>Berikutnya</button>}               {/* Next */}
        {step===3 && <button className="btn" onClick={submit}>Kirim</button>}                {/* Submit */}
      </div>                                                 {/* Tutup tombol */}
    </div>                                                   /* Tutup kontainer */
  )                                                          // Tutup return
}                                                            // Tutup EnrollWizard

function Dot({active, children}){                            // Komponen dot indikator
  return (                                                   // Kotak bulat
    <span style={{width:28,height:28,display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:999,background:active?'var(--brand)':'#e9ecef',color:active?'#fff':'#333'}}>{children}</span>
  )                                                          // Tutup return
}                                                            // Tutup Dot