      // File: React Select - Options dari data
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const data=['Jakarta','Bandung','Surabaya'];
// Data array
// Inisialisasi state lokal (nilai awal + updater).
const [city,setCity]=React.useState('Jakarta');
// Default
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <select value={city} onChange={e=>setCity(e.target.value)}>
      {/* Baris JavaScript. */}
      {data.map(c=> <option key={c} value={c}>{c}</option>)}        {/* mapping ke option */}
    {/* Elemen JSX yang membangun UI. */}
    </select>
    {/* Elemen JSX yang membangun UI. */}
    <p>Kota: {city}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
