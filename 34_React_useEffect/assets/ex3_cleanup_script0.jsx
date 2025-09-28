      // File: useEffect - Cleanup
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [show,setShow]=React.useState(true);
// Mulai blok render UI (JSX) dari komponen.
return (<div>{show && <Timer/>}<button onClick={()=>setShow(!show)}>Toggle</button></div>);
{/* Baris JavaScript. */}
}
{/* Definisi fungsi/komponen 'Timer' — huruf besar = komponen React. */}
function Timer(){ React.useEffect(()=>{ const id=setInterval(()=>console.log('tick'),500);
{/* Mengembalikan struktur UI (JSX) dari komponen. */}
return ()=> clearInterval(id);
{/* Pernyataan JavaScript. */}
}, []);
// Pernyataan JavaScript.
return <div className='card'>Timer</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
