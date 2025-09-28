      // File: React Portals - Toast sederhana
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Ambil elemen DOM berdasarkan id.
function Toast({msg}){ const el=document.getElementById('toast-root');
// Target khusus toast
  // Pernyataan JavaScript.
  return ReactDOM.createPortal(<div style={{position:'fixed',right:10,bottom:10}} className="card">{msg}</div>, el);
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [msg,setMsg]=React.useState('');
// State pesan
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <button onClick={()=>setMsg('Tersimpan!')}>Simpan</button>        {/* Simulasi aksi */}
    {/* Baris JavaScript. */}
    {msg && <Toast msg={msg}/>}                                       {/* Tampilkan toast */}
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Pernyataan JavaScript.
const toast=document.createElement('div');
// Pernyataan JavaScript.
toast.id='toast-root';
// Pernyataan JavaScript.
document.body.appendChild(toast);
// Siapkan root toast
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
