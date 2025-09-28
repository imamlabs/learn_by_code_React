      // File: React Render HTML - Render Komponen
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Hello' — huruf besar = komponen React.
function Hello(){ return <div>Halo</div>;
// Membuat root React 18 (entry point render).
} const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Hello/>);
