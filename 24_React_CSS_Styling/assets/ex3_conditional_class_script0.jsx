      // File: React CSS Styling - Kondisional class
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [ok,setOk]=React.useState(true);
// Mulai blok render UI (JSX) dari komponen.
return (<div>
  {/* Elemen JSX yang membangun UI. */}
  <button onClick={()=>setOk(!ok)}>Toggle</button>
  {/* Elemen JSX yang membangun UI. */}
  <div className={'card '+(ok?'':'hidden')+' fade'}>Muncul/Hilang (CSS transition)</div>
{/* Elemen JSX yang membangun UI. */}
</div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
