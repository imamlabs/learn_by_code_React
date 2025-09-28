      // File: useEffect - Dependency array
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [n,setN]=React.useState(0);
// Efek samping setelah render (setup/cleanup).
React.useEffect(()=> { console.log('jalan sekali');
// Pernyataan JavaScript.
}, []);
// Pernyataan JavaScript.
return <button onClick={()=>setN(n+1)}>n={n}</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
