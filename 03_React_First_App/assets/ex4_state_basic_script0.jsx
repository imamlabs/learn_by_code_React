      // File: React First App - State Dasar
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [count,setCount]=React.useState(0);
  // Pernyataan JavaScript.
  return <div className="card"><p>Count: {count}</p><button onClick={()=>setCount(count+1)}>Tambah</button></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
