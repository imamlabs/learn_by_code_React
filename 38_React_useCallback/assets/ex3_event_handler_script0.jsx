      // File: useCallback - Handler di list
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Row=React.memo(({i,onRemove})=> <li><button onClick={()=>onRemove(i)}>Hapus</button> Item {i}</li>);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [list,setList]=React.useState([0,1,2]);
// Pernyataan JavaScript.
const onRemove=React.useCallback((i)=> setList(l=> l.filter(x=>x!==i)), []);
// Pernyataan JavaScript.
return <ul>{list.map(i=> <Row key={i} i={i} onRemove={onRemove}/>)}</ul>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
