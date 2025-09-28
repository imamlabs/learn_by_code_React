      // File: React CSS Modules - Compose (simulasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const styles={a:'a1',b:'b1'};
// Pernyataan JavaScript.
const css=document.createElement('style');
// Pernyataan JavaScript.
css.textContent='.a1{padding:8px}.b1{background:#eef}';
// Pernyataan JavaScript.
document.head.appendChild(css);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div className={styles.a+' '+styles.b}>Gabung dua class</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
