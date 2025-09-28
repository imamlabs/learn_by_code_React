      // File: React Forms Submit - Validasi
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
// Inisialisasi state lokal (nilai awal + updater).
const [email,setEmail]=React.useState('');
// State email
// Definisi fungsi/komponen 'onSubmit' — huruf kecil = fungsi biasa, bukan komponen.
function onSubmit(e){ e.preventDefault();
// Cegah reload
// Pernyataan JavaScript.
if(!email.includes('@')){ alert('Email tidak valid');
// Pernyataan JavaScript.
return;
// Baris JavaScript.
} // Validasi sederhana
    // Pernyataan JavaScript.
    alert('OK: '+email);
  // Baris JavaScript.
  }
  // Mulai blok render UI (JSX) dari komponen.
  return (<form onSubmit={onSubmit} className="card">
    {/* Elemen JSX yang membangun UI. */}
    <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email"/>
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
