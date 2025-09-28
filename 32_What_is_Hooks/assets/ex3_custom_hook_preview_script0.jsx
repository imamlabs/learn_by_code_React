      // File: Hooks - Gambaran custom hook
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'useCounter' — huruf kecil = fungsi biasa, bukan komponen.
function useCounter(){ const [c,setC]=React.useState(0);
// Fungsi panah yang disimpan ke konstanta.
const inc=()=>setC(c+1);
// Pernyataan JavaScript.
return {c,inc};
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const {c,inc}=useCounter();
// Pernyataan JavaScript.
return <button onClick={inc}>c={c}</button>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
