      // File: Props Children - Children.map
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Wrapper' — huruf besar = komponen React.
function Wrapper({children}){ return <div>{React.Children.map(children,(c,i)=> <div className="card" key={i}>{c}</div>)}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Wrapper><span>A</span><span>B</span></Wrapper>);
