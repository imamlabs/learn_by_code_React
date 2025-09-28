      // File: useCallback - Fungsi stabil
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Child=React.memo(function Child({onPlus}){ console.log('child render');
// Pernyataan JavaScript.
return <button onClick={onPlus}>Tambah</button>;
// Pernyataan JavaScript.
});
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [n,setN]=React.useState(0);
// Pernyataan JavaScript.
const onPlus=React.useCallback(()=> setN(p=>p+1), []);
// Pernyataan JavaScript.
return <div className='card'><Child onPlus={onPlus}/> n={n}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
