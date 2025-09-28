      // File: React Sass - Mixins (hasil kompilasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const css=document.createElement('style');
// Pernyataan JavaScript.
css.textContent='.rounded{border-radius:10px}.shadow{box-shadow:0 2px 6px rgba(0,0,0,.1)}.box{padding:10px;border:1px solid #ddd}';
// Pernyataan JavaScript.
document.head.appendChild(css);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div className='box rounded shadow'>Kotak mixin</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
