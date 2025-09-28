      // File: Props Children - Dasar
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Panel' — huruf besar = komponen React.
function Panel({children}){ return <div className="card">{children}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Panel><b>Isi via children</b></Panel>);
