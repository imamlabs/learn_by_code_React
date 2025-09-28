      // File: useReducer - Objek
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'reducer' — huruf kecil = fungsi biasa, bukan komponen.
function reducer(s, a){ if(a.type==='set'){ return {...s, [a.key]: a.value};
// Pernyataan JavaScript.
} return s;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [st,dispatch]=React.useReducer(reducer,{name:'Ana'});
// Mulai blok render UI (JSX) dari komponen.
return (<div className='card'><input onChange={e=>dispatch({type:'set',key:'name',value:e.target.value})} value={st.name}/><div>{st.name}</div></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
