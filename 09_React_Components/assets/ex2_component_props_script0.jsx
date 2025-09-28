      // File: React Components - Props
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Hello' — huruf besar = komponen React.
function Hello({name}){ return <p>Halo {name}</p>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<><Hello name="A"/><Hello name="B"/></>);
