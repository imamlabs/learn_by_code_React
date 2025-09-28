      // File: React CSS Styling - Inline style
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const st={padding:'10px',background:'#fff3cd'};
// Pernyataan JavaScript.
return <div style={st}>Inline style</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
