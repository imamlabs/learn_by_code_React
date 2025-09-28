      // File: React Portals - Event bubbling
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Ambil elemen DOM berdasarkan id.
function PortalButton(){ const el=document.getElementById('modal-root');
// Target portal
// Pernyataan JavaScript.
return ReactDOM.createPortal(<button id="pbtn">Tombol di Portal</button>, el);
// Render tombol di portal
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ function handleClick(e){ alert('Bubbling ke App: '+e.target.id);
// Baris JavaScript.
} // Event di parent
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card" onClick={handleClick}>
    {/* Elemen JSX yang membangun UI. */}
    <PortalButton/>                                                   {/* Meski di portal, bubbling tetap */}
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
