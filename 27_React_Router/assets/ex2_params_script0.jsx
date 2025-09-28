      // File: React Router - Params
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const {BrowserRouter, Routes, Route, Link, useParams} = ReactRouterDOM;
// Definisi fungsi/komponen 'User' — huruf besar = komponen React.
function User(){ const {id}=useParams();
// Pernyataan JavaScript.
return <div className='card'>User {id}</div>;
// Baris JavaScript.
}
// Mulai blok render UI (JSX) dari komponen.
function App(){ return (<BrowserRouter><nav><Link to='/u/1'>U1</Link> <Link to='/u/2'>U2</Link></nav><Routes><Route path='/u/:id' element={<User/>}/></Routes></BrowserRouter>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
