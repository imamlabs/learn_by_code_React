      // File: React Textarea - Uppercase transform
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [text,setText]=React.useState('');
// State
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <textarea rows={3} value={text} onChange={e=>setText(e.target.value)} />
    {/* Elemen JSX yang membangun UI. */}
    <p>{text.toUpperCase()}</p>                                      {/* Transform tampil */}
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
