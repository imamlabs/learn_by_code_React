      // File: useRef - Mengukur elemen
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const r=React.useRef();
// Inisialisasi state lokal (nilai awal + updater).
const [w,setW]=React.useState(0);
// Efek samping setelah render (setup/cleanup).
React.useEffect(()=>{ setW(r.current.offsetWidth);
// Pernyataan JavaScript.
});
// Pernyataan JavaScript.
return <div className='card' ref={r}>Lebar: {w}px</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
