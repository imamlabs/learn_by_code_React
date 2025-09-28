      // File: React Transitions - Daftar (sederhana)
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'Item' — huruf besar = komponen React.
function Item({text, onRemove}){ return <div className='card fade'><span>{text}</span> <button onClick={onRemove}>X</button></div>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [list,setList]=React.useState(['A','B','C']);
// Definisi fungsi/komponen 'add' — huruf kecil = fungsi biasa, bukan komponen.
function add(){ setList([...list, String.fromCharCode(65+list.length)]) } function remove(i){ setList(list.filter((_,x)=>x!==i)) }
  // Mulai blok render UI (JSX) dari komponen.
  return (<div><button onClick={add}>Tambah</button>{list.map((t,i)=> <Item key={t} text={t} onRemove={()=>remove(i)}/>)}</div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
