      // File: useState - Objek
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [user,setUser]=React.useState({name:'Ana',age:20});
// Definisi fungsi/komponen 'inc' — huruf kecil = fungsi biasa, bukan komponen.
function inc(){ setUser({...user, age:user.age+1});
// Baris JavaScript.
}
  // Pernyataan JavaScript.
  return <div className='card'><p>{user.name} ({user.age})</p><button onClick={inc}>+age</button></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
