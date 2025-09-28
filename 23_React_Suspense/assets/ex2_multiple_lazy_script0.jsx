      // File: React Suspense - Banyak Lazy
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const A = React.lazy(()=> new Promise(r=> setTimeout(()=> r({default:()=> <div className='card'>A</div>}), 400)));
// Pernyataan JavaScript.
const B = React.lazy(()=> new Promise(r=> setTimeout(()=> r({default:()=> <div className='card'>B</div>}), 800)));
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
  // Mulai blok render UI (JSX) dari komponen.
  return (<React.Suspense fallback={<div>Loading…</div>}>
    {/* Elemen JSX yang membangun UI. */}
    <A/><B/>
  {/* Elemen JSX yang membangun UI. */}
  </React.Suspense>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
