      // File: Props Destructuring - Argumen
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'User' — huruf besar = komponen React.
function User({name, city}){ return <p>{name} - {city}</p>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<User name="Imam" city="Tangerang"/>);
