      // File: useReducer - Lazy init
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'init' — huruf kecil = fungsi biasa, bukan komponen.
function init(x){ return {count:x};
// Pernyataan JavaScript.
} function reducer(s,a){ switch(a.type){case 'inc': return {count:s.count+1};
// Pernyataan JavaScript.
default: return s;
// Baris JavaScript.
} }
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [state,dispatch]=React.useReducer(reducer, 0, init);
// Pernyataan JavaScript.
return <button onClick={()=>dispatch({type:'inc'})}>count={state.count}</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
