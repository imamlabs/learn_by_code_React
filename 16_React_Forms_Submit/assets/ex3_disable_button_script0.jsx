      // File: React Forms Submit - Disable tombol
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
// Inisialisasi state lokal (nilai awal + updater).
const [v,setV]=React.useState('');
// State input
// Pernyataan JavaScript.
const valid = v.length>=3;
// Aturan
// Definisi fungsi/komponen 'onSubmit' — huruf kecil = fungsi biasa, bukan komponen.
function onSubmit(e){ e.preventDefault();
// Pernyataan JavaScript.
alert('OK');
// Baris JavaScript.
}    // Submit
  // Mulai blok render UI (JSX) dari komponen.
  return (<form onSubmit={onSubmit} className="card">
    {/* Elemen JSX yang membangun UI. */}
    <input value={v} onChange={e=>setV(e.target.value)} placeholder="min 3 huruf"/>
    {/* Elemen JSX yang membangun UI. */}
    <button disabled={!valid}>Kirim</button>                   {/* Disable bila tidak valid */}
  {/* Elemen JSX yang membangun UI. */}
  </form>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
