      // File: useState - Array
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [list,setList]=React.useState(['A']);
// Definisi fungsi/komponen 'add' — huruf kecil = fungsi biasa, bukan komponen.
function add(){ setList([...list, 'X']);
// Baris JavaScript.
}
  // Pernyataan JavaScript.
  return <div className='card'><button onClick={add}>Tambah</button><ul>{list.map((x,i)=> <li key={i}>{x}</li>)}</ul></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
