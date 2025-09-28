      // File: React Events - onChange
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [v,setV]=React.useState('');
// Pernyataan JavaScript.
return <div className="card"><input value={v} onChange={e=>setV(e.target.value)} placeholder="ketik..."/><p>{v}</p></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
