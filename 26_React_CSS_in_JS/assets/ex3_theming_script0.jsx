      // File: React CSS-in-JS - Theming
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const ThemeCtx=React.createContext('#0d6efd');
// Definisi fungsi/komponen 'Box' — huruf besar = komponen React.
function Box(){ const color=React.useContext(ThemeCtx);
// Pernyataan JavaScript.
return <div className='card' style={{borderColor:color}}>Tema: {color}</div>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [c,setC]=React.useState('#0d6efd');
// Mulai blok render UI (JSX) dari komponen.
return (<ThemeCtx.Provider value={c}><input type='color' value={c} onChange={e=>setC(e.target.value)}/><Box/></ThemeCtx.Provider>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
