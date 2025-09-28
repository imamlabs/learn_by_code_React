      // File: React Render HTML - Render Array
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Pernyataan JavaScript.
const arr=[<li key="a">A</li>,<li key="b">B</li>];
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<ul>{arr}</ul>);
