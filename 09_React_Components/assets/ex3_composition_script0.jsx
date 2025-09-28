      // File: React Components - Composition
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Card' — huruf besar = komponen React.
function Card({title, children}){ return <div className="card"><h3>{title}</h3>{children}</div>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <Card title="Judul"><p>Isi konten</p></Card>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
