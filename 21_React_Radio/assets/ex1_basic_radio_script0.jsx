      // File: React Radio - Dasar
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [g,setG]=React.useState('m');
// Nilai 'm' atau 'f'
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="radio" name="gender" value="m" checked={g==='m'} onChange={e=>setG(e.target.value)}/> Pria</label>
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="radio" name="gender" value="f" checked={g==='f'} onChange={e=>setG(e.target.value)}/> Wanita</label>
    {/* Elemen JSX yang membangun UI. */}
    <p>Gender: {g}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
