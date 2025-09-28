      // File: React JSX Expressions - Ternary
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Pernyataan JavaScript.
const ok=true;
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<div>{ok?'YES':'NO'}</div>);
