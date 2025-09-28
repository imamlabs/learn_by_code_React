      // File: React First App - Pohon Komponen
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Item' — huruf besar = komponen React.
function Item({text}){ return <li>{text}</li>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'List' — huruf besar = komponen React.
function List(){ const items=['Satu','Dua','Tiga'];
// Pernyataan JavaScript.
return <ul>{items.map(i=> <Item key={i} text={i}/>)}</ul>;
// Baris JavaScript.
}
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ return <div className="card"><List/></div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root = ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App />);
