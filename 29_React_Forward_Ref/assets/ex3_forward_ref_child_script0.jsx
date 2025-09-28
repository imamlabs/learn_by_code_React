      // File: React Forward Ref - Chain
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Child = React.forwardRef((props, ref)=> <input ref={ref} placeholder='child'/>);
// Definisi fungsi/komponen 'Parent' — huruf besar = komponen React.
function Parent(){ const r=React.useRef();
// Mulai blok render UI (JSX) dari komponen.
return (<div className='card'><Child ref={r}/><button onClick={()=>r.current.select()}>Select</button></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Parent/>);
