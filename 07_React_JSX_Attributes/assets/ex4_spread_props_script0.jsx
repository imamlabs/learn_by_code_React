      // File: React JSX Attributes - Spread
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Pernyataan JavaScript.
const props={alt:'foto', src:'https://placekitten.com/120/80'};
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<img {...props}/>);
