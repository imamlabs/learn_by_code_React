      // File: React Forms Submit - Kumpulkan nilai
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
// Inisialisasi state lokal (nilai awal + updater).
const [form,setForm]=React.useState({name:'',age:0});
// State objek
// Definisi fungsi/komponen 'onChange' — huruf kecil = fungsi biasa, bukan komponen.
function onChange(e){ setForm({...form,[e.target.name]:e.target.type==='number'?Number(e.target.value):e.target.value});
// Baris JavaScript.
} // Update dinamis
// Definisi fungsi/komponen 'onSubmit' — huruf kecil = fungsi biasa, bukan komponen.
function onSubmit(e){ e.preventDefault();
// Pernyataan JavaScript.
alert(JSON.stringify(form));
// Baris JavaScript.
} // Tampilkan JSON
  // Mulai blok render UI (JSX) dari komponen.
  return (<form onSubmit={onSubmit} className="card">
    {/* Elemen JSX yang membangun UI. */}
    <input name="name" value={form.name} onChange={onChange} placeholder="nama"/>
    {/* Elemen JSX yang membangun UI. */}
    <input name="age" type="number" value={form.age} onChange={onChange}/>
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
