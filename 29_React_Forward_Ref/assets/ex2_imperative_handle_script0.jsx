      // File: React Forward Ref - useImperativeHandle
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Fancy = React.forwardRef((props, ref)=>{ const local=React.useRef();
// Pernyataan JavaScript.
React.useImperativeHandle(ref, ()=> ({ focus: ()=> local.current.focus() }));
// Pernyataan JavaScript.
return <input ref={local} {...props}/>;
// Pernyataan JavaScript.
});
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const r=React.useRef();
// Mulai blok render UI (JSX) dari komponen.
return (<div className='card'><Fancy ref={r}/><button onClick={()=>r.current.focus()}>Fokus via handle</button></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
