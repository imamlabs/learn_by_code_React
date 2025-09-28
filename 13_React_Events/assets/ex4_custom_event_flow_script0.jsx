      // File: React Events - Callback dari Child
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Child' — huruf besar = komponen React.
function Child({onPing}){ return <button onClick={()=>onPing('ping!')}>Ping</button>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [msg,setMsg]=React.useState('-');
// Pernyataan JavaScript.
return <div className="card"><Child onPing={setMsg}/><p>{msg}</p></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
