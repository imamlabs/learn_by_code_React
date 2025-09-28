      // File: React Intro - Fragment
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
  // Mulai blok render UI (JSX) dari komponen.
  return (<>
    {/* Elemen JSX yang membangun UI. */}
    <h2>Satu</h2>
    {/* Elemen JSX yang membangun UI. */}
    <h3>Dua</h3>
  {/* Elemen JSX yang membangun UI. */}
  </>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
