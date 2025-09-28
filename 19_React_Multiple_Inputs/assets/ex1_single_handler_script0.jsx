      // File: React Multiple Inputs - Single handler
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [form,setForm]=React.useState({name:'',age:0,city:''});
// Satu state objek
// Definisi fungsi/komponen 'onChange' — huruf kecil = fungsi biasa, bukan komponen.
function onChange(e){ const {name,value,type,checked}=e.target;
// Pernyataan JavaScript.
setForm({...form,[name]: type==='checkbox'?checked: (type==='number'?Number(value):value)});
// Baris JavaScript.
} // Handler generik
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label>Nama <input name="name" value={form.name} onChange={onChange}/></label>
    {/* Elemen JSX yang membangun UI. */}
    <label>Usia <input name="age" type="number" value={form.age} onChange={onChange}/></label>
    {/* Elemen JSX yang membangun UI. */}
    <label>Kota <select name="city" value={form.city} onChange={onChange}><option value="">-</option><option value="BDG">Bandung</option></select></label>
    {/* Elemen JSX yang membangun UI. */}
    <pre>{JSON.stringify(form,null,2)}</pre>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
