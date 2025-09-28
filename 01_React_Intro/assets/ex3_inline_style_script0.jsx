      // File: React Intro - Inline Style
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
  // Pernyataan JavaScript.
  const box = {padding:'10px', border:'1px solid #ccc', borderRadius:'8px'};
  // Pernyataan JavaScript.
  return <div style={box}>Box inline style</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
