      // File: React Events - onClick
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ function handle(){ alert('diklik');
// Pernyataan JavaScript.
} return <button onClick={handle}>Klik</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
