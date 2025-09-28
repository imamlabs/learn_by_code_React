      // File: Custom Hook - useEventListener
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'useEventListener' — huruf kecil = fungsi biasa, bukan komponen.
function useEventListener(target, type, handler){ React.useEffect(()=>{ target.addEventListener(type, handler);
// Mulai blok render UI (JSX) dari komponen.
return ()=> target.removeEventListener(type, handler);
{/* Pernyataan JavaScript. */}
}, [target,type,handler]);
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [w,setW]=React.useState(window.innerWidth);
// Pernyataan JavaScript.
useEventListener(window,'resize', ()=> setW(window.innerWidth));
// Pernyataan JavaScript.
return <div className='card'>Lebar: {w}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
