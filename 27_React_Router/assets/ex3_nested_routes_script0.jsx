      // File: React Router - Nested
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const {BrowserRouter, Routes, Route, Link, Outlet} = ReactRouterDOM;
// Mulai blok render UI (JSX) dari komponen.
function Layout(){ return (<div><nav><Link to='posts'>Posts</Link></nav><Outlet/></div>);
{/* Baris JavaScript. */}
}
{/* Definisi fungsi/komponen 'Posts' — huruf besar = komponen React. */}
function Posts(){ return <div className='card'>Daftar Posts</div>;
{/* Baris JavaScript. */}
}
{/* Definisi fungsi/komponen 'App' — huruf besar = komponen React. */}
function App(){ return (<BrowserRouter><Routes><Route path='/' element={<Layout/>}><Route path='posts' element={<Posts/>}/></Route></Routes></BrowserRouter>);
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
