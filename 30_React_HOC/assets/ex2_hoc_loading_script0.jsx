      // File: React HOC - WithLoading
      // Catatan: JSX dieksekusi oleh Babel.

// Fungsi panah yang disimpan ke konstanta.
const withLoading = (Comp)=> (props)=> props.loading? <div>Loading…</div> : <Comp {...props}/>;
// Definisi fungsi/komponen 'Data' — huruf besar = komponen React.
function Data({data}){ return <div className='card'>{data}</div>;
// Baris JavaScript.
}
// Pernyataan JavaScript.
const DataWithLoading = withLoading(Data);
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<DataWithLoading loading={false} data='Selesai'/>);
