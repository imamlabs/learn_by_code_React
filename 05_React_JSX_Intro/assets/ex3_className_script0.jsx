      // File: React JSX Intro - className
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Fungsi panah yang disimpan ke konstanta.
const Box=()=> <div className="card">className bukan 'class'</div>;
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Box/>);
