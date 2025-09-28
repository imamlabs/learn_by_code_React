      // File: React JSX Attributes - HTML Attr
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<input placeholder="Isi sesuatu" maxLength={10}/>);
