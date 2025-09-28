      // File: React JSX If - Fungsi bantu
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Info' — huruf besar = komponen React.
function Info({n}){ const msg=()=> (n>0?'Positif':'Non-positif');
// Pernyataan JavaScript.
return <div>{msg()}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Info n={1}/>);
