      // File: React HOC - Forward props
      // Catatan: JSX dieksekusi oleh Babel.

// Fungsi panah yang disimpan ke konstanta.
const withTitle = (Comp)=> (props)=> <div><h3>{props.title}</h3><Comp {...props}/></div>;
// Definisi fungsi/komponen 'Box' — huruf besar = komponen React.
function Box({text}){ return <div className='card'>{text}</div>;
// Baris JavaScript.
}
// Pernyataan JavaScript.
const BoxT = withTitle(Box);
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<BoxT title='Judul' text='Isi'/>);
