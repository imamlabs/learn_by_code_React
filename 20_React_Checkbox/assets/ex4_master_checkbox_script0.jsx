      // File: React Checkbox - Master/All
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const items=['A','B','C'];
// Inisialisasi state lokal (nilai awal + updater).
const [selected,setSelected]=React.useState([]);
// Pernyataan JavaScript.
const allChecked = selected.length===items.length;
// Semua terpilih?
// Definisi fungsi/komponen 'toggleAll' — huruf kecil = fungsi biasa, bukan komponen.
function toggleAll(e){ setSelected(e.target.checked? items : []);
// Baris JavaScript.
}   // Atur semua
// Definisi fungsi/komponen 'toggleOne' — huruf kecil = fungsi biasa, bukan komponen.
function toggleOne(v){ setSelected(selected.includes(v)? selected.filter(x=>x!==v): [...selected,v]);
// Baris JavaScript.
}
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="checkbox" checked={allChecked} onChange={toggleAll}/> Pilih semua</label>
    {/* Baris JavaScript. */}
    {items.map(v=> <label key={v}><input type="checkbox" checked={selected.includes(v)} onChange={()=>toggleOne(v)}/> {v}</label>)}
    {/* Elemen JSX yang membangun UI. */}
    <p>Dipilih: {selected.join(', ')||'-'}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
