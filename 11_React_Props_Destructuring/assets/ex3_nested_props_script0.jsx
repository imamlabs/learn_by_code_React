      // File: Props Destructuring - Nested
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'Card' — huruf besar = komponen React.
function Card({user:{name,city}}){ return <div className="card">{name} - {city}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<Card user={{name:'Imam',city:'Tangerang'}}/>);
