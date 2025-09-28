      // File: React HOC - Logger
      // Catatan: JSX dieksekusi oleh Babel.

// Definisi fungsi/komponen 'withLogger' — huruf kecil = fungsi biasa, bukan komponen.
function withLogger(Component){ return function Wrapped(props){ console.log('Render', Component.name, props);
// Pernyataan JavaScript.
return <Component {...props}/>;
// Baris JavaScript.
} }
// Definisi fungsi/komponen 'Hello' — huruf besar = komponen React.
function Hello({name}){ return <div className='card'>Halo {name}</div>;
// Baris JavaScript.
}
// Pernyataan JavaScript.
const HelloLogged = withLogger(Hello);
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<HelloLogged name='Imam'/>);
