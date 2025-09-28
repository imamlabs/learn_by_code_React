      // File: React Select - OptGroup
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [v,setV]=React.useState('');
// State
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <select value={v} onChange={e=>setV(e.target.value)}>
      {/* Elemen JSX yang membangun UI. */}
      <optgroup label="Huruf"><option value="a">A</option><option value="b">B</option></optgroup>
      {/* Elemen JSX yang membangun UI. */}
      <optgroup label="Angka"><option value="1">1</option><option value="2">2</option></optgroup>
    {/* Elemen JSX yang membangun UI. */}
    </select>
    {/* Elemen JSX yang membangun UI. */}
    <p>Nilai: {v||'-'}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
