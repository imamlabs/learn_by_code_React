      // File: React HOC - memo
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Fast = React.memo(function Fast({n}){ console.log('render Fast');
// Pernyataan JavaScript.
return <div className='card'>n={n}</div>;
// Pernyataan JavaScript.
});
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [c,setC]=React.useState(0);
// Mulai blok render UI (JSX) dari komponen.
return (<div><button onClick={()=>setC(c+1)}>+1</button><Fast n={0}/></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
