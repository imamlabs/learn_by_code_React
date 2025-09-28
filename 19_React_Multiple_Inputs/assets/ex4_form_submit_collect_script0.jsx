      // File: React Multiple Inputs - Submit kumpulkan
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [form,setForm]=React.useState({name:'',skills:[]});
// State
// Definisi fungsi/komponen 'onChange' — huruf kecil = fungsi biasa, bukan komponen.
function onChange(e){ const {name,value}=e.target;
// Pernyataan JavaScript.
setForm({...form,[name]:value});
// Baris JavaScript.
}
// Definisi fungsi/komponen 'addSkill' — huruf kecil = fungsi biasa, bukan komponen.
function addSkill(){ setForm({...form, skills:[...form.skills, 'React']});
// Baris JavaScript.
}
// Definisi fungsi/komponen 'submit' — huruf kecil = fungsi biasa, bukan komponen.
function submit(e){ e.preventDefault();
// Pernyataan JavaScript.
alert(JSON.stringify(form));
// Baris JavaScript.
}
  // Mulai blok render UI (JSX) dari komponen.
  return (<form onSubmit={submit} className="card">
    {/* Elemen JSX yang membangun UI. */}
    <input name="name" value={form.name} onChange={onChange} placeholder="nama"/>
    {/* Elemen JSX yang membangun UI. */}
    <button type="button" onClick={addSkill}>Tambah 'React'</button>
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
