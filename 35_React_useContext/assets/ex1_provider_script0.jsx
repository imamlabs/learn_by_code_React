      // File: useContext - Provider
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Theme=React.createContext('light');
// Definisi fungsi/komponen 'Child' — huruf besar = komponen React.
function Child(){ const t=React.useContext(Theme);
// Pernyataan JavaScript.
return <div className='card'>Tema: {t}</div>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <Theme.Provider value='dark'><Child/></Theme.Provider>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
