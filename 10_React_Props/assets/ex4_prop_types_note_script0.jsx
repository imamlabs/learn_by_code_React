      // File: React Props - Catatan
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Note' — huruf besar = komponen React.
function Note({text}){ return <div>{text}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Note text="Contoh props"/>);
