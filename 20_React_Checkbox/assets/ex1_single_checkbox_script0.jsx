      // File: React Checkbox - Single
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [agree,setAgree]=React.useState(false);
// State boolean
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)}/> Setuju</label>
    {/* Elemen JSX yang membangun UI. */}
    <button disabled={!agree}>Lanjut</button>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
