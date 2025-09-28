      // File: React Select - Single
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [opt,setOpt]=React.useState('b');
// Nilai default
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <select value={opt} onChange={e=>setOpt(e.target.value)}>
      {/* Elemen JSX yang membangun UI. */}
      <option value="a">A</option>
      {/* Elemen JSX yang membangun UI. */}
      <option value="b">B</option>
      {/* Elemen JSX yang membangun UI. */}
      <option value="c">C</option>
    {/* Elemen JSX yang membangun UI. */}
    </select>
    {/* Elemen JSX yang membangun UI. */}
    <p>Terpilih: {opt}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
