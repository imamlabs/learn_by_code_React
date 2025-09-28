      // File: React Lists - Komponen Item terpisah
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'Item' — huruf besar = komponen React.
function Item({user}){ return <li>{user.name}</li>;
// Baris JavaScript.
}      // Komponen anak
// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ const users=[{id:1,name:'Ana'},{id:2,name:'Budi'}];
// Pernyataan JavaScript.
return <ul>{users.map(u=> <Item key={u.id} user={u}/>)}</ul>;
// Pass prop user
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
