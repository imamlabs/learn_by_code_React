      // File: React First App - Komponen Fungsi
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Hello' — huruf besar = komponen React.
function Hello(props){ return <p>Halo {props.name}</p>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div className="card"><Hello name="Imam"/><Hello name="Fauzy"/></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
