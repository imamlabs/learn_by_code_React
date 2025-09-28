      // File: React CSS Modules - Dinamis (simulasi)
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'makeClass' — huruf kecil = fungsi biasa, bukan komponen.
function makeClass(color){ const name='c'+color.replace('#','');
// Pernyataan JavaScript.
const st=document.createElement('style');
// Pernyataan JavaScript.
st.textContent='.'+name+'{background:'+color+';padding:8px;border-radius:8px}';
// Pernyataan JavaScript.
document.head.appendChild(st);
// Pernyataan JavaScript.
return name;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const [c,setC]=React.useState('#ffe0e0');
// Pernyataan JavaScript.
const cls=makeClass(c);
// Mulai blok render UI (JSX) dari komponen.
return (<div><input type='color' value={c} onChange={e=>setC(e.target.value)}/><div className={cls}>Warna dinamis</div></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
