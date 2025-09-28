      // File: useRef - Menyimpan nilai non-render
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const count=React.useRef(0);
// Inisialisasi state lokal (nilai awal + updater).
const [_,setR]=React.useState(0);
// Definisi fungsi/komponen 'tick' — huruf kecil = fungsi biasa, bukan komponen.
function tick(){ count.current++;
// Pernyataan JavaScript.
setR(x=>x+1);
// Pernyataan JavaScript.
} return <button onClick={tick}>klik={count.current}</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
