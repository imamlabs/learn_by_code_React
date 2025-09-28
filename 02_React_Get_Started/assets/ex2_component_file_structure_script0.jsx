      // File: React Get Started - Struktur Komponen
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Header' — huruf besar = komponen React.
function Header(){ return <h2>Header</h2>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'Content' — huruf besar = komponen React.
function Content(){ return <p>Isi konten.</p>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'Footer' — huruf besar = komponen React.
function Footer(){ return <small>Footer</small>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div className="card"><Header/><Content/><Footer/></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
