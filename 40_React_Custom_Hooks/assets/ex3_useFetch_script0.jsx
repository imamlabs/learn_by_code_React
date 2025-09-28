      // File: Custom Hook - useFetch (sederhana)
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'useFetch' — huruf kecil = fungsi biasa, bukan komponen.
function useFetch(url){ const [data,setData]=React.useState('-');
// Efek samping setelah render (setup/cleanup).
React.useEffect(()=>{ let on=true;
// Pernyataan JavaScript.
fetch(url).then(r=>r.json()).then(j=> on && setData(JSON.stringify(j))).catch(()=> setData('Gagal/CORS'));
// Mulai blok render UI (JSX) dari komponen.
return ()=>{ on=false;
{/* Pernyataan JavaScript. */}
};
{/* Pernyataan JavaScript. */}
}, [url]);
// Pernyataan JavaScript.
return data;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const data=useFetch('https://httpbin.org/uuid');
// Pernyataan JavaScript.
return <pre className='card'>{data}</pre>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
