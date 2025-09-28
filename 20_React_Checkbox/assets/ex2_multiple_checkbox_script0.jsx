      // File: React Checkbox - Multiple group
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [prefs,setPrefs]=React.useState({a:false,b:true});
// Beberapa checkbox
// Definisi fungsi/komponen 'onChange' — huruf kecil = fungsi biasa, bukan komponen.
function onChange(e){ const {name,checked}=e.target;
// Pernyataan JavaScript.
setPrefs({...prefs,[name]:checked});
// Baris JavaScript.
}
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="checkbox" name="a" checked={prefs.a} onChange={onChange}/> A</label>
    {/* Elemen JSX yang membangun UI. */}
    <label><input type="checkbox" name="b" checked={prefs.b} onChange={onChange}/> B</label>
    {/* Elemen JSX yang membangun UI. */}
    <pre>{JSON.stringify(prefs,null,2)}</pre>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
