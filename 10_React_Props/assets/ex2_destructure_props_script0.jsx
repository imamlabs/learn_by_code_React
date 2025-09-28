      // File: React Props - Destructuring
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Hello' — huruf besar = komponen React.
function Hello({name,age}){ return <p>{name} ({age})</p>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Hello name="Imam" age={30}/>);
