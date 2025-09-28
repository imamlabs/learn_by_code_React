      // File: React Lists - map() dasar
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){                                   // Komponen utama
// Pernyataan JavaScript.
const items = ['Satu','Dua','Tiga'];
// Array data
  // Mulai blok render UI (JSX) dari komponen.
  return (                                         // Kembalikan elemen
    {/* Elemen JSX yang membangun UI. */}
    <ul>                                           {/* Daftar tak berurutan */}
{/* Pernyataan JavaScript. */}
{items.map((x,i)=> <li key={i}>{x}</li>)}    {/* map -> li;
{/* Baris JavaScript. */}
key pakai index (untuk demo) */}
    {/* Elemen JSX yang membangun UI. */}
    </ul>
  {/* Pernyataan JavaScript. */}
  );
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// createRoot
// Pernyataan JavaScript.
root.render(<App/>);
// Render
