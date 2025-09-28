      // File: React Suspense - Pola data (simulasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'createResource' — huruf kecil = fungsi biasa, bukan komponen.
function createResource(){ // Simulasi resource yang 'throw promise'
  // Pernyataan JavaScript.
  let status='pending', result;
// Pernyataan JavaScript.
const suspender = new Promise(res=> setTimeout(()=> { status='success';
// Pernyataan JavaScript.
result='Data siap';
// Pernyataan JavaScript.
res();
// Pernyataan JavaScript.
},700));
// Pernyataan JavaScript.
return { read(){ if(status==='pending') throw suspender;
// Pernyataan JavaScript.
if(status==='error') throw result;
// Pernyataan JavaScript.
return result;
// Pernyataan JavaScript.
} };
// Baris JavaScript.
}
// Pernyataan JavaScript.
const resource = createResource();
// Definisi fungsi/komponen 'Data' — huruf besar = komponen React.
function Data(){ const d = resource.read();
// Pernyataan JavaScript.
return <div className='card'>{d}</div>;
// Baris JavaScript.
}
// Mulai blok render UI (JSX) dari komponen.
function App(){ return (<React.Suspense fallback={<div>Memuat data…</div>}><Data/></React.Suspense>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
