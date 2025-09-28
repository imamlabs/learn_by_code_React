      // File: React Textarea - Counter
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [text,setText]=React.useState('');
// State teks
// Pernyataan JavaScript.
const max=50;
// Batas
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <textarea rows={3} value={text} onChange={e=>setText(e.target.value.slice(0,max))} />
    {/* Elemen JSX yang membangun UI. */}
    <p>{text.length}/{max}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
