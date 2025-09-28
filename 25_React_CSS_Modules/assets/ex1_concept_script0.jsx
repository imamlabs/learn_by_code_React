      // File: React CSS Modules - Konsep (simulasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const styles = { box: 'box_abc123' };
// Simulasi hash class
// Pernyataan JavaScript.
const style = document.createElement('style');
// Pernyataan JavaScript.
style.textContent='.box_abc123{border:2px dashed #0d6efd;padding:10px;border-radius:8px}';
// Pernyataan JavaScript.
document.head.appendChild(style);
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div className={styles.box}>Class aman bentrok (simulasi)</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
