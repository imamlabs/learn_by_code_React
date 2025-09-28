      // File: useMemo - Derivasi dari props
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [q,setQ]=React.useState('');
// Pernyataan JavaScript.
const list=['react','redux','router'];
// Pernyataan JavaScript.
const filtered=React.useMemo(()=> list.filter(x=> x.includes(q)), [q]);
// Mulai blok render UI (JSX) dari komponen.
return (<div className='card'><input value={q} onChange={e=>setQ(e.target.value)}/><div>{filtered.join(', ')}</div></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
