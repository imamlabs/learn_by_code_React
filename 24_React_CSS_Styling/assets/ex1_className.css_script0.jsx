      // File: React CSS Styling - className
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div className='card special'>Kotak dengan className</div>;
// Baris JavaScript.
}
// Pernyataan JavaScript.
const style = document.createElement('style');
// Pernyataan JavaScript.
style.textContent = '.special{background:#eef}';
// Pernyataan JavaScript.
document.head.appendChild(style);
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
