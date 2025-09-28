      // File: useContext - Update nilai
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Theme=React.createContext('light');
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [t,setT]=React.useState('light');
// Mulai blok render UI (JSX) dari komponen.
return (<Theme.Provider value={t}><button onClick={()=>setT(t==='light'?'dark':'light')}>Toggle</button><Child/></Theme.Provider>);
{/* Baris JavaScript. */}
}
{/* Definisi fungsi/komponen 'Child' — huruf besar = komponen React. */}
function Child(){ const t=React.useContext(Theme);
// Pernyataan JavaScript.
return <div className='card'>Tema: {t}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
