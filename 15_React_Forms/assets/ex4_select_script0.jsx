      // File: React Forms - Select controlled
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [city,setCity]=React.useState('');
// State select
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label>Kota</label>
    {/* Elemen JSX yang membangun UI. */}
    <select value={city} onChange={e=>setCity(e.target.value)}>
      {/* Elemen JSX yang membangun UI. */}
      <option value="">- pilih -</option>
      {/* Elemen JSX yang membangun UI. */}
      <option value="tng">Tangerang</option>
      {/* Elemen JSX yang membangun UI. */}
      <option value="bdg">Bandung</option>
    {/* Elemen JSX yang membangun UI. */}
    </select>
    {/* Elemen JSX yang membangun UI. */}
    <p>Kode kota: {city||'-'}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
