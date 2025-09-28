import React from 'react'                                   // Impor React
import { useEventListener } from '../lib/hooks.js'          // Hook event listener

function useStudents(page, q){                               // Hook ambil data
  const [state,setState] = React.useState({loading:true, data:[], error:null}) // L/D/E
  React.useEffect(()=>{                                      // Ketika page/q berubah
    let on = true                                            // Flag hidup
    setState({loading:true, data:[], error:null})            // Set loading
    fetch(`https://reqres.in/api/users?page=${page}`)        // Panggil API users
      .then(r=>r.json())                                     // Parse JSON
      .then(json=>{                                          // Sukses
        let data = json.data || []                           // Ambil data
        if(q){                                               // Filter bila ada q
          const s=q.toLowerCase()                            // Lowercase
          data = data.filter(u => (u.first_name+u.last_name).toLowerCase().includes(s)) // Cocokkan nama
        }                                                    // Tutup if
        if(on) setState({loading:false, data, error:null})   // Simpan hasil
      })                                                     // Tutup then
      .catch(err=> on && setState({loading:false, data:[], error:String(err)})) // Error
    return ()=> { on=false }                                 // Cleanup
  }, [page, q])                                              // Dependensi
  return state                                               // Kembalikan state
}                                                            // Tutup hook

export default function Students(){                          // Halaman Students
  const [page,setPage] = React.useState(1)                   // State halaman
  const [q,setQ] = React.useState('')                        // State query
  const {loading, data, error} = useStudents(page, q)        // Pakai hook custom
  const [width, setWidth] = React.useState(window.innerWidth)// Lebar jendela
  useEventListener(window, 'resize', ()=> setWidth(window.innerWidth)) // Update lebar on resize

  return (                                                   // UI
    <div className="card">                                   {/* Kartu */}
      <div className="row" style={{justifyContent:'space-between'}}> {/* Header */}
        <h2>Students</h2>                                    {/* Judul */}
        <span className="badge">Viewport: {width}px</span>   {/* Info lebar */}
      </div>                                                 {/* Tutup header */}

      <div className="row">                                  {/* Kontrol */}
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="cari nama..." /> {/* Cari */}
        <button className="btn" onClick={()=> setPage(p=> Math.max(1, p-1))} disabled={page===1}>Prev</button> {/* Prev */}
        <span>Hal {page}</span>                               {/* Info */}
        <button className="btn" onClick={()=> setPage(p=> p+1)}>Next</button> {/* Next */}
      </div>                                                 {/* Tutup kontrol */}

      {loading && <p style={{color:'var(--muted)'}}>Memuat…</p>} {/* Loading */}
      {error && <p style={{color:'var(--muted)'}}>Error: {error}</p>} {/* Error */}

      <ul>                                                   {/* Daftar */}
        {data.map(u => (                                     // Map user
          <li key={u.id} className="row">                    {/* Item */}
            <img src={u.avatar} width="40" height="40" style={{borderRadius:'50%'}}/> {/* Avatar */}
            <b>{u.first_name} {u.last_name}</b>              {/* Nama */}
            <span style={{color:'var(--muted)'}}>{u.email}</span> {/* Email */}
          </li>                                              /* Tutup li */
        ))}                                                  {/* Tutup map */}
      </ul>                                                  {/* Tutup daftar */}
    </div>                                                   /* Tutup kartu */
  )                                                          // Tutup return
}                                                            // Tutup Students