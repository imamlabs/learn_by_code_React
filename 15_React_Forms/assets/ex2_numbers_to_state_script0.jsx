      // File: React Forms - Angka
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [age,setAge]=React.useState(0);
// State angka
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label>Usia</label>
    {/* Elemen JSX yang membangun UI. */}
    <input type="number" value={age} onChange={e=>setAge(Number(e.target.value))}/> {/* Pastikan Number */}
    {/* Elemen JSX yang membangun UI. */}
    <p>Usia: {age}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
