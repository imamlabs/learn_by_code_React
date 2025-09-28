      // File: React Multiple Inputs - Field dinamis
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [fields,setFields]=React.useState([{id:1,value:''}]);
// Daftar field
// Definisi fungsi/komponen 'add' — huruf kecil = fungsi biasa, bukan komponen.
function add(){ setFields([...fields,{id:Date.now(),value:''}]);
// Baris JavaScript.
}       // Tambah field
// Definisi fungsi/komponen 'change' — huruf kecil = fungsi biasa, bukan komponen.
function change(id,val){ setFields(fields.map(f=> f.id===id? {...f,value:val}:f));
// Baris JavaScript.
} // Update
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Baris JavaScript. */}
    {fields.map(f=> <div key={f.id}><input value={f.value} onChange={e=>change(f.id,e.target.value)} placeholder={'Field '+f.id}/></div>)}
    {/* Elemen JSX yang membangun UI. */}
    <button onClick={add}>Tambah Field</button>
    {/* Elemen JSX yang membangun UI. */}
    <pre>{JSON.stringify(fields,null,2)}</pre>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
