      // File: React JSX Attributes - style
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Pernyataan JavaScript.
const style={padding:'10px', border:'1px solid #ddd'};
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<div style={style}>Kotak</div>);
