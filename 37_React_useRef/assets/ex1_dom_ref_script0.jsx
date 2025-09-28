      // File: useRef - DOM ref
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const r=React.useRef();
// Mulai blok render UI (JSX) dari komponen.
return (<div className='card'><input ref={r}/><button onClick={()=>r.current.focus()}>Fokus</button></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
