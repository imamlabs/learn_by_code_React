      // File: React Select - Multiple
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [opts,setOpts]=React.useState(['a']);
// Array nilai
// Definisi fungsi/komponen 'onChange' — huruf kecil = fungsi biasa, bukan komponen.
function onChange(e){ const selected=[...e.target.options].filter(o=>o.selected).map(o=>o.value);
// Pernyataan JavaScript.
setOpts(selected);
// Baris JavaScript.
} // Ambil banyak
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <select multiple size={4} value={opts} onChange={onChange}>
      {/* Elemen JSX yang membangun UI. */}
      <option value="a">A</option><option value="b">B</option><option value="c">C</option><option value="d">D</option>
    {/* Elemen JSX yang membangun UI. */}
    </select>
    {/* Elemen JSX yang membangun UI. */}
    <p>Pilihan: {opts.join(', ')||'-'}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
