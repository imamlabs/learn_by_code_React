      // File: React Lists - Anti-pattern key index
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [list,setList]=React.useState(['A','B','C']);
// State list
// Definisi fungsi/komponen 'removeFirst' — huruf kecil = fungsi biasa, bukan komponen.
function removeFirst(){ setList(list.slice(1));
// Baris JavaScript.
}                 // Hapus item pertama
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <button onClick={removeFirst}>Hapus pertama</button>            {/* Mutasi untuk lihat efek */}
    {/* Elemen JSX yang membangun UI. */}
    <ul>{list.map((x,i)=> <li key={i}><input defaultValue={x}/></li>)}</ul> {/* key index -> potensi bug */}
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
