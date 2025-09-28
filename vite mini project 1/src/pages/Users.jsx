import React from 'react'                          // Impor React

function useUsers(page, q){                        // Hook kustom pengambil data
  const [state, setState] = React.useState({loading:true, data:[], error:null}) // State L/D/E
  React.useEffect(()=>{                            // Efek saat page/q berubah
    let on = true                                  // Flag agar tidak setState setelah unmount
    setState({loading:true, data:[], error:null})  // Set loading
    fetch(`https://reqres.in/api/users?page=${page}`) // Panggil API user
      .then(r=>r.json())                           // Parse JSON
      .then(json=>{                                // Lanjut saat sukses
        let data = json.data || []                 // Ambil array data
        if(q){                                     // Jika ada query
          const s = q.toLowerCase()                // Lowercase untuk pencocokan
          data = data.filter(u => (u.first_name+u.last_name).toLowerCase().includes(s)) // Filter nama
        }                                          // Tutup if
        if(on) setState({loading:false, data, error:null}) // Set hasil
      })                                           // Tutup then
      .catch(err=> on && setState({loading:false, data:[], error:String(err)})) // Tangani error
    return ()=> { on=false }                       // Cleanup
  }, [page, q])                                    // Dependensi
  return state                                     // Kembalikan state
}                                                  // Tutup hook

export default function Users(){                   // Halaman Users
  const [page, setPage] = React.useState(1)        // State halaman
  const [q, setQ] = React.useState('')             // State query
  const {loading, data, error} = useUsers(page, q) // Pakai hook kustom

  return (                                         // Kembalikan UI
    <div className="card">                         {/* Kartu */}
      <div style={{display:'flex', gap:8, alignItems:'center'}}> {/* Kontrol */}
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="cari nama..." /> {/* Input cari */}
        <button onClick={()=> setPage(p=> Math.max(1, p-1))} disabled={page===1}>Prev</button> {/* Prev */}
        <span>Hal {page}</span>                    {/* Info halaman */}
        <button onClick={()=> setPage(p=> p+1)}>Next</button> {/* Next */}
      </div>                                       {/* Tutup kontrol */}

      {loading && <p style={{color:'#666'}}>Memuat…</p>} {/* Loading */}
      {error && <p style={{color:'#666'}}>Error: {error}</p>} {/* Error */}

      <ul>                                         {/* Daftar */}
        {data.map(u => (                           // Map user
          <li key={u.id} style={{display:'flex', gap:8, alignItems:'center'}}> {/* Item */}
            <img src={u.avatar} width="40" height="40" style={{borderRadius:'50%'}} /> {/* Avatar */}
            <b>{u.first_name} {u.last_name}</b>   {/* Nama */}
            <span style={{color:'#666'}}>{u.email}</span> {/* Email */}
          </li>                                    /* Tutup li */
        ))}                                        {/* Tutup map */}
      </ul>                                        {/* Tutup ul */}
    </div>                                         /* Tutup kartu */
  )                                                // Tutup return
}                                                  // Tutup Users