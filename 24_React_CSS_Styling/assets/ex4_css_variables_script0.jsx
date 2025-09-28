      // File: React CSS Styling - CSS Variables
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [c,setC]=React.useState('#0d6efd');
// Mulai blok render UI (JSX) dari komponen.
return (<div style={{'--c':c}}>
  {/* Elemen JSX yang membangun UI. */}
  <input type='color' value={c} onChange={e=>setC(e.target.value)}/>
  {/* Elemen JSX yang membangun UI. */}
  <div className='card' style={{background:'var(--c)', color:'#fff'}}>Box pakai var(--c)</div>
{/* Elemen JSX yang membangun UI. */}
</div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
