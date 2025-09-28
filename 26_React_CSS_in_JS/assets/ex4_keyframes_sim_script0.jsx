      // File: React CSS-in-JS - Keyframes (simulasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const spin={animation:'spin 1s linear infinite'};
// Pernyataan JavaScript.
const css=document.createElement('style');
// Pernyataan JavaScript.
css.textContent='@keyframes spin{to{transform:rotate(360deg)}}';
// Pernyataan JavaScript.
document.head.appendChild(css);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div style={{display:'inline-block',...spin}}>⟳</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
