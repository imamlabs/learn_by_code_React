      // File: Props Destructuring - Dalam Fungsi
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'User' — huruf besar = komponen React.
function User(props){ const {name,city} = props;
// Pernyataan JavaScript.
return <p>{name} - {city}</p>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<User name="Imam" city="Tangerang"/>);
