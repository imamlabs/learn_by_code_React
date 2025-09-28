      // File: React Components - Penamaan
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'good' — huruf kecil = fungsi biasa, bukan komponen.
function good(){ return <div>tidak dirender</div>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'Good' — huruf besar = komponen React.
function Good(){ return <div>Komponen Huruf Besar</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Good/>);
