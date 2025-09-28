      // File: React Sass - Variabel (pakai CSS var)
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const css=document.createElement('style');
// Pernyataan JavaScript.
css.textContent=':root{--brand:#0d6efd}.btn{background:var(--brand);padding:8px 12px;border-radius:8px;color:#fff}';
// Pernyataan JavaScript.
document.head.appendChild(css);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <button className='btn'>Tombol tema</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
