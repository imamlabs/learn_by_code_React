      // File: useCallback - vs inline
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [n,setN]=React.useState(0);
// Pernyataan JavaScript.
return <button onClick={()=>setN(n+1)}>Inline handler (recreate tiap render)</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
