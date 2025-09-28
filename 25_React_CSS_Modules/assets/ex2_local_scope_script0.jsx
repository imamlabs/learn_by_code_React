      // File: React CSS Modules - Scope lokal (simulasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const stylesA={title:'title_a1'}, stylesB={title:'title_b1'};
// Pernyataan JavaScript.
const style=document.createElement('style');
// Pernyataan JavaScript.
style.textContent='.title_a1{color:blue}.title_b1{color:green}';
// Pernyataan JavaScript.
document.head.appendChild(style);
// Definisi fungsi/komponen 'A' — huruf besar = komponen React.
function A(){ return <h3 className={stylesA.title}>A</h3>;
// Pernyataan JavaScript.
} function B(){ return <h3 className={stylesB.title}>B</h3>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<><A/><B/></>);
