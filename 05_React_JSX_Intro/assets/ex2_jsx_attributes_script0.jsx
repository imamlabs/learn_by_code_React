      // File: React JSX Intro - Atribut
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<img alt="kucing" src="https://placekitten.com/200/120"/>);
