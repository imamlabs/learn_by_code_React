      // File: React Textarea - JSON Preview
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [text,setText]=React.useState('{\"name\":\"Imam\"}');
// JSON string
// Pernyataan JavaScript.
let parsed;
// Pernyataan JavaScript.
try{ parsed=JSON.parse(text);
// Pernyataan JavaScript.
}catch{ parsed='Bukan JSON';
// Baris JavaScript.
}     // Coba parse
  // Mulai blok render UI (JSX) dari komponen.
  return (<div className="card">
    {/* Elemen JSX yang membangun UI. */}
    <textarea rows={4} value={text} onChange={e=>setText(e.target.value)} />
    {/* Elemen JSX yang membangun UI. */}
    <pre>{typeof parsed==='string'?parsed:JSON.stringify(parsed,null,2)}</pre>
  {/* Elemen JSX yang membangun UI. */}
  </div>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
