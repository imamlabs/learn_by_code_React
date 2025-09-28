      // File: useContext - Banyak context
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const A=React.createContext('A'), B=React.createContext('B');
// Mulai blok render UI (JSX) dari komponen.
function App(){ return (<A.Provider value='1'><B.Provider value='2'><Show/></B.Provider></A.Provider>);
{/* Baris JavaScript. */}
}
{/* Definisi fungsi/komponen 'Show' — huruf besar = komponen React. */}
function Show(){ const a=React.useContext(A), b=React.useContext(B);
// Pernyataan JavaScript.
return <div className='card'>A={a} B={b}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
