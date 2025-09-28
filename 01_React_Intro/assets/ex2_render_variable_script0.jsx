      // File: React Intro - Render Variabel
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
  // Pernyataan JavaScript.
  const name = "Imam";
  // Pernyataan JavaScript.
  const year = new Date().getFullYear();
  // Pernyataan JavaScript.
  return <div className="card">Nama: {name} — Tahun: {year}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
