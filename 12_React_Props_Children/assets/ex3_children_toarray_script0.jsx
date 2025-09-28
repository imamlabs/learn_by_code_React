      // File: Props Children - toArray
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Wrapper' — huruf besar = komponen React.
function Wrapper({children}){ const arr=React.Children.toArray(children);
// Pernyataan JavaScript.
return <ul>{arr.map((c,i)=> <li key={i}>{c}</li>)}</ul>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Wrapper><b>A</b><i>B</i></Wrapper>);
