      // File: Custom Hook - useLocalStorage
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'useLocalStorage' — huruf kecil = fungsi biasa, bukan komponen.
function useLocalStorage(key, initial){ const [v,setV]=React.useState(()=> JSON.parse(localStorage.getItem(key)) ?? initial);
// Efek samping setelah render (setup/cleanup).
React.useEffect(()=> localStorage.setItem(key, JSON.stringify(v)), [key,v]);
// Pernyataan JavaScript.
return [v,setV];
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [name,setName]=useLocalStorage('name','');
// Pernyataan JavaScript.
return <input value={name} onChange={e=>setName(e.target.value)} placeholder='nama tersimpan'/>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
