      // File: React JSX Expressions - map()
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Pernyataan JavaScript.
const list=['a','b','c'];
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<ul>{list.map(x=> <li key={x}>{x}</li>)}</ul>);
