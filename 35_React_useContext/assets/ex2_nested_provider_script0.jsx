      // File: useContext - Provider bersarang
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Theme=React.createContext('light');
// Mulai blok render UI (JSX) dari komponen.
function App(){ return (<Theme.Provider value='dark'><Theme.Provider value='blue'><Child/></Theme.Provider></Theme.Provider>);
{/* Baris JavaScript. */}
}
{/* Definisi fungsi/komponen 'Child' — huruf besar = komponen React. */}
function Child(){ return <div className='card'>Tema: {React.useContext(Theme)}</div>;
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
