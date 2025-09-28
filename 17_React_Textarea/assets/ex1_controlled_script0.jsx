      // File: React Textarea - Controlled
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [text,setText]=React.useState('Halo\nReact');
// Multi-line default
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <textarea rows={4} value={text} onChange={e=>setText(e.target.value)} />
    {/* Elemen JSX yang membangun UI. */}
    <p>Baris: {text.split('\n').length}</p>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
