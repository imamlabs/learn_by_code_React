      // File: React Router - 404
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const {BrowserRouter, Routes, Route} = ReactRouterDOM;
// Definisi fungsi/komponen 'NotFound' — huruf besar = komponen React.
function NotFound(){ return <div className='card'>404 - Tidak ditemukan</div>;
// Baris JavaScript.
}
// Mulai blok render UI (JSX) dari komponen.
function App(){ return (<BrowserRouter><Routes><Route path='*' element={<NotFound/>}/></Routes></BrowserRouter>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
