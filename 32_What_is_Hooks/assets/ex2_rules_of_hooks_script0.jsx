      // File: Hooks - Aturan pemakaian
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ // Hook harus di top-level komponen
// Inisialisasi state lokal (nilai awal + updater).
const [x]=React.useState(1);
// Contoh hook
  // Pernyataan JavaScript.
  return <div className='card'>Hook selalu dipanggil pada urutan yang sama.</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
