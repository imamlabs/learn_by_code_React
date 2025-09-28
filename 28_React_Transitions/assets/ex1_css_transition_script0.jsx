      // File: React Transitions - CSS transition
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [show,setShow]=React.useState(true);
// Mulai blok render UI (JSX) dari komponen.
return (<div><button onClick={()=>setShow(!show)}>Toggle</button><div className={'card fade '+(show?'':'hidden')}>Box transisi</div></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
