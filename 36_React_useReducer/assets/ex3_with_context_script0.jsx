      // File: useReducer - + Context
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const Ctx=React.createContext(null);
// Definisi fungsi/komponen 'reducer' — huruf kecil = fungsi biasa, bukan komponen.
function reducer(s,a){ if(a==='inc') return s+1;
// Pernyataan JavaScript.
return s;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const val=React.useReducer(reducer,0);
// Mulai blok render UI (JSX) dari komponen.
return (<Ctx.Provider value={val}><Child/></Ctx.Provider>);
{/* Baris JavaScript. */}
}
{/* Definisi fungsi/komponen 'Child' — huruf besar = komponen React. */}
function Child(){ const [n,dispatch]=React.useContext(Ctx);
// Pernyataan JavaScript.
return <button onClick={()=>dispatch('inc')}>n={n}</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
