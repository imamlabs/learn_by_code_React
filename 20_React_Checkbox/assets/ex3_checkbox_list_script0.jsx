      // File: React Checkbox - Daftar pilihan
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const all=['JS','TS','React'];
// Inisialisasi state lokal (nilai awal + updater).
const [sel,setSel]=React.useState([]);
// Definisi fungsi/komponen 'toggle' — huruf kecil = fungsi biasa, bukan komponen.
function toggle(v){ setSel(sel.includes(v) ? sel.filter(x=>x!==v) : [...sel,v]);
// Baris JavaScript.
} // Toggle nilai
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Baris JavaScript. */}
    {all.map(v=> <label key={v}><input type="checkbox" checked={sel.includes(v)} onChange={()=>toggle(v)}/> {v}</label>)}
    {/* Elemen JSX yang membangun UI. */}
    <p>Terpilih: {sel.join(', ')||'-'}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
