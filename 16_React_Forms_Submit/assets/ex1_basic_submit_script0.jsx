      // File: React Forms Submit - Dasar
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
// Inisialisasi state lokal (nilai awal + updater).
const [name,setName]=React.useState('');
// State nama
// Definisi fungsi/komponen 'onSubmit' — huruf kecil = fungsi biasa, bukan komponen.
function onSubmit(e){ e.preventDefault();
// Pernyataan JavaScript.
alert('Submit: '+name);
// Baris JavaScript.
} // Cegah reload
  // Mulai blok render UI (JSX) dari komponen.
  return (<form onSubmit={onSubmit} className="card">
    {/* Elemen JSX yang membangun UI. */}
    <input value={name} onChange={e=>setName(e.target.value)} placeholder="nama"/>
    {/* Elemen JSX yang membangun UI. */}
    <button type="submit">Kirim</button>
  {/* Elemen JSX yang membangun UI. */}
  </form>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
