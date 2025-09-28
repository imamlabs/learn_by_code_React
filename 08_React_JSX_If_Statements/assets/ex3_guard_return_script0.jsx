      // File: React JSX If - Guard Return
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Panel' — huruf besar = komponen React.
function Panel({ok}){ if(!ok) return null;
// Pernyataan JavaScript.
return <div className="card">Tampil</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Panel ok={true}/>);
