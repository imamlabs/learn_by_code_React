      // File: React Radio - Disable kondisi
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [val,setVal]=React.useState('A');
// Pernyataan JavaScript.
const locked=true;
// Kunci pilihan
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="radio" name="opt" value="A" checked={val==='A'} onChange={e=>setVal(e.target.value)} disabled={locked}/> A</label>
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="radio" name="opt" value="B" checked={val==='B'} onChange={e=>setVal(e.target.value)} disabled={locked}/> B</label>
    {/* Elemen JSX yang membangun UI. */}
    <p>(Contoh radio terkunci)</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
