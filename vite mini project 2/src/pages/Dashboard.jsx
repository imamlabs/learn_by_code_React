import React from 'react'                                   // Impor React
import { useTheme } from '../context/ThemeContext.jsx'      // Hook tema
import ChartLike from '../components/ChartLike.jsx'         // Grafik sederhana
import Toast from '../components/Toast.jsx'                 // Toast portal

export default function Dashboard(){                        // Komponen Dashboard
  const { theme, dispatch } = useTheme()                    // Ambil theme & dispatch
  const [toast, setToast] = React.useState('')              // State pesan toast

  const stats = React.useMemo(()=> [5,8,3,10,7,12,9], [])   // Data stat (memoized)

  function toggleTheme(){                                   // Fungsi toggle tema
    dispatch({type:'toggle'})                               // Dispatch toggle
    setToast('Theme diubah ke ' + (theme==='light'?'dark':'light')) // Tampilkan toast
    setTimeout(()=> setToast(''), 1200)                     // Sembunyikan otomatis
  }                                                         // Tutup fungsi

  return (                                                  // Kembalikan UI
    <div>                                                   {/* Kontainer */}
      <div className="card">                                {/* Kartu */}
        <div className="row" style={{justifyContent:'space-between'}}> {/* Baris */}
          <h2>Dashboard</h2>                                {/* Judul */}
          <button className="btn ghost" onClick={toggleTheme}>Toggle Theme: {theme}</button> {/* Tombol toggle */}
        </div>                                              {/* Tutup baris */}
        <p style={{color:'var(--muted)'}}>Statistik aktivitas (demo)</p> {/* Keterangan */}
        <ChartLike values={stats}/>                         {/* Render chart */}
      </div>                                                {/* Tutup kartu */}
      {toast && <Toast message={toast}/>}                   {/* Tampilkan toast jika ada */}
    </div>                                                  /* Tutup kontainer */
  )                                                         // Tutup return
}                                                           // Tutup Dashboard