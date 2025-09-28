      // File: React Suspense - Bersarang
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Slow = React.lazy(()=> new Promise(r=> setTimeout(()=> r({default:()=> <div className='card'>Lambat</div>}), 900)));
// Pernyataan JavaScript.
const Fast = React.lazy(()=> new Promise(r=> setTimeout(()=> r({default:()=> <div className='card'>Cepat</div>}), 300)));
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
  // Mulai blok render UI (JSX) dari komponen.
  return (<React.Suspense fallback={<div>App loading…</div>}>
    {/* Elemen JSX yang membangun UI. */}
    <React.Suspense fallback={<div>Bagian cepat…</div>}><Fast/></React.Suspense>
    {/* Elemen JSX yang membangun UI. */}
    <React.Suspense fallback={<div>Bagian lambat…</div>}><Slow/></React.Suspense>
  {/* Elemen JSX yang membangun UI. */}
  </React.Suspense>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
