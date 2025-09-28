      // File: React Portals - Dasar
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'Modal' — huruf besar = komponen React.
function Modal({children}){                               // Komponen Modal
// Ambil elemen DOM berdasarkan id.
const el = document.getElementById('modal-root');
// Tempat render di luar hirarki
// Pernyataan JavaScript.
return ReactDOM.createPortal(children, el);
// Buat portal
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){                                           // Komponen App
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <div>Konten utama</div>
    {/* Elemen JSX yang membangun UI. */}
    <Modal><div className="card" style={{background:'#fff3cd'}}>Ini di portal</div></Modal> {/* Render di #modal-root */}
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Pernyataan JavaScript.
const rootEl = document.createElement('div');
// Pernyataan JavaScript.
rootEl.id='modal-root';
// Pernyataan JavaScript.
document.body.appendChild(rootEl);
// Siapkan target portal
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
