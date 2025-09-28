      // File: React Sass - Konsep (CSS hasil kompilasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Di proyek nyata, SCSS dikompilasi jadi CSS. Di sini kita sisipkan CSS hasil kompilasi.
// Pernyataan JavaScript.
const css=document.createElement('style');
// Pernyataan JavaScript.
css.textContent='.btn{padding:8px 12px;border-radius:8px;background:#0d6efd;color:#fff}.btn--danger{background:#dc3545}';
// Pernyataan JavaScript.
document.head.appendChild(css);
// Mulai blok render UI (JSX) dari komponen.
function App(){ return (<div><button className='btn'>Primary</button> <button className='btn btn--danger'>Danger</button></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
