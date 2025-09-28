      // File: useEffect - Fetch data
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [data,setData]=React.useState('-');
// Efek samping setelah render (setup/cleanup).
React.useEffect(()=>{ fetch('https://httpbin.org/uuid').then(r=>r.json()).then(j=> setData(j.uuid)).catch(()=> setData('Gagal/CORS'));
// Pernyataan JavaScript.
}, []);
// Pernyataan JavaScript.
return <div className='card'>UUID: {data}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
