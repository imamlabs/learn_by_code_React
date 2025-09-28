      // File: React Forms - Controlled Input
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [name,setName]=React.useState('');
// State untuk input
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label>Nama</label>                                       {/* Label */}
    {/* Elemen JSX yang membangun UI. */}
    <input value={name} onChange={e=>setName(e.target.value)} placeholder="ketik nama"/> {/* Controlled */}
    {/* Elemen JSX yang membangun UI. */}
    <p>Output: {name}</p>                                     {/* Tampilkan nilai */}
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
