      // File: useCallback - Dependency
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [v,setV]=React.useState(1);
// Pernyataan JavaScript.
const f=React.useCallback(()=> console.log(v), [v]);
// Pernyataan JavaScript.
return <button onClick={()=>{ f();
// Pernyataan JavaScript.
setV(v+1);
// Pernyataan JavaScript.
}}>Jalankan</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
