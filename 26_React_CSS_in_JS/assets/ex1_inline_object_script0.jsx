      // File: React CSS-in-JS - Objek style
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const btn={background:'#198754',padding:'8px 12px',borderRadius:'8px',color:'#fff'};
// Pernyataan JavaScript.
return <button style={btn}>Button</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
