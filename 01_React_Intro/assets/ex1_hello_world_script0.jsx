      // File: React Intro - Hello World
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
  // Mulai blok render UI (JSX) dari komponen.
  return (
    {/* Elemen JSX yang membangun UI. */}
    <div className="card">
      {/* Elemen JSX yang membangun UI. */}
      <h2>Halo, React!</h2>
      {/* Elemen JSX yang membangun UI. */}
      <p>Ini contoh Hello World.</p>
    {/* Elemen JSX yang membangun UI. */}
    </div>
  {/* Pernyataan JavaScript. */}
  );
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
