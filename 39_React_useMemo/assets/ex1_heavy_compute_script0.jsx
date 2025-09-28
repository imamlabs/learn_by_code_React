      // File: useMemo - Komputasi berat
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'heavy' — huruf kecil = fungsi biasa, bukan komponen.
function heavy(n){ let s=0;
// Pernyataan JavaScript.
for(let i=0;
// Pernyataan JavaScript.
i<1e6;
// Pernyataan JavaScript.
i++) s+=i%3;
// Pernyataan JavaScript.
return s+n;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [n,setN]=React.useState(0);
// Pernyataan JavaScript.
const val=React.useMemo(()=> heavy(n), [n]);
// Pernyataan JavaScript.
return <div className='card'><button onClick={()=>setN(n+1)}>n={n}</button> val={val}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
