      // File: React Router - Basic
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const {BrowserRouter, Routes, Route, Link} = ReactRouterDOM;
// Definisi fungsi/komponen 'Home' — huruf besar = komponen React.
function Home(){ return <div className='card'>Beranda</div>;
// Pernyataan JavaScript.
} function About(){ return <div className='card'>Tentang</div>;
// Baris JavaScript.
}
// Mulai blok render UI (JSX) dari komponen.
function App(){ return (<BrowserRouter><nav><Link to='/'>Home</Link> | <Link to='/about'>About</Link></nav><Routes><Route path='/' element={<Home/>}/><Route path='/about' element={<About/>}/></Routes></BrowserRouter>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
