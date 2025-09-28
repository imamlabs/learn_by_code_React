      // File: React JSX If - &&
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Pernyataan JavaScript.
const show=true;
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<div>{show && <b>Muncul jika true</b>}</div>);
