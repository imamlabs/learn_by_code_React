      // File: Custom Hook - useToggle
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'useToggle' — huruf kecil = fungsi biasa, bukan komponen.
function useToggle(init=false){ const [v,setV]=React.useState(init);
// Pernyataan JavaScript.
const toggle=React.useCallback(()=> setV(x=>!x), []);
// Pernyataan JavaScript.
return [v,toggle];
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [on,toggle]=useToggle();
// Pernyataan JavaScript.
return <button onClick={toggle}>{String(on)}</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
