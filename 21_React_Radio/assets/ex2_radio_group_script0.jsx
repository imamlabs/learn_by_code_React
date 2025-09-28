      // File: React Radio - Group dinamis
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const options=['A','B','C'];
// Inisialisasi state lokal (nilai awal + updater).
const [val,setVal]=React.useState('A');
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Baris JavaScript. */}
    {options.map(o=> <label key={o}><input type="radio" name="opt" value={o} checked={val===o} onChange={e=>setVal(e.target.value)}/> {o}</label>)}
    {/* Elemen JSX yang membangun UI. */}
    <p>Nilai: {val}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
