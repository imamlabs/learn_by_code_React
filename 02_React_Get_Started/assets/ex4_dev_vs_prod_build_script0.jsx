      // File: React Get Started - Dev vs Prod
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div>Mode pengembangan (dev)</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
