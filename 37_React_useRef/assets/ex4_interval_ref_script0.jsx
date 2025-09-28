      // File: useRef - Simpan id interval
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const id=React.useRef();
// Inisialisasi state lokal (nilai awal + updater).
const [n,setN]=React.useState(0);
// Definisi fungsi/komponen 'start' — huruf kecil = fungsi biasa, bukan komponen.
function start(){ if(id.current) return;
// Pernyataan JavaScript.
id.current=setInterval(()=> setN(x=>x+1), 300);
// Pernyataan JavaScript.
} function stop(){ clearInterval(id.current);
// Pernyataan JavaScript.
id.current=null;
// Baris JavaScript.
}
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className='card'><button onClick={start}>Start</button><button onClick={stop}>Stop</button> n={n}</div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
