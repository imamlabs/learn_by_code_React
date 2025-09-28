      // File: useMemo - Identitas objek stabil
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Child=React.memo(({opts})=> <pre>{JSON.stringify(opts)}</pre>);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [n,setN]=React.useState(0);
// Pernyataan JavaScript.
const opts=React.useMemo(()=> ({color:'#0d6efd'}), []);
// Pernyataan JavaScript.
return <div className='card'><Child opts={opts}/><button onClick={()=>setN(n+1)}>rerender</button></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
