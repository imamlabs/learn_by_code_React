      // File: React Forward Ref - Dasar
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Input = React.forwardRef((props, ref)=> <input ref={ref} {...props}/>);
// Teruskan ref ke input
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const r=React.useRef();
// Mulai blok render UI (JSX) dari komponen.
return (<div className='card'><Input ref={r} placeholder='klik tombol untuk fokus'/><button onClick={()=>r.current.focus()}>Fokus</button></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
