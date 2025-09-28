      // File: React Forms - Textarea controlled
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [bio,setBio]=React.useState('Halo');
// State textarea
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label>Bio</label>
    {/* Elemen JSX yang membangun UI. */}
    <textarea rows={3} value={bio} onChange={e=>setBio(e.target.value)}/>
    {/* Elemen JSX yang membangun UI. */}
    <p>Panjang: {bio.length} karakter</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
