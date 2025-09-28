      // File: React Transitions - Status loading
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [loading,setLoading]=React.useState(false);
// Definisi fungsi/komponen 'fake' — huruf kecil = fungsi biasa, bukan komponen.
function fake(){ setLoading(true);
// Pernyataan JavaScript.
setTimeout(()=> setLoading(false),600);
// Baris JavaScript.
}
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className='card'><button onClick={fake} disabled={loading}>{loading?'Memproses…':'Proses'}</button></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
