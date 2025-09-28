      // File: React Forward Ref - Dengan Portal
      // Catatan: JSX dieksekusi oleh Babel.

// Ambil elemen DOM berdasarkan id.
function PortalInput(props){ const el=document.getElementById('modal-root');
// Pernyataan JavaScript.
const Comp = React.forwardRef((p,ref)=> <input ref={ref} {...p}/>);
// Pernyataan JavaScript.
return ReactDOM.createPortal(<Comp {...props}/>, el);
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const r=React.useRef();
// Pernyataan JavaScript.
const rootEl=document.createElement('div');
// Pernyataan JavaScript.
rootEl.id='modal-root';
// Pernyataan JavaScript.
document.body.appendChild(rootEl);
// Mulai blok render UI (JSX) dari komponen.
return (<div className='card'><PortalInput ref={r} placeholder='input di portal'/><button onClick={()=>r.current && r.current.focus()}>Fokus</button></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
