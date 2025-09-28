      // File: useMemo - Bukan pengganti effect
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [n,setN]=React.useState(0);
// Pernyataan JavaScript.
const doubled=React.useMemo(()=> n*2, [n]);
// Pernyataan JavaScript.
return <div className='card'><p>{doubled}</p><button onClick={()=>setN(n+1)}>+</button></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
