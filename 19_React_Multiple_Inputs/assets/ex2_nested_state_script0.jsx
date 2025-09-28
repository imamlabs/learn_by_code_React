      // File: React Multiple Inputs - Nested state
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [form,setForm]=React.useState({user:{name:''}, prefs:{newsletter:false}});
// Nested
  // Definisi fungsi/komponen 'onChange' — huruf kecil = fungsi biasa, bukan komponen.
  function onChange(e){ const {name, value, type, checked} = e.target; 
// Pernyataan JavaScript.
if(name==='name'){ setForm({...form, user:{...form.user, name:value}});
// Baris JavaScript.
}  // Perbarui jalur user.name
// Pernyataan JavaScript.
if(name==='newsletter'){ setForm({...form, prefs:{...form.prefs, newsletter:checked}});
// Baris JavaScript.
} // prefs.newsletter
  // Baris JavaScript.
  }
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label>Nama <input name="name" value={form.user.name} onChange={onChange}/></label>
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="checkbox" name="newsletter" checked={form.prefs.newsletter} onChange={onChange}/> Langganan</label>
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
