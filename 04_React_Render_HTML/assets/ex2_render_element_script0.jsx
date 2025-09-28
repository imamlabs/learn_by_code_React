      // File: React Render HTML - Render Elemen
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Pernyataan JavaScript.
const el=<h2>Elemen H2</h2>;
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(el);
