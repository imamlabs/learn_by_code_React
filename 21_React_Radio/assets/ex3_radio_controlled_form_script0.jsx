      // File: React Radio - Dalam form
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [role,setRole]=React.useState('user');
// Definisi fungsi/komponen 'submit' — huruf kecil = fungsi biasa, bukan komponen.
function submit(e){ e.preventDefault();
// Pernyataan JavaScript.
alert(role);
// Baris JavaScript.
}
  // Mulai blok render UI (JSX) dari komponen.
  return (<form onSubmit={submit} className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="radio" name="role" value="user" checked={role==='user'} onChange={e=>setRole(e.target.value)}/> User</label>
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="radio" name="role" value="admin" checked={role==='admin'} onChange={e=>setRole(e.target.value)}/> Admin</label>
    {/* Elemen JSX yang membangun UI. */}
    <button>Kirim</button>
  {/* Elemen JSX yang membangun UI. */}
  </form>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
