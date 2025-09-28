      // File: React Portals - Modal toggle
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'Modal' — huruf besar = komponen React.
function Modal({open,onClose,children}){ if(!open) return null;
// Ambil elemen DOM berdasarkan id.
const el=document.getElementById('modal-root');
// Jika tidak open, tidak render
  // Baris JavaScript.
  return ReactDOM.createPortal(                               // Portal
    // Elemen JSX yang membangun UI.
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.3)'}} onClick={onClose}>
      // Elemen JSX yang membangun UI.
      <div className="card" style={{margin:'10% auto',width:300,background:'#fff'}} onClick={e=>e.stopPropagation()}>
        // Baris JavaScript.
        {children}
        // Elemen JSX yang membangun UI.
        <button onClick={onClose}>Tutup</button>
      // Elemen JSX yang membangun UI.
      </div>
    // Elemen JSX yang membangun UI.
    </div>, el);
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [open,setOpen]=React.useState(false);
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <button onClick={()=>setOpen(true)}>Buka Modal</button>
    {/* Elemen JSX yang membangun UI. */}
    <Modal open={open} onClose={()=>setOpen(false)}><b>Halo dari Modal</b></Modal>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Pernyataan JavaScript.
const rootEl=document.createElement('div');
// Pernyataan JavaScript.
rootEl.id='modal-root';
// Pernyataan JavaScript.
document.body.appendChild(rootEl);
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
