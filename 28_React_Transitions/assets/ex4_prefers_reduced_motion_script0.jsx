      // File: React Transitions - Reduced motion
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const css=document.createElement('style');
// Pernyataan JavaScript.
css.textContent='@media (prefers-reduced-motion: reduce){ .fade{transition:none} }';
// Pernyataan JavaScript.
document.head.appendChild(css);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [show,setShow]=React.useState(true);
// Mulai blok render UI (JSX) dari komponen.
return (<div><button onClick={()=>setShow(!show)}>Toggle</button><div className={'card fade '+(show?'':'hidden')}>Transisi hormati prefers-reduced-motion</div></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
