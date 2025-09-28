      // File: React JSX Expressions - Fungsi
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

      // Pernyataan JavaScript.
      const greet=n=>`Halo ${n}`; 
      // Membuat root React 18 (entry point render).
      const root=ReactDOM.createRoot(document.getElementById('root')); 
      // Pernyataan JavaScript.
      root.render(<div>{greet('Imam')}</div>);
