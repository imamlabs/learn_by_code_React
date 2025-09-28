      // File: React Suspense - Lazy Komponen
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const LazyBox = React.lazy(()=> new Promise(res=> setTimeout(()=> res({ default: ()=> <div className='card'>Saya dimuat malas (lazy)</div> }), 600)));
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
  // Mulai blok render UI (JSX) dari komponen.
  return (<React.Suspense fallback={<div>Memuat…</div>}>
    {/* Elemen JSX yang membangun UI. */}
    <LazyBox/> {/* Komponen akan muncul setelah 600ms */}
  {/* Elemen JSX yang membangun UI. */}
  </React.Suspense>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
