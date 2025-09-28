      // File: React Lists - key yang stabil
      // Catatan: Semua komentar di bawah menjelaskan setiap baris kode.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){
// Pernyataan JavaScript.
const users = [{id:1,name:'Ana'},{id:2,name:'Budi'}];
// Data ber-id unik
// Pernyataan JavaScript.
return <ul>{users.map(u=> <li key={u.id}>{u.name}</li>)}</ul>;
// key gunakan id -> stabil
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
