      // File: useReducer - Counter
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'reducer' — huruf kecil = fungsi biasa, bukan komponen.
function reducer(state, action){ switch(action){ case 'inc': return state+1;
// Pernyataan JavaScript.
case 'dec': return state-1;
// Pernyataan JavaScript.
default: return state;
// Baris JavaScript.
} }
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [n, dispatch] = React.useReducer(reducer, 0);
// Pernyataan JavaScript.
return <div className='card'><button onClick={()=>dispatch('dec')}>-</button> {n} <button onClick={()=>dispatch('inc')}>+</button></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
