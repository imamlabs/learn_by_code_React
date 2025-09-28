      // File: React Sass - Nesting (hasil kompilasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const css=document.createElement('style');
// Pernyataan JavaScript.
css.textContent='.card .title{font-weight:700}.card .body{color:#555}';
// Pernyataan JavaScript.
document.head.appendChild(css);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div className='card'><div className='title'>Judul</div><div className='body'>Isi</div></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
